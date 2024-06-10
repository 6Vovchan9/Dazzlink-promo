import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, InjectionToken, inject } from "@angular/core";

const WINDOW = new InjectionToken<Window>(
    "An abstraction over global window object",
    {
        factory: () => inject(DOCUMENT).defaultView!,
    }
);

@Injectable()
export class MobileDetectService {
    public osDevice!: string;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(WINDOW)
        private readonly windowRef: Window & { MobileDetect: any }
    ) {
        this.operateUserAgent();
    }

    private operateUserAgent(): void {
        const mdClass = this.windowRef["MobileDetect"]; // Этот класс берется из скрипта в index.html
        if (mdClass) {
            const mbInstance = new mdClass(this.windowRef.navigator.userAgent);
            console.log(
                "Mobile: " +
                    mbInstance.mobile() +
                    "; Phone: " +
                    mbInstance.phone() +
                    "; Tablet: " +
                    mbInstance.tablet() +
                    "; OS: " +
                    mbInstance.os() +
                    "; userAgent: " +
                    mbInstance.userAgent()
            );

            this.osDevice = mbInstance.os();
        }
    }

    public mobileStoreIconSrc(): string {
        const uAgent = this.windowRef.navigator.userAgent.toLowerCase();
        if (this.osDevice?.toLowerCase() === "ios") {
            return "assets/images/store/linkIOS.svg";
        } else if (this.osDevice?.toLowerCase() === "androidos") {
            if (/hms/.test(uAgent) && !/gms/.test(uAgent)) {
                return "assets/images/store/linkAppGallery.svg";
            }
            return "assets/images/store/linkAndroid.svg";
        } else {
            return "assets/images/store/linkAppGallery.svg";
        }
    }

    public goToDeviceStore(): void {
        const uAgent = this.windowRef.navigator.userAgent.toLowerCase();
        // if (this.osDevice?.toLowerCase()) { // если это планшет или телефон
        console.log("Идем в store");
        if (this.osDevice?.toLowerCase() === "ios") {
            // window.location.href = 'https://www.apple.com/app-store';
            this.windowRef.location.href = "https://apps.apple.com/ru";
        } else if (this.osDevice?.toLowerCase() === "androidos") {
            if (/hms/.test(uAgent) && !/gms/.test(uAgent)) {
                this.windowRef.open("https://appgallery.huawei.com");
            } else {
                // window.open('https://play.google.com', '_blank');
                // window.location.href = 'https://play.google.com';
                this.windowRef.open("https://play.google.com");
            }
        } else {
            // window.location.href = 'https://appgallery.huawei.com';
            this.windowRef.open("https://appgallery.huawei.com");
        }
        // } else { // если это комп или ноут
        //     window.open('https://www.apple.com/app-store');
        // }
    }
}

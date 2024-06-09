import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class MobileDetectService {
    public mobileOrTabletDevice = false;
    public osDevice!: string;
    private window: Window | any;

    constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {
        this.window = this.documentRef.defaultView as Window;
        this.operateUserAgent();
    }

    private operateUserAgent(): void {
        const mdClass = this.window["MobileDetect"]; // Этот класс берется из скрипта в index.html
        if (mdClass) {
            const mbInstance = new mdClass(this.window.navigator.userAgent);
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

            this.mobileOrTabletDevice = Boolean(mbInstance.mobile());
            this.osDevice = mbInstance.os();
        }
    }

    public mobileStoreIconSrc(): string {
        const uAgent = this.window.navigator.userAgent.toLowerCase();
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
        const uAgent = this.window.navigator.userAgent.toLowerCase();
        // if (this.osDevice?.toLowerCase()) { // если это планшет или телефон
        console.log("Идем в store");
        if (this.osDevice?.toLowerCase() === "ios") {
            // window.location.href = 'https://www.apple.com/app-store';
            this.window.location.href = "https://apps.apple.com/ru";
        } else if (this.osDevice?.toLowerCase() === "androidos") {
            if (/hms/.test(uAgent) && !/gms/.test(uAgent)) {
                this.window.open("https://appgallery.huawei.com");
            } else {
                // window.open('https://play.google.com', '_blank');
                // window.location.href = 'https://play.google.com';
                this.window.open("https://play.google.com");
            }
        } else {
            // window.location.href = 'https://appgallery.huawei.com';
            this.window.open("https://appgallery.huawei.com");
        }
        // } else { // если это комп или ноут
        //     window.open('https://www.apple.com/app-store');
        // }
    }
}

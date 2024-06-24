import { NgTemplateOutlet } from "@angular/common";
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    Optional,
    ViewChild,
    effect,
    signal,
} from "@angular/core";
import { FooterComponent } from "@app/shared/modules/footer/footer.component";

import { HeaderComponent } from "@app/shared/modules/header/header.component";
import { MobileDetectService } from "@app/shared/services/mobile-detect.service";

@Component({
    selector: "app-promo",
    standalone: true,
    imports: [HeaderComponent, FooterComponent, NgTemplateOutlet],
    templateUrl: "./promo.component.html",
    styleUrl: "./promo.component.scss",
})
export class PromoComponent implements AfterViewInit, OnDestroy {
    @ViewChild("advertisingVideo") advertisingVideo!: ElementRef;

    public name = signal<string>("Ivan");
    public showVideoPoster = signal<boolean>(true); // если бы не сигнал то при OnPush стратегии пришлось бы запускать detectChanges при изм значения этого свойства
    private posterChangeEffect = effect(() => {
        if (this.showVideoPoster()) {
            console.log("Показываем постер");
        } else {
            console.log("Скрываем постер");
        }
    });

    constructor(@Optional() public mobileDetectService: MobileDetectService) {}

    // public get titleForDownloadBtn(): string {
    //     console.log("Обновляем");
    //     return "Hello";
    // }

    // public onClickMyBtn(): void {
    //     console.dir("Нажали на кнопку");
    //     this.name.set("Dimon");
    // }

    ngAfterViewInit(): void {
        this.ensureVideoPlays();
        // setTimeout(() => this.forRemovePauseListener(), 10_000);
    }

    private onEndedCallback = (): void => {
        // console.log('video ended!');
        this.showVideoPoster.set(true);
    };

    private onPausedCallback = (): void => {
        // console.log('video paused!');
        this.name.set("Vova");
    };

    private forRemovePauseListener(): void {
        console.log(this.name());
        const video = this.advertisingVideo?.nativeElement;
        if (video) {
            video.removeEventListener("pause", this.onPausedCallback);
        }
    }

    private ensureVideoPlays(): void {
        const video = this.advertisingVideo?.nativeElement;
        if (video) {
            video.addEventListener("ended", this.onEndedCallback);
            // video.addEventListener("pause", this.onPausedCallback);
        }
    }

    public onVideoPlay(): void {
        const video = this.advertisingVideo?.nativeElement;

        if (video) {
            // video.muted = true;
            const videoPromise = video.play();

            if (videoPromise) {
                videoPromise
                    .then(() => {
                        console.log("Видео запущено :)");
                        this.showVideoPoster.set(false);
                    })
                    .catch(() => {
                        console.log("Ошибка при воспроизв. видео :(");
                    });
            }
        }
    }

    private removeAllListeners(): void {
        const video = this.advertisingVideo?.nativeElement;
        if (video) {
            // console.log('Удаляем слушатель окончания видео');
            video.removeEventListener("ended", this.onEndedCallback);
        }
    }

    public ngOnDestroy(): void {
        this.removeAllListeners();
    }
}

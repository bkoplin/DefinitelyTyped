export class Slide {
    constructor(data: any, options: any, title_slide: any, language: any);
    _el: {
        container: {};
        scroll_container: {};
        background: {};
        content_container: {};
        content: {};
    };
    _media: any;
    _mediaclass: {};
    _text: {};
    _background_media: any;
    _state: {
        loaded: boolean;
    };
    has: {
        headline: boolean;
        text: boolean;
        media: boolean;
        title: boolean;
        background: {
            image: boolean;
            color: boolean;
            color_value: string;
        };
    };
    data: {
        unique_id: any;
        background: any;
        start_date: any;
        end_date: any;
        location: any;
        text: any;
        media: any;
        autolink: boolean;
    };
    options: {
        duration: number;
        slide_padding_lr: number;
        ease: typeof easeInSpline;
        width: number;
        height: number;
        skinny_size: number;
        media_name: string;
    };
    active: boolean;
    animator: {};
    show(): void;
    hide(): void;
    setActive(is_active: any): void;
    addTo(container: any): void;
    removeFrom(container: any): void;
    updateDisplay(width: any, height: any, layout: any): void;
    loadMedia(): void;
    stopMedia(): void;
    getBackground(): {
        image: boolean;
        color: boolean;
        color_value: string;
    };
    scrollToTop(): void;
    getFormattedDate(): any;
    _initLayout(): void;
    _initEvents(): void;
    _updateBackgroundDisplay(): void;
}
import { easeInSpline } from "@knight-lab/timelinejs/src/js/animation/Ease";

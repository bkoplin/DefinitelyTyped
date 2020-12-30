export class StorySlider {
    constructor(elem: any, data: any, options: any, language: any);
    _el: {
        container: {};
        background: {};
        slider_container_mask: {};
        slider_container: {};
        slider_item_container: {};
    };
    _nav: {};
    slide_spacing: number;
    _slides: any[];
    current_id: string;
    data: {};
    options: {
        id: string;
        layout: string;
        width: number;
        height: number;
        default_bg_color: {
            r: number;
            g: number;
            b: number;
        };
        slide_padding_lr: number;
        start_at_slide: number;
        slide_default_fade: string;
        duration: number;
        ease: typeof easeInOutQuint;
        dragging: boolean;
        trackResize: boolean;
    };
    animator: any;
    init(): void;
    _addSlide(slide: any): void;
    _createSlide(d: any, title_slide: any, n: any): void;
    _createSlides(array: any): void;
    _removeSlide(slide: any): void;
    _destroySlide(n: any): void;
    _findSlideIndex(n: any): any;
    updateDisplay(width: any, height: any, animate: any, layout: any): void;
    createSlide(d: any, n: any): void;
    createSlides(array: any): void;
    destroySlide(n: any): void;
    destroySlideId(id: any): void;
    goTo(n: any, fast: any, displayupdate: any): void;
    preloadTimer: NodeJS.Timeout;
    goToId(id: any, fast: any, displayupdate: any): void;
    preloadSlides(n: any): void;
    next(): void;
    previous(): void;
    showNav(nav_obj: any, show: any): void;
    changeBackground(bg: any): void;
    _updateDrawSlides(): void;
    _initLayout(): void;
    _swipable: Swipable;
    _message: Message;
    _initEvents(): void;
    _initData(): void;
    _onBackgroundChange(e: any): void;
    _onMessageClick(e: any): void;
    _onSwipeNoDirection(e: any): void;
    _onNavigation(e: any): void;
    _onSlideAdded(e: any): void;
    _onSlideRemoved(e: any): void;
    _onSlideChange(displayupdate: any): void;
    _onMouseClick(e: any): void;
    _fireMouseEvent(e: any): void;
    _onLoaded(): void;
}
import { easeInOutQuint } from "@knight-lab/timelinejs/src/js/animation/Ease";
import Swipable from "@knight-lab/timelinejs/src/js/ui/Swipable";
import Message from "@knight-lab/timelinejs/src/js/ui/Message";

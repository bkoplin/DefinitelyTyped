export class MenuBar {
    constructor(elem: any, parent_elem: any, options: any);
    _el: {
        parent: {};
        container: {};
        button_backtostart: {};
        button_zoomin: {};
        button_zoomout: {};
        arrow: {};
        line: {};
        coverbar: {};
        grip: {};
    };
    collapsed: boolean;
    options: {
        width: number;
        height: number;
        duration: number;
        ease: typeof easeInOutQuint;
        menubar_default_y: number;
    };
    animator: {};
    show(d: any): void;
    hide(top: any): void;
    toogleZoomIn(show: any): void;
    toogleZoomOut(show: any): void;
    setSticky(y: any): void;
    setColor(inverted: any): void;
    updateDisplay(w: any, h: any, a: any, l: any): void;
    _onButtonZoomIn(e: any): void;
    _onButtonZoomOut(e: any): void;
    _onButtonBackToStart(e: any): void;
    _initLayout(): void;
    _initEvents(): void;
    _updateDisplay(width: any, height: any, animate: any): void;
}
import { easeInOutQuint } from "@knight-lab/timelinejs/src/js/animation/Ease";

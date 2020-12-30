/**
 * A TimeEra represents a span of time marked along the edge of the time
 * slider. It must have a
 */
export class TimeEra {
    constructor(start_date: any, end_date: any, headline: any, options: any);
    start_date: any;
    end_date: any;
    headline: any;
    _el: {
        container: {};
        background: {};
        content_container: {};
        content: {};
        text: {};
    };
    _text: {};
    _state: {
        loaded: boolean;
    };
    options: {
        duration: number;
        ease: typeof easeInSpline;
        width: number;
        height: number;
        marker_width_min: number;
    };
    active: boolean;
    animator: {};
    has_end_date: boolean;
    show(): void;
    hide(): void;
    setActive(is_active: any): void;
    addTo(container: any): void;
    removeFrom(container: any): void;
    updateDisplay(w: any, h: any): void;
    getLeft(): any;
    getTime(): any;
    getEndTime(): any;
    setHeight(h: any): void;
    setWidth(w: any): void;
    setClass(n: any): void;
    setRowPosition(n: any, remainder: any): void;
    setColor(color_num: any): void;
    _initLayout(): void;
    _initEvents(): void;
    _updateDisplay(width: any, height: any, layout: any): void;
}
import { easeInSpline } from "@knight-lab/timelinejs/src/js/animation/Ease";

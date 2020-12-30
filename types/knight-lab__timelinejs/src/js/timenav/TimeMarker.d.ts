export class TimeMarker {
    constructor(data: any, options: any);
    _el: {
        container: {};
        content_container: {};
        media_container: {};
        timespan: {};
        line_left: {};
        line_right: {};
        content: {};
        text: {};
        media: {};
    };
    _text: {};
    _state: {
        loaded: boolean;
    };
    data: {
        unique_id: string;
        background: any;
        date: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            millisecond: number;
            thumbnail: string;
            format: string;
        };
        text: {
            headline: string;
            text: string;
        };
        media: any;
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
    loadMedia(): void;
    stopMedia(): void;
    getLeft(): any;
    getTime(): any;
    getEndTime(): any;
    setHeight(h: any): void;
    setWidth(w: any): void;
    setClass(n: any): void;
    setRowPosition(n: any, remainder: any): void;
    _onMarkerClick(e: any): void;
    _initLayout(): void;
    _initEvents(): void;
    _updateDisplay(width: any, height: any, layout: any): void;
}
import { easeInSpline } from "@knight-lab/timelinejs/src/js/animation/Ease";

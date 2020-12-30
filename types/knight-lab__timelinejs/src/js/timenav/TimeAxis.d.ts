export class TimeAxis {
    constructor(elem: any, options: any, language: any);
    _el: {
        container: {};
        content_container: {};
        major: {};
        minor: {};
    };
    _text: {};
    _state: {
        loaded: boolean;
    };
    data: {};
    options: {
        duration: number;
        ease: typeof easeInSpline;
        width: number;
        height: number;
    };
    active: boolean;
    animator: {};
    axis_helper: {};
    minor_ticks: any[];
    major_ticks: any[];
    dateformat_lookup: {
        millisecond: string;
        second: string;
        minute: string;
        hour: string;
        day: string;
        month: string;
        year: string;
        decade: string;
        century: string;
        millennium: string;
        age: string;
        epoch: string;
        era: string;
        eon: string;
        eon2: string;
    };
    show(): void;
    hide(): void;
    addTo(container: any): void;
    removeFrom(container: any): void;
    updateDisplay(w: any, h: any): void;
    getLeft(): any;
    drawTicks(timescale: any, optimal_tick_width: any): void;
    _createTickElements(ts_ticks: any, tick_element: any, dateformat: any, ticks_to_skip: any): {
        tick: any;
        tick_text: any;
        display_date: any;
        date: any;
    }[];
    positionTicks(timescale: any, optimal_tick_width: any, no_animate: any): void;
    _positionTickArray(tick_array: any, timescale: any, optimal_tick_width: any): void;
    _initLayout(): void;
    _initEvents(): void;
    _updateDisplay(width: any, height: any, layout: any): void;
}
import { easeInSpline } from "@knight-lab/timelinejs/src/js/animation/Ease";

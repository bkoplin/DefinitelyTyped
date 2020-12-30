export default class Swipable {
    constructor(drag_elem: any, move_elem: any, options: any);
    _el: {
        drag: any;
        move: any;
    };
    mousedrag: {
        down: string;
        up: string;
        leave: string;
        move: string;
    };
    touchdrag: {
        down: string;
        up: string;
        leave: string;
        move: string;
    };
    options: {
        snap: boolean;
        enable: {
            x: boolean;
            y: boolean;
        };
        constraint: {
            top: boolean;
            bottom: boolean;
            left: number;
            right: boolean;
        };
        momentum_multiplier: number;
        duration: number;
        ease: typeof easeInOutQuint;
    };
    animator: any;
    dragevent: {
        down: string;
        up: string;
        leave: string;
        move: string;
    };
    data: {
        sliding: boolean;
        direction: string;
        pagex: {
            start: number;
            end: number;
        };
        pagey: {
            start: number;
            end: number;
        };
        pos: {
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
        };
        new_pos: {
            x: number;
            y: number;
        };
        new_pos_parent: {
            x: number;
            y: number;
        };
        time: {
            start: number;
            end: number;
        };
        touch: boolean;
    };
    enable(e: any): void;
    disable(): void;
    stopMomentum(): void;
    updateConstraint(c: any): void;
    _onDragStart(e: any): void;
    _onDragEnd(e: any): void;
    _onDragMove(e: any): void;
    _momentum(): void;
    _animateMomentum(): void;
}
import { easeInOutQuint } from "@knight-lab/timelinejs/src/js/animation/Ease";

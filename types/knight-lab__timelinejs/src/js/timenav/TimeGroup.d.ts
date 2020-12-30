export class TimeGroup {
    constructor(data: any);
    _el: {
        parent: {};
        container: {};
        message: {};
    };
    options: {
        width: number;
        height: number;
    };
    data: {
        label: string;
        rows: number;
    };
    animator: {};
    updateDisplay(w: any, h: any): void;
    setRowPosition(n: any, h: any): void;
    setAlternateRowColor(alternate: any, hide: any): void;
    _onMouseClick(): void;
    _initLayout(): void;
    _initEvents(): void;
    _updateDisplay(width: any, height: any, animate: any): void;
}

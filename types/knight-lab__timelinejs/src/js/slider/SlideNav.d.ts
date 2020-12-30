export class SlideNav {
    constructor(data: any, options: any, add_to_container: any);
    _el: {
        container: {};
        content_container: {};
        icon: {};
        title: {};
        description: {};
    };
    mediatype: {};
    data: {
        title: string;
        description: string;
        date: string;
    };
    options: {
        direction: string;
    };
    animator: any;
    update(slide: any): void;
    setColor(inverted: any): void;
    _onMouseClick(): void;
    _update(d: any): void;
    _initLayout(): void;
    _initEvents(): void;
}

export class Text {
    constructor(data: any, options: any, add_to_container: any);
    _el: {
        container: {};
        content_container: {};
        content: {};
        headline: {};
        date: {};
    };
    options: {
        title: boolean;
    };
    data: {
        unique_id: string;
        headline: string;
        text: string;
    };
    show(): void;
    hide(): void;
    addTo(container: any): void;
    removeFrom(container: any): void;
    headlineHeight(): any;
    addDateText(str: any): void;
    onLoaded(): void;
    onAdd(): void;
    onRemove(): void;
    _initLayout(): void;
}

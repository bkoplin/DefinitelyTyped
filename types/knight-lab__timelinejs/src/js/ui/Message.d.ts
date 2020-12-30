/**
 * A class for displaying messages to users.
 */
export default class Message {
    /**
     * Initialize a Message object with the container where it appears and,
     *     optionally, a JS object of options.
     * @param {HTMLElement} container
     * @param {object} [options]
     */
    constructor(container: HTMLElement, options?: object, language: any);
    _el: {
        parent: {};
        container: {};
        message_container: {};
        loading_icon: {};
        message: {};
    };
    options: {
        width: number;
        height: number;
        message_class: string;
        message_icon_class: string;
    };
    container: HTMLElement;
    animator: {};
    updateMessage(t: any): void;
    updateDisplay(w: any, h: any): void;
    _onMouseClick(): void;
    _onRemove(): void;
    _initLayout(): void;
    _initEvents(): void;
}

export class DOMMixins {
    show(animate: any): void;
    hide(animate: any): void;
    addTo(container: any): void;
    removeFrom(container: any): void;
    animatePosition(pos: any, el: any): void;
    animator: any;
    onLoaded(): void;
    onAdd(): void;
    onRemove(): void;
    setPosition(pos: any, el: any): void;
    getPosition(): {
        x: number;
        y: number;
    };
}

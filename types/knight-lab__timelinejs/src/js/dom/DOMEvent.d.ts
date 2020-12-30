export namespace DOMEvent {
    function addListener(obj: any, type: any, fn: any, context: any): void;
    function removeListener(obj: any, type: any, fn: any): void;
    function _checkMouse(el: any, e: any): boolean;
    function _getEvent(...args: any[]): Event;
    function stopPropagation(e: any): void;
    function disableClickPropagation(el: any): void;
    function preventDefault(e: any): void;
    function stop(e: any): void;
    function getWheelDelta(e: any): number;
}

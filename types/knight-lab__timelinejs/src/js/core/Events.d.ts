export default class Events {
    /**
     * Add an event listener callback for the given type.
     * @param {string} type
     * @param {function} fn
     * @param {object} [context]
     * @returns { Events } this (the instance upon which the method was called)
     */
    on(type: string, fn: Function, context?: object): Events;
    _tl_events: any;
    /**
     * Synonym for on(type, fn, context). It would be great to determine
     *     that this is obsolete, but that wasn't clear.
     * @param {string} type
     * @param {function} fn
     * @param {object} [context]
     * @returns { Events } this (the instance upon which the method was called)
     */
    addEventListener(type: string, fn: Function, context?: object): Events;
    /**
     * Return true if this object has any listeners of the given type.
     * @param {string} type
     * @returns {boolean}
     */
    hasEventListeners(type: string): boolean;
    /**
     * Remove any event listeners for the given type that use the given
     *     callback and have the given context.
     * @param {string} type
     * @param {function} fn
     * @param {object} context
     * @returns { Events } this (the instance upon which the method was called)
     */
    removeEventListener(type: string, fn: Function, context: object): Events;
    /**
     * Synonym for removeEventListener. Is this really needed? While 'off' is opposite of 'on',
     *     it doesn't actually read as 'remove' unless you know that.
     * @param {string} type
     * @param {function} fn
     * @param {object} context
     * @returns { Events } this (the instance upon which the method was called)
     */
    off(type: string, fn: Function, context: object): Events;
    /**
     * Activate (execute) all registered callback functions for the given
     *     type, passing the given data, if any.
     * @param {string} type
     * @param {object} [data]
     * @returns { Events } this (the instance upon which the method was called)
     */
    fire(type: string, data?: object): Events;
}

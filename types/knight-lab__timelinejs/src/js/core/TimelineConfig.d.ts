export class TimelineConfig {
    constructor(data: any);
    title: any;
    scale: any;
    events: any[];
    eras: any[];
    event_dict: {};
    messages: {
        errors: any[];
        warnings: any[];
    };
    logError(msg: any): void;
    getErrors(sep: any): string | any[];
    validate(): void;
    /**
     * @returns {boolean} whether or not this config has logged errors.
     */
    isValid(): boolean;
    addEvent(data: any, defer_sort: any): any;
    addEra(data: any): void;
    /**
     * Given a slide, verify that its ID is unique, or assign it one which is.
     * The assignment happens in this function, and the assigned ID is also
     * the return value. Not thread-safe, because ids are not reserved
     * when assigned here.
     */
    _assignID(slide: any): any;
    /**
     * Given an array of slide configs (the events), ensure that each one has a distinct unique_id. The id of the title
     * is also passed in because in most ways it functions as an event slide, and the event IDs must also all be unique
     * from the title ID.
     */
    _makeUniqueIdentifiers(title_id: any, array: any): void;
    _ensureValidScale(events: any): void;
    _processDates(slide_or_era: any): void;
    /**
     * Return the earliest date that this config knows about, whether it's a slide or an era
     */
    getEarliestDate(): any;
    /**
     * Return the latest date that this config knows about, whether it's a slide or an era, taking end_dates into account.
     */
    getLatestDate(): any;
    /**
     * Do some simple cleanup for all slides and eras, including sanitizing
     * HTML input, or stripping markup for fields which are not intended to support
     * it.
     * @param { Slide | TimeEra } slide
     */
    _tidyFields(slide: any | any): void;
}

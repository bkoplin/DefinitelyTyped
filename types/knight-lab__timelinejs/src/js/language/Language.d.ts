/**
 * Instantiate a Language object to manage I18N.
 * @param {String} [language=en] - a language code or a URL to a
 *     translation file
 * @param {string} [script_path] - if `language` is not a URL, this is used
 *     to construct a fully-qualified URL to load a translation file.
 */
export class Language {
    constructor(language: any, script_path: any);
    /**
     * Reimplement Util.mergeData to handle nested dictionaries
     * @param {object} lang_json
     */
    mergeData(lang_json: object): void;
    formatBigYear(bigyear: any, format_name: any): any;
    _(k: any): any;
    formatDate(date: any, format_name: any): any;
    formatJSDate(js_date: any, format_name: any): string;
    has_negative_year_modifier(): boolean;
    _applyEra(formatted_date: any, original_year: any): string;
}
export namespace Language {
    export { fallback };
    export const DATE_FORMAT_TOKENS: RegExp;
}
export let fallback: Language;

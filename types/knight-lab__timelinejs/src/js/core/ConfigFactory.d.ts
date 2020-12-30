export function parseGoogleSpreadsheetURL(url: any): {
    key: any;
    worksheet: number;
};
/**
 * Given a Google Sheets URL (or mere document ID), read the data and return
 * a Timeline JSON file suitable for instantiating a timeline.
 *
 * @param {string} url
 */
export function readGoogleAsCSV(url: string, sheets_proxy: any): Promise<{
    events: any[];
    errors: any[];
    warnings: any[];
    eras: any[];
}>;
/**
 * Given a Google Sheets URL or a bare spreadsheet key, return a URL expected
 * to retrieve a CSV file, assuming the Sheets doc has been "published to the web".
 * No checking for the actual availability is done.
 * @param {string} url_or_key
 */
export function makeGoogleCSVURL(url_or_key: string): string;
/**
 * Using the given URL, fetch or create a JS Object suitable for configuring a timeline. Use
 * that to create a TimelineConfig, and invoke the callback with that object as its argument.
 * If the second argument is an object instead of a callback function, it must have a
 * 'callback' property which will be invoked with the config.
 * Even in error cases, a minimal TimelineConfig object will be created and passed to the callback
 * so that error messages can be displayed in the host page.
 *
 * @param {String} url the URL or Google Spreadsheet key which can be used to get configuration information
 * @param {function|object} callback_or_options either a callback function or an object with a 'callback' property and other configuration properties
 */
export function makeConfig(url: string, callback_or_options: Function | object): Promise<void>;

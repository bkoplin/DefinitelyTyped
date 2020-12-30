/**
 * Fetch data from a URL and parse the response as a CSV file.
 * To specify the data source, use `dataset.url`.
 * @param {Object} dataset
 * @returns {Promise} which invokes resolve with an array of objects of length
 * [csv row count - 1], where the
 * property names are determined by the first row.
 */
export function fetchCSV(dataset: any): Promise<any>;
/**
 * Given an array of rows, split them into an object with two keys:
 * `fields` and `records`. `fields` is the first item of the array
 * and `records` is the remainder. If `noFields.noHeaderRow` is true,
 * the returned object will not have a `fields` property and its `records`
 * property will be the entire array of input `rows`.
 * @param {Array} rows
 * @param {Object} [noFields]
 */
export function extractFields(rows: any[], noFields?: any): {
    fields: any;
    records: any[];
} | {
    records: any[];
    fields?: undefined;
};
export function parse(s: any, dialect: any): string[][];
/**
 * Given a CSV String, parse it and return it as an array of objects, one-per-row
 * after the header row. The header is the source of object properties. Will fail
 * unceremoniously if dialect.noHeaderRow is true
 * @param {String} s - a String representation of a CSV file
 * @param {Object} [dialect] - details about the CSV dialect to guide the parser
 */
export function parseObjects(s: string, dialect?: any): any[];

export function sortByDate(array: any, prop_name: any): void;
export function parseTime(time_str: any): {
    hour: any;
    minute: any;
    second: any;
    millisecond: any;
};
export function validDateConfig(d: any): boolean;
export namespace SCALE_DATE_CLASSES {
    export { TLDate as human };
    export { BigDate as cosmological };
}
import { TLDate } from "@knight-lab/timelinejs/src/js/date/TLDate";
import { BigDate } from "@knight-lab/timelinejs/src/js/date/TLDate";

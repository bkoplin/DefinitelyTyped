export class TimeScale {
    constructor(timeline_config: any, options: any);
    _scale: any;
    _display_width: any;
    _screen_multiplier: any;
    _pixel_width: number;
    _group_labels: any[];
    _positions: any[];
    _pixels_per_milli: number;
    _earliest: any;
    _latest: any;
    _span_in_millis: string | number | ((d: any) => void);
    _average: number;
    _axis_helper: any;
    _scaled_padding: number;
    _computeDefaultSpan(timeline_config: any): string | number | ((d: any) => void);
    getGroupLabels(): any[];
    getScale(): any;
    getNumberOfRows(): number;
    getPixelWidth(): number;
    getPosition(time_in_millis: any): number;
    getPositionInfo(idx: any): any;
    getPixelsPerTick(): any;
    getTicks(): {
        major: any;
        minor: any;
    };
    getDateFromTime(t: any): any;
    getMajorScale(): any;
    getMinorScale(): any;
    _assessGroups(slides: any): any[];
    _computeRowInfo(positions: any, rows_left: any): {
        n_rows: number;
        n_overlaps: number;
    };
    _computePositionInfo(slides: any, max_rows: any, default_marker_width: any): void;
    _number_of_rows: number;
}

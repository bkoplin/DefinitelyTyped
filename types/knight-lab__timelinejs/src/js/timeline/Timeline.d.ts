/**
 * Primary entry point for using TimelineJS.
 * @constructor
 * @param {HTMLElement|string} elem - the HTML element, or its ID, to which
 *     the Timeline should be bound
 * @param {object} - a JavaScript object conforming to the TimelineJS
 *     configuration format
 * @param {object} [options] - a JavaScript object specifying
 *     presentation options
 */
export class Timeline {
    constructor(elem: any, data: any, options: any);
    ready: boolean;
    _el: {
        container: any;
        storyslider: {};
        timenav: {};
        menubar: {};
    };
    /** @type {Language} */
    language: Language;
    /** @type {StorySlider} */
    _storyslider: StorySlider;
    /** @type {TimeNav} */
    _timenav: TimeNav;
    /** @type {MenuBar} */
    _menubar: MenuBar;
    _loaded: {
        storyslider: boolean;
        timenav: boolean;
    };
    /** @type {TimelineConfig} */
    config: TimelineConfig;
    options: {
        script_path: string;
        height: any;
        width: any;
        debug: boolean;
        font: string;
        is_embed: boolean;
        is_full_embed: boolean;
        hash_bookmark: boolean;
        default_bg_color: {
            r: number;
            g: number;
            b: number;
        };
        scale_factor: number;
        layout: string;
        timenav_position: string;
        optimal_tick_width: number;
        base_class: string;
        timenav_height: any;
        timenav_height_percentage: number;
        timenav_mobile_height_percentage: number;
        timenav_height_min: number;
        marker_height_min: number;
        marker_width_min: number;
        marker_padding: number;
        start_at_slide: number;
        start_at_end: boolean;
        menubar_height: number;
        skinny_size: number;
        medium_size: number;
        use_bc: boolean;
        duration: number;
        ease: typeof easeInOutQuint;
        dragging: boolean;
        trackResize: boolean;
        map_type: string;
        slide_padding_lr: number;
        slide_default_fade: string;
        zoom_sequence: number[];
        language: string;
        ga_property_id: any;
        track_events: string[];
        theme: any;
        sheets_proxy: string;
        soundcite: boolean;
    };
    animator_timenav: any;
    animator_storyslider: any;
    animator_menubar: any;
    message: Message;
    _loadStyles(): void;
    _loadLanguage(data: any): void;
    /**
     * Initialize the data for this timeline. If data is a URL, pass it to ConfigFactory
     * to get a TimelineConfig; if data is a TimelineConfig, just use it; otherwise,
     * assume it's a JSON object in the right format, and wrap it in a new TimelineConfig.
     * @param {string|TimelineConfig|object} data
     */
    _initData(data: string | TimelineConfig | object): void;
    /**
     * Given an input, if it is a Timeline Error object, look up the
     * appropriate error in the current language and return it, optionally
     * with detail that also comes in the object. Alternatively, pass back
     * the input, which is expected to be a string ready to display.
     * @param {Error|string} e - an Error object which can be localized,
     *     or a string message
     */
    _translateError(e: Error | string): string | Error;
    /**
     * Display a message in the Timeline window.
     * @param {string} msg
     */
    showMessage(msg: string): void;
    /**
     * Not ideal, but if users don't specify the script path, we try to figure it out.
     * The script path is needed to load other languages
     */
    determineScriptPath(): any;
    setConfig(config: any): void;
    _onDataLoaded(): void;
    _initLayout(): void;
    _initEvents(): void;
    _onColorChange(e: any): void;
    _onSlideChange(e: any): void;
    current_id: any;
    _onTimeNavChange(e: any): void;
    _onZoomToggle(e: any): void;
    _onChange(e: any): void;
    _onBackToStart(e: any): void;
    _onZoomIn(e: any): void;
    _onZoomOut(e: any): void;
    _onTimeNavLoaded(): void;
    _onTimeNavLoaded(): void;
    _onStorySliderLoaded(): void;
    _onStorySliderLoaded(): void;
    _onStorySliderNext(e: any): void;
    _onStorySliderPrevious(e: any): void;
    _updateDisplay(timenav_height: any, animate: any, d: any): void;
    /**
     * Compute the height of the navigation section of the Timeline, taking
     *     into account the possibility of an explicit height or height
     *     percentage, but also honoring the `timenav_height_min` option
     *     value. If `timenav_height` is specified it takes precedence over
     *     `timenav_height_percentage` but in either case, if the resultant
     *     pixel height is less than `options.timenav_height_min` then the
     *     value of `options.timenav_height_min` will be returned. (A minor
     *     adjustment is made to the returned value to account for marker
     *     padding.)
     *
     * @param {number} [timenav_height] - an integer value for the desired height in pixels
     * @param {number} [timenav_height_percentage] - an integer between 1 and 100
     */
    _calculateTimeNavHeight(timenav_height?: number, timenav_height_percentage?: number): number;
    _validateOptions(): void;
    /**
     * Given a slide identifier, return the zero-based positional index of
     * that slide. If this timeline has a 'title' slide, it is at position 0
     * and all other slides are numbered after that. If there is no 'title'
     * slide, then the first event slide is at position 0.
     * @param {String} id
     */
    _getSlideIndex(id: string): number;
    /**
     * Given a slide identifier, return the zero-based positional index of that slide.
     * Does not take the existence of a 'title' slide into account, so if there is a title
     * slide, this value should be one less than calling `_getSlideIndex` with the same
     * identifier. If there is no title slide, `_getSlideIndex` and `_getEventIndex`
     * should return the same value.
     * TODO: does it really make sense to have both `_getSlideIndex` and `_getEventIndex`?
     * @param {String} id
     */
    _getEventIndex(id: string): number;
    _onLoaded(): void;
    _updateHashBookmark(id: any): void;
    zoomIn(): void;
    zoomOut(): void;
    setZoom(level: any): void;
    goToId(id: any): void;
    goTo(n: any): void;
    goToStart(): void;
    goToEnd(): void;
    goToPrev(): void;
    goToNext(): void;
    add(data: any): void;
    remove(n: any): void;
    removeId(id: any): void;
    getData(n: any): any;
    getDataById(id: any): any;
    getSlide(n: any): any;
    getSlideById(id: any): any;
    getCurrentSlide(): any;
    updateDisplay(): void;
    _initGoogleAnalytics(): void;
    _initAnalytics(): void;
}
import { Language } from "@knight-lab/timelinejs/src/js/language/Language";
import { StorySlider } from "@knight-lab/timelinejs/src/js/slider/StorySlider";
import { TimeNav } from "@knight-lab/timelinejs/src/js/timenav/TimeNav";
import { MenuBar } from "@knight-lab/timelinejs/src/js/ui/MenuBar";
import { TimelineConfig } from "@knight-lab/timelinejs/src/js/core/TimelineConfig";
import { easeInOutQuint } from "@knight-lab/timelinejs/src/js/animation/Ease";
import Message from "@knight-lab/timelinejs/src/js/ui/Message";

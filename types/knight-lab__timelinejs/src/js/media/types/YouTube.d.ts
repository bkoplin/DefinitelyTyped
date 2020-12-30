export default class YouTube extends Media {
    constructor(data: any, options: any, language: any);
    youtube_loaded: boolean;
    createMedia(): void;
    onPlayerReady(e: any): void;
    onStateChange(e: any): void;
}
import { Media } from "@knight-lab/timelinejs/src/js/media/Media";

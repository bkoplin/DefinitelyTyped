export default class Video extends Media {
    constructor(data: any, options: any, language: any);
    createMedia(): void;
    _getType(url: any, reg: any): string;
}
import { Media } from "@knight-lab/timelinejs/src/js/media/Media";

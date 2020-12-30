export default class Flickr extends Media {
    constructor(data: any, options: any, language: any);
    establishMediaID(): void;
    createMedia(): void;
    size_label(s: any): string;
}
import { Media } from "@knight-lab/timelinejs/src/js/media/Media";

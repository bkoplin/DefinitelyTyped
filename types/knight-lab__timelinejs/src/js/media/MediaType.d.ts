/**
 * Given a JavaScript Object for an event from a TimelineConfig,
 * determine the appropriate subclass of Media which can handle creating and showing an
 * embed in the "media" section of that event's slide.
 *
 * When the `image_only` argument is true, the input `url_or_text` will only be
 * tested against patterns which are known to return images suitable for use as
 * thumbnails and backgrounds. Media classes returned when image_only is true should
 * implement the getImageURL() function
 *
 * @param {Object} m
 * @param {Boolean} image_only
 *
 * @returns {Object} a JS object which represents the match, including a `type`, `name`,
 *                   `match_str`, and `cls`. These are all string values, except `cls`, which
 *                   is a JavaScript class which can be used to instantiate a media embed
 *                   or thumbnail.
 */
export function lookupMediaType(m: any, image_only: boolean): any;

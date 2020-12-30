export default class TLError extends Error {
    constructor(message_key: any, detail: any);
    message_key: any;
    detail: any;
}

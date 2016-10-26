export declare class StaticHeadSerializer {
    private _data;
    constructor();
    whenStatus(status: number): void;
    whenUrl(path: string): void;
    whenContentType(contentType: string): void;
    whenContent(content: string): void;
    readonly data: any;
}

/**
 * Extracts numeric value of a token
 *
 * @param token
 */
export declare function extractNumber(token: string): number | undefined;
export declare const HelloWorld: () => string;
/**
 * Formats a JS date, using the luxon library, to according to `format`
 * @param date - A JS Object date
 * @param format - Optional. String format for the luxon library. See https://moment.github.io/luxon/#/formatting?id=table-of-tokens.
 *   If undefined, will use military time `yyyy-MM-dd hh:mm 'GMT'Z`
 * @returns A string representing `date`
 */
export declare function formatDate(date: Date, format?: string): string;
/**
 * Returns a copy of `object` without `omittedKeys`
 * @param object
 * @param omittedKeys
 */
export declare function omit(object: any, ...omittedKeys: string[]): any;
/**
 * Returns a copy of `object` just with `pickedKeys`
 * @param object
 * @param pickedKeys
 * @returns
 */
export declare function pick(object: any, ...pickedKeys: string[]): any;
/**
 * Constructor of handlers that run only after certain timeouts. Useful for resize handlers, to not react to several events per second.
 * @param handler Function that has the desired logic
 * @param ms Timeout amout in ms. Defaults to 200
 * @returns A handler you can attach to the event
 */
export declare function handlerWithTimeout<T>(handler: (props: T) => void, ms?: number): (props: T) => void;
/**
 * Returns shortened version of number
 * ie: 1,000 => 1K; 1,000,000 => 1M; etc.
 * @param count Number that should be shortened
 * @returns Shortened (if necessary) string version of the count given.
 */
export declare function shortenNumber(count: number): string;
export declare function convertHexToRgbA(hex: string, a: number): string;
export declare const forwardProp: <CustomProps extends Record<string, unknown>>(props: Array<keyof CustomProps>, prop: PropertyKey) => boolean;
export declare function objectsEqual(o1: object | undefined, o2: object | undefined): boolean;
export declare const mapFilterIdToFriendlyLabel: (key: string) => string;
export declare const truncateString: (string: string, trimBy: number, withEllipsis?: boolean) => string;
//# sourceMappingURL=index.d.ts.map
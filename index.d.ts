declare module "json-cycle" {
  /**
   * Replaces circular references in an object with `$ref` paths.
   * @param object - The object to be decycled.
   * @returns The decycled object.
   */
  export function decycle(object: any): any;

  /**
   * Restores circular references in a decycled object.
   * @param object - The decycled object with `$ref` paths.
   * @returns The object with restored circular references.
   */
  export function retrocycle(object: any): any;

  /**
   * Converts anything into a JSON string, decycling circular references.
   * @param value - The thing to be stringified.
   * @param replacer - A function that alters the behavior of the
   * stringification process.
   * @param space - A string or number that's used to insert white space into
   * the output JSON string for readability.
   * @returns The JSON string representation of the decycled object.
   */
  export function stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): string;

  /**
   * Parses a JSON string, restoring circular references if necessary.
   * @param text - The JSON string to parse.
   * @param reviver - A function that prescribes how the value originally
   * produced by parsing is transformed.
   * @returns The parsed object with restored circular references.
   */
  export function parse(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
  ): any;
}

/**
 * Type guard that confirms if the given argument is a TypeScript `Record`.
 */
export const isRecord = (x: unknown): x is Record<PropertyKey, unknown> =>
  x !== null && typeof x === "object" && !Array.isArray(x);

/**
 * Helper function for Type Guard implementations that returns a boolean indicating if the first argument
 * is a `Record` that contains the string keys as given by the second argument in the form of a string array.
 */
export const isRecordWithStringPropertyValues = (
  x: unknown,
  properties: string[]
): boolean => {
  return (
    isRecord(x) &&
    properties.every(
      (property) => property in x && typeof x[property] === "string"
    )
  );
};

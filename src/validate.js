import { isNil } from "./lib/isnil.js";
import { _isArray } from "./lib/array.js";
import { reduce } from "./lib/reduce.js";

export * from "./string.js";
export * from "./util.js";
export * from "./boolean.js";
export * from "./number.js";
export * from "./date.js";
export * from "./creditCard.js";
export * from "./ip.js";

export const validate =
  (...fn) =>
  (value) => {
    if (isNil(value)) {
      return false;
    }

    return reduce(
      (acc, x) => {
        if (isNil(x)) {
          throw new Error("The function for validation is null or undefined.");
        } else {
          return acc && x(value);
        }
      },
      true,
      fn
    );
  };

export const isValid = (v, r = []) => validate(...(_isArray(r) ? r : [r]))(v);

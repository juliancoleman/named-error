/**
 * BaseError
 *
 * @package
 * @extends Error
 * @param {string} message A helpful error message
 */

class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

/**
 * NamedError
 *
 * @class
 * @constructs BaseError
 * @param {number} code An error code
 * @param {string} message A helpful error message
 */

export default class NamedError extends BaseError {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

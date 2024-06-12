class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
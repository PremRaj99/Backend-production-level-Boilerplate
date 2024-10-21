class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong!",
    errors = [],
    stack = ""
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
    this.data = null;
    super(message)

    if(stack) {
        this.stack = stack
    }else {
        Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}
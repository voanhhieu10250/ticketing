// abstract class kinda like interface but written in class
// therefore we can use this class in javascript (ex: err instanceof Error)
// ** in javascript we don't have abstract class **

// everything within this abstract class, beginning with abstract, will be
// a must have in 'extending class' (kinda like interface)

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class (Error class is the default class of javascript)
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}

// tslint:disable-next-line:import-name
import NamedError from "../";

describe("named-error", () => {
  it("accepts a number and a string", () => {
    const statusCode = 404;
    // tslint:disable-next-line:variable-name
    const NotFoundError = new NamedError(statusCode, "Not found.");

    expect(NotFoundError).toBeInstanceOf(NamedError);
    expect(NotFoundError.code).toBe(statusCode);
    expect(NotFoundError.message).toBe("Not found.");
  });

  it("adopts the name of the class instance name", () => {
    const statusCode = 404;
    class NotFoundError extends NamedError { }

    expect(NotFoundError).not.toBeInstanceOf(NamedError);

    // tslint:disable-next-line:variable-name
    const UserNotFoundError = new NotFoundError(statusCode, "User not found.");

    expect(UserNotFoundError).toBeInstanceOf(NotFoundError);
  });
});

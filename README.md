# Named Error

A tiny library for creating custom errors for use with
[Bluebird's filtered catch](http://bluebirdjs.com/docs/api/catch.html#filtered-catch)

## Example

```ts
import NamedError from "@juliancoleman/named-error";

// Instantiate with `new`
const NotFoundError = new NamedError(404, "Not found.");
```

This library is also particularly useful with APIs that use
an ORM, such as ObjectionJS.

```ts
import Base from "./base";

import NamedError from "@juliancoleman/named-error";

export class UserNotFoundError extends NamedError { }

export default class User extends Base {
  static tableName = "users";
  static NotFoundError = new UserNotFoundError(404, "User not found.");

  // ...
}
```

And when we need to catch

```ts
import Service from "../services/some-service";
import NotFoundError from "../errors/not-found-error";

Service.getThatOneThing() // Returns a Bluebird promise
  .then(doSomethingWithReturnedData)
  .catch(TypeError, NotFoundError, function(e) {
    // Generic catch-all for unexpected errors
  });
```

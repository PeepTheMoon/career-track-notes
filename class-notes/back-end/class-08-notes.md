a one-to-many relationship in a table:
i.e. one parlor owns many pizzas

whenever you have a one to many relationship, you almost always put the reference on the many side.  ie an owner can own many pizza parlors, and you will reference the owner in the parlor schema

use schema.virtual to make a connection from the non reference side.

whenever you have a virtual connection you need to explicitly tell it to include the virtuals because those connections don't live in the mongodb

.populate does the actual join

.toJSON({ virtual: true })

```it.only``` in your test file will run only one test in a file.  ```p``` will allow you to select only one file to tun (with all of the tests in that file)

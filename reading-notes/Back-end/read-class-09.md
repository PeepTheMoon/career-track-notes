# https://mongoosejs.com/docs/guide.html#methods

Mongoose instance methods:
Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods.
```
 // define a schema
  var animalSchema = new Schema({ name: String, type: String });

  // assign a function to the "methods" object of our animalSchema
  animalSchema.methods.findSimilarTypes = function(cb) {
    return mongoose.model('Animal').find({ type: this.type }, cb);
  };
  ```
  Now all of our animal instances have a findSimilarTypes method available to them.

```
var Animal = mongoose.model('Animal', animalSchema);
  var dog = new Animal({ type: 'dog' });

  dog.findSimilarTypes(function(err, dogs) {
    console.log(dogs); // woof
  });
  ```

The example above uses the Schema.methods object directly to save an instance method. You can also use the Schema.method() helper as described here.


## https://mongoosejs.com/docs/guide.html#statics

Statics
You can also add static functions to your model. There are two equivalent ways to add a static:

Add a function property to schema.statics
Call the Schema#static() function
```
 // Assign a function to the "statics" object of our animalSchema
  animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };
  // Or, equivalently, you can call `animalSchema.static()`.
  animalSchema.static('findByBreed', function(breed) {
    return this.find({ breed });
  });

  const Animal = mongoose.model('Animal', animalSchema);
  let animals = await Animal.findByName('fido');
  animals = animals.concat(await Animal.findByBreed('Poodle'));
  ```

### https://mongoosejs.com/docs/middleware.html

Mongoose middleware

Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

Types of Middleware
Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

In document middleware functions, ```this``` refers to the document.

In query middleware functions, ```this``` refers to the query.

Aggregate middleware is for ```MyModel.aggregate()```. Aggregate middleware executes when you call ```exec()``` on an aggregate object. In aggregate middleware, ```this``` refers to the aggregation object.

In model middleware functions, ```this``` refers to the model.

All middleware types support pre and post hooks.

Note: If you specify schema.pre('remove'), Mongoose will register this middleware for doc.remove() by default. If you want to your middleware to run on Query.remove() use schema.pre('remove', { query: true, document: false }, fn).

Pre middleware functions are executed one after another, when each middleware calls ```next```.

In mongoose 5.x, instead of calling ```next()``` manually, you can use a function that returns a promise. In particular, you can use ```async/await```.

In mongoose 5.x, instead of calling next() manually, you can use a function that returns a promise. In particular, you can use async/await.
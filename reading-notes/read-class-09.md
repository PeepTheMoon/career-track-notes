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

  

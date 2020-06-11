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




## https://mongoosejs.com/docs/guide.html#statics

Stat

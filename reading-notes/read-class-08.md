# https://mongoosejs.com/docs/populate.html

Mongoose has a more powerful alternative called populate(), which lets you reference documents in other collections

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, a plain object, multiple plain objects, or all objects returned from a query.

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);
```
The ref option is what tells Mongoose which model to use during population, in our case the Story model. All _ids we store here must be document _ids from the Story model.


## https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4

### https://mongoosejs.com/docs/populate.html#populate-virtuals


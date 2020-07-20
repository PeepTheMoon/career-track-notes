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
Notes on setting up an express router.  It allows you to create more instances of the Router an applying them accordingly.  Makes for more modular code!

### https://mongoosejs.com/docs/populate.html#populate-virtuals

Populate Virtuals
So far you've only populated based on the _id field. However, that's sometimes not the right choice. In particular, arrays that grow without bound are a MongoDB anti-pattern. Using mongoose virtuals, you can define more sophisticated relationships between documents.
```
const PersonSchema = new Schema({
  name: String,
  band: String
});

const BandSchema = new Schema({
  name: String
});
BandSchema.virtual('members', {
  ref: 'Person', // The model to use
  localField: 'name', // Find people where `localField`
  foreignField: 'band', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false,
  options: { sort: { name: -1 }, limit: 5 } // Query options, see http://bit.ly/mongoose-query-options
});

const Person = mongoose.model('Person', PersonSchema);
const Band = mongoose.model('Band', BandSchema);

/**
 * Suppose you have 2 bands: "Guns N' Roses" and "Motley Crue"
 * And 4 people: "Axl Rose" and "Slash" with "Guns N' Roses", and
 * "Vince Neil" and "Nikki Sixx" with "Motley Crue"
 */
Band.find({}).populate('members').exec(function(error, bands) {
  /* `bands.members` is now an array of instances of `Person` */
});
```

You can also use the populate match option to add an additional filter to the populate() query. This is useful if you need to split up populate() data:
```
const PersonSchema = new Schema({
  name: String,
  band: String,
  isActive: Boolean
});

const BandSchema = new Schema({
  name: String
});
BandSchema.virtual('activeMembers', {
  ref: 'Person',
  localField: 'name',
  foreignField: 'band',
  justOne: false,
  match: { isActive: true }
});
BandSchema.virtual('formerMembers', {
  ref: 'Person',
  localField: 'name',
  foreignField: 'band',
  justOne: false,
  match: { isActive: false }
});
```

Keep in mind that virtuals are not included in toJSON() output by default. If you want populate virtuals to show up when using functions that rely on JSON.stringify(), like Express' res.json() function, set the virtuals: true option on your schema's toJSON options.
```
// Set `virtuals: true` so `res.json()` works
const BandSchema = new Schema({
  name: String
}, { toJSON: { virtuals: true } });
```



rainbow table attack: get the hash value for the 100 million most common passwords and compare the hashes.

A way to get rid of rainbow table attacks is to salt your passwords.

SALT is a random salt string appended to it and allows for more security by helping to make a rainbow attack more complicated.

however, a password is only as good as the salt.  if you have access to the salt, you have access to all the passwords.

two users with the same password will have the same hash.  Some hackers will create a new user and compare passwords since they'll have the same hash.

bcrypt is unique in that every password will have a random salt.  never will have two pasword hashes that are the same, even if the users have the same password.

```npm i bcryptjs```

we want the generation of password hashes to be really slow.  the higher the salt level the longer it will take to hack passwords.  3 mo and 1 yr to crack a single password.  This is why it's a good idea to change your password every 3 months or so.

bcrypt recommends 14 now for password hashing, called a salt round

schema.virtual('username') will create a virtual schema that doesn't live in the database but will be accessible in the code.

there are get virtual schemas, too:
```
//test@test.com
schema.virtual('username').get(function() {
  return this.email.split('@')[0];
//returns 'test'
});
```
in this case if you want to include the username (remember it's not in the db and only accessible in the code) you would ```console.log(user.toJSON({ virtuals: true }));```

there are also set virtuals:
used to change email or password, for example

.select (a way of grabbing portions of a model), a way of selecting a small number of fields that you want

.populate grabs a reference of an object in a model with references and allows you to fill in that info (inserts the whole object where the id matches).

if you have a slow computer, you can store the salt rounds in a .env in order to use different salt rounds for different computers.  




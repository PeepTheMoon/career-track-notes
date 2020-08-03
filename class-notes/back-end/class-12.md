json web tokens are like getting a wristband at a festival or amusement park.  Allows you to keep making requests without having to constantly enter your password.

static methods happen before we have a User.  represents the model itself and not an actual user.  

instance methods happen after you have a user (when user info has been defined).

you have an iat, issued at, and also an can add an exp so that the token doesn't stay available forever.  The token can be decoded, it's not secure, so you don't want to use passwords.  It's public.

```credentials:'include'``` tells the app on the front end that you want cookies included.

```npm i cookie-parser bcryptjs jsonwebtoken```

```npm i cors``` to use cors middleware


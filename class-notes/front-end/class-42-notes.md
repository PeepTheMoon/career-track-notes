on the backend, it's a good idea to give the user model with a password hash a virtual schema for password.

to see postman like things in the terminal, type:
```curl -XPOST -H 'Content-Type: application/json' 'http://localhost:7890/api/v1/auth/signup' -d '{ "email": "test@test.com", "password": "password"} ```

can brew install jq to make the return in the terminal pretty and easier to read.

as soon as you have pages that need to share state, you need to do a flux/redux type pattern with a provider

class component: how to choose v functional component
if you ever need hooks in your component like uselocation, useparams, usehistory from react-router-dom, you need to use a functional component.
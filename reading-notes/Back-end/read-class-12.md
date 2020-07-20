## https://medium.com/@danboterhoven/why-you-should-use-bcrypt-to-hash-passwords-af330100b861
Why bcrypt:

plain text is very insecure and can give hackers access to other applications if the user has the same password across multiple sites/applications

one way hash is still vulnerable as it allows hackers to guess passwords until they gain access.  Isn't really one way.

salting adds a long sting of bytes to a password before it's hashed and while it's more secure, if hackers gain access to your source code, they can figure out the salt string.

random salts are even more secure but they can still potentially gain access, it just takes longer (one user at a time).

bcrypt is based on the Blowfish block cipher cryptomatic algorithm and takes the form of an adaptive hash function.  With Key Factor changes, the hash output can be influenced. In this way, BCrypt remains extremely resistant to hacks, especially a type of password cracking called rainbow table.  It slows down hashing speed and ultimately the cracking process so it's no longer a viable solution.  

## https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
Understanding bcrypt:

bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.

bcrypt allows building a password security platform that can evolve alongside hardware technology to guard against the threats that the future may bring, such as attackers having the computing power to crack passwords twice as fast.

slow key changing is beneficial to password hashing methods such as bcrypt since the extra computational demand helps protect against dictionary and brute force attacks by slowing down the attack and this can be increased over time to go even slower as computing gets faster.

Another benefit of bcrypt is that it requires a salt by default.  emplys key stretching in pahse one f the user didn't enter a long password.  

The prefix on bcrypt shows it version.

The result of bcrypt achieves the three core properties of a secure password function as defined by its designers:

1. It's preimage resistant.
1. The salt space is large enough to mitigate precomputation attacks, such as rainbow tables.
1. It has an adaptable cost.

```
bcrypt | cost: 10, time to hash: 65.683ms
bcrypt | cost: 11, time to hash: 129.227ms
bcrypt | cost: 12, time to hash: 254.624ms
bcrypt | cost: 13, time to hash: 511.969ms
bcrypt | cost: 14, time to hash: 1015.073ms
bcrypt | cost: 15, time to hash: 2043.034ms
bcrypt | cost: 16, time to hash: 4088.721ms
bcrypt | cost: 17, time to hash: 8162.788ms
bcrypt | cost: 18, time to hash: 16315.459ms
bcrypt | cost: 19, time to hash: 32682.622ms
bcrypt | cost: 20, time to hash: 66779.182ms
```

two-factor authentication and multi-factor authentication increase the security even more!

```bcrypt.compare``` deduces the salt from the hash and is able to then hash the provided password correctly for comparison.for good security, look for :

Auth0 helps you prevent critical identity data from falling into the wrong hands. We never store passwords in cleartext. Passwords are always hashed and salted using bcrypt. Both data at rest and in motion is encrypted - all network communication uses TLS with at least 128-bit AES encryption.



## https://auth0.com/docs/tokens/concepts/token-storage
Token Storage:

When you're building a Next.js application, authentication might be needed in the following cases:

1. When accessing a page
1. When accessing an API route
1. When your application calls an API hosted outside of your Next.js application on behalf of the user

This link shows different implementation for different scenarios.  Good to keep in a bookmark.
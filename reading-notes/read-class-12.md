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

Another benefit of bcrypt is that it requires a salt by default.

## https://auth0.com/docs/tokens/concepts/token-storage
Token Storage:




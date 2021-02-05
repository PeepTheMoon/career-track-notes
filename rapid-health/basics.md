We are building for the bline, visually impaired, hearing impaired and those with dexterity issues.

Think linked in meets facebook

wants videos and articles, resources, social aspects like friends/networks as features

Specific needs:
needs to be compatible with:
screen reader
braile reader
ability to zoom in
dark mode
few steps

Be concious of h1, h2, h3 orders and makeit consistent
bearch bar
web to mobile and vice versa
captcha?
auto play?
keyboard access/ hotkeys
order content on page
proximity of content
liner flow of content

best fonts for visually impaired:
helevtica and arial scale really well
times new roman
comic sans, lol
arial
tahoma
calibri

be mindful of colors used and check good colors for those who are visually impaired

Possible starting point:
login form on front end
users table


FOR ME TO DO

learning firebase and work in monorepos

google cloud storage  file hosting through firebase- uploads their own version of s3 buckets in aws.
https://aws.amazon.com/s3/

contibutor portal- figure out how to upload videos, manage the videos you have, and removing them

Same for images

authorization roles in google firebase: contributors and users will need different permissions.

(Talk to easton or mac from alchemy re: teaching bootcamp! omg! lol!)

Wants a multisite repo, one is an admin portal and one is a contributor portal.  They will share the same database but be hosted at separate addresses for different users.
There will be a shared component library- does lerna auto bundle the pieces it needs for each portal when it deploys?
    - ryan says the build command we set up will bundle everything, and put the firebase json at the root


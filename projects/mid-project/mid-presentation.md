I'm Rachel, I'm a full-stack developer.  I chose this project because I haven't created a game before and I thought it would be an interesting challenge.  I was little nervous because I'm on a team with seasoned game developers making a type of game I've never played before, but I knew it would be a great opportunity to learn a lot and to gain more experience.  I'm happy they welcomed me on their team!

Today I'm going to go over our some of our models and story creation.  This was really fun for me because I love writing, but it presented some interesting challenges: 

1. initially we had state on instances of the room, but then we decided to move state to the user.  This allowed us have user state persist to keep track of which rooms or room goals were 'completed', allowing the user to leave one room and come back again later to start where they left off.

*show models*

1. I had to think about the story in a non-linear way to account for how the user may choose to interact with objects in the story.

1. To do this I had to consider all of the actions a user may want to take with an object.  It required me to think about what messages to return if a user acted on something in a way that wasn't intended.  

1. We added some span tags to allow us to change the color of interactables in the game.  This allowed us to give hints to the user, and also allowed us to alter the narrative in such a way as to control what the user would interact with first.  For example, in the sci-fi room, if a user interacted with the dome first, it might get confusing as to how to user could enter the dome, so we added those spans to highlight certain interactables and draw the user in that direction first.  

Now I'll hand it off to Melissa who will go over a language processing lexicon they wrote to process the commands the user enters as they move through the game.


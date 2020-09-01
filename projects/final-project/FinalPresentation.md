INTRO:

I was interested in this application for it's accessibility, the robust data of the api, and an opportunity to visualize some of that data in an interesting and relevant way.

Data visualization is a powerful way to get information to the user-- 
I wanted to use it because it changes the user's perception of the information and increases the speed at which the information can be interpreted and understood.  This was a stretch goal for our project and I'm so excited that we were able to implement it (at the literal last second) because I believe it adds a lot of informative value to the application, especially for more informed users.

I wanted to work with some of the more practical data returned from the API, like growing conditions, which returned things like how much water and sun a plant needs.The API was unreliable in this respect because many plants, even agricultural plants, didn't yet have this data.  

I noticed that the API offered both native and introduced distribution data, and while that information can be really interesting, it's difficult to engage with in list form.  I thought that it would be nice to present that information to the user  in a map so that it would be much easier to interpret.

The API returns mostly countries, but only returns data for the US by state.  To work around this, I created a states file

Code:
We are piggybacking off the fetch call that we wrote to get us a plant by id for our details page, and passing those plantDetails down to the MapChart component.

I'm MapChart.jsx, we are importing react-simple-maps to render the map.  The map uses the world atlas supplied on line 15 and destructures geographies from the data so that we can map through it.  

We named a new variable on line 20 called NativeDist that takes the plantDetais, looks through its native_distributions property and finds where the name value is equal to the name values in the atlas.json or where the state from the distributions data matches the atla

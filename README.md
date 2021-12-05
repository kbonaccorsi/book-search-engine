# book-search-engine
Take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.

Heroku deployment link:
	*[Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)
GitHub repo:
screenshots/gifs:

## Technology Used
-Google Books API
-GraphQL
-Mern (MongoDB, Express.js, React.js, Node.js)


TO DO:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
			in server server.js
			* [Getting started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)
			-set up schemas folder (activity 2)
				-index.js
				-typedefs.js
				-resolvers.js


2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.
	**Use activity 26 solution document to help with the pattern
			-in server server.js
			* [Integrating with Node.js middleware](https://www.apollographql.com/docs/apollo-server/integrations/middleware/)

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.
		**use 22 activity 2
				-in utils folder


4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas. Use the  walkthrough for instructions.


<!-- WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
	-comes this way -->


<!-- WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
	-comes this way -->


<!-- WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a  -->
link to that book on the Google Books site
	-needs a link
	-came with title, author, description, and image


<!-- WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
	-comes this way -->


<!-- WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
	-comes this way -->


<!-- WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
	-comes this way -->


WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
	-on submit "something went wrong with your login credentials


WHEN I enter my account’s email address and password and click on the login button
THEN the modal closes and I am logged in to the site
	-completing fields works
	

<!-- WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
	-comes this way -->


WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
	-needs the link for book on Google Books


<!-- WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
	-comes this way -->


WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
	-needs the link for book on Google Books


WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list


WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  



## Mock-Up

Let's start by revisiting the web application's appearance and functionality.

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./Assets/21-mern-demo-01.gif)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:

![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./Assets/21-mern-demo-02.gif)

A user can view their saved books on a separate page, as shown in the following animation:

![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./Assets/21-mern-demo-03.gif)



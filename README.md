**POSTIT**

This is a simple application that allows friends and colleagues create groups for notifications, This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.

**Template:** This contains the user interfaces using HTML and CSS

Server: This folder house the backend implementation of the project with NodeJS - Express

GETTING STARTED

Clone this repository using the command git clone https://github.com/omolewaaa/POSTIT

PEREQUISITES AND INSTALLATIONS

Knowledge of HTML, CSS and JavaScript

NodeJS installed on your system, you can check out here to download https://nodejs.org/en/download/

PostgreSQL for relational data persistence and Sequelize as the Object relational model.

4 Installation of Postman for testing the API routes

TESTING

To signup

POST: api/users/signup

details (username, email and password).

To sigin

POST: api/users/signin

details (useername and password)

To create a group

POST : api/group

details (groupname)

To add Memember

POST: api/group//user

To post message to a group

POST: api/group//message

details (message)

To Retrieve messages from a specified group

GET: api/group/<group id/message

AUTHOR

Akinyomi Omolewa

REFERENCES

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

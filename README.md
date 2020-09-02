# Web App: CampDiscover
CampDiscover is a Yelp-like web application for campsites with RESTful routing project from the [Udemy course - The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/course/the-web-developer-bootcamp/)
# Live Demo
To see the app in action, go to:[CampDiscover Demo] (https://git.heroku.com/campdiscover.git)
- Login username : Guest01
- Login password : guest123
# Features
- Authentication:
 - User login with username and password
 - Admin sign-up with admin code
- Authorization:
 - One cannot manage posts and user profile without being authenticated
 - One cannot edit or remove posts, comments and reviews created by other users
 - Admin can manage all posts and comments
- Manage user account with basic functionalities:
 - Reset password
 - Profile page setup once user registered account
 - User can only review once for a post
- Manage campground posts with basic functionalities:
 - Create, edit and delete posts, comments and reviews
 - Display campground location on Google Maps
 - Search existing campgrounds
- Flash messages responding to users’ interaction with the app
- Responsive web design
# Custom Enhancements
-Update personal information on profile page
-Embedded comment show page in single campground show page to look more user friendly
-Used Google Fonts and Font Awesome instead default fonts
-Used momentJS to show post and comment creation and update timestamp
-Added Admin invitation code generation functionality
-Added "Forgot password" functionality allowing user to reset password
-Integrate a review system where users can give 1-5 star ratings to individual campground
# Built with
- Front-end
 - [ejs](https://www.npmjs.com/package/ejs)
 - [Google Fonts](https://fonts.google.com/)
 - [Font Awesome](https://fontawesome.com/)
 - [Bootstrap](https://getbootstrap.com/)
 - [Google Maps APIs](https://cloud.google.com/maps-platform/)
- Back-end
 - [Express](https://expressjs.com/)
 - [MongoDB](https://www.mongodb.com/)
 - [Mongoose](https://mongoosejs.com/)
 - [passport](http://www.passportjs.org/)
 - [passport-local](https://www.npmjs.com/package/passport-local)
 - [passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)
 - [body-parser](https://www.npmjs.com/package/body-parser)
 - [method-override](https://www.npmjs.com/package/method-override)
 - [node-geocoder](https://www.npmjs.com/package/node-geocoder)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [crypto](https://nodejs.org/api/crypto.html#crypto_crypto)
 - [express-session](https://github.com/expressjs/session#express-session)
 - [nodemailer](https://nodemailer.com/about/)
 - [moment](https://momentjs.com/)
 - [connect-flash](https://www.npmjs.com/package/connect-flash)
# Deployment
- [Heroku](https://heroku.com/)

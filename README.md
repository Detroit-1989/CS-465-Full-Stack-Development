# CS-465-Full-Stack-Development - Travlr Getaways

## Project Overview
gi

Travlr Getaways is a full stack travel application that I developed throughout CS 465 coursework. The project includes a customer-facing website and a separate administrative single-page application (SPA). The application uses a Node.js and Express backend, MongoDB for persistent data storage, and Angular for the administrative interface. RESTful API endpoints connect the frontend applications to the backend and database. Security was incorporated into the administrative side of the application to provide authenticated access to protected functionality.

## Architecture

Throughout this project, I worked with multiple approaches to frontend development, including Express HTML templates, JavaScript, and an Angular single-page application. The customer-facing portion of the application uses Express and Handlebars to generate HTML pages on the server. With this architecture, the server processes requests, retrieves the necessary data, and renders the appropriate content for the browser.

JavaScript provides much of the application logic and allows the frontend and backend components to communicate and respond dynamically to application activity. The administrative side uses Angular to create a SPA. Unlike the traditional Express-based website, the SPA can dynamically update portions of the interface without requiring the browser to reload an entirely new page for each interaction. Angular also allowed the administrative interface to be divided into reusable components, services, and models.

The backend uses MongoDB, which is a NoSQL database. MongoDB was appropriate for this application because the travel data can be represented naturally as document-based records. MongoDB stores information in BSON documents that closely correspond to the JSON objects exchanged by the REST API. Using MongoDB with Mongoose also allowed schemas and models to be created for application data while retaining the flexibility associated with a document-oriented database. This architecture works well with the JavaScript-based MEAN stack because data can move between the database, API, and frontend with relatively little transformation.

## Functionality

JSON and JavaScript are related but serve different purposes. JavaScript is a programming language that can contain variables, functions, classes, control structures, and application logic. JSON, or JavaScript Object Notation, is a text-based data-interchange format. JSON represents structured information through objects, arrays, key-value pairs, and supported primitive values, but it does not contain executable JavaScript logic.

JSON played an important role in connecting the frontend and backend portions of the Travlr application. The REST API retrieves trip information from MongoDB and returns that information to clients as JSON. The Angular SPA can then process the returned data and display it through its components. JSON therefore provides a consistent format for exchanging information among the database layer, API, and user interface.

Refactoring was also an important part of developing the application. One major example was separating the RESTful API into the `app_api` portion of the project instead of placing all application functionality directly into the customer-facing application. This separation of concerns made the application easier to maintain and allowed different clients to communicate with the same API.

The administrative SPA was also divided into Angular models, components, and services. For example, trip information could be represented by a reusable Trip model, while services handled HTTP communication with the API and UI components handled the presentation and editing of trip information. Reusable UI components reduce duplicate code, improve consistency, simplify maintenance, and make future enhancements easier because a component can be changed in one location and reused throughout the application.

## Testing

Testing the full stack application required understanding HTTP methods, API endpoints, database operations, and authentication. An endpoint identifies a specific API resource or operation, while HTTP methods specify what action should be performed. For example, GET requests retrieve information, POST requests create new resources, PUT requests update existing resources, and DELETE requests remove resources.

During development, I used Postman to manually test API endpoints and verify that requests produced the expected HTTP responses and database changes. Testing the API separately from the frontend helped determine whether problems originated in the user interface, API routes and controllers, or database layer. I also tested the Angular administrative interface to ensure that it communicated correctly with the REST API and that CRUD operations were reflected in the application and database.

Adding security increased the complexity of testing because protected operations could no longer be treated the same as public requests. Authentication requires the application to verify the identity of a user before granting access to protected administrative functionality. The final application incorporated an administrative login and token-based authentication. Protected requests therefore had to include valid authentication information, while requests without valid credentials or authorization needed to be rejected appropriately.

This process demonstrated that API testing involves more than determining whether an endpoint responds. Effective testing also requires verifying the request method, request body, parameters, response data, HTTP status codes, database changes, and security requirements associated with the endpoint.

## Reflection

CS 465 helped me understand how the individual technologies used in web development operate together as a complete full stack application. Before completing the project, it was easier to view databases, APIs, servers, and frontend frameworks as separate technologies. Building Travlr Getaways demonstrated how requests move through the entire application architecture, from a user interface to an API endpoint, through application logic and database operations, and back to the client.

The course strengthened my skills with JavaScript, Node.js, Express, Angular, MongoDB, Mongoose, RESTful APIs, CRUD operations, JSON, authentication, API testing, and debugging. I also gained experience with separation of concerns and reusable component-based application design.

One of the most valuable skills I developed was troubleshooting a multi-layer application. When a feature did not work as expected, I learned to examine each layer independently, including the frontend component, HTTP request, API route, controller, database model, server response, and authentication process. This systematic approach to debugging will be useful in future software development and data-oriented projects.

Completing this project has made me a more marketable candidate because I can demonstrate experience building and testing a complete full stack application rather than working with individual technologies in isolation. The completed Travlr Getaways project provides portfolio evidence of my ability to work with modern web application architecture, database integration, REST APIs, frontend frameworks, security, version control, and systematic software testing.



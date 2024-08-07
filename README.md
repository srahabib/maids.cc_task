# User Dashboard Project

## Overview

Welcome to the User Dashboard Project! This Angular application demonstrates proficiency in Angular 18 and showcases advanced features like state management, custom directives, observables, and caching techniques. We’ve utilized Tailwind CSS for styling UI components to create an interactive and responsive user dashboard.

## Project Setup

To get started with the project, follow these steps:

Clone the Repository

```
git clone <repository-url>
cd <repository-folder>
```

Install Dependencies

```
npm install
```

Run the Application

```
ng serve
```

Visit http://localhost:4200 in your browser to view the application.

# Features

## Page Layout

Header: Contains a search bar for finding users by ID.
![image](https://github.com/user-attachments/assets/f71fe472-d8e9-4e42-9051-930d673b6704)

User List: Displays user cards in a horizontally centered, paginated format.
![image](https://github.com/user-attachments/assets/fa247a10-9d46-4861-bf2f-250c3454da50)

## Data Retrieval

User Cards: Fetch user data from https://reqres.in/api/users?page={page}.
User Details: Fetch detailed information for a single user from https://reqres.in/api/users/{id}.

## Navigation

User Cards: Click on a user card to navigate to the detailed information page for the selected user.
![image](https://github.com/user-attachments/assets/01368b41-793f-4af2-bbc0-04112a88aaa5)

Search Functionality: Use the instant search field in the header to search for users by ID and navigate to the user details page if the user exists.
![image](https://github.com/user-attachments/assets/8bf85d81-7810-4f16-82f5-592380e74a22)

## User Details Page

Back Button: Navigate back to the main user list from the individual user’s details page.

## Caching Implementation

Caching Service: Prevents redundant HTTP requests by caching data responses for both user lists and user details.
User Experience Enhancements

Loading Bar: Displays during network requests to indicate pending operations, ensuring a smooth user experience.

## State Management

NgRx: Utilized for managing the TO-DO tasks state efficiently.

## Custom Directives

Directives: Implemented to enhance UI interactions, such as a custom directive for holding and interacting with buttons.

## Observables

RxJS: Employed to handle asynchronous operations and manage data streams effectively.

## Styling and Animations

Tailwind CSS: Used for modern, responsive design and animations.

## Project Structure

src/app
user-list.component.ts - Displays the list of users.

user-details.component.ts - Shows detailed information about a selected user.

caching.service.ts - Manages caching of HTTP requests.

loading.service.ts - Controls the display of the loading UI.

user-details.service.ts - Fetches user details and integrates with caching.

app.module.ts - Main module of the application with routing and state management setup.

app-routing.module.ts - Configures routing for navigation between pages.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues. For any questions or feedback, please contact [sara.habib48@gmail.com].

Thank you for checking out the User Dashboard Project. We hope you find it useful and informative!

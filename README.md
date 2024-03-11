# Online Cookbook v2 (Formerly Recipe Vault Online)

The second version of my Online Cookbook app is written in Next.js and continues to provide a secure and easy-to-use application to enter and retrieve collections of recipes. This version is a complete rewrite of the original application, which was written in Vue.js. The original application was written as more of a generalized application for public use, but this version is written with self-hosting in mind.

Once this project is completed, the idea is that a user should be able to fork this project, add their environment variables for their API server, and have a fully functional recipe management system that can use anywhere.

## Tech Stack

### Hosting

The frontend for this project will be hosted on Vercel, however it should be relatively easy to host on any platform that supports Next.js, including a self-hosted Docker container.

### Backend

The backend will be utilizing a RESTful API built with Go, Gin and GORM.

The decision to migrate away from Supabase to a custom backend was mainly due to the desire to move away from using hosted microservices and to have more control over the backend.

### Frontend

The frontend utilizes Next.js as the framework, with Tailwind CSS for styling.

### Code Best-Practices

- This code uses ESLint to establish consistently formatted code. Format on save should work with this and is recommended.
- Pages should be kept as simple as possible, and Components should be created wherever code may be duplicated.
- Page and Component styling should be done with Tailwind CSS until forced otherwise. 

## Workflow

1. An unauthenticated user (global user) will be able to visit the home page, view demo recipes, and view a dashboard where they can see all recipes entered into the system, however they will not be able to add or edit recipes.
2. At any time, a user will be able to login with backend-defined credentials to view the entire library of recipes.
3. Logged in users will be able to search and browse all recipes in the connected database.
4. Logged in users will be able tto choose to create, delete or edit recipes.
5. Viewing recipes will also give the ability to print the recipe, and should include a button to generate a printer-friendly version of the recipe without images, optimized for black and white printers, and in a reasonable format for standard sheets of paper.

## To-Do (Phase 1)

1. ~~Rework data structure on front-end to meet requirements of new backend.~~
2. ~~Implement authentication and access to the dashboard.~~
3. ~~Create a recipe dashboard that shows all recipes in the database.~~
4. ~~Implement the ability to add new recipes and edit existing recipes.~~
5. ~~Figure out recipe image handling. (This may be a phase 2 feature)~~
6. ~~Restyle Recipe page to work better with recipes with and without images.~~
7. Create local checkboxes for ingredients so users can check off ingredients.
8. Implement search/filter function on recipe dashboard.
9. Implement printer-optimized version of recipe page.
10. Implement "grocery list" print view.

## To-Do (Phase 2)

1. Image handling - rework recipe display page and make room for small image if available.
2. Create more user-friendly demo recipes.
3. Create a "shopping list" view in the dashboard (new API call?) which tracks ingredients from recipes that are flagged for creation

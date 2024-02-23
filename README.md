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
- Pages and Components should be thought of as a 2-tier system: 'How It Looks' and 'How It Works'. To accomplish this, styling should be done with Tailwind CSS until forced otherwise. The Template section should deal with how the code looks/renders in the browser. The Script section should be focused on logic and function of the code in the browser. Style sections should be minimally used unless forced by animation or specific purposes.

## Workflow

1. An unauthenticated user (global user) will be able to see a description and sample recipes to get a feel for the way the front-end interface works.
2. At any time, a user will be able to login with pre-existing credentials to view the entire library of recipes.
3. Logged in users will be able to search and browse all recipes in the connected database.
4. Logged in users will be able to access a backend where they will see a list of recipes, which they can choose to edit or delete.
5. Logged in users will be able to add new recipes.
6. Viewing recipes will also give the ability to print the recipe, and should include a button to generate a printer-friendly version of the recipe without images, optimized for black and white printers, and in a reasonable format for a single sheet of paper.

## To-Do (Phase 1)

1. Rework data structure on front-end to meet requirements of new backend.
2. Implement authentication and access to the dashboard.
3. Create a recipe dashboard that shows all recipes in the database.
4. Implement the ability to add new recipes and edit existing recipes.
5. Figure out recipe image handling. (This may be a phase 2 feature)
6. Implement printer-optimized version of recipe page.

## To-Do (Phase 2)

1. Create moe user-friendly public recipes.
2. Implement search/filter function on recipe dashboard
3. Create a 'favorites' tab under account that shows all recipes that have been favorited by the user.
4. Create a 'shopping list' tab under account that shows all ingredients from all recipes that have been added to the shopping list by the user.

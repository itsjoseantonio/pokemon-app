# pokemon-app

React App to browse and know about your favorite pokemon

---

## User Stories

### Authentication

**1. Login Functionality**  
As a user,  
I want to log in using my username and password,  
so that I can access the main page of the application.

**2. Session Persistence and Route Protection**  
As a logged-in user,  
I want my session to persist so I don’t have to log in again,  
and routes should be protected depending on my authentication status,  
so that I can navigate through the app securely.

---

### Pokémon Browsing

**3. Pokémon List and Search**  
As a user,  
I want to see a search bar and a list of Pokémon with their photo, name, and number,  
so that I can browse and identify them easily.

**4. Sorting Pokémon**  
As a user,  
I want to sort the list of Pokémon by name or number,  
so that I can organize them in the order I prefer.

**5. Pokémon Details**  
As a user,  
I want to click on a Pokémon from the list,  
so that I can view its detailed information, including abilities, moves, and forms.

## Thought Process

Here’s a brief overview of the decisions I made during the technical exercise and why I chose each tool.

### Tools & Decisions

- **Vite**  
  Chosen for its fast development environment, instant HMR, and optimized production builds.

- **Node.js 22 (LTS)**  
  Using the latest LTS version to ensure stability and long-term support.

- **Zustand**  
  Selected for simple, minimal global state management with very little boilerplate — a great fit for small-to-medium apps.

- **Shadcn/ui**  
  Provides accessible, customizable, and well-designed components which speeds up UI development while keeping consistency.

- **Tailwind CSS**  
  Utility styling for fast layout and responsive design, keeping CSS maintainable and consistent.

- **Axios**  
  Used for API requests because of its simplicity, error handling and json parsing.

### Project Structure

    /assets     → Static files (images, icons, etc.)
    /components → Reusable UI components
    /hooks      → Custom React hooks for encapsulating logic
    /pages      → Main pages or views of the application
    /services   → API and external service logic (Axios)
    /store      → Zustand store files for global state management
    /types      → TypeScript types and interfaces

## Login

    Login feature implementation follow the next rules:

    	- User authentication with credentials
    	- Persist the session after login.
    	- Redirect authenticated users to the main Pokémon view.
    	- Prevent unauthorized access to protected routes.

**1. Form Values**
The login form captures:

- **Username**
- **Password**

**2. Authentication**

- The app sends a **POST** request to the `/login` endpoint with validated credentials.
- If authentication succeeds the server returns the session.
- The session is stored in `localStorage` to persist.

**3. Session Persistence**

- When page is reloaded, the app checks for an existing sesion in `localStorage`.
- If found, it redirects the user to the main page.

**4. Protected Routes**

- Only authenticated users can access specific routes such us `/home`.
- No authorized users are redirected to the `/login` page.

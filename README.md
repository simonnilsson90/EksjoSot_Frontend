# The Everyone Store

The Everyone Store is a React.js-based e-commerce platform offering a user-friendly shopping experience with a wide range of products.


## Project Structure

* `theeveryonestore/`
    * `client/` (Frontend codebase)
    * `server/` (Backend codebase)



## Getting Started

These instructions will guide you through getting a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

Make sure you have the following installed:
* Node.js (Recommended: the latest stable version)
* npm (Comes with Node.js)


### Installation

Follow these steps to set up your development environment:

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/theeveryonestore/TheEveryoneStore.git
    ```

2. Navigate to the frontend directory:
    ```sh
    cd everyonestore/client
    ```

3. Install the frontend dependencies:
    ```sh
    npm install
    ```

4. Navigate to the backend directory:
    ```sh
    cd ../server
    ```

5. Install the backend dependencies:
    ```sh
    npm install
    ```


### Configuration

Before running the application, you will need to set up environment variables:

1. Obtain the `.env` file from the Google Drive location provided by the project maintainers.

2. Place the `.env` file in the `server` directory of your local project.

   The `.env` file should contain all the necessary environment variables required for the application to run correctly, including database connection settings and any API keys or secrets.


### Running the Application

To run the frontend of The Everyone Store:

1. Navigate back to the `client` directory:
    ```sh
    cd ../client
    ```

2. Start the React development server:
    ```sh
    npm start
    ```

   The application should now be running and accessible at [http://localhost:3000](http://localhost:3000).

To run the backend server:

1. Navigate to the `server` directory from the root of the project:
    ```sh
    cd everyonestore/server
    ```

2. Start the backend server:
    ```sh
    npm start
    ```

   Ensure the backend is configured to run on a port that does not conflict with the frontend, typically [http://localhost:3001](http://localhost:3001).


## Technologies Used

- Frontend:
    - React.js
    - @emotion/react and @emotion/styled for styling
    - @mui/material for Material UI components
    - React Router for routing

- Backend:
    - Node.js with Express.js framework
    - PostgreSQL for the database (`pg` package)
    - `dotenv` for environment variable management
    - `cors` for enabling Cross-Origin Resource Sharing


## Contributing

Please read the onboarding document and coding standards document in the google drive for details on the process for submitting pull requests.


# Cypress Test Suite for OSCommerce Product Purchase

This project contains automated end-to-end tests for the product purchase process on the OSCommerce platform, utilizing Cypress. It includes tests for purchasing products with specific quantities and verifying the order confirmation message.

## Prerequisites

Before running the tests, ensure you have the following installed:

    Node.js (Preferably the latest version)
    npm (Comes with Node.js)
    Cypress

## Installation

    Clone the GitHub repository to your local machine.
    Navigate to the project directory.
    Install the required dependencies by running:

    ```bash
    npm install
    ```

## Running Tests

### Running using Command Prompt

To execute the automated tests this way, use the following command in the Terminal or Command Prompt from the root of the project directory:

```bash
npx cypress run
```

This command runs all the test cases in headless mode and generates screenshots on test failures and videos of the test executions, stored in cypress/screenshots and cypress/videos directories, respectively.

### Interactive Test Runner

For a more interactive approach or to debug specific tests, you can open the Cypress Test Runner using:

```bash
npx cypress open
```

From the Test Runner, you can manually select and run individual test specifications.

## Test Structure

    **spec1.cy.js:** Contains the test cases for purchasing different products (TC1 and TC2) and a separate test case (TC3) to verify an incorrect order confirmation message. This spec file demonstrates handling multiple scenarios within the same "it" block and across separate blocks.

    **commands.js:** Defines custom Cypress commands for reusable actions, such as navigating to URLs, filling the payment form, and increasing product quantities. These commands enhance test readability and maintainability.

## Fixtures

    **users.json:** Contains user details for filling out the payment form.
    
    **products.json:** Holds product names and quantities for the purchase tests.
    
    **urls.json:** Stores the base URL for the test site.

Utilizing fixtures allows for easy updates to test data without modifying the test scripts directly.

## Contributing

Feel free to fork the repository and submit pull requests with enhancements or fixes. For any bugs or issues, please open an issue in the GitHub repository.

## License

GNU GENERAL PUBLIC LICENSE

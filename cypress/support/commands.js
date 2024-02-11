//Step 1
// Define a custom command 'navigateToUrl' to navigate to a URl specified in a fixture file
Cypress.Commands.add('navigateToUrl', (fixturePath) => {
    
    // Load the fixture file of the fixturePath argument
    cy.fixture(fixturePath).then((urls) => {
        
        // Visit the URL defined in the fixture
        cy.visit(urls.baseUrl);
    });
  }); 
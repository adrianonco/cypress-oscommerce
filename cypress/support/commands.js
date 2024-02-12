// Custom command to navigate to a URl specified in a fixture file
Cypress.Commands.add('navigateToUrl', (fixturePath) => {
    
    // Load the fixture file of the fixturePath argument
    cy.fixture(fixturePath).then((urls) => {
        
        // Visit the URL defined in the fixture
        cy.visit(urls.baseUrl);
    });
  }); 

// Custom command to increase product quantity by clicking the increase button
Cypress.Commands.add('increaseProductQuantity', (targetQuantity) => {
    // Assuming the initial quantity is always 1, calculate the number of additional clicks needed
    const additionalClicksNeeded = targetQuantity - 1;
    // Use a loop to click the increase quantity button the required number of times
    for (let i = 0; i < additionalClicksNeeded; i++) {
      // Locate the selector and click it
      cy.get('.qty > .qty-box > .bigger').click();
    }
  });
  
  
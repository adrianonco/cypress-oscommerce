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

// Custom command to fill the payment form using the 'users' fixture file
Cypress.Commands.add('fillPaymentForm', (users) => {
    // Fill in the first name
    cy.get('#shipping_address-firstname').type(users.firstName);
    // Fill in the surname
    cy.get('#shipping_address-lastname').type(users.lastName);
    // Fill in the street address
    cy.get('#shipping_address-street_address').type(users.streetAddress);
    // Fill in the post code
    cy.get('#shipping_address-postcode').type(users.postcode);
    // Fill in the city
    cy.get('#shipping_address-city').type(users.city);
    // Fill in the email address
    cy.get('#checkout-email_address').type(users.email);
    // Click to confirm the Terms
    cy.get('#checkout-terms').click();
  });
  
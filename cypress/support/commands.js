// Custom command to navigate to a URl specified in a fixture file
Cypress.Commands.add('navigateToUrl', (fixturePath) => {
    // Load the fixture file of the fixturePath argument
    cy.fixture(fixturePath).then((urls) => {
        // Visit the URL defined in the fixture
        cy.visit(urls.baseUrl);
    });
  }); 

// Custom command to close the pop-up at the bottom if present in order to avoid duplicated 'Add to Basket' buttons
Cypress.Commands.add('closePopupIfPresent', () => {
    cy.get('body').then($body => {
    // Check if the popup's close button exists in the DOM
    if ($body.find('.close').length > 0) {
        // If the close button exists, wait for it and click it to close the popup
        cy.get('.close', { timeout: 5000 }).click();
    }
    // If the close button does not exist, this block is skipped and no action is taken
    });
})

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

// Custom command to complete the checkout process
Cypress.Commands.add('completeCheckout', () => {
    // Click the "Continue shopping" button to close the pop-up form
    cy.get('#cart-form > .buttons > .left-buttons > .btn').click();
    // Make the 'Shopping Cart' dropdown visible
    // Changing the parent div and its display status from none to block
    cy.get('#cart-box > div.cart-content').invoke('attr', 'style', 'display: block;');
    // Click the 'Checkout' button
    cy.get('.right-buttons > a.btn').click();
});

// Custom command to select payment method
Cypress.Commands.add('selectPaymentMethod', (paymentMethod) => {
    // Click the 'Continue as guest' button
    cy.get('#box-1770 > .btn-2').click();
    // Click the radio button for 'Cash on delivery' payment method
    cy.get('.payment_class_cod > .item-radio > label > input').click();
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
    // Click again the 'Cash on delivery' radio button as it jumps
    cy.get('.payment_class_cod > .item-radio > label > input').click();
    // Click to confirm the Terms
    cy.get('#checkout-terms').click();
  });
  
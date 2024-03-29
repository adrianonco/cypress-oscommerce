// Define a test suite for purchasing products
describe('OSCommerce Product Purchase Tests', () => {
    
    // Define a test case that covers purchasing different products with specific quantities
    it('TC1 and TC2 - Purchase different products with specific quantities', () => {
      
        // Load the product data from the 'products' fixture
      cy.fixture('products').then((data) => {
        
        // Iterate over each product in the loaded fixture data
        data.products.forEach((product) =>  {

            // Step 1: Go to website
            // Go to the specific website calling the custom command with the name of the fixture file
            cy.navigateToUrl('urls');

            // Step 2: Click required product
            // Find a clickable element that contains a given name in 'products' fixture
            cy.contains(product.name).click();

            // Step 3: Add to Cart
            // Close the pop-up at the bottom if present calling the custom commandd
            cy.closePopupIfPresent();
            // Click the "Add to Basket" button regardless of the popup's presence
            cy.get('#btn-cart > .add-to-cart').click();
            // Wait for the pop-up form to appear and assert conditions
            cy.get('.pop-up-content', { timeout: 5000 }).should('be.visible').and('contain', 'Item');
            
            // Step 4: Update quantity of each product as requested
            // Increase the product quantity to the required amount calling the custom command
            cy.increaseProductQuantity(product.quantity);

            // Step 5: Assert the quantity of each product 
            // Check if the value of the input field matches the expected quantity in the 'product's fixture 
            cy.get('.qty > .qty-box > .qty-inp-s').should('have.value', `${product.quantity}`);
            
            // Step 6: Checkout
            // Complete the checkout process calling the custom command
            cy.completeCheckout();

            // Step 7: Select 'Cash on delivery' payment method
            // Select the payment method calling the custom command
            cy.selectPaymentMethod();
            
            // Step 8: Complete the payment
            // Load the user details from the fixture
            cy.fixture('users').then((userDetails) => {
                // Use the custom command to fill in the payment form
                cy.fillPaymentForm(userDetails);
            });

            // Step 9: Check the sucess message is shown
            // Click the 'Confirm and pay' button
            cy.get('#box-31798 > .btn-2').click();
            // Wait for the confirmation message to appear and assert the its content
            cy.contains("We've received your order", { timeout: 10000 }).should('be.visible');

            // Additional Step: Simulate session closure and restart so all test cases can run isolated within a same 'it'
            // Simulate closing the session
            cy.clearCookies();
            cy.clearLocalStorage();
            // Reload the current page
            cy.reload();
        });
    });
  });

  it('TC3 - Check incorrect order confirmation message', () => {
    
    cy.fixture('products').then((data) => {

      // Using the firs product of 'products' fixture
      const product = data.products[0]; 
  
      // Reuse steps for completing the process
      cy.navigateToUrl('urls');
      cy.contains(product.name).click();
      cy.closePopupIfPresent();
      cy.get('#btn-cart > .add-to-cart').click();
      cy.get('.pop-up-content', { timeout: 5000 }).should('be.visible').and('contain', 'Item');
      cy.increaseProductQuantity(product.quantity);
      cy.get('.qty > .qty-box > .qty-inp-s').should('have.value', `${product.quantity}`);
      cy.completeCheckout();
      cy.selectPaymentMethod();
      cy.fixture('users').then((userDetails) => {
        cy.fillPaymentForm(userDetails);
      });
      cy.get('#box-31798 > .btn-2').click();
  
      // The diverging step for TC3: checking for the incorrect message
      cy.contains("Your order has processed", { timeout: 5000 }).should('be.visible');
  });
});
})
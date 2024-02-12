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
            // Close the pop-up at the bottom if it exists ir order to avoid duplicated "Add to Basket" buttons
            cy.get('body').then($body => {
                // Check if the popup's close button exists in the DOM
                if ($body.find('.close').length > 0) {
                    // If the close button exists, wait for it and click it to close the popup
                    cy.get('.close', { timeout: 5000 }).click();
                }
                // If the close button does not exist, this block is skipped and no action is taken
            });
            // Click the "Add to Basket" button regardless of the popup's presence
            cy.get('#btn-cart > .add-to-cart').click();
            // Wait for the pop-up form to appear and assert conditions
            cy.get('.pop-up-content', { timeout: 5000 }).should('be.visible').and('contain', 'Item');
            
            // Step 4: Update quantity of products
            // Increase the product quantity to the required amount calling the custom command
            cy.increaseProductQuantity(product.quantity);

        });
    });
  });
})
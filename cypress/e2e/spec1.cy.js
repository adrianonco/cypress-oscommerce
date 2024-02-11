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
            // Close the pop-up at the bottom ir order to avoid double "Add to Basket" button
            cy.get('.close').click();
            // Click the "Add to Basket" button
            // Click the 'Add to Basket' button that is shown in another pop-up
            cy.get('#btn-cart > .add-to-cart').click();
            /*
            cy.get('.pop-up-content', { timeout: 10000 }).should('be.visible').and('contain', 'Item');
            // Wait for the pop-up form to appear as it has delay
            cy.wait(6000);
            */
        });
    });
  });
})
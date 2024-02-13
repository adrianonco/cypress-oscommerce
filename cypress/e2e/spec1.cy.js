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
            
            // Step 4: Update quantity of each product as requested
            // Increase the product quantity to the required amount calling the custom command
            cy.increaseProductQuantity(product.quantity);

            // Step 5: Assert the quantity of each product 
            // Check if the value of the input field matches the expected quantity in the 'product's fixture 
            cy.get('.qty > .qty-box > .qty-inp-s').should('have.value', `${product.quantity}`);
            
            // Step 6: Checkout
            // Click the "Continue shopping" button to close the pop-up form
            cy.get('#cart-form > .buttons > .left-buttons > .btn').click();
            // Make the 'Shopping Cart' dropdown visible
            // Changing the parent div and its display status from none to block
            cy.get('#cart-box > div.cart-content').invoke('attr', 'style', 'display: block;');
            // Click the 'Checkout' button
            cy.get('.right-buttons > a.btn').click();

            // Step 7: Select 'Cash on delivery' payment method
            // Click the 'Continue as guest' button
            cy.get('#box-1770 > .btn-2').click();
            // Click the radio button for 'Cash on delivery' payment method
            cy.get('.payment_class_cod > .item-radio > label > input').click();
            
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
        });
    });
  });
})
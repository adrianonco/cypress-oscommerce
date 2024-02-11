// Define a test suite for purchasing products
describe('OSCommerce Product Purchase Tests', () => {
    // Define a test case that covers purchasing different products with specific quantities
    it('TC1 and TC2 - Purchase different products with specific quantities', () => {
      // Load the product data from the 'products' fixture
      cy.fixture('products').then((data) => {
        // Iterate over each product in the loaded fixture data
        data.products.forEach((product) =>  {
        });
    });
  });
})
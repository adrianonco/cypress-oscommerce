describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://sqademosatp.net/watch/');
    cy.get('[data-id="28"] > .type-1 > .name > a').click();
    cy.get('#btn-cart > .add-to-cart').click();
    cy.get('.qty > .qty-box > .bigger').click();
    cy.get('.right-buttons > .btn-2').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Test2', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://demo.oscommerce.com/watch/');
    cy.get('#box-1857 > .products-listing > .slick-next').click();
    cy.get('[data-id="25"] > .type-1 > .name > a').click();
    cy.get('.add-to-cart').click();
    cy.get('.qty > .qty-box > .bigger').click();
    cy.get('.right-buttons > .btn-2').click();
    /* ==== End Cypress Studio ==== */
  });
})
describe('Flipkart Menu Option', () => {
  beforeEach(() => {
    // Visit the Flipkart homepage
    cy.visit('https://www.flipkart.com');

   });

  it('should assert that the Grocery menu option is present', () => {
    // Assert that the menu option for Grocery exists
    cy.get('._1XjE3T').should('be.visible').and('contain.text', 'Grocery');
    
    // Optionally, click the Grocery menu option and verify navigation
    cy.get('.Pke_EE').click().type("cork");
    cy.get('._2iLD__').click()
    cy.wait(5000)
    cy.go('back')
  });
});
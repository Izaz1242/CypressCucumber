describe('Flipkart Menu Option', () => {
    beforeEach(() => {
      // Visit the Flipkart homepage
      cy.visit('https://www.flipkart.com');
  
     });
  
    it('should understand the various options of trigger method', () => {
      // trigger focus and click
       cy.get('._1TOQfO').trigger('mouseover').and('contain.text', 'Notification Preferences')
    //    cy.get('.AT0fUR').click()
    //    .and('contain.text', 'Desktop Notifications')
    })
})
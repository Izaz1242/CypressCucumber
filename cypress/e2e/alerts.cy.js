describe('alerts handling', () => {
    //JS alert: It will have some text and an 'OK' button
    it('JS alert ', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.wait(4000)
      cy.get("button[onclick='jsAlert()']").click()
      
    })
  })
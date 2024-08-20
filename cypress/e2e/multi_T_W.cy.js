describe('MultiTab and MultiWindow', () => {
  it('Multitab', () => {
    cy.visit('https://www.letskodeit.com/practice')
    cy.get("#opentab").then(newTab =>{
      const hrefTab = newTab.prop('href')
      cy.visit(hrefTab)
      cy.url().should('include', '/courses')

      cy.get('#search').type('selenium')
      cy.get('button.find-course.search-course').click()
      cy.wait(4000)
    })
    cy.go('back')
  })
})
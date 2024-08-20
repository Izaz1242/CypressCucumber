describe('XPathLocator',()=>{
    it('find number of products',()=>{
        cy.intercept('https://www.olx.in/en-in');
        cy.get('input.search.Box.rui-owJ3W _1044D').click().type("ducati monster");
        cy.get('._3jHVg').click()
        cy.wait(5000)
    })
})
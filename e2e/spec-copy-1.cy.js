describe('Open Fixdigital url', () => {
  it('I can open url', () => {
    cy.visit('https://www.fixdigital.co.il/login');
    cy.click("input[id= 'UserName']")
    
  })
})
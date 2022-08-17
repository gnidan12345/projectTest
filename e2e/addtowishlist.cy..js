describe('Adding Item to wishlist', () => {
  it('I can add item to Wish List ', () => {
    cy.viewport(1920, 1080)
    cy.visit('www.rakuten.tv');
    cy.get("a[data-testid = 'login-menu-link']").click();

    cy.setCookie('Rp', 'a4946b0830ef7b6a6680b22aad62fbf29d493e1')

    cy.get("input[id = 'email']",  { timeout: 10000 })
    .should('be.visible')
    .click({force: true})
    .type('nicknamme2212@gmail.com'), { timeout: 30000 }


    cy.get("input[id = 'password']")
    .click(({force: true}))
    .type('Qwerty12345')


    cy.get("button[data-testid = 'primary-button']")
    .click(({force: true}))
 

  cy.get("input[data-testid = 'search-input']")
      .click()
      .type('Matrix')
      .type('{enter}')


      cy.get("img[data-testid = 'img-Matrix']")
      .should('be.visible')
      .click()

      cy.get("div[id='add-to-wishlist-button']")
      cy.click()
      
      cy.get("svg[id='CHECK']")
      .should('be.visible')


    })

})
describe('Search content on  RacutenTV', () =>  {
  it('I can search  ', () => {
      cy.viewport(1920, 1080)
      cy.visit('www.rakuten.tv');
      cy.setCookie('Rp', 'a4946b0830ef7b6a6680b22aad62fbf29d493e1')

      cy.get("input[data-testid = 'search-input']")
      .click()
      .type('Matrix')
      .type('{enter}')


      cy.get("img[data-testid = 'img-Matrix']")
      .should('be.visible')



      

    });

  });
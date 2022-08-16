// import { faker } from '@faker-js/faker';


describe('Signing up RacutenTV', () =>  {
  it('I can sign up', () => {
      cy.viewport(1920, 1080)
      cy.visit('www.rakuten.tv');
      // cy.get("button[id ='save']", { timeout: 10000 })
      // .should('be.visible')
      // .and('contain', 'Home')
    
      cy.get("a[data-testid = 'register-menu-link']").click();
      
      
      const faker = require('faker');
      const email = faker.internet.email();

      cy.get("input[id = 'email']",  { timeout: 10000 })
      .should('be.visible')
      .click({force: true})
      .type(email)

      cy.get("input[id = 'password']")
      .click(({force: true}))
      .type('Qwerty12345')

      cy.get("input[id = 'termsAndConditions']")
      .click(({force: true}))
     
      cy.get("button[data-testid = 'primary-button']")
      .click(({force: true}))



    
    
      
      
      

      
      
      // cy.get[title='Buscar']").type('something').type('{enter}')
      // cy.contains("The Beatles - Something - YouTube")
  
  });
});
describe('Signing up RacutenTV', () =>  {
  it('I can sign up', () => {
      cy.visit('www.rakuten.tv');
      cy.click('a[href = '/es/registrations/new']')
      
      // cy.get[title='Buscar']").type('something').type('{enter}')
      // cy.contains("The Beatles - Something - YouTube")
  
  });
});
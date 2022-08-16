describe('Testing something in Google', () =>  {
  it('I can search somithing', () => {
      cy.visit('https://google.com');
      cy.get("input[title='Buscar']").type('something').type('{enter}')
      cy.contains("The Beatles - Something - YouTube")
  
  });
});
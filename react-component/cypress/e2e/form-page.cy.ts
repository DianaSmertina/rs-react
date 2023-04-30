describe('The Form Page', () => {
  it('Empty values generate validations errors', () => {
    cy.visit('/form');
    cy.get('input[type="submit"]').click();
    cy.get('.form__errors').should('have.lengthOf', 3);
  });
  it('Create card when validation passes', () => {
    cy.visit('/form');
    cy.get('input[data-testid="dogName"]').type('Rex');
    cy.get('input[type="date"]').type('2030-05-27');
    const file = cy.get('input[data-testid="photo"]');
    console.log(file);
  });
});

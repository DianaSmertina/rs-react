describe('The Home Page', () => {
  it('open and close card successfully', () => {
    cy.visit('/');
    cy.contains('Rick Sanchez').click();
    cy.contains('Location:');
    cy.get('.card-modal__close').click();
    cy.contains('Location:').should('not.exist');
  });
  it('search works with valid value and there is opportunity to reset value', () => {
    cy.visit('/');
    cy.get('.search__search-bar').type('rick{enter}');
    cy.contains('Cowboy Rick');
    cy.get('.reset-btn').click();
    cy.contains('Cowboy Rick').should('not.exist');
  });
  it('show not found if search value is invalid', () => {
    cy.visit('/');
    cy.get('.search__search-bar').type('aaaaa{enter}');
    cy.contains('Characters not found');
  });
});

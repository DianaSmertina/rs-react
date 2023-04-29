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
    // cy.get('input[type="file"]').then((subject: JQuery<HTMLInputElement>) => {
    //   cy.fixture('file.png').then((fileContent) => {
    //     const file = new File([fileContent], 'file.png');
    //     const dataTransfer = new DataTransfer();
    //     dataTransfer.items.add(file);
    //     subject[0].files = dataTransfer.files;
    //   });
    // });

    // cy.get('input[type="file"]')
    //   .invoke('show')
    //   .selectFile({
    //     contents: Cypress.Buffer.from('file contents'),
    //     fileName: 'file.png',
    //     mimeType: 'image/png',
    //     lastModified: Date.now(),
    //   });
    const file = cy.get('input[data-testid="photo"]');
    console.log(file);
  });
});

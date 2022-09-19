describe('Test delete entity:', () => {
  it('Should delete entity', () => {
    cy.visit('/entities');

    cy.getByTestId(selectors.entityToEdit)
      .invoke('text')
      .then((textBeforeEdit) => {
        cy.editEntityById(1);
        cy.getByTestId(selectors.entityToEdit).should(
          'have.text',
          `${textBeforeEdit} edited`,
        );
      });
  });
});

export const selectors = {
  entityToEdit: 'row-entity-name-1',
};

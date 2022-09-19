describe('Test delete entity:', () => {
  it('Should delete entity', () => {
    cy.visit('/entities');

    cy.getByTestId(selectors.entityToDelete).should('exist');
    cy.deleteEntityById(1);
    cy.getByTestId(selectors.entityToDelete).should('not.exist');
  });
});

export const selectors = {
  entityToDelete: 'table-row-entity-id-1',
};

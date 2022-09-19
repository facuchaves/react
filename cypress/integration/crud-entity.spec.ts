describe('Test a complex path for crud', () => {
  //TODO Check if it's necesary check something with .should()
  it('Add and delete entity', () => {
    cy.visit('/entities');
    cy.addEntity();
    cy.deleteEntityById(100);
  });

  it('Add and edit entity', () => {
    cy.visit('/entities');
    cy.addEntity();
    cy.editEntityById(100);
  });

  it('Add, edit and delete entity', () => {
    cy.visit('/entities');
    cy.addEntity();
    cy.editEntityById(100);
    cy.deleteEntityById(100);
  });
});

export const selectors = {};

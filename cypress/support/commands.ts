// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getByTestId', (value) => {
  return cy.get(`[data-testid=${value}]`);
});

Cypress.Commands.add('addEntity', () => {
  cy.getByTestId(selectors.openModalButton).click();
  cy.getByTestId(selectors.fieldName).type('Some Name');
  cy.getByTestId(selectors.saveEntityButton).click();
});

Cypress.Commands.add('deleteEntityById', (entityToDeleteId) => {
  cy.getByTestId(
    `${selectors.openDeleteDialogButton}${entityToDeleteId}`,
  ).click();
  cy.getByTestId(selectors.agreeDeleteDialogButton).click();
});

Cypress.Commands.add('editEntityById', (entityToEditId) => {
  cy.getByTestId(`${selectors.editEntityButton}${entityToEditId}`).click();
});

export const selectors = {
  openModalButton: 'open_add_entity_modal_button_id',
  saveEntityButton: 'save_entity_button_id',
  fieldName: 'name_test_id',
  openDeleteDialogButton: 'button-delete-entity-id-',
  agreeDeleteDialogButton: 'agree_delete_entity_dialog_button',
  editEntityButton: 'button-edit-entity-id-',
};

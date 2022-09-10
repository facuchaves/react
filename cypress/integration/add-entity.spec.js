describe('Test add new entity:', () => {
  describe('Add entity tests', () => {
    it('Should open and close modal', () => {
      cy.visit('/entities');

      cy.get(selectors.modalAddEntity).should('not.exist');
      cy.get(selectors.openModalButton).click();
      cy.get(selectors.modalAddEntity).should('exist');
      cy.get(selectors.modalAddEntity).should('be.visible');
      cy.get(selectors.closeModalAddEntity).click();
      cy.get(selectors.modalAddEntity).should('not.exist');
    });

    it('Should validate when try to save empty entity ', () => {
      cy.visit('/entities');

      cy.get(selectors.openModalButton).click();
      cy.get(selectors.saveEntityButton).click();
      cy.get(selectors.errorMessage).should('exist');
    });

    it('Should close modal and show success message on save', () => {
      cy.visit('/entities');

      cy.get(selectors.openModalButton).click();
      cy.get(selectors.fieldName).type('Some Name');
      cy.get(selectors.saveEntityButton).click();
      cy.get(selectors.modalAddEntity).should('not.exist');
      cy.get(selectors.successAlert).should('exist');
      cy.get(selectors.successAlert).should('be.visible');
    });
  });
});

export const selectors = {
  openModalButton: '[data-testid="open_add_entity_modal_button_id"]',
  closeModalAddEntity: '[data-testid="close_modal_add_entity_button_id"]',
  modalAddEntity: '[data-testid="modal_add_entity_test_id"]',
  saveEntityButton: '[data-testid="save_entity_button_id"]',
  errorMessage: '[data-testid="error_message_id_0"]',
  fieldName: '[data-testid="name_test_id"]',
  successAlert: '[data-testid="success_alert_test_id"]',
};

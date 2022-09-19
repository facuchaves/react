describe('Test add new entity:', () => {
  describe('Add entity tests', () => {
    it('Should open and close modal', () => {
      cy.visit('/entities');

      cy.getByTestId(selectors.modalAddEntity).should('not.exist');
      cy.getByTestId(selectors.openModalButton).click();
      cy.getByTestId(selectors.modalAddEntity).should('exist');
      cy.getByTestId(selectors.modalAddEntity).should('be.visible');
      cy.getByTestId(selectors.closeModalAddEntity).click();
      cy.getByTestId(selectors.modalAddEntity).should('not.exist');
    });

    it('Should validate when try to save empty entity ', () => {
      cy.visit('/entities');

      cy.getByTestId(selectors.openModalButton).click();
      cy.getByTestId(selectors.saveEntityButton).click();
      cy.getByTestId(selectors.errorMessage).should('exist');
    });

    it('Should close modal and show success message on save', () => {
      cy.visit('/entities');

      cy.getByTestId(selectors.openModalButton).click();
      cy.getByTestId(selectors.fieldName).type('Some Name');
      cy.getByTestId(selectors.saveEntityButton).click();
      cy.getByTestId(selectors.modalAddEntity).should('not.exist');
      cy.getByTestId(selectors.successAlert).should('exist');
      cy.getByTestId(selectors.successAlert).should('be.visible');
    });
  });
});

export const selectors = {
  openModalButton: 'open_add_entity_modal_button_id',
  closeModalAddEntity: 'close_modal_add_entity_button_id',
  modalAddEntity: 'modal_add_entity_test_id',
  saveEntityButton: 'save_entity_button_id',
  errorMessage: 'error_message_id_0',
  fieldName: 'name_test_id',
  successAlert: 'success_alert_test_id',
};

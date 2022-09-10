describe('Test table of entities:', function () {
  describe('Query tests', () => {
    it.skip('Click one entity of table should redirect to a entity detail page', () => {
      cy.visit('/entities');

      const firstEntity = cy.get(selectors.firstEntity);

      firstEntity.invoke('attr', 'data-entityid').then((testEntityId) => {
        cy.get(selectors.firstEntity).click();

        cy.location().should((loc) => {
          expect(loc.pathname).to.equals('/entity/' + testEntityId);
        });
      });
    });
  });
});

export const selectors = {
  firstIssue: '[data-testid="row-isssue-id"]:first',
};

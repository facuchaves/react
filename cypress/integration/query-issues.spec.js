// simple-first.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test table of issues:', function() {
    // Step 1: setup the application state
    // beforeEach(function() {
    //   cy.visit('/');
    // });
    
    describe('Query tests', () => {
      it('Click one issue of table should redirect to a issue detail page', () => {
        cy.visit('/issues');
        // Step 2: Take an action (Sign in)
        // cy.get(selectors.usernameInput).type("DUMMY_USERNAME");
        // cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
        // cy.get(selectors.signInSignInButton).contains('Sign In').click();
        // cy.get(selectors.googleButton).contains('Sign In').click();
  
        const firstIssue = cy.get(selectors.firstIssue);
        
        firstIssue.invoke('attr', 'test_issue_id').then( testIssueId => {
          cy.get(selectors.firstIssue).click();
          
          // Step 3: Make an assertion (Check for sign-out text)
          //   cy.get(selectors.signOutButton).contains('Sign Out');
          // cy.title().should('eq','Google');
          cy.location().should((loc) => {
            expect(loc.pathname).to.equals('/issue/'+testIssueId)
          })
        })



      });
    });
  
  });
  export const selectors = {
    // Auth component classes
    // usernameInput: '[data-test="username-input"]',
    // signInPasswordInput: '[data-test="sign-in-password-input"]',
    // signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    // signOutButton: '[data-test="sign-out-button"]',
    firstIssue: '[test_id="row-isssue-id"]:first',
  }
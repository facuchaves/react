// simple-first.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Simple first test:', function() {
    // Step 1: setup the application state
    beforeEach(function() {
      cy.visit('/');
    });
    
    describe('Load page:', () => {
      it('button with text', () => {
        // Step 2: Take an action (Sign in)
        // cy.get(selectors.usernameInput).type("DUMMY_USERNAME");
        // cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
        // cy.get(selectors.signInSignInButton).contains('Sign In').click();
        // cy.get(selectors.googleButton).contains('Sign In').click();
  

        // Step 3: Make an assertion (Check for sign-out text)
        //   cy.get(selectors.signOutButton).contains('Sign Out');
        cy.title().should('eq','Google');

      });
    });
  
  });
  export const selectors = {
    // Auth component classes
    // usernameInput: '[data-test="username-input"]',
    // signInPasswordInput: '[data-test="sign-in-password-input"]',
    // signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    // signOutButton: '[data-test="sign-out-button"]',
    divWithArgentinaText: '.uU7dJb'
  }
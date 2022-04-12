/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Auth routes | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    cy.visit('/');
    localStorage.clear();
  });

  it("Should redirect to '/login' if user isn't authenticated", () => {
    cy.url().should('include', '/login');
  });

  it("Should redirect to '/school-admin' if School Admin is authenticated", () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/local`).as('login');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_ADMIN_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_ADMIN_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then(() => {
      cy.url().should('include', '/school-admin');
    });
  });

  it("Should redirect to '/login' if role hasn't permissions to visit a path", () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/local`).as('login');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_ADMIN_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_ADMIN_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then(() => {
      cy.url().should('include', '/school-admin');
      cy.visit('/student');
      cy.url().should('include', '/login');
    });
  });

  it("Shows 404 when route doesn't match", () => {
    cy.findByText(/nie znaleziono/i).should('not.exist');
    cy.visit(`/randomRoute-${Math.random() * 10}`);
    cy.findByText(/nie znaleziono/i).should('be.visible');
  });

  it("Checks does 'Powrót' work well", () => {
    cy.visit(`/randomRoute-${Math.random() * 10}`);
    cy.findByPlaceholderText(/login/i).should('not.exist');
    cy.findByText(/powrót/i)
      .should('be.visible')
      .click();
    cy.findByPlaceholderText(/login/i).should('exist');
  });

  it('Checks does system remember who is logged in', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/local`).as('login');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_ADMIN_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_ADMIN_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then(() => {
      cy.wait(2000);
      assert.isNotNull(localStorage.getItem('role'));
      assert.equal(localStorage.getItem('role'), 'School Admin');
      cy.url().should('include', '/school-admin');
      cy.visit('/');
      cy.url().should('include', '/school-admin');
    });
  });
});

module.exports = {};

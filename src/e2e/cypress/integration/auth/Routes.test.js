/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe('Auth routes | Schoola App', () => {
  it("Should redirect to '/login' if user isn't authenticated", () => {
    cy.visit('/');
    cy.url().should('include', '/login');
  });

  it("Should redirect to '/school-admin' if School Admin is authenticated", () => {
    cy.intercept('POST', `https://schoola-strapi.herokuapp.com/api/auth/local`).as('login');
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type('test_admin');
    cy.findByPlaceholderText(/hasło/i).type('Admin321!');
    cy.findByText(/zaloguj/i).click();
    // eslint-disable-next-line testing-library/await-async-utils
    cy.wait('@login');
    cy.url().should('include', '/school-admin');
  });

  it("Should redirect to '/login' if role hasn't permissions to visit a path", () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/local`).as('login');
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type('test_admin');
    cy.findByPlaceholderText(/hasło/i).type('Admin321!');
    cy.findByText(/zaloguj/i).click();
    cy.wait('@login').then(() => {
      cy.url().should('include', '/school-admin');
      cy.visit('/student');
      cy.url().should('include', '/login');
    });
  });

  it("Shows 404 when route doesn't match", () => {
    cy.visit('/');
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
});

module.exports = {};

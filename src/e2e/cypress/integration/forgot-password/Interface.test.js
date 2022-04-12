/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Forgot password (interface) | ${Cypress.env('APP_NAME')}`, () => {
  before(() => {
    localStorage.clear();
    cy.visit('/forgot-password');
  });

  it('Checks has view info about localization', () => {
    cy.findByText('Zresetuj hasło jednym kliknięciem!').should('be.visible');
  });

  it('Checks login CTA', () => {
    cy.findByText('Masz już konto?').should('be.visible');
    cy.url().should('include', '/forgot-password');
    cy.findByText('Masz już konto?').click();
    cy.url().should('not.include', '/forgot-password');
    cy.url().should('include', '/login');
    cy.findByText('Masz już konto?').should('not.exist');
  });

  it('Checks has form valid validation', () => {
    cy.visit('/forgot-password');
    // Typing wrong email
    cy.findByText(/podaj prawidłowy adres email/i).should('not.exist');
    cy.findByPlaceholderText(/podaj swój email/i).type('sdakosakdaoksdoakd');
    cy.get('button').click();
    cy.findByText(/podaj prawidłowy adres email/i)
      .should('exist')
      .should('be.visible');
    // Typing correct email
    cy.findByPlaceholderText(/podaj swój email/i)
      .clear()
      .type('correct@email.com');
    cy.findByText(/wysyłanie/i).should('not.exist');
    cy.findByText(/nie znaleziono/i).should('not.exist');
    cy.get('button').click();
    cy.findByText(/wysyłanie/i)
      .should('exist')
      .should('be.visible');
    cy.findByText(/podaj prawidłowy adres email/i).should('not.exist');
    cy.findByText(/nie znaleziono/i).should('exist');
  });
});

module.exports = {};

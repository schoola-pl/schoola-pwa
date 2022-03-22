/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

const cypressEmail = `${Math.round(Math.random() * 100)}@cypress.test`;
describe(`Forgot password (send) | ${Cypress.env('APP_NAME')}`, () => {
  before(() => {
    localStorage.clear();
    cy.visit('/forgot-password');
  });

  it('Checks does form send valid request', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/forgot-password`).as('fp');
    cy.findByPlaceholderText('Podaj swój email').type(cypressEmail);
    cy.findByText('Resetuj hasło').click();
    cy.wait('@fp').then((xhr) => {
      expect(xhr.request.body).to.deep.equal({
        email: cypressEmail
      });
      expect(xhr.response.statusCode).to.equal(400);
    });
    cy.findByText('Nie znaleziono takiego adresu!').should('be.visible');
  });
});

module.exports = {};

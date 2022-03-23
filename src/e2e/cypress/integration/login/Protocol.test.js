/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Login protocols | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.removeItem('jwt');
    cy.visit('/');
  });

  it('Checks does form send request to the API', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_ADMIN_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_ADMIN_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then((interception) => {
      assert.isNotNull(interception.response.body);
    });
  });

  it('Checks is form request to the API valid', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_ADMIN_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_ADMIN_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then((interception) => {
      assert.deepEqual(interception.request.body, {
        identifier: Cypress.env('PROFILE_ADMIN_LOGIN'),
        password: Cypress.env('PROFILE_ADMIN_PASSWORD')
      });
    });
  });
});

module.exports = {};

/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

const randomUser = {
  login: `cypress-user-${Math.random() * 1000}`,
  password: `cypress-password-${Math.random() * 1000}`
};

const schoolAdmin = {
  login: 'test_admin',
  password: 'Admin321!'
};

describe('Login protocols | Schoola App', () => {
  beforeEach(() => {
    localStorage.removeItem('jwt');
    cy.visit('/');
  });

  it('Checks does form send request to the API', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(schoolAdmin.login);
    cy.findByPlaceholderText(/hasło/i).type(schoolAdmin.password);
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then((interception) => {
      assert.isNotNull(interception.response.body);
    });
  });

  it('Checks is form request to the API valid', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(schoolAdmin.login);
    cy.findByPlaceholderText(/hasło/i).type(schoolAdmin.password);
    cy.findByText('Zaloguj się').click();
    cy.wait('@login').then((interception) => {
      assert.deepEqual(interception.request.body, {
        identifier: schoolAdmin.login,
        password: schoolAdmin.password
      });
    });
  });
});

module.exports = {};

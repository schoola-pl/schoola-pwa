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

  it('Should has right form validation', () => {
    cy.findByText(/podaj poprawn/i).should('not.exist');
    cy.findByPlaceholderText(/login/i).should('exist').type(' ');
    cy.findByPlaceholderText(/hasło/i).should('exist').type(' ');
    cy.findByText(/zaloguj się/i)
      .should('exist')
      .click();
    cy.findAllByText(/podaj poprawn/i).should('exist');
    cy.findByPlaceholderText(/login/i).type(randomUser.login);
    cy.findByText(/podaj poprawn/i).should('exist');
    cy.findByPlaceholderText(/hasło/i).type(randomUser.password);
    cy.findByText(/podaj poprawn/i).should('not.exist');
  });

  it("Should return error when user doesn't exist", () => {
    cy.findByText(/spróbuj ponownie/i).should('not.exist');
    cy.findByPlaceholderText(/login/i).should('exist').type(randomUser.login);
    cy.findByPlaceholderText(/hasło/i).should('exist').type(randomUser.password);
    cy.findByText(/zaloguj się/i)
      .should('exist')
      .click();
    cy.findByText(/spróbuj ponownie/i).should('exist');
  });

  it('Checks does form send request to the API', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(schoolAdmin.login);
    cy.findByPlaceholderText(/hasło/i).type(schoolAdmin.password);
    cy.findByText(/zaloguj się/i).click();
    cy.wait('@login').then((interception) => {
      assert.isNotNull(interception.response.body);
    });
  });

  it('Checks does form request to the API is valid', () => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`, { user: { TextRole: 'School Admin' } }).as('login');
    cy.findByPlaceholderText(/login/i).type(schoolAdmin.login);
    cy.findByPlaceholderText(/hasło/i).type(schoolAdmin.password);
    cy.findByText(/zaloguj się/i).click();
    cy.wait('@login').then((interception) => {
      assert.deepEqual(interception.request.body, {
        identifier: schoolAdmin.login,
        password: schoolAdmin.password
      });
    });
  });
});

module.exports = {};

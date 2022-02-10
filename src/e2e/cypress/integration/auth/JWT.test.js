/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

const token = 'jwt';

describe('Auth JWT | Schoola App', () => {
  beforeEach(() => {
    cy.intercept(`${Cypress.env('API_URL')}/auth/local`).as('login');
    cy.intercept(`${Cypress.env('API_URL')}/users/me`).as('get-me');
    cy.visit('/');
    localStorage.removeItem(token);
    assert.isNull(localStorage.getItem(token));
    cy.findByPlaceholderText('Login').type('test_admin');
    cy.findByPlaceholderText('Hasło').type('Admin321!');
    cy.get('button').first().click();
  });

  it('Checks is JWT correctly created', () => {
    cy.wait(['@login', '@get-me']).then(() => {
      assert.isNotNull(localStorage.getItem(token));
    });
  });

  it('Checks does JWT is valid', () => {
    cy.wait(['@login', '@get-me']).then(() => {
      const jwt = localStorage.getItem(token);
      cy.request({
        url: `${Cypress.env('API_URL')}/users/me`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then((response) => {
        // eslint-disable-next-line jest/valid-expect
        expect(response.status).to.eq(200);
      });
    });
  });

  it('Checks will API throw new error when JWT is wrong', () => {
    cy.wait(['@login', '@get-me']).then(() => {
      const invalidJWT = `TestJWTTokenForCypressTestNumber${Math.random() * 1000}`;
      cy.request({
        url: `${Cypress.env('API_URL')}/users/me`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${invalidJWT}`
        },
        failOnStatusCode: false
      }).then((response) => {
        // eslint-disable-next-line jest/valid-expect
        expect(response.status).to.eq(401);
      });
    });
  });
});

module.exports = {};

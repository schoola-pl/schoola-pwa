/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import { hexToRGB } from '../../../../helpers/colors';

const colors = {
  inactive: '#CCCFDC',
  active: '#55AB67',
  error: '#DA6864'
};

const login = {
  username: '[data-cy=login-username]',
  password: '[data-cy=login-password]',
  button: '[data-cy=login-button]'
};

describe('Login interface | Schoola App', () => {
  before(() => {
    localStorage.removeItem('jwt');
    cy.visit('/');
  });

  it('Checks if the login interface is displayed', () => {
    cy.findByText('schoola').should('be.visible');
    cy.get(login.username).should('be.visible');
    cy.get(login.password).should('be.visible');
    cy.get(login.button).should('be.visible');
  });

  it('Checks have inputs right border color', () => {
    // Normal inputs
    cy.get(login.username).should('have.css', 'border-color', hexToRGB(colors.inactive));
    cy.get(login.password).should('have.css', 'border-color', hexToRGB(colors.inactive));
    // // Focused inputs
    cy.get(login.username).click().type('o').should('have.css', 'border-color', hexToRGB(colors.active));
    cy.get(login.password).click().type('o').should('have.css', 'border-color', hexToRGB(colors.active));
    // Gets error border color
    cy.get(login.button).click();
    // ----------------------
    cy.get(login.username).should('not.have.css', 'border-color', hexToRGB(colors.inactive));
    cy.get(login.password).should('not.have.css', 'border-color', hexToRGB(colors.inactive));
    cy.get(login.username).should('have.css', 'border-color', hexToRGB(colors.error));
    cy.get(login.password).should('have.css', 'border-color', hexToRGB(colors.error));
  });

  it('Checks does button react with errors', () => {
    cy.get(login.button).should('not.have.css', 'border-color', hexToRGB(colors.error));
    cy.get(login.button).click().should('have.text', 'Zaloguj się');
    cy.get(login.button).should('not.have.css', 'border-color', hexToRGB(colors.error));

    cy.get(login.username).type('daadskodsaodksao');
    cy.get(login.password).type('sdffsdsfdfdfdsfs');
    cy.get(login.button).click();
    cy.get(login.button).should('not.have.css', 'background-color', hexToRGB(colors.error));
    cy.get(login.button).click().should('have.text', 'Spróbuj ponownie!');
  });
});

module.exports = {};

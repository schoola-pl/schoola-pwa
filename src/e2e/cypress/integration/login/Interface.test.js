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
    localStorage.clear();
    cy.visit('/');
  });

  it('Checks if the login interface is displayed correctly', () => {
    cy.findByText('Zaloguj się na swoje konto!').should('be.visible');
    cy.get(login.username).should('be.visible');
    cy.get(login.password).should('be.visible');
    cy.get(login.button).should('be.visible');
  });

  it('Checks forgot-password CTA', () => {
    cy.findByText('Nie pamiętasz hasła?').should('be.visible');
    cy.url().should('include', '/login');
    cy.findByText('Nie pamiętasz hasła?').click();
    cy.url().should('not.include', '/login');
    cy.url().should('include', '/forgot-password');
    cy.findByText('Nie pamiętasz hasła?').should('not.exist');
  });

  it('Checks is button & inputs have states', () => {
    cy.visit('/login');
    // Normal inputs
    cy.get(login.username).should('have.css', 'border-color', hexToRGB(colors.inactive));
    cy.get(login.password).should('have.css', 'border-color', hexToRGB(colors.inactive));
    // Inactive button
    cy.get(login.button).should('not.have.css', 'opacity', '1');
    cy.get(login.button).should('have.css', 'opacity', '0.6');
    // Focused
    cy.get(login.username).click().type('0oooo').should('have.css', 'border-color', hexToRGB(colors.active));
    cy.get(login.password).click().type('0oooooooo').should('have.css', 'border-color', hexToRGB(colors.active));
  });

  it('Checks does form reacts with errors', () => {
    cy.get(login.username).clear();
    cy.get(login.password).clear();
    cy.findByText('Podano niepoprawny login lub hasło!').should('not.exist');
    const loginValue = `Cypress-test-login-${Math.round(Math.random() * 1000)}`;
    const passValue = `Cypress-test-password-${Math.round(Math.random() * 1000)}`;
    cy.get(login.username).type(loginValue);
    cy.get(login.password).type(passValue);
    cy.get(login.button).click();
    cy.findByText('Podano niepoprawny login lub hasło!').should('exist');
    cy.get(login.username).should('have.value', loginValue);
    cy.get(login.password).should('have.value', passValue);
  });
});

module.exports = {};

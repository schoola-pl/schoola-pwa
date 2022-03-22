/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Student interface | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type('test_user');
    cy.findByPlaceholderText(/hasło/i).type('Kuba2007!');
    cy.findByText('Zaloguj się').click();
    cy.viewport(450, 750);
  });

  const checkRoute = (prev, current) => {
    cy.get(`a[data-testid=${current}]`).should('be.visible').click();
    cy.url().should('not.include', `/${prev}`);
    cy.url().should('include', `/${current}`);
  };

  it('Checks responsibility & navigation', () => {
    cy.viewport(1250, 750);
    cy.findByText(/dostęp do naszej aplikacji/i).should('exist');
    cy.viewport(450, 750);
    cy.findByText(/dostęp do naszej aplikacji/i).should('not.exist');
    cy.findByText('Zaloguj się').should('not.exist');
    cy.url().should('include', '/feed');
    cy.get('a[data-testid=feed]').should('be.visible');
    checkRoute('feed', 'profile');
    checkRoute('profile', 'settings');
    checkRoute('settings', 'appointment');
    checkRoute('appointment', 'feed');
  });

  it('Checks does notification buttons work', () => {
    cy.findByText('Powiadomienia').should('not.be.visible');
    cy.findByTestId('notification-btn').click();
    cy.findByText('Powiadomienia').should('be.visible');
  });

  it('Checks does update button work', () => {
    cy.findByTestId('app-loader').should('not.exist');
    cy.findByTestId('reload-btn').click();
    cy.findByTestId('app-loader').should('exist').should('be.visible');
  });

  it('Checks does logo work like redirect', () => {
    checkRoute('feed', 'profile');
    cy.findByTestId('logo').should('be.visible').click();
    cy.url().should('include', '/feed');
  });
});

module.exports = {};

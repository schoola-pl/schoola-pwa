/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Student's settings | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_USER_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.viewport(450, 750);
    cy.get(`a[data-testid="settings"]`).should('be.visible').click();
  });

  it('Checks are all things on the right places & logout protocol', () => {
    cy.findByText('Zmień e-mail').should('be.visible');
    cy.findByText('Zmień hasło').should('be.visible');
    assert.isNotNull(localStorage.getItem('jwt'));
    cy.findByText('Wyloguj się')
      .should('exist')
      .click()
      .then(() => {
        assert.isNull(localStorage.getItem('jwt'));
      });
  });

  const changeEmail = (email) => {
    cy.findByTestId('settings-email-input').clear().type(email);
    cy.findByTestId('settings-email-btn').should('not.be.disabled').should('have.css', 'opacity', '1').click();
  };

  it('Checks can user change e-mail', () => {
    cy.findByTestId('settings-email-btn').should('be.visible').should('have.css', 'opacity', '0.6');
    cy.findByTestId('settings-email-input').should('be.visible');
    // Invalid e-mail
    changeEmail('ksd.odskos@ds');
    cy.findByText(/podaj poprawny/i).should('be.visible');
    // Valid e-mail
    changeEmail(`cypress${Math.round(Math.random() * 1000)}@cypress.io`);
    cy.findByTestId('settings-email-btn').should('have.css', 'opacity', '0.6');
    cy.findByText(/podaj poprawny/i).should('not.exist');
  });

  it('Checks can user change password', () => {
    cy.findByTestId('settings-pass-btn').should('be.visible').should('have.css', 'opacity', '0.6');
    cy.findByText(/stare hasło jest nieprawidłowe/i).should('not.exist');
    // Wrong current password
    cy.findByTestId('settings-pass-input-current').type(Cypress.env('PROFILE_USER_PASSWORD') + Math.round(Math.random() * 1000));
    cy.findByTestId('settings-pass-input-new').type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByTestId('settings-pass-input-conf-new').type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByTestId('settings-pass-btn').should('not.be.disabled').should('have.css', 'opacity', '1').click();
    cy.findByText(/stare hasło jest nieprawidłowe/i).should('be.visible');
    // Correct current password & wrong new password
    // - Are not the same
    cy.findByTestId('settings-pass-input-current').clear().type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByTestId('settings-pass-input-new')
      .clear()
      .type(Cypress.env('PROFILE_USER_PASSWORD') + 'abc');
    cy.findByTestId('settings-pass-input-conf-new')
      .clear()
      .type(Cypress.env('PROFILE_USER_PASSWORD') + 'cba');
    cy.findByTestId('settings-pass-btn').should('not.be.disabled').should('have.css', 'opacity', '1').click();
    cy.findByText(/nie jest takie samo/i).should('be.visible');
    // - Are wrong
    cy.findByTestId('settings-pass-input-new').clear().type('kuba22');
    cy.findByTestId('settings-pass-input-conf-new').clear().type('kuba22');
    cy.findByTestId('settings-pass-btn').should('not.be.disabled').should('have.css', 'opacity', '1').click();
    cy.findByText(/sprawdź, czy nowe hasło/i).should('be.visible');
    // Correct passwords
    cy.findByTestId('settings-pass-input-new').clear().type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByTestId('settings-pass-input-conf-new').clear().type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByTestId('settings-pass-btn').should('not.be.disabled').should('have.css', 'opacity', '1').click();
    cy.findByTestId('settings-pass-btn').should('have.css', 'opacity', '0.6');
  });
});

module.exports = {};

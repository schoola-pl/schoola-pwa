/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
const { hexToRGB } = require('../../../../helpers/colors');

describe(`Forgot password (restart) | ${Cypress.env('APP_NAME')}`, () => {
  before(() => {
    localStorage.clear();
    cy.visit('/forgot-password');
  });

  it("Checks does app reacts to 'code' param", () => {
    cy.findByText('Zresetuj hasło jednym kliknięciem!').should('be.visible');
    cy.visit('/forgot-password?code=12345');
    cy.findByText('Zresetuj hasło jednym kliknięciem!').should('not.exist');
    cy.findByText(/dobre hasło składa się z/i)
      .should('exist')
      .should('be.visible');
  });

  it('Checks has from valid validation', () => {
    cy.get('button').contains('Zmień hasło').should('not.have.css', 'opacity', '1');
    cy.get('button').contains('Zmień hasło').should('have.css', 'opacity', '0.6');
    cy.findAllByLabelText(/nowe hasło/i).should('be.visible');
    cy.findAllByLabelText(/nowe hasło/i)
      .first()
      .type('12345');
    cy.get('button').contains('Zmień hasło').should('have.css', 'opacity', '0.6');
    cy.findAllByLabelText(/nowe hasło/i)
      .last()
      .type('12345');
    cy.get('button').contains('Zmień hasło').should('not.have.css', 'opacity', '0.6');
    cy.get('button').contains('Zmień hasło').should('have.css', 'opacity', '1');
    cy.get('button').contains('Zmień hasło').click();
    cy.findAllByLabelText(/nowe hasło/i)
      .first()
      .should('have.css', 'border-color', hexToRGB('#DA6864'));
    cy.findByText(/hasło nie spełnia warunków/i)
      .should('exist')
      .should('be.visible');
    cy.findAllByLabelText(/nowe hasło/i)
      .first()
      .clear()
      .type('Kuba12345!');
    cy.findByText(/hasło nie spełnia warunków/i).should('not.exist');
    cy.get('button').contains('Zmień hasło').click();
    cy.findByText(/hasła nie są takie same/i)
      .should('exist')
      .should('be.visible');
    cy.findAllByLabelText(/nowe hasło/i)
      .last()
      .clear()
      .type('Kuba12345!');
    cy.get('button').contains('Zmień hasło').click();
    cy.findByText(/hasła nie są takie same/i).should('not.exist');
    cy.get('button')
      .contains(/zły token/i)
      .should('not.have.css', 'opacity', '1');
    cy.get('button')
      .contains(/zły token/i)
      .should('have.css', 'opacity', '0.6');
    cy.findByText(/zły token/i)
      .should('exist')
      .should('be.visible');
  });

  it('Checks does form send valid request', () => {
    cy.visit('/forgot-password?code=12345');
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth/reset-password`).as('rp');
    cy.findAllByLabelText(/nowe hasło/i)
      .first()
      .type('Kuba12345!');
    cy.findAllByLabelText(/nowe hasło/i)
      .last()
      .type('Kuba12345!');
    cy.get('button').click();
    cy.wait('@rp').then((xhr) => {
      console.log(xhr.request);
      expect(xhr.request.body).to.deep.equal({
        code: '12345',
        password: 'Kuba12345!',
        passwordConfirmation: 'Kuba12345!'
      });
      expect(xhr.response.statusCode).to.equal(400);
    });
  });
});

module.exports = {};

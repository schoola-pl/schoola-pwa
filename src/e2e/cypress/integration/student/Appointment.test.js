/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

const { format } = require('date-fns');
const { addDays } = require('../../../../helpers/date');
import pl from 'date-fns/locale/pl';
import envHours from 'assets/globals/working-hours';

describe(`Student's appointment | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_USER_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.viewport(450, 750);
    cy.findByTestId('appointment').should('be.visible').click();
  });

  let chosenHour;
  let preparedDate = addDays(1);
  it('Checks can user book a meeting', () => {
    cy.findByTestId('appointment-wrapper').should('be.visible').should('contain', 'Aby kontynuować, wybierz termin w kalendarzu!');
    if (preparedDate.getDay() === 6) {
      preparedDate = addDays(3);
    } else if (preparedDate.getDay() === 0) {
      preparedDate = addDays(2);
    }
    const formattedDate = format(preparedDate, 'd MMMM yyyy', { locale: pl });
    cy.findByLabelText(formattedDate).click();
    cy.findByTestId('appointment-wrapper').should('be.visible').should('not.contain', 'Aby kontynuować, wybierz termin w kalendarzu!');
    cy.findByTestId('appointment-wrapper').should('be.visible').should('contain', 'Najpierw wybierz psychologa!');
    cy.findByTestId('psycho-select').select(1);
    cy.findByTestId('appointment-wrapper').should('be.visible').should('not.contain', 'Najpierw wybierz psychologa!');
    cy.findByTestId('appointment-send').should('not.exist');
    cy.wait(1000);
    chosenHour = envHours[Math.floor((Math.random() * envHours.length) | 0)];
    cy.get('[data-testid="appointment-hours"]').then(($els) => {
      let isFound = false;
      let buffer = '';
      $els.contents().each((index, el) => {
        if (el.textContent === chosenHour) {
          isFound = true;
        } else buffer = el.textContent;
      });
      if (!isFound) chosenHour = buffer;
      cy.findByTestId(`appointment-hour-${buffer || chosenHour}`).click();
      cy.findByTestId('appointment-send').should('exist').should('be.visible').click();
    });
  });

  it('Checks is chosen hour not available', () => {
    const formattedDate = format(preparedDate, 'd MMMM yyyy', { locale: pl });
    cy.findByLabelText(formattedDate).click();
    cy.findByTestId('psycho-select').select(1);
    cy.findByTestId(`appointment-hour-${chosenHour}`).should('not.exist');
  });
});

module.exports = {};

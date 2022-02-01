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

const student = {
  login: 'test_student',
  password: 'pChQEjGmkYelXZ9omE4HA'
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

  it('Should give access to the valid user (School Admin)', () => {
    cy.get(`[data-cy=admin-view]`).should('not.exist');
    cy.findByText(/zaloguj się/i).should('exist');
    cy.findByPlaceholderText(/login/i).should('exist').type(schoolAdmin.login);
    cy.findByPlaceholderText(/hasło/i).should('exist').type(schoolAdmin.password);
    cy.findByText(/zaloguj się/i).click();
    cy.get(`[data-cy=admin-view]`).should('exist');
  });

  it('Should give access to the valid user (Student)', () => {
    cy.get(`[data-cy=student-view]`).should('not.exist');
    cy.findByText(/zaloguj się/i).should('exist');
    cy.findByPlaceholderText(/login/i).should('exist').type(student.login);
    cy.findByPlaceholderText(/hasło/i).should('exist').type(student.password);
    cy.findByText(/zaloguj się/i).click();
    cy.get(`[data-cy=student-view]`).should('exist');
  });
});

module.exports = {};

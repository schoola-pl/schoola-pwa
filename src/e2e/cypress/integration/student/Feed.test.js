/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Student's feed | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type(Cypress.env('PROFILE_USER_LOGIN'));
    cy.findByPlaceholderText(/hasło/i).type(Cypress.env('PROFILE_USER_PASSWORD'));
    cy.findByText('Zaloguj się').click();
    cy.viewport(450, 750);
  });

  const doesPostExist = () => {
    cy.wait(1000);
    const record = cy.findAllByTestId('post-wrapper').first().should('exist').should('be.visible');
    record.should('contain', 'Test post');
  };

  const writeComment = (message) => {
    cy.findAllByTestId('comments-input').first().type(message);
    cy.findAllByTestId('comments-send').first().click();
    cy.findAllByTestId('comments-section').first().should('contain', message);
  };

  it('Checks can user post on the feed', () => {
    cy.findByTestId('feed-wrapper').should('exist');
    cy.findByTestId('feed-input').should('be.visible').type('Test post');
    cy.findByTestId('feed-send').click();
    doesPostExist();
  });

  it('Checks can user add comment in post', () => {
    cy.findByTestId('comments-section').should('not.exist');
    cy.findAllByTestId('post-comments-btn').first().click();
    writeComment('Test comment');
    cy.findByTestId('comments-section').should('be.visible');
  });

  it('Checks do counters work', () => {
    doesPostExist();
    // Comments counter
    cy.findAllByTestId('post-comments-btn').first().should('have.attr', 'data-comments-count', '1');
    // Likes counter
    cy.findAllByTestId('post-likes').first().findByRole('button').click();
    cy.findAllByTestId('post-likes').first().should('contain', '1');
    // App reload
    cy.findByTestId('reload-btn').click();
    // Again check does counter work
    cy.findAllByTestId('post-likes').first().should('contain', '1');
    // Clean up after test
    cy.findAllByTestId('post-menu').first().click();
    cy.findAllByTestId('post-menu-delete').first().click();
  });
});

module.exports = {};

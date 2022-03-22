/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

describe(`Student's feed | ${Cypress.env('APP_NAME')}`, () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('/');
    cy.findByPlaceholderText(/login/i).type('test_user');
    cy.findByPlaceholderText(/hasło/i).type('Cypress123!');
    cy.findByText('Zaloguj się').click();
    cy.viewport(450, 750);
  });

  after(() => {
    cy.findByTestId('feed-post-test_user-menu').click();
    cy.findByTestId('feed-post-test_user-menu-delete').click();
  });

  const doesPostExist = () => {
    const record = cy.findByTestId('feed-post-test_user').should('exist').should('be.visible');
    record.should('contain', 'Test post');
  };

  const writeComment = (message) => {
    cy.findByTestId('feed-post-comments-input').type(message);
    cy.findByTestId('feed-post-comments-send').click();
    cy.findByTestId('comments-section').should('contain', message);
  };

  it('Checks does user can post on the feed', () => {
    cy.findByTestId('feed-wrapper').should('exist');
    cy.findByTestId('feed-input').should('be.visible').type('Test post');
    cy.findByTestId('feed-send').click();
    doesPostExist();
  });

  it('Checks does user can add comment in post', () => {
    cy.findByTestId('feed-post-comments-input').should('not.exist');
    cy.findByTestId('feed-post-test_user-comments').click();
    writeComment('Test comment');
    cy.findByTestId('feed-post-comments-input').should('be.visible');
  });

  it('Checks do counters work', () => {
    doesPostExist();
    // Comments counter
    cy.findByTestId('feed-post-test_user-comments').should('have.attr', 'data-comments-count', '1');
    // Likes counter
    cy.findByTestId('feed-post-test_user-likes').findByRole('button').click();
    cy.findByTestId('feed-post-test_user-likes').should('contain', '1');
    cy.findByTestId('reload-btn').click();
    cy.findByTestId('feed-post-test_user-likes').should('contain', '1');
  });
});

module.exports = {};

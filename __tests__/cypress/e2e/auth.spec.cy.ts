describe('Anonymous Auth Page', () => {
  it('should not allow anonymous visitor to login with incorrect server password', () => {
    cy.visit('/');

    cy.get('input').type('fakepassword');

    cy.contains('Log In').click();

    cy.get('h1').should('contain', 'Invalid password');
  });

  it('should allow authenticated anonymous visitor to login and sign out', () => {
    cy.login(Cypress.env('serverPassword'));

    cy.contains('Sign Out').click();

    cy.location('pathname').should('equal', '/');
  });
});

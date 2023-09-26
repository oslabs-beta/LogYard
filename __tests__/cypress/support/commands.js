Cypress.Commands.add('login', (serverPassword) => {
  cy.visit('/');

  cy.get('input').type(serverPassword);

  cy.contains('Log In').click();

  cy.url().should('include', '/main');

  cy.getCookie('session').should('exist');
});

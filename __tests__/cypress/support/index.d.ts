declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in with the server password.
     * @@param serverPassword The password to use for login.
     */
    login(serverPassword: string): void;
  }
}

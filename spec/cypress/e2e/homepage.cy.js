import * as helpers from "./../support/helpers";

describe("Homepage", () => {
  it("shows a list of recommended items on the homepage", () => {
    cy.visit(Cypress.config().baseUrl);

    helpers.headingShouldBeVisible("Recommended for you");
  });

  it("shows a list of trending items on the homepage", () => {
    cy.visit(Cypress.config().baseUrl);

    helpers.headingShouldBeVisible("Trending");
  });
});

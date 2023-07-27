import * as helpers from "./../support/helpers";

describe("Search", () => {
  it("shows the search input on the homepage", () => {
    cy.visit(Cypress.config().baseUrl);

    helpers.inputShouldBeVisible("Search for movies or TV series");
  });

  it("shows no results when the search term doesn't match anything", () => {
    cy.visit(Cypress.config().baseUrl);

    helpers.focusOnInput("Search for movies or TV series");
    helpers.typeIntoInput("Search for movies or TV series", "Something");
    helpers.clickButton("Search");
    helpers.headingShouldBeVisible("Found 0 results for 'Something'");
  });
});

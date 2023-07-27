import * as helpers from "./../support/helpers";

describe("Basic Navigation", () => {
  it("allows navigating to and from different pages", () => {
    cy.visit(Cypress.config().baseUrl);

    helpers.clickLink("Home");
    helpers.currentPageShouldBe("Home");

    helpers.clickLink("Movies");
    helpers.currentPageShouldBe("Movies");

    helpers.clickLink("TV Shows");
    helpers.currentPageShouldBe("TV Shows");

    helpers.clickLink("My Bookmarks");
    helpers.currentPageShouldBe("My Bookmarks");
  });
});

function routes() {
  return [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "TV Shows",
      path: "/tv-shows",
    },
    {
      name: "My Bookmarks",
      path: "/my-bookmarks",
    },
    {
      name: "Search Results",
      path: "/search",
    },
  ].map((route) => {
    route.url = `${Cypress.config().baseUrl}${Cypress.env("ROUTING_PREFIX") || ""}${route.path}`;
    return route;
  });
}

function getPageRouteFromName(pageName) {
  return routes().find((route) => route.name === pageName);
}

function elementByRoleShouldBeVisible(role, name) {
  return cy.findByRole(role, { name: name }).should("be.visible");
}

export function currentPageShouldBe(pageName) {
  return cy.location("href").should("eq", getPageRouteFromName(pageName).url);
}

export function currentPageShouldNotBe(pageName) {
  return cy.location("href").should("not.eq", getPageRouteFromName(pageName).url);
}

export function headingShouldBeVisible(name) {
  return elementByRoleShouldBeVisible("heading", name);
}

export function linkShouldBeVisible(name) {
  return elementByRoleShouldBeVisible("link", name);
}

export function clickLink(name) {
  return cy.findByRole("link", { name: name }).click();
}

export function inputShouldBeVisible(inputLabel) {
  return cy.findByLabelText(inputLabel).should("be.visible");
}

export function focusOnInput(inputLabel) {
  return cy.findByLabelText(inputLabel).click();
}

export function typeIntoInput(inputLabel, value) {
  return cy.findByLabelText(inputLabel).type(value);
}

export function buttonShouldBeVisible(name) {
  return elementByRoleShouldBeVisible("button", name);
}

export function clickButton(name) {
  return cy.findByRole("button", { name: name }).click();
}

/// <reference types="Cypress" />

describe("Renders pages without issue", () => {
  beforeEach(() => {
    cy.visit("/").get("main");
  });

  it("Navigates to page 2 without error", () => {
    cy.findByText(/go to page 2/i).click();
  });

  it("Focuses on the footer link and asserts its attributes", () => {
    cy.findAllByText("Gatsby").focus();
    cy.focused()
      .should("have.text", "Gatsby")
      .should("have.attr", "href", "https://www.gatsbyjs.org")
      .should("not.have.css", "outline-width", "0px");
  });
});

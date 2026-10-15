describe("portfolio smoke test", () => {
  it("renders the overview with the profile and pinned projects", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Mariano Conte");
    cy.contains("h2", "Pinned").should("be.visible");
    cy.contains("a", "report-export-pipeline").should("have.attr", "href", "/projects/report-export-pipeline/");
    cy.get('nav[aria-label="Portfolio"] a[aria-current="page"]').should("contain.text", "Overview");
  });

  it("filters repositories and never lists private or client projects", () => {
    cy.visit("/repositories/");
    cy.get("main").should("not.contain.text", "congre").and("not.contain.text", "XERTUX").and("not.contain.text", "TuTurno");
    cy.get('input[type="search"]').type("redux");
    cy.get("main h3").each(($h) => {
      cy.wrap($h).closest("li").invoke("text").should("match", /redux/i);
    });
  });

  it("opens a case study and switches to Spanish", () => {
    cy.visit("/projects/report-export-pipeline/");
    cy.contains("h1", "report-export-pipeline");
    cy.get('a[hreflang="es"]').click();
    cy.location("pathname").should("eq", "/es/projects/report-export-pipeline/");
    cy.contains("Todos los proyectos");
  });

  it("toggles the color theme", () => {
    cy.visit("/");
    cy.document().then((doc) => {
      const before = doc.documentElement.dataset.theme;
      cy.get('button[aria-label="Toggle color theme"]').click();
      cy.document().its("documentElement.dataset.theme").should("not.eq", before);
    });
  });
});

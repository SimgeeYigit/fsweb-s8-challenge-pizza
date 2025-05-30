describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/order");
  });

  it("İsim inputuna metin girilebilmeli", () => {
    cy.get('input[name="name"]')
      .type("Simge")
      .should("have.value", "Simge");
  });

  it("Boyut seçilebilmeli", () => {
    cy.get('input[type="radio"]').check("Orta").should("be.checked");
  });

  it("Hamur tipi seçebilmeli", () => {
    cy.get("select").select("İnce").should("have.value", "İnce");
  });

  it("Birden fazla malzeme seçilebilmeli", () => {
    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).check().should("be.checked");
  });

  it("Not yazabilmeli", () => {
    cy.get("textarea").type("Lütfen sıcak gelsin").should("have.value", "Lütfen sıcak gelsin");
  });

  it("Adet arttırabilmeli", () => {
    cy.contains("+").click();
    cy.contains("2");
  });

  it("Siparişi başarılı şekilde verebilmeli", () => {
    cy.get('input[name="name"]').type("Simge");
    cy.get('input[type="radio"]').check("Orta");
    cy.get("select").select("İnce");

    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.get('[data-cy="order-button"]').click();
    cy.url().should("include", "/success");
  });

  it("Siparişi başarılı şekilde verebilmeli ve doğru öğeleri göstermeli", () => {
    cy.get('input[name="name"]').type("Simge");
    cy.get('input[type="radio"]').check("Orta");
    cy.get("select").select("İnce");

    cy.get('input[type="checkbox"]').eq(0).check(); // Pepperoni
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.get('[data-cy="order-button"]').click();
    cy.url().should("include", "/success");

    cy.get(".pizza-title1").should("contain", "Position Absolute Acı Pizza");
    cy.get(".pizza-size").should("contain", "M");
    cy.get(".pizza-dough").should("contain", "İnce");
    cy.get(".additional-ingredients").should("contain", "Pepperoni");
  });
});


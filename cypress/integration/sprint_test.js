describe("Testing MVP", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  // it("sainty checks", () => {
  //   expect(5).to.equal(5);
  //   expect(5 * 5).to.equal(25);
  //   expect({}).to.eql({});
  //   expect({}).to.not.equal({});
  // });

  const nameInput = () => cy.get("input[name=name]");
  const sausage = () => cy.get("input[name=sausage]");
  const cheese = () => cy.get("input[name=cheese]");
  const spinach = () => cy.get("input[name=spinach]");
  const pepperoni = () => cy.get("input[name=pepperoni]");
  const submitButton = () => cy.get("button");

  it("can type inside the name", () => {
    nameInput()
      .should("have.value", "")
      .type("Sayo")
      .should("have.value", "Sayo");
  });

  it("Selecting multiple toppings", () => {
    sausage().should("not.be.checked").check().should("be.checked");
    cheese().should("not.be.checked").check().should("be.checked");
    spinach().should("not.be.checked").check().should("be.checked");
    pepperoni().should("not.be.checked").check().should("be.checked");
  });

  it("submitting the form", () => {
    nameInput().type("Sayo");
    sausage().check();
    cheese().check();
    spinach().check();
    pepperoni().check();
    submitButton().click();
    nameInput().should("have.value", "");
  });
});


describe("Stepper", ()=>{
it ("should work", ()=>{
    const containerselector = 'nb-stepper[orientation = "horizontal"]'
    cy.visit("http://www.akveo.com/ngx-admin/pages/layout/stepper")
   
    cy.get(`${containerselector} h3`).should("have.text", "Step content #1")
    cy.get(`${containerselector} button`).contains("prev").should("be.disabled")
    cy.get(`${containerselector} button`).contains("next").click()
    cy.get(`${containerselector} h3`).should("have.text", "Step content #2")
    
    cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerselector} button`).contains("next").click()
    cy.get(`${containerselector} h3`).should("have.text", "Step content #3")
    
    cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerselector} button`).contains("next").click()
    cy.get(`${containerselector} h3`).should("have.text", "Step content #4")
    
    cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
    cy.get(`${containerselector} button`).contains("next").should("be.disabled")
    
})

})
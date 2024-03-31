
describe("Stepper", ()=>{
    it ("should work", ()=>{
        const containerselector = 'nb-stepper[orientation = "horizontal"]'
        cy.visit("https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0")
       
      cy.get(`${containerselector} h1`).should("have.text", "Добро пожаловать")
    
       // cy.get(`${containerselector} p`).contains("modal__description").should("have.text", "modal__description")
       // cy.get(`${containerselector} button`).contains("btn-join").click()
        // cy.get(`${containerselector} h3`).should("have.text", "Step content #2")
        
        // cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
        // cy.get(`${containerselector} button`).contains("next").click()
        // cy.get(`${containerselector} h3`).should("have.text", "Step content #3")
        
        // cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
        // cy.get(`${containerselector} button`).contains("next").click()
        // cy.get(`${containerselector} h3`).should("have.text", "Step content #4")
        
        // cy.get(`${containerselector} button`).contains("prev").should("be.enabled")
        // cy.get(`${containerselector} button`).contains("next").should("be.disabled")
        
    })
    
    })
/// <reference types="cypress" />

import SelectablePage from "../pageObjects/selectable.page";

describe('DemoQA testing HW', () => {

    context("Selectable scenarios", () => {

        beforeEach(() => {
    
            //cy.visit('/selectable');
            SelectablePage.visit();

            //Clicks "Grid"
            //id #demo-tab-grid
            //cy.get("#demo-tab-grid").click();
            SelectablePage.pickGrid.click();

          })

        it('Clicks two, four, six and eight', () => {

            //Clicks "Two"
            SelectablePage.selectBox.contains("Two").click();
            //Clicks "Four"
            SelectablePage.selectBox.contains("Four").click();
            //Clicks "Six"
            SelectablePage.selectBox.contains("Six").click();
            //Clicks "Eight"
            SelectablePage.selectBox.contains("Eight").click();

            //VALIDATION

            //"Two", "Four", "Six", "Eight" are highlited

            cy.get("li.list-group-item").contains("Two").should("have.class", "list-group-item active list-group-item-action");
            cy.get("li.list-group-item").contains("Four").should("have.class", "list-group-item active list-group-item-action");
            cy.get("li.list-group-item").contains("Six").should("have.class", "list-group-item active list-group-item-action");
            cy.get("li.list-group-item").contains("Eight").should("have.class", "list-group-item active list-group-item-action");

            //"One", "Three", "Five", "Seven" "Nine" are not highlited

            cy.get("li.list-group-item").contains("One").should("have.class", "list-group-item list-group-item-action");
            cy.get("li.list-group-item").contains("Three").should("have.class", "list-group-item list-group-item-action");
            cy.get("li.list-group-item").contains("Five").should("have.class", "list-group-item list-group-item-action");
            cy.get("li.list-group-item").contains("Seven").should("have.class", "list-group-item list-group-item-action");
            cy.get("li.list-group-item").contains("Nine").should("have.class", "list-group-item list-group-item-action");

        });

    });
})
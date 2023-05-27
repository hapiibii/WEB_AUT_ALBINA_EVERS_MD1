import BasePage from "./base.page";

class SelectablePage extends BasePage {

    static get url() {
        return "/selectable";
    }

    static get pickGrid() {
        return cy.get("#demo-tab-grid");
    }

    static get selectBox() {
        return cy.get('[class="list-group-item list-group-item-action"]');
    }

    
}

export default SelectablePage;
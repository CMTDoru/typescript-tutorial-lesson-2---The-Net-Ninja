// acum spunem ca aceasta clasa are type-ul HasFormatter
export class Invoice {
    constructor(
    // varianta asta merge numai daca avem acces modifiers legata de propietati,
    // daca nu sunt declarate atunci trebuie facuta variata de mai sus
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

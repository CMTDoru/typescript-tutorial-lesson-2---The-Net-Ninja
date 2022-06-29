// acum spunem ca aceasta clasa are type-ul HasFormatter
export class Payment {
    constructor(
    // varianta asta merge numai daca avem acces modifiers legata de propietati,
    // daca nu sunt declarate atunci trebuie facuta variata de mai sus
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}

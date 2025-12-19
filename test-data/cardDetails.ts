export interface Card {
    cardNumber: string;
    cvc: string;
    expirationMonth: string;
    expirationYear: string;

}

export const cardDetails: Card = {
    cardNumber: '4242424242424242',
    cvc: '123',
    expirationMonth: '12',
    expirationYear: '2025'
};

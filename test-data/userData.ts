export interface UserData {
    userName: string;
    userEmail: string;
    title: 'Mr' | 'Mrs';
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
    invalidPassword: string;
}

export const testUser: UserData = {
    userName: 'Test User',
    userEmail: `user${Date.now()}@domain.com`,
    title: 'Mr',
    password: 'Password@123',
    invalidPassword: 'invalidPassword@123',
    day: '10',
    month: '5',
    year: '1995',
    firstName: 'Test',
    lastName: 'User',
    address: '123 Test Street',
    state: 'London',
    city: 'London',
    zipcode: 'E1 6AN',
    mobileNumber: '1234567890'
};

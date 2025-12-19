import { UserData } from './userData';
import fs from 'fs';

let registeredUser: UserData | null = null;

export function setRegisteredUser(user: UserData) {
    registeredUser = user;
}

export function getRegisteredUser(): UserData {
    const data = fs.readFileSync('registeredUser.json', 'utf-8');
    return JSON.parse(data) as UserData;
}
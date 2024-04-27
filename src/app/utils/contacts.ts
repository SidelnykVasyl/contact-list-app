import { Contact } from "../models/contact";

export const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '063-088-99-21',
    dateOfBirth: new Date('04/11/1997'),
    email: 'someJohnEmail@gmail.com',
    address: 'Chervonoi Kalyny 112/55'
  },
  {
    id: 2,
    firstName: 'Will',
    lastName: 'Swith',
    phoneNumber: '063-088-99-22',
    dateOfBirth: new Date('02/15/1996'),
    email: 'someWillEmail@gmail.com',
    address: 'Dovzenka 7/55'
  }
]

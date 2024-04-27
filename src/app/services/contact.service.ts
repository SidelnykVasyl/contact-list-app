import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../utils/contacts';
import { ContactFormService } from './contact-form.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = CONTACTS;

  constructor(
    private formService: ContactFormService
  ) {
    this.loadContacts();
   }

  getContacts(): Contact[] {
    return this.contacts
  }

  private loadContacts(): void {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    }
  }

  private saveContacts(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContactById(id: number): Contact {
    return this.contacts.find(contact => contact.id === id)!;
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    this.saveContacts();
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);

    if (index !== -1) {
      this.contacts[index] = contact;
      this.saveContacts();
    }
  }

  createContact(contact: Contact): void {
    contact.id = this.generateId();
    this.contacts.push(contact);
    this.saveContacts();
    this.formService.hideForm();
  }

  private generateId(): number {
    return Date.now();
  }
}

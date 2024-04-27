import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormMode } from 'src/app/enums/mode.enum';
import { Contact } from 'src/app/models/contact';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = [];
  searchTerm: string = '';
  showAddContactForm: boolean = false;
  dd: any;
  Mode = FormMode;
  constructor(
    private contactService: ContactService,
    private formService: ContactFormService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.dd = this.formService.hideForm$;

    this.formService.hideForm$.subscribe(() => {
      this.toggleAddContactForm();
    })
  }

  toggleAddContactForm() {
    this.showAddContactForm = !this.showAddContactForm;
  }

  get filteredContacts(): Contact[] {
    return this.contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.phoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchTerm = '';
  }

  editContact(id: number): void {
    this.router.navigate(['/contacts/edit', id]);
  }

  deleteContact(id: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id);
      this.contacts = this.contactService.getContacts();
    }
  }
}

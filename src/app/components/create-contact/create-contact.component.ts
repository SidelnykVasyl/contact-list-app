import { Component } from '@angular/core';
import { FormMode } from 'src/app/enums/mode.enum';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {
  Mode = FormMode

  constructor(
    private contactService: ContactService,
  ){}

  createContact(contact: Contact): void {
    this.contactService.createContact(contact);
  }

}

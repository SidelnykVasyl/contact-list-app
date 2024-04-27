import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormMode } from 'src/app/enums/mode.enum';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  Mode = FormMode;

  constructor(
    private contactService: ContactService,
    private router: Router
  ){}

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact);
    this.router.navigate(['/contacts'])
  }
}

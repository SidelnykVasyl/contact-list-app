import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormMode } from 'src/app/enums/mode.enum';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { phoneNumberLengthValidator } from 'src/app/utils/phone-validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() mode!: FormMode;
  @Output() onSubmitEvent: EventEmitter<Contact> = new EventEmitter();
  public contactForm!: FormGroup;
  public contact!: Contact;
  Mode = FormMode;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contactService: ContactService,
  ){}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContactById(id);

    this.formInit();
  }

  formInit(): void {
    const dateOfBirth = this.contact?.dateOfBirth ? new Date(this.contact.dateOfBirth).toISOString().substring(0, 10) : null;

    this.contactForm = this.fb.group({
      id: [this.contact?.id],
      firstName: [this.contact?.firstName, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      lastName: [this.contact?.lastName, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      phoneNumber: [this.contact?.phoneNumber, [
        Validators.required,
        phoneNumberLengthValidator()
      ]],
      dateOfBirth: [dateOfBirth],
      email: [this.contact?.email, [Validators.email, Validators.required]],
      address: [this.contact?.address, [
        Validators.maxLength(100)
      ]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.onSubmitEvent.emit(this.contactForm.value);
    } else {
      alert('Please fill in all required fields.');
    }
  }


  get phoneNumberFormControl() {
    return this.contactForm.get('phoneNumber');
  }

  get firstNameFormControl() {
    return this.contactForm.get('firstName');
  }

  get lastNameFormControl() {
    return this.contactForm.get('lastName');
  }

  get emailFormControl() {
    return this.contactForm.get('email');
  }
}

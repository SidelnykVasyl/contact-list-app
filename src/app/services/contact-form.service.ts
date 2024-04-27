import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private hideFormSubject = new Subject<void>();
  hideForm$ = this.hideFormSubject.asObservable();

  constructor() { }

  hideForm() {
    this.hideFormSubject.next();
  }
}

// contacts.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactComponent {
  contacts: Contact[] = [
    { name: 'John Doe', phone: '+1234567890', email: 'john@example.com' },
    { name: 'Jane Smith', phone: '+0987654321', email: 'jane@example.com' },
    // Add more contacts as needed
  ];
}

interface Contact {
  name: string;
  phone: string;
  email: string;
}

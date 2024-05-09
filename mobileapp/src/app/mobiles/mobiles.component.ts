// mobiles.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobiles: Mobile[] = [
    { brand: 'Samsung', model: 'Galaxy S21', price: 999.99 },
    { brand: 'iPhone', model: '12 Pro', price: 1299.99 },
    // Add more mobiles as needed
  ];
}

interface Mobile {
  brand: string;
  model: string;
  price: number;
}

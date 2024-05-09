// mobile.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private mobiles: Mobile[] = [
    { brand: 'Samsung', model: 'Galaxy S21', price: 999.99 },
    { brand: 'iPhone', model: '12 Pro', price: 1299.99 },
    // Add more mobiles as needed
  ];

  getMobiles(): Observable<Mobile[]> {
    return of(this.mobiles);
  }
}

interface Mobile {
  brand: string;
  model: string;
  price: number;
}

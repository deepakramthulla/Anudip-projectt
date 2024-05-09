import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  payment  } from '../entity/payment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8086/postpayment';
    this.getEmpURL = 'http://localhost:8086/payment';
    this.updateEmpUrl = 'http://localhost:8086/updatepayment';
    this.deleteEmpUrl = 'http://localhost:8086/deletepayment';

   }

   addPayment(payment : payment): Observable<payment> {
     return this.http.post<payment>(this.addEmpURL,payment);
   }

   getAllPayment(): Observable<payment[]>{
     return this.http.get<payment[]>(this.getEmpURL);
   }

   updatePayment(payment :payment) : Observable<payment>{
     return this.http.put<payment>(this.updateEmpUrl, payment);
   }
   
  findAll(): Observable<any> {
    console.log(payment)
    return this.http.get('http://localhost:8086/payment');
  }

   deletepayment(payment : payment) : Observable<payment> {
     return this.http.delete<payment>(this.deleteEmpUrl+'/'+payment.paymentId);
   }
  

}
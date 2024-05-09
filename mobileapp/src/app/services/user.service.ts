import { Injectable } from '@angular/core';
import { user } from '../entity/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userService  {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8086/post';
  }
  findAll(): Observable<any> {
    console.log(user)
    return this.http.get('http://localhost:8086/user');
  }

  public save(payment: user) {
    return this.http.post<user>(this.usersUrl, user);
  }}
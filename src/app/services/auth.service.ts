import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:5001/api/auth/';

  constructor(private httpclient: HttpClient) {}

  login(user: LoginModel) {
    return this.httpclient.post(this.apiUrl + 'login', user);
  }
}

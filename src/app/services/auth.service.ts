import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = true;

  constructor() { }
  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    })
  }
}

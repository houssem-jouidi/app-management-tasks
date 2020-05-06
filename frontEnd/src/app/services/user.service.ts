import { environment } from "./../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user) {
    return this.http.post(`${environment.apiUrl}/user/register`, user);
  }
  auth(user) {
    return this.http.post(`${environment.apiUrl}/user/auth`, user);
  }
  saveUser(token, user) {
    localStorage.setItem("Authtoken", token);
    localStorage.setItem("User", JSON.stringify(user));
  }
  isLogedin(): boolean {
    if (localStorage.getItem("Authtoken")) {
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    localStorage.removeItem("Authtoken");
    localStorage.removeItem("User");
  }
  getcurrentuser() {
    return JSON.parse(localStorage.getItem("User"));
  }

  GetUser() {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(JSON.parse(localStorage.getItem("User")));
      }, 100);
    });
  }
}

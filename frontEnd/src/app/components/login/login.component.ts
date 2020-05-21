import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private userservice: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const logedin = this.userservice.isLogedin();
    if (logedin) {
      this.router.navigate(["/main"]);
    }
  }
  onLogin() {
    const user = {
      email: this.email,
      password: this.password,
    };
    this.userservice.auth(user).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Error", resp.message);
      } else if (resp.returnuser.role === "admin") {
        this.toastr.success("Success");
        this.router.navigate(["/dashboard"]);
        this.userservice.saveUser(resp.returnuser.token, resp.returnuser);
      } else if (resp.returnuser.role === "user") {
        this.toastr.success("Success");
        this.router.navigate(["/main"]);
        this.userservice.saveUser(resp.returnuser.token, resp.returnuser);
      }
    });
  }
}

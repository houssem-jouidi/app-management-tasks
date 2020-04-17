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

  ngOnInit() {}
  onLogin() {
    const user = {
      email: this.email,
      password: this.password,
    };
    this.userservice.auth(user).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Error", resp.message);
      } else {
        this.toastr.success("Success");
        this.router.navigate(["/main"]);
        this.userservice.saveUser(resp.returnuser.token, resp.returnuser);
      }
    });
  }
}

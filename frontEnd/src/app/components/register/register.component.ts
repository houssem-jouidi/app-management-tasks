import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  username = "";
  email = "";
  password = "";
  constructor(
    private userservice: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const registered = this.userservice.isLogedin();
    if (registered) {
      this.router.navigate(["/main"]);
    }
  }
  onRegister() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.userservice.createUser(user).subscribe((resp: any) => {
      if (resp.message) {
        this.router.navigate(["/login"]);
        this.toastr.success("Success", "Account Created");
      } else {
        this.toastr.error("Error", "Email Exist");
      }
    });
  }
}

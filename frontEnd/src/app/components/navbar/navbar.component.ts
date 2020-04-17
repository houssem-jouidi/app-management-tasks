import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  name;
  user;
  constructor(public userservice: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userservice.GetUser().subscribe((data: any) => {
      if (data) {
        this.name = data.name;
      }
    });
  }

  lOGOUT() {
    this.userservice.Logout();
    this.router.navigate(["/login"]);
  }
}

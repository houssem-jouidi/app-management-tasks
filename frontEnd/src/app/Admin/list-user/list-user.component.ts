import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUserComponent implements OnInit {
  users;
  dataSource;
  constructor(private userSer: UserService) {}

  ngOnInit() {
    this.userSer.listUser().subscribe((data: any) => {
      if (data.success) {
        this.users = data.users;
      }
      this.dataSource = this.users;
      console.log(this.users);
    });
  }
}

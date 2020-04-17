import { TaskService } from "./../../services/task.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  name: string;
  done: boolean;
  owner: string;
  user;
  constructor(
    private taskser: TaskService,
    private userSER: UserService,
    private router: Router,
    private toster: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.userSER.getcurrentuser();
    this.owner = this.user.id;
    this.done = false;
  }
  onAddtask() {
    if (this.name) {
      const task = {
        name: this.name,
        done: this.done,
        owner: this.owner,
      };
      this.taskser.saveTask(task).subscribe((resp: any) => {
        this.toster.success(resp.message);
        this.router.navigate(["/main"]);
      });
    }
  }
}

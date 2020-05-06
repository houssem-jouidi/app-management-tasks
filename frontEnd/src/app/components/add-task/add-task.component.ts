import { TaskService } from "./../../services/task.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  model: NgbDateStruct;
  name: string;
  done: boolean;
  owner: string;
  user;
  desc: string;
  dateTask: any;
  exemp: any;
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
      /* Object.keys(this.dateTask).forEach((v, index) => {
        if (index === 0) {
          let a = `${this.dateTask.year}-${this.dateTask.month}-${this.dateTask.day}`;

          this.exemp = a;
        }
      }); */

      const task = {
        name: this.name,
        done: this.done,
        owner: this.owner,
        desc: this.desc,
        dateTask: this.dateTask,
      };
      console.log(task);

      this.taskser.saveTask(task).subscribe((resp: any) => {
        this.toster.success(resp.message);
        this.router.navigate(["/main"]);
      });
    }
  }
}

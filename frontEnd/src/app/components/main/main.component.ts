import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/services/task.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  task;

  constructor(
    private taskSer: TaskService,
    private userSER: UserService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.fetchTask();
  }
  deleteTask(id) {
    if (confirm("Are you sure to delete this Task")) {
      this.taskSer.deleteTask(id).subscribe(
        (resp: any) => {
          this.toaster.success(resp.message);
          this.fetchTask();
        },
        (err) => {
          this.toaster.error("failed");
        }
      );
    }
  }
  fetchTask() {
    const user = this.userSER.getcurrentuser();
    const query = { owner: user.id };
    this.taskSer.getalltask(query).subscribe((resp: any) => {
      this.task = resp.task;
    });
  }
}

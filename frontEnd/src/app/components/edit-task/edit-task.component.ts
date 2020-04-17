import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/services/task.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.css"],
})
export class EditTaskComponent implements OnInit {
  name;

  user;
  id;
  Task;
  constructor(
    private TaskSer: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.TaskSer.GetTaskById(this.id).subscribe((data: any) => {
      if (data.success) {
        this.Task = data.task;
      }
    });
  }

  onUpdatetask(form, o) {
    this.id = this.route.snapshot.paramMap.get("id");
    const updatetask = {
      name: form.name,
      done: form.done,
      owner: o,
    };
    this.TaskSer.PutTaskById(this.id, updatetask).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(["/main"]);
      }
    });
  }
}
import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/services/task.service";
import { ActivatedRoute } from "@angular/router";
import * as html2pdf from "html2pdf.js";

@Component({
  selector: "app-show-task",
  templateUrl: "./show-task.component.html",
  styleUrls: ["./show-task.component.css"],
})
export class ShowTaskComponent implements OnInit {
  id;
  Task;
  constructor(private TaskSer: TaskService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.TaskSer.GetTaskById(this.id).subscribe((data: any) => {
      if (data.success) {
        this.Task = data.task;
      }
    });
  }
  printpdf() {
    const prin = document.getElementById("print");
    const opt = { filename: "Task.pdf" };
    const worker = html2pdf().from(prin).set(opt).output("dataurlnewwindow");
  }
  downloadpdf() {
    const prin = document.getElementById("print");
    const opt = { filename: "Task.pdf" };
    const worker = html2pdf().from(prin).set(opt).save();
  }
}

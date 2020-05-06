import { environment } from "./../../environments/environment.prod";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  saveTask(task) {
    return this.http.post(`${environment.apiUrl}/task/add`, task);
  }
  getalltask(query) {
    return this.http.post(`${environment.apiUrl}/task/lists`, query);
  }
  deleteTask(id) {
    return this.http.delete(`${environment.apiUrl}/task/delete/${id}`);
  }
  GetTaskById(id) {
    return this.http.get(`${environment.apiUrl}/task/task/${id}`);
  }
  PutTaskById(id, updatetask) {
    return this.http.put(`${environment.apiUrl}/task/edit/${id}`, updatetask);
  }
}

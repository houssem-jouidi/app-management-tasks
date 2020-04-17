import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getauthHeadres() {
    const token = localStorage.getItem("Authtoken");

    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
  }
  saveTask(task) {
    const headers = this.getauthHeadres();

    return this.http.post("http://localhost:3000/api/task/add", task, {
      headers: headers,
    });
  }
  getalltask(query) {
    const h = this.getauthHeadres();
    return this.http.post("http://localhost:3000/api/task/lists", query, {
      headers: h,
    });
  }
  deleteTask(id) {
    const h = this.getauthHeadres();
    return this.http.delete(`http://localhost:3000/api/task/delete/${id}`, {
      headers: h,
    });
  }
  GetTaskById(id) {
    const h = this.getauthHeadres();
    return this.http.get(`http://localhost:3000/api/task/task/${id}`, {
      headers: h,
    });
  }
  PutTaskById(id, updatetask) {
    const h = this.getauthHeadres();
    return this.http.put(
      `http://localhost:3000/api/task/edit/${id}`,
      updatetask,
      {
        headers: h,
      }
    );
  }
}

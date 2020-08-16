import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MainComponent } from "./components/main/main.component";
import { AuthGuard } from "./guards/auth.guard";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { ShowTaskComponent } from "./components/show-task/show-task.component";
import { DashboardComponent } from "./Admin/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: MainComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "add-task", component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: "Edit/:id", component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: "Task/:id", component: ShowTaskComponent, canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

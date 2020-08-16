import { httpInterceptorProviders } from "./interceptors/index";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { UserService } from "./services/user.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { MainComponent } from "./components/main/main.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { ShowTaskComponent } from "./components/show-task/show-task.component";
import { DashboardComponent } from "./Admin/dashboard/dashboard.component";
import { MaterialModule } from "./material/material.module";
import { ToolbarComponent } from './Admin/toolbar/toolbar.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    AddTaskComponent,
    EditTaskComponent,
    ShowTaskComponent,
    DashboardComponent,
    ToolbarComponent,
    ListUserComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule,

    Ng2SearchPipeModule,
    NgxPaginationModule,
    MaterialModule,
  ],
  providers: [
    UserService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

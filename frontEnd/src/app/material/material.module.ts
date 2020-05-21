import { NgModule } from "@angular/core";
import {
  MatNativeDateModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTreeModule,
  MatListModule,
  MatTableModule,
} from "@angular/material";
import { MatDatepickerModule } from "@angular/material";

const materialcomponents = [
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTreeModule,
  MatListModule,
  MatTableModule,
];

@NgModule({
  exports: [materialcomponents],
  imports: [materialcomponents],
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import {StudentViewComponent} from "./component/studentView/studentView.component";
import {HomeComponent} from "./component/home/home.component";
import {AddThesisComponent} from "./component/add-thesis/add-thesis.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'student', component: StudentViewComponent},
  {path:'cart', component: CartComponent},
  {path: 'add-thesis', component: AddThesisComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

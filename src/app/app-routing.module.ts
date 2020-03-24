import { UpdateComputerComponent } from './components/update-computer/update-computer.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { ComputerDetailsComponent } from './components/computer-details/computer-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'computer-details/:id', component: ComputerDetailsComponent},
  {path: 'addComputer', component: AddComputerComponent},
  {path: 'computer-update/:id', component: UpdateComputerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

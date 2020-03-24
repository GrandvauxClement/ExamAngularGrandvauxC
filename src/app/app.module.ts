import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CollapseModule} from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ComputerDetailsComponent } from './components/computer-details/computer-details.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { UpdateComputerComponent } from './components/update-computer/update-computer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ComputerDetailsComponent,
    AddComputerComponent,
    UpdateComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

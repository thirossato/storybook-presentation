import { TeamDetailsModule } from './pages/team-details/team-details.module';
import { AppRoutingModule } from './app.routing-module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './shared/components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    HomeModule,
    TeamDetailsModule
  ],
  exports:[],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

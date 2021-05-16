import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'team-details',
    component: TeamDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

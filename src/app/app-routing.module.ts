import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



const routes: Routes = [

  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'ui',
    component: UiComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

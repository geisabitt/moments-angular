import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'moments/new', component: NewMomentsComponent},
  {path:'moments/edit/:id', component: EditMomentComponent},
  {path:'moments/:id', component: MomentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

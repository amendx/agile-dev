import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { HomeModule } from './components/home/home.module';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }
]

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

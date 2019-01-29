import { RouterModule, Routes } from '@angular/router'
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowListComponent } from '../common/show-list/show-list.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ShowListComponent
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
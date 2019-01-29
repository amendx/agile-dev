import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowsService } from './services/shows.service';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
    ],
    exports: [
        ShowListComponent,
    ],
    declarations: [ShowListComponent],
    providers: [ShowsService]

})
export class ShowModule { }
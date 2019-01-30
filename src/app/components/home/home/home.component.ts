import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { tvShow } from '../models/show.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTvShow = <tvShow>{};

  constructor(private tvShowService: HomeService) { }

  ngOnInit() {
    this.getTvShow();
  }

  getTvShow() {
    this.tvShowService.getAll().subscribe(data => {
      this.currentTvShow = data;
      console.log(data);
    })
  }

}

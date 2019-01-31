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
  currentTvShowDetails: string;
  constructor(private tvShowService: HomeService) { }

  ngOnInit() {
    this.getTvShow();
  }

  getTvShow() {
    this.tvShowService.getAll().subscribe(data => {
      this.currentTvShow = data;
      this.currentTvShowDetails = `80% INDICADO / CIENCIA FICCION / ${this.currentTvShow.Year} / EUA / 14`;
      // console.log(data);
    })
  }

}

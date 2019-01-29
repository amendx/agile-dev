import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tvShow: any;
  title: any;
  constructor(private tvShowService: HomeService) { }

  ngOnInit() {
    this.getTvShow();
  }

  getTvShow() {
    this.tvShowService.getAll().subscribe(data => {
      this.tvShow = data;
      this.title = data.Title;
      console.log(data);
    })
  }

}

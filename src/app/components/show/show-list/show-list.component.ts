import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../show/services/shows.service';
import { episodes } from '../models/episodes.model';
import * as _ from 'lodash';
import { HomeService } from '../../home/services/home.service';
import { tvShow } from '../../home/models/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],

})
export class ShowListComponent implements OnInit {

  constructor(private showService: ShowsService, private homeService: HomeService) { }
  folded = 'closed';
  isClosed = false;
  currentEpisodes1: episodes[] = [];
  currentEpisodes2: episodes[] = [];
  seasons: any[] = [];
  toggleShow = [];
  toggleShow2 = [];
  currentShow = <tvShow>{};

  ngOnInit() {
    this.getShows();
    this.getShow();
  }

  getShow() {
    this.homeService.getAll().subscribe(data => {
      this.currentShow = data;
    });
  }

  getShows() {
    this.showService.getAll().subscribe(data => {
      data.forEach(el => {
        if (el !== null && el.SeasonNumber == 1) {
          this.currentEpisodes1.push(el);
        }
        if (el !== null && el.SeasonNumber == 2) {
          this.currentEpisodes2.push(el)
        }
        this.seasons = _.uniqWith(this.seasons, _.isEqual)
      });
    });

  }

}

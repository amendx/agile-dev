import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../show/services/shows.service';
import { episodes } from '../models/episodes.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  constructor(private showService: ShowsService) { }

  currentEpisodes = [<episodes>{}];

  ngOnInit() {
    this.getShows();
  }
  whatName($e) {
    console.log($e);
  }
  getShows() {
    this.showService.getAll().subscribe(data => {
      data.forEach(el => {
        if (el !== null)
          this.currentEpisodes.push(el);
        console.log(el);
      });
    });

  }

}

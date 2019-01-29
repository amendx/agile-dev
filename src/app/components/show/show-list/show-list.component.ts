import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../show/services/shows.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  constructor(private showService: ShowsService) { }
  episodes = [];
  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this.showService.getAll().subscribe(data => {
      data.forEach(el => {
        if (el !== null)
          this.episodes.push(el);
      });
    });

  }

}

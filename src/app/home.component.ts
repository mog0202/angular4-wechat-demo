import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Home } from './home';
import { HomeService } from './home.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home;
  constructor(
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCorp()
      .then(home => this.home = home);
  }

}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Home } from './home';
import { BaseService } from './base.service';

@Injectable()
export class HomeService extends BaseService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiUrl = 'wechat-test/app';  // URL to web api

  constructor(
    private http: Http,
    private route: ActivatedRoute) { super(route) }

  getCorp(): Promise<Home> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/home`);
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as Home
      })
      .catch(this.handleError);
  }

  goToLogout(): Promise<void> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/logout`);
    return this.http.get(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}


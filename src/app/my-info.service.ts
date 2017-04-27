import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { MyInfo } from './myinfo';

@Injectable()
export class MyInfoService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiUrl = 'wechat-test/user';  // URL to web api
  private code: string;
  private state: string;
  private appid: string;
  private agentid: string;

  constructor(
    private http: Http,
    private route: ActivatedRoute) { }

  getMyInfo(): Promise<MyInfo> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/myinfo`);
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as MyInfo
      })
      .catch(this.handleError);
  }


  buildAuthCodeUrl(url: string): string {
    this.route.queryParams
      .subscribe((params: Params) => {
      this.code = params['code'];
        this.state = params['state'];
        console.log(this.code);
        console.log(this.state);
      });
    return `${url}?code=${this.code}&state=${this.state}`;
  }

  handleError(error: any) {
    console.log(error);
  }
}


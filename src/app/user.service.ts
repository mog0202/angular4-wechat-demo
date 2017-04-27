import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private apiUrl = 'wechat-test/user';  // URL to web api

  constructor(
    private http: Http,
    private route: ActivatedRoute) { super(route) }

  getUsers(): Promise<User[]> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/all`);
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as User[]
      })
      .catch(this.handleError);
  }

  getUser(content: string): Promise<User[]> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/search?content=${content}`);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http
      .post(this.buildAuthCodeUrl(this.apiUrl), JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/${id}`);
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = this.buildAuthCodeUrl(`${this.apiUrl}/${user.id}`);
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

}


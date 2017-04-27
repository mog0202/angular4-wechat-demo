import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class BaseService {

  auth_code: string;
  code: string;
  constructor(private baseRoute: ActivatedRoute) { }

  getAuthCode(): void {
    this.baseRoute.queryParams
      .subscribe((params: Params) => this.auth_code = params['auth_code']);
  }

  getCode(): void {
    this.baseRoute.queryParams
      .switchMap((params: Params) => this.code = params['code']);
  }

  buildAuthCodeUrl(url: string): string {
    this.getAuthCode();
    if (this.auth_code) {
      if (url.indexOf("?") != -1) {
        return `${url}&auth_code=${this.auth_code}`;
      } else {
        return `${url}?auth_code=${this.auth_code}`;
      }
    } else {
      return url;
    }
  }

  buildCodeUrl(url: string): string {
    this.getCode();
    if (this.code) {
      if (url.indexOf("?") != -1) {
        return `${url}&auth_code=${this.code}`;
      } else {
        return `${url}?auth_code=${this.code}`;
      }
    } else {
      return url;
    }
  }

  handleError(error: any) {
    if (error.status == 401) {
      window.location.href = 'https://qy.weixin.qq.com/cgi-bin/loginpage?corp_id=test&redirect_uri=http%3a%2f%2fexample.com.cn';
    } else {
      console.log(error);
    }
  }
}


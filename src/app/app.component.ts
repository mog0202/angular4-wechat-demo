import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private homeService: HomeService) { }

  logOut(): void {
    this.homeService.goToLogout()
      .then(() => {
        window.location.href = 'https://qy.weixin.qq.com/cgi-bin/loginpage?corp_id=test&redirect_uri=http%3a%2f%2fexample.com.cn';
      });
  }
}

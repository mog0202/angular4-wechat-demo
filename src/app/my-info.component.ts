import { Component, OnInit } from '@angular/core';
import { MyInfo } from './myinfo';
import { MyInfoService } from './my-info.service';


@Component({
    selector: 'my-info',
    templateUrl: './my-info.component.html'
})

export class MyInfoComponent implements OnInit {
    myinfo: MyInfo;
    constructor(private myInfoService: MyInfoService) { }

    ngOnInit() {
        this.myInfoService.getMyInfo()
        .then(myinfo => this.myinfo = myinfo);
    }
}
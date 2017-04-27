import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  newUser = new User();
  selectedUser = new User();
  newFlg = false;
  removeFlg = false;
  title: string = "员工信息";
  constructor(
    private userService: UserService) { }

  getUser(contentStr: string): void {
    this.newFlg = false;
    this.removeFlg = false;
    this.userService
      .getUser(contentStr)
      .then(users => this.users = users);
  }

  andNew(): void {
    this.newFlg = true;
    this.removeFlg = false;
    this.newUser = new User();
  }

  add(): void {
    this.userService.create(this.newUser)
      .then(user => {
        this.users.push(user);
        this.newFlg = false;
        this.removeFlg = false;
        this.selectedUser = new User();
      });
  }

  delete(): void {
    this.userService
      .delete(this.selectedUser.id)
      .then(() => {
        this.users = this.users.filter(h => h !== this.selectedUser);
        this.removeFlg = false;
        this.selectedUser = new User();
      });
  }

  update(): void {
    this.userService
      .update(this.selectedUser)
      .then(() => {
        this.removeFlg = false;
        this.selectedUser = new User();
      });
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.newFlg = false;
    this.removeFlg = true;
    this.selectedUser = user;
  }

}

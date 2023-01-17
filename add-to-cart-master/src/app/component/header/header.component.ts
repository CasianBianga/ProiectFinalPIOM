import {Component, OnInit} from '@angular/core';
import {UserI} from "../interface/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: UserI = <UserI>{};

  constructor() {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') ?? 'null') ?? <UserI>{};
    console.log(this.user)
  }

  logout(): void {
    localStorage.clear();
    this.user = <UserI>{};
  }

  countThesis(){
    return this.user.id != null ? this.user.thesis.length : 0;
  }
}

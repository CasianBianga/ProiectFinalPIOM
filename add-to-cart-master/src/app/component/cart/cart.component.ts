import {Component, OnInit} from '@angular/core';
import {CartService} from 'src/app/service/cart.service';
import {UserService} from "../../service/user.service";
import {UserI} from "../interface/user";
import {ThesisI} from "../interface/thesis";
import {ThesisService} from "../../service/thesis.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public studentThesis: Array<ThesisI> = [];
  public student: UserI = <UserI>{};

  constructor(private userService: UserService,
              private thesisService: ThesisService) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') ?? '')
    this.userService.getUser(user.id)
      .subscribe((result: UserI) => {
        this.student = result;
        this.studentThesis = result.thesis;
      })
  }

  removeItem(item: ThesisI) {
    this.studentThesis = this.studentThesis.filter(t => t.id != item.id);
    this.student.thesis = this.studentThesis;
    this.thesisService.manageThesisForStudent(this.student).subscribe();
    localStorage.setItem('user', JSON.stringify(this.student));
    window.location.reload();
  }

}

import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import {CartService} from 'src/app/service/cart.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ThesisViewComponent} from "../thesis-view/thesis-view.component";
import {ThesisI} from "../interface/thesis";
import {ThesisService} from "../../service/thesis.service";
import {UserService} from "../../service/user.service";
import {UserI} from "../interface/user";

@Component({
  selector: 'studentView',
  templateUrl: './studentView.component.html',
  styleUrls: ['./studentView.component.scss'],
  providers: []
})
export class StudentViewComponent implements OnInit {

  public productList: any;
  public filterCategory: any
  listOfThesis: Array<ThesisI> = [];
  loggedUser: UserI = <UserI>{};

  constructor(private api: ApiService,
              private cartService: CartService,
              private thesisService: ThesisService,
              private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.thesisService.getThesis().subscribe((result: Array<ThesisI>) => {
        this.listOfThesis = result
      }
    )
    this.loggedUser = JSON.parse(localStorage.getItem('user') ?? '');
  }

  addThesis(item: ThesisI) {
    if (!this.loggedUser.thesis.find(t => t.id == item.id)) {
      this.loggedUser.thesis.push(item);
      this.thesisService.manageThesisForStudent(this.loggedUser).subscribe(result => {
          localStorage.setItem('user', JSON.stringify(result));
          window.location.reload();
        }
      );
    }
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

  seeThesisDetails(data: ThesisI): void {
    let dialogRef = this.dialog.open(ThesisViewComponent, {
      height: '50%',
      width: '75%',
      data: {data:data, alreadyAdded: this.checkAlreadyAdded(data),}
    })

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.addThesis(data);
        }
      }
    )
  }

  checkAlreadyAdded(item: ThesisI): boolean {
    return this.loggedUser.thesis.some(t => t.id == item.id)
  }

}

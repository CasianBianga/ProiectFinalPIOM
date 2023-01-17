import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ThesisI} from "../interface/thesis";

@Component({
  selector: 'app-thesis-view',
  templateUrl: './thesis-view.component.html',
  styleUrls: ['./thesis-view.component.scss']
})
export class ThesisViewComponent implements OnInit {

  thesis: ThesisI = <ThesisI>{};

  constructor(public dialogRef: MatDialogRef<ThesisViewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.thesis = this.data.data
  }

  closeDialog(choose: boolean): void{
    this.dialogRef.close(choose);
  }

}

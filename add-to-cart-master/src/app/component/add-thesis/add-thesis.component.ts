import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ThesisService} from "../../service/thesis.service";
import {ThesisI} from "../interface/thesis";

@Component({
  selector: 'app-add-thesis',
  templateUrl: './add-thesis.component.html',
  styleUrls: ['./add-thesis.component.scss']
})
export class AddThesisComponent implements OnInit {

  thesisGroup: any;

  constructor(private thesisService: ThesisService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.thesisGroup = new FormGroup({
        author: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      }
    );
  }

  addThesis(): void {
    const thesis: ThesisI = {
      title: this.thesisGroup.value.title,
      description: this.thesisGroup.value.description,
      teacherName: this.thesisGroup.value.author
    }
    this.thesisService.addThesis(thesis).subscribe(() => this.initForm())
  }
}

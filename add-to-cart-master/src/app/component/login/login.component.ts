import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {UserI} from "../interface/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../enum/role.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Array<UserI> = [];

  loginGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService,
              private router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result: Array<UserI>) =>
      this.users = result
    )
  }


  login() {
    const type = this.activatedRoute.snapshot.queryParamMap.get('type')
    const user = this.users.find(u => u.username == this.loginGroup.value.username && u.password == this.loginGroup.value.password);
    console.log(type)
    console.log(user)
    if (user) {
      if (user.role == Role.STUDENT && type == 'student') {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/student']).then(()=>window.location.reload())
      } else if (user.role == Role.TEACHER && type == 'student'){
        alert("User it's not a student");
      }else if (user.role == Role.TEACHER && type == 'teacher') {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/add-thesis']).then(()=>window.location.reload())
      } else {
        alert("User it's not a teacher")
      }
    } else {
      alert(
        "Invalid credentials"
      )
    }
  }

}

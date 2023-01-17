import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserI} from "../component/interface/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<UserI>> {
    return this.http.get<Array<UserI>>(this.url + '/users');
  }

  getUser(id: number): Observable<UserI> {
    return this.http.get<UserI>(this.url + '/users/' + id);
  }
}

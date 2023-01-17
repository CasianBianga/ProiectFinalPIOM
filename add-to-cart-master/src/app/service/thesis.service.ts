import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ThesisI} from "../component/interface/thesis";
import {UserI} from "../component/interface/user";

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) {
  }

  getThesis(): Observable<Array<ThesisI>> {
    return this.http.get<Array<ThesisI>>(this.url + '/thesis');
  }

  addThesis(thesis: ThesisI): Observable<ThesisI> {
    return this.http.post<ThesisI>(this.url + '/thesis', thesis);
  }

  manageThesisForStudent(student: UserI): Observable<UserI> {
    return this.http.put<UserI>(this.url + '/users/' + student.id, student);
  }
}

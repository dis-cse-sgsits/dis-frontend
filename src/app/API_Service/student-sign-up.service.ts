import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentSignUpService {

  private baseUrl = 'http://localhost:8090/dis';

  constructor(private http: HttpClient) { }

  public createStudentSignUp(StudentSignUp: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/signup`, StudentSignUp);
  }

}
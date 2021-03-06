import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Components/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersURL = 'api/friends';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }
}

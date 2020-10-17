import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../_shared/models/people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People> {

    const url = `https://swapi.dev/api/people/`;

    return this.http.get<People>(url);

  }

}

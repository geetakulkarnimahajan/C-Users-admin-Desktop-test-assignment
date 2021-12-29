import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get('https://randomuser.me/api/').pipe(
      map((data: any) => data)
    );
  }
}

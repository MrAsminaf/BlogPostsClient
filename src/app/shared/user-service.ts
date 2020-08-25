import { Injectable } from '@angular/core'
import { IUser } from '../users/user'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, tap} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url: string = 'http://localhost:6600/api/users/';

    constructor(private http: HttpClient) { }

    getUsers() : Observable<IUser[]> {
        return this.http.get<IUser[]>(this.url).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.processError)
        );
    }

    private processError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          return throwError(
            'Something bad happened; please try again later.');
    }
}
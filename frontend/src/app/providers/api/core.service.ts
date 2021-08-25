import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const API_URL = 'http://localhost';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  getAPIUrl(): string {
    return API_URL;
  }

  get(serviceURL: string): Observable<any> {
    return this.http.get(
      `${API_URL}${serviceURL}`,
      {headers: this.headers}
    ).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  post(serviceURL: string, data: any): Observable<any> {
    return this.http.post(
      `${API_URL}${serviceURL}`,
      data,
      {headers: this.headers}
    ).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  put(serviceURL: string, data: any): Observable<any> {
    return this.http.put(
      `${API_URL}${serviceURL}`,
      data,
      { headers: this.headers }
    ).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  delete(serviceURL: string): Observable<any> {
    return this.http.delete(
      `${API_URL}${serviceURL}`,
      {headers: this.headers}
    ).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  // Handle Errors
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error.hasOwnProperty("message")) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    baseURL: string = "http://localhost:5000/api/v1/";

    // With more time would add proper error handling and error messages when using this service.
    // Also would add definition of content being returned by calls

    login(email: string, password: string): Observable<any> {
        return this.http.post(this.baseURL + 'auth/login', {email: email, password: password}, { observe: 'response', withCredentials: true })
    }

    logout(): Observable<any> {
        return this.http.get(this.baseURL + 'auth/logout', { observe: 'response', withCredentials: true })
    }

    getCollection(): Observable<any> {
        return this.http.get(this.baseURL + 'collections/getMyStarWarsCollection', { observe: 'response', withCredentials: true })
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globals } from 'src/app/utils/global';

@Injectable({
    providedIn: 'root'
})
export class HomeService {


    constructor(private http: HttpClient) {
    }


    getAll(): Observable<any> {
        return this.http.get<any>(`${globals.configUrl}/users`);
    }

    getByEmailAndPassword(email: string, password: string): Observable<any> {
        return this.http.get<any>(`${globals.configUrl}/users?email=${email}&password=${password}`);
    }

    add(user: any): Observable<any> {
        return this.http.post<any>(`${globals.configUrl}/users`, user);
    }

    getPassword(password: string): Observable<any> {
        return this.http.get<any>(`${globals.configUrl}/users?password=${password}`);
    }

    getUserByEmail(email: string): Observable<any> {
        return this.http.get<any>(`${globals.configUrl}/users?email=${email}`);
    }

}
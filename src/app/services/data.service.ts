import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url);
    }
}

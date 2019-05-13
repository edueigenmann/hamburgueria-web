import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class LanchesService {

    _baseUrl: string = 'http://localhost:8080/';
    constructor(private http?: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(`${this._baseUrl}lanche/getAll`);
    }

}
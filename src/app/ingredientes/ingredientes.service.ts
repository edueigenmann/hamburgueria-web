import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class IngredientesService {

    _baseUrl: string = 'http://localhost:8080/';
    constructor(private http?: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(`${this._baseUrl}ingrediente/getAll`);
    }

    somaIngrediente(data): Observable<any> {
        return this.http.post(`${this._baseUrl}promocao/consultaPromocao/`, data);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    get token (){
        return localStorage.getItem('token') || '';
    }

    get headers(){
        return {
            headers: {
              'x-token': this.token
            }
          }
    }

    public loginUser(formData: FormData) {
        console.log(formData);
        return this.http.post(`${base_url}/auth/login`, formData )
            .pipe(
                tap((res: any) => {
                    console.log(res);
                    localStorage.setItem('token', res.token);
                })
            );
    }

    public validarToken(): Observable<boolean> {
        const token = localStorage.getItem('token') || '';
        return this.http.get(`${base_url}/auth/renew`, {
            headers: {
                'x-token': token
            }
        }).pipe(
            tap((res: any) => {
                localStorage.setItem('token', res.token);
            }),
            map(res => true),
            catchError(error => of(false))
        );
    }

    public getUsuarios(desde?){
        const url = `${base_url}/usuarios?desde=${desde}`;
        return this.http.get(url, this.headers);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:5000/api/login`, { username, password })
        .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    // user.authdata = window.btoa(username + ':' + password);
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user);
                }

                return user;
            }));
        
        }

    register(uuid: string, username: string, password: string,)
    {
        return this.http.post<any>(`http://localhost:5000/api/register`, { uuid, username, password, })
        .pipe(map(user => {
            console.log('service', user);
            return user;
        }));
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    
    async encodeToken(uuid:string): Promise <any> {
        console.log ("token: in function")
        const response = await this.http.post (`http://localhost:5000/api/token`, { uuid}).toPromise();
        return response;
    }
}
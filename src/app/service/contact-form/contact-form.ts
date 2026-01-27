import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContactForm  {

    private httpClient = inject(HttpClient);
    private readonly url = 'http://localhost:3000/api/contact';
    constructor() { }
    
    postContactForm(data: any): Observable<any>{
        return this.httpClient.post(this.url, data);
    }
}
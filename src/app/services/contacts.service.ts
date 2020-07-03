import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contactos: any[] = [];

  constructor(private http: HttpClient) { }

  postContactos(contacto: any) {
    return this.http.post('http://localhost:3000/api/contactos', contacto);
  }
}

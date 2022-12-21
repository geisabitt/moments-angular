import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { Response } from '../Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baceApiUrl = environment.baseApiUrl
  private apiUrl=`${this.baceApiUrl}api/moments`

  constructor(private http: HttpClient) {}
  //chamando todos os momentos 
  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl)
  }
  //chamando o momento individual
  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData)
  }
  //excluindo o momento
  removeMoment(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url); 
  }
  //editando um momento
  async updateMoment(id: number, formData: FormData): Promise<Observable<FormData>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}


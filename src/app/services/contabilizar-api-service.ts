import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContabilizarApiService {

  private baseUrl: string = 'https://api-contabilizar.leandropitta.com.br/api/contabilizar';

  constructor(private httpClient: HttpClient) { }

  getLancamentos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  getLancamentoById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

  updateLancamento(id: number, status: string, ultimoStatus: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    const data = {
      status: status,
      ultimoStatus: ultimoStatus
    };
    return this.httpClient.put<any>(url, data);
  }
}

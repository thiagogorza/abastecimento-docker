import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AbastecimentoModel} from './abastecimento.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbastecimentoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(placa?: string): Observable<AbastecimentoModel[]> {
    const url = placa ? `${this.apiUrl}?placa=${placa}` : this.apiUrl;
    return this.http.get<AbastecimentoModel[]>(url);
  }

  salvar(abastecimento: AbastecimentoModel): Observable<AbastecimentoModel> {
    return this.http.post<AbastecimentoModel>(this.apiUrl, abastecimento);
  }

  remover(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

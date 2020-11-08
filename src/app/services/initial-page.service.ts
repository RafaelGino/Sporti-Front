import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadoFazendaModel } from '../models/estado-fazenda.model';
import { SportiModel } from '../models/sporti.model';

@Injectable({
  providedIn: 'root'
})
export class InitialPageService {

  constructor(protected http: HttpClient) { }

  protected getApiUrl(route: string = null): string {
    return `${environment.WEBAPI_URL}/${route}`;
  }

  public returnData(){
    return this.http.get<EstadoFazendaModel>(this.getApiUrl("sporti"));
  }
}

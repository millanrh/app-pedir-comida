import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categorias';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private url = 'assets/database.json';

  constructor(private http: HttpClient) { }  

  async getAll(): Promise<Categoria[]> {
    return await firstValueFrom(this.http.get<Categoria[]>(this.url));
  }

  async getById(id:number): Promise<Categoria | undefined> {
    const categorias = await firstValueFrom(this.http.get<Categoria[]>(this.url));
    return categorias.find(categoria => categoria.id === id);
  } 
  
}

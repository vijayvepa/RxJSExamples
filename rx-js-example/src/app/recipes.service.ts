import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { environment } from 'src/environments/environment';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
	return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`)
  }
}

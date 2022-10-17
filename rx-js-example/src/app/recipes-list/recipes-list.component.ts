import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

	recipes!: Recipe[];

	

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
	this.service.getRecipes().subscribe(result =>{
		this.recipes = result;
	});
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  subscription?: Subscription;

  constructor(private service: RecipesService) {
    this.subscription = undefined;
  }

  ngOnInit(): void {
    this.subscription = this.service.getRecipes().subscribe((result) => {
      this.recipes = result;
    });
  }

  ngDestroy(): void{
	this.subscription?.unsubscribe();
  }
}

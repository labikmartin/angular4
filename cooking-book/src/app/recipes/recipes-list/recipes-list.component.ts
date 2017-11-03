import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test', 'Test description', 'https://picsum.photos/200'),
    new Recipe('Test2', 'Test description', 'https://picsum.photos/200'),
    new Recipe('Test3', 'Test description', 'https://picsum.photos/200'),
  ];

  constructor() {

  }

  ngOnInit() {
    // console.log(this.recipes);
  }

}

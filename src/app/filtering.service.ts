import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  private _themes = [
    {
      "name": "Voyage"
    },
    {
      "name": "Noir et Blanc"
    }
  ];
  
  private _orientations = [
    {
      "name": "Portrait"
    },
    {
      "name": "Paysage"
    },
    {
      "name": "Carré"
    },
    {
      "name": "Panoramique"
    }
  ];

  constructor() { }

  public get themes() {
    return this._themes;
  }

  public get orientations() {
    return this._orientations;
  }

}

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

  private _formats = [
    {
      "name": "Classique"
    },
    {
      "name": "Grand"
    },
    {
      "name": "Géant"
    },
    {
      "name": "Collector"
    }
  ];
  
  private _prices = [
    {
      "name": "Moins de 50€"
    },
    {
      "name": "De 50€ à 100€"
    },
    {
      "name": "De 100€ à 200€"
    },
    {
      "name": "De 200€ à 500€"
    },
    {
      "name": "De 500€ à 1000€"
    }
  ];

  constructor() { }

  public get themes() {
    return this._themes;
  }

  public get orientations() {
    return this._orientations;
  }

  public get formats() {
    return this._formats;
  }

  public get prices() {
    return this._prices;
  }

}

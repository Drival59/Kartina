import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotographsService {

  private _allPhotos = [
    {
      "url": "noir_blanc.jpg",
      "name": "Lion majestueux",
      "artist": "HANARD Valentin",
      "price": 150,
      "interval": "De 100€ à 200€",
      "theme": "Noir et Blanc",
      "orientation": "Paysage",
      "format": "Grand"
    },
    {
      "url": "everest.jpg",
      "name": "Le mont Everest",
      "artist": "DENYS Manu",
      "price": 299,
      "interval": "De 200€ à 500€",
      "theme": "Voyage",
      "orientation": "Panoramique",
      "format": "Collector"
    },
    {
      "url": "last.jpg",
      "name": "En famille",
      "artist": "CARPENTIER Maxime",
      "price": 99,
      "interval": "De 50€ à 100€",
      "theme": "Life",
      "orientation": "Paysage",
      "format": "Classique"
    },
    {
      "url": "voyage.jpg",
      "name": "Bus sur la plage",
      "artist": "LOISEL Pauline",
      "price": 149,
      "interval": "De 100€ à 200€",
      "theme": "Life",
      "orientation": "Carré",
      "format": "Géant"
    }
  ];

  public get allPhotos() {
    return this._allPhotos;
  }
  public set allPhotos(value) {
    this._allPhotos = value;
  }
  
  constructor() { }
}

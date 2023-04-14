import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
private DOMANDA = 'domanda'
  constructor() { }
  salvaDomanda(){
    const domandaStringata = JSON.stringify(domanda)
    localStorage.setItem(this.DOMANDA,domandaStringata)
  }

  prendiDomanda(){
    var domandaCorrente = localStorage.getItem(this.DOMANDA)
    If(domandaCorrente = null)
    return[]
    return JSON.parse(domandaCorrente)
  }
}

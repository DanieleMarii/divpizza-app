import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  catalogo:Array<Object> = []

  ionViewDidEnter() {
    console.log("EXECUTOU O VIEW DID ENTER")
    this.catalogo.push({
      nome: 'Queijo Maluco Gourmet',
      descricao: 'Queijo, Catupiry, Batata Palha, Cogumelos, Manjericão e mais umacolher de caviar.',
      preco: 'R$72,00'
    })
  }

}

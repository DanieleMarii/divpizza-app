import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {

  idPizza;
  nomePizza;
  descricaoPizza;
  precoPizza;
  divisor;
  precoPizzaFixo;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.idPizza = this.activatedRoute.snapshot.params.id
    let pizzaString = localStorage.getItem(this.idPizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    this.nomePizza = pizzaObjeto.nomePizza;
    this.descricaoPizza = pizzaObjeto.descricaoPizza;
    this.precoPizza = pizzaObjeto.precoPizza;
    this.precoPizzaFixo = this.precoPizza

  }
  incrementar() {
    this.divisor++
  }
  decrementar() {
    if (this.divisor > 1) {
      this.divisor++
    }
  }
  atualizaPreco() {
    this.precoPizza = (parseFloat(this.precoPizzaFixo)
      / this.divisor).toFixed(2)
  }
  atualizarComRange() {
    this.atualizaPreco()
  }
}

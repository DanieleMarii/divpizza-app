import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(pizza) {
    const pizzaDados = pizza.value
    console.log(pizzaDados)
  }

}

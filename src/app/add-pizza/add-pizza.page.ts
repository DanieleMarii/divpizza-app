import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

  constructor(private toast:ToastController, private nav:NavController) { }

  ngOnInit() {
  }

  salvar(pizza) {
    const pizzaDados = pizza.value
    const pizzaDadosString = JSON.stringify(pizzaDados)
    console.log(pizzaDadosString)

    const chavePizza = Math.random() * 999
    console.log(chavePizza)
    console.log(chavePizza.toString())

    localStorage.setItem(chavePizza.toString(), pizzaDadosString)
    this.exibirMensagemSucesso()
    this.voltarParaHome()
  }

  voltarParaHome() {
    this.nav.back()
  }

  exibirMensagemSucesso() {
    this.toast.create({
      message: 'Pizza Cadastrada.',
      duration: 2000,
      color: 'dark'
    }).then(toast => {
      toast.present()
    })

  }

}

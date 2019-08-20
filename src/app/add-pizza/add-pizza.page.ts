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
    const chavePizza = Math.random() * 999
    const pizzaDados = pizza.value
    pizzaDados.id = chavePizza
    const pizzaDadosString = JSON.stringify(pizzaDados)
    console.log(pizzaDadosString)

    console.log(chavePizza)
    console.log(chavePizza.toString())

    localStorage.setItem(chavePizza.toString(), pizzaDadosString)
    this.exibirMensagemSucesso()
    this.voltarParaHome()
  }

  voltarParaHome() {
    this.nav.back()
  }

  async exibirMensagemSucesso() {
    let criacaoDoToast = await this.toast.create({
      message: 'Pizza Cadastrada.',
      duration: 2000,
      color: 'dark'
    })
    criacaoDoToast.present()
  }

}

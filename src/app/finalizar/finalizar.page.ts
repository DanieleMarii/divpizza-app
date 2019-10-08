import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {
  cep:string;
  constructor() { }

  ngOnInit() {
  }
async buscarEndereco(){
console.log(this.cep)
fetch("https://viacep.com.br/ws/"+ this.cep+"/json").then(function(dados){
console.log("Os dados retornados da API são:"+dados)
dados.json().then(function(endereco){
  console.log(endereco)
})
})
}
}

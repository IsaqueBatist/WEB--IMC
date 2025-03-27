import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  peso: number = 0
  altura: number = 0
  resultado: number = 0
  resultadoIMC: string = ""
  imagem: string = ""

  @Output() imagemSelecionada = new EventEmitter<string>()

  calcularIMC() {
    if (this.peso <= 0 || this.altura <= 0) {
      this.imagem=""
      this.imagemSelecionada.emit(this.imagem)
      this.resultadoIMC = ''
      this.resultado = 0
      return
    };

    this.resultado = this.peso / (this.altura * this.altura);
    if(this.resultado > 0 && this.resultado <1) this.resultado *= 10000

    this.resultado = parseFloat(this.resultado.toFixed(2))
    this.resultadoIMC = this.verificarIMC()
  }

  verificarIMC(){
    if (this.resultado <= 18.5) {
      this.imagem = "pesoAbaixo.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Abaixo-do-peso';
    } else if (this.resultado > 18.5 && this.resultado <= 24.9) {
      this.imagem = "pesoNormal.png"
      this.imagemSelecionada.emit(this.imagem);
      return 'Peso-normal';
    } else if (this.resultado >= 25 && this.resultado <= 29.9) {
      this.imagem = "acimaPeso.jpeg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Sobrepeso';
    } else if (this.resultado >= 30 && this.resultado <= 34.9){
      this.imagem = "obesidadegrauI.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Obesidade grau  I';
    }else if (this.resultado > 34.9 && this.resultado <=39.9){
      this.imagem = "obesidadegrauII.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Obesidade grau II'
    }else {
      this.imagem = "obesidadegrauIII.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'obesidade grau III'
    }
    }
  }


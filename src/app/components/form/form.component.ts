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
  imagem: string = "happycat.jpg"

  @Output() imagemSelecionada = new EventEmitter<string>()

  calcularIMC() {
    this.resultado = parseFloat((this.peso / Math.pow(this.altura, 2)).toFixed(2));
    this.resultadoIMC = this.verificarIMC()
  }

  verificarIMC(){
    if (this.resultado < 18.5) {
      this.imagem = "pesoAbaixo.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Abaixo-do-peso';
    } else if (this.resultado >= 18.5 && this.resultado <= 24.9) {
      this.imagem = "pesoNormal.png"
      this.imagemSelecionada.emit(this.imagem);
      return 'Peso-normal';
    } else if (this.resultado >= 25 && this.resultado <= 29.9) {
      this.imagem = "acimaPeso.jpeg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Sobrepeso';
    } else if (this.resultado >29.9){
      this.imagem = "obesidade.jpg"
      this.imagemSelecionada.emit(this.imagem);
      return 'Obesidade';
    }else {
      return ''
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'projeto3IMC';
  imagem: string = ""

  ngOnInit(): void {
    this.verificarImagem()
  }

  atualizarImagem(url: string) {
    this.imagem = url;
    console.log(this.imagem)
    this.verificarImagem()
  }

  verificarImagem(){
    const elemento = document.getElementById('imagemTag')
    if(this.imagem === ''){
      elemento?.classList.add('d-none')
    }else {
      elemento?.classList.remove('d-none')
    }
  }
}

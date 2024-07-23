import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // lista de items, no caso os dados dos usuários como objetos
  items: object[] = [
    {
      foto: 'gab.svg',
      nomeCompleto: 'Gabriel Santiago Moreno',
      nome: 'Gabriel S.',
      cargo: 'Desenvolvedor Sênior',
      doing: [
        'Estruturação do Backend do Taurus para novo módulo: Portaria.',
      ],
      pending: 8,
      done: 15
    },
    {
      foto: 'fra.svg',
      nomeCompleto: 'Franklin Volgan Antunes',
      nome: 'Franklin V.',
      cargo: 'Designer Sênior',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Criação de arte para quadro Projex Consulting e Energin Sustentabilidade com informações de Missão, Visão e Valores.',
      ],
      pending: 5,
      done: 25
    },
    {
      foto: 'alan.svg',
      nomeCompleto: 'Alan Pimentel Magalhães',
      nome: 'Alan P.',
      cargo: 'Designer Sênior',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.'
      ],
      pending: 2,
      done: 32
    },
    {
      foto: 'car.svg',
      nomeCompleto: 'Carlos Mafra',
      nome: 'Carlos M.',
      cargo: 'Desenvolvedor Sênior',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.'
      ],
      pending: 8,
      done: 15
    },
    {
      foto: 'rod.svg',
      nomeCompleto: 'Rodrigo Paulo',
      nome: 'Rodrigo P.',
      cargo: 'Desenvolvedor Sênior',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.'
      ],
      pending: 2,
      done: 32
    },
    {
      foto: 'kar.svg',
      nomeCompleto: 'Karol Antunes',
      nome: 'Karol A.',
      cargo: 'Desenvolvedora Android',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Criação de arte para quadro Projex Consulting e Energin Sustentabilidade com informações de Missão, Visão e Valores.'
      ],
      pending: 5,
      done: 25
    },
    {
      foto: 'mar.svg',
      nomeCompleto: 'Seu Marcos',
      nome: 'Marcos F.',
      cargo: 'Gerente',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.'
      ],
      pending: 8,
      done: 15
    },
    {
      foto: 'hen.svg',
      nomeCompleto: 'Henrique',
      nome: 'Henrique',
      cargo: 'Administrativo',
      doing: [
        'Prototipagem de versão mobile da tela de Gerenciamento de Demandas.',
        'Modelagem do 1º andar Projex Consulting no sketchup e renderização no enscape.',
      ],
      pending: 2,
      done: 32
    },
  ];
  // verifica se o cartão está ativado
  verify?: boolean;
  // verifica qual cartão está ativado
  actualItem?: object;

  // reagrupa a lista de items em grupos de até 3 items
  conjunto = this.converteLista(this.items, 3);
  // função de conjunto
  converteLista(array: object[], size: number): object[][] {
    const result: object[][] = [];
    for (let i = 0; i < array.length; i += size) {
      const newList = array.slice(i, i + size);
      result.push(newList);
    }
    return result;
  }

  // // verifica se o cartão está ativado
  getVerification(verify: boolean): void {
    this.verify = verify;
  }

  // define qual o item que está sendo aberto
  getItem(item: object): void {
    if (this.verify) {
      this.actualItem = item;
    } else {
      this.actualItem = undefined;
    }
  }

  // track do indice da lista de objetos sendo enviado para o componente filho
  trackByFn(index: number, item: object): object {
    return item;
  }
}

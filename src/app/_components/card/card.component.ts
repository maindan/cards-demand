import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, Output, EventEmitter, Input } from '@angular/core';

// animação de width
const openClose = trigger('openClose', [
  state(
    'open',
    style({
      transform: 'translate(0px, -2px)',
      width: 100,
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      transform: 'translate(0px, 0px)',
      width: 22,
      opacity: 0.8
    })
  ),
  transition('open => close', [animate('2s ease-out')]),
  transition('close => open', [animate('2s ease-in')])
]);

// animação de width
const inform = trigger('inform', [
  state(
    'open',
    style({
      opacity: 1,
      width: '100%',
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
      width: '50%',
    })
  ),
  transition('open => close', [animate('2s ease-out')]),
  transition('close => open', [animate('2s ease-in')])
]);

// animação de fade
const fadeInOut = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.2s ease-in',
                style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.2s ease-out',
                style({ opacity: 0 }))
      ]
    )
  ]
);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [openClose, fadeInOut, inform]
})

export class CardComponent {
  // recebendo dados do cartão
  @Input() itemData!: { index: number, item: any };
  // verifica se um cartão está aberto
  verify: boolean = false;

  // enviando para o componente pai quando um card é aberto
  @Output() verification = new EventEmitter<boolean>();
  // enviando para o componente pai qual card está aberto
  @Output() actualCard = new EventEmitter<any>();

  // evento acionado ao clicar em um card
  clickEvent(): void {
    this.isOpen();
    this.sendVerification();
    this.sendItem();
  }

  // controle de state do card (entre open e close)
  isOpen(): void {
    this.verify = !this.verify;
    console.log('child:', this.verify);
    console.log('child:', this.itemData);
  }

  // evento de output para quando um card é aberto
  sendVerification(): void {
    this.verification.emit(this.verify);
  }
  // evento de output informando qual card está aberto
  sendItem(): void {
    this.actualCard.emit(this.itemData);
  }

  // definição de classe dinâmica de acordo com a posição do card
  getClasses() {
    return {['expanded-' + this.itemData.index]: this.verify};
  }

  // definição de height dinâmico de acordo com a quantidade de itens em 'demanda atual'
  getHeight(): string {
    if (this.verify) {
      const baseHeight = 170;
      let itemHeight = 80;
      const numItems = this.itemData.item.doing.length;
      if(numItems < 2) {
        itemHeight = 90;
      } else if (numItems > 3) {
        itemHeight = 73;
      }
      return `${baseHeight + (itemHeight * numItems)}px`;
    }
    return '170px';
  }

}


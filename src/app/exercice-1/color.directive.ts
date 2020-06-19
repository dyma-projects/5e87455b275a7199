import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[monColor]' })
export class ColorDirective {

  constructor() {}

  @HostBinding('style.color') couleur: string;

  @HostListener('document:keydown' , ['$event']) onKeydown(e) {

    switch (e.key) {
      case 'ArrowUp':
        this.couleur = 'red'
        break;
      case 'ArrowRight':
        this.couleur = 'blue'
        break;
      case 'ArrowDown':
        this.couleur = 'green'
        break;
      case 'ArrowLeft':
        this.couleur = 'pink'
        break;
    
      default:
        break;
    }
  }




}
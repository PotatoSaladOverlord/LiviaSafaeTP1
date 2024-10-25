import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-carre-couleur',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './carre-couleur.component.html',
  styleUrl: './carre-couleur.component.scss'
})
export class CarreCouleurComponent {
  @Input() couleur: string = '#000000';
  @Output() couleurFond_emmiter = new EventEmitter<string>();

  onClick() {
    this.couleurFond_emmiter.emit(this.couleur);
  }
}

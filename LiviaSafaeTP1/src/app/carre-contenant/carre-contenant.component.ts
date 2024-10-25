import {Component, EventEmitter, Output} from '@angular/core';
import {CarreCouleurComponent} from "../carre-couleur/carre-couleur.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-carre-contenant',
  standalone: true,
  imports: [
    CarreCouleurComponent,
  ],
  templateUrl: './carre-contenant.component.html',
  styleUrl: './carre-contenant.component.scss'
})
export class CarreContenantComponent {
  @Output() couleurFond_emmiter = new EventEmitter<string>();

  changerCouleur(couleur: string) {
    this.couleurFond_emmiter.emit(couleur);
  }
}

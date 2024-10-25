import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarreContenantComponent} from "./carre-contenant/carre-contenant.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarreContenantComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LiviaSafaeTP1';
  @Input() couleurFond: string ="#FFFFFF";

  changerCouleur(couleur: string) {
    this.couleurFond = couleur;
  }
}

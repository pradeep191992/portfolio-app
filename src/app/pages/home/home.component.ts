import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContributionsComponent } from '../../components/contributions/contributions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ContributionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

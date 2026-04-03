import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContributionsComponent } from '../../components/contributions/contributions.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AchievementsComponent,
    ContributionsComponent,
    SkillsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

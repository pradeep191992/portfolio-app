import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Achievement } from '../../models/portfolio.models';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
    selector: 'app-achievements',
    standalone: true,
    imports: [CommonModule, ScrollAnimateDirective],
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
    achievements: Achievement[];

    constructor(private dataService: PortfolioDataService) {
        this.achievements = this.dataService.getAchievements();
    }
}

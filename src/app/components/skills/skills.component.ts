import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, ScrollAnimateDirective],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    skillCategories: { category: string; icon: string; skills: string[] }[];

    constructor(private dataService: PortfolioDataService) {
        this.skillCategories = this.dataService.getSkillCategories();
    }
}

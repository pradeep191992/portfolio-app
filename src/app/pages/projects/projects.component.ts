import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.models';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollAnimateDirective],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projects: Project[];
    featuredProjects: Project[];
    otherProjects: Project[];

    constructor(private dataService: PortfolioDataService) {
        this.projects = this.dataService.getProjects();
        this.featuredProjects = this.projects.filter(p => p.featured);
        this.otherProjects = this.projects.filter(p => !p.featured);
    }
}

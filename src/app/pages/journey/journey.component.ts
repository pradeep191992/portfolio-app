import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience, Skill, Education, Certification } from '../../models/portfolio.models';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {
  experiences: Experience[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];

  constructor(private dataService: PortfolioDataService) {
    this.experiences = this.dataService.getExperiences();
    this.skills = this.dataService.getSkills();
    this.education = this.dataService.getEducation();
    this.certifications = this.dataService.getCertifications();
  }
}

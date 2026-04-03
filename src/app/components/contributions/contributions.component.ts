import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Contribution } from '../../models/portfolio.models';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contributions',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './contributions.component.html',
  styleUrl: './contributions.component.scss'
})
export class ContributionsComponent {
  contributions: Contribution[];

  constructor(private dataService: PortfolioDataService) {
    this.contributions = this.dataService.getContributions();
  }
}

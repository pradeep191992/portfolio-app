import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SocialLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialLinks: SocialLink[];
  currentYear = new Date().getFullYear();

  constructor(private dataService: PortfolioDataService) {
    this.socialLinks = this.dataService.getSocialLinks();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SocialLink } from '../../models/portfolio.models';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule, ScrollAnimateDirective],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    socialLinks: SocialLink[];
    formData = {
        name: '',
        email: '',
        message: ''
    };
    submitted = false;

    constructor(private dataService: PortfolioDataService) {
        this.socialLinks = this.dataService.getSocialLinks();
    }

    onSubmit(): void {
        this.submitted = true;
        setTimeout(() => this.submitted = false, 3000);
        this.formData = { name: '', email: '', message: '' };
    }
}

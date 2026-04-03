import { Injectable } from '@angular/core';
import {
    PersonalInfo,
    Experience,
    Skill,
    Contribution,
    Project,
    NavLink,
    SocialLink,
    Achievement,
    Education,
    Certification
} from '../models/portfolio.models';

@Injectable({
    providedIn: 'root'
})
export class PortfolioDataService {

    getPersonalInfo(): PersonalInfo {
        return {
            name: 'Pradeep Saini',
            initials: 'PS',
            title: 'Senior Consultant',
            tagline: 'Senior Consultant | Frontend Developer | Angular',
            headline: 'Building Scalable',
            headlineHighlight: 'Angular Applications',
            description: 'Senior Frontend Developer with <span class="text-slate-900 dark:text-white font-semibold">10+ years of experience</span> specialising in Angular development, performance optimisation, and scalable component architecture. Passionate about building clean, maintainable interfaces and leveraging modern AI-powered tools.',
            currentFocus: 'Leading performance optimization of enterprise Angular applications at <span class="text-slate-900 dark:text-slate-200 font-semibold">Intact Insurance</span>, leveraging AI-powered tools like Devin, Intact GPT, and GitHub Copilot to accelerate development productivity.',
            availabilityStatus: 'Senior Consultant at Intact Insurance',
            yearsOfExperience: '10+',
            photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8gRnJWWLExJWk6VeQepS5Ho6v4wnlyI31jIQ86ZGHgiWYqh0YJsvEeLQKAvybpOsYl9qxQUydrEmIiDSwqzvuH22C5zhxhVaIMU8LnPb2N72DC3w706P3lGea2bp-yk8ZbglCG9YdBcCuyITkXfJc3s03noNSwgPG7WciHzX7mCQLkufJvk1DRdVO2hybsi2R3Hty2JVadHPDm6BUOzeX75d-J145S7BpBS_MzPCoOT_AX4AVKodiQFgSfrWOj4zOCSM206VIKiF8',
            email: 'pradeepsaini1199@gmail.com',
            phone: '+91 9599215144',
            location: 'Faridabad, India',
            linkedIn: 'https://linkedin.com/in/pradeepsaini1',
            github: 'https://github.com/pradeep191992',
            techBadges: [
                { name: 'Angular', colorClass: 'bg-primary/20', borderClass: 'border-primary/30' },
                { name: 'TypeScript', colorClass: 'bg-blue-500/20', borderClass: 'border-blue-500/30' },
                { name: 'SCSS', colorClass: 'bg-slate-500/20', borderClass: 'border-slate-500/30' }
            ],
            stats: [
                { icon: 'engineering', value: '10+ Years', label: 'Angular Expertise' },
                { icon: 'star', value: '600+', label: 'Contributions at Intact' },
                { icon: 'groups', value: '8-9 Teams', label: 'Mentored' }
            ]
        };
    }

    getNavLinks(): NavLink[] {
        return [
            { label: 'Home', path: '/', exact: true },
            { label: 'Journey', path: '/journey', exact: false },
            { label: 'Projects', path: '/projects', exact: false },
            { label: 'Contact', path: '/contact', exact: false }
        ];
    }

    getAchievements(): Achievement[] {
        return [
            {
                icon: 'emoji_events',
                title: 'Outstanding Performance Rating',
                description: 'Recognized at Intact Insurance (FY 2025-26) for exceptional productivity with over 600 high-impact contributions.'
            },
            {
                icon: 'military_tech',
                title: '\'Consider It Done\' Award',
                description: 'Recipient at EX Squared for exceptional ownership, reliability, and consistent delivery of high-impact contributions.'
            },
            {
                icon: 'speed',
                title: 'Reusable Component Libraries',
                description: 'Significantly reduced development time by building scalable, reusable Angular component libraries adopted across multiple projects.'
            }
        ];
    }

    getExperiences(): Experience[] {
        return [
            {
                dateRange: 'Jun 2025 — Present',
                title: 'Senior Consultant',
                company: 'Intact Insurance',
                location: 'Gurgaon, India',
                icon: 'domain',
                iconType: 'material',
                isCurrent: true,
                responsibilities: [
                    'Leading performance optimization of an existing enterprise Angular application, identifying and resolving bottlenecks to significantly improve load times and runtime efficiency.',
                    'Leveraging AI-powered development tools — Devin, Intact GPT, and GitHub Copilot — to accelerate code analysis, automate repetitive tasks, and enhance overall development productivity.',
                    'Driving modernization of UI component library by migrating and upgrading Angular Material components to align with latest design standards and accessibility guidelines.',
                    'Building and maintaining a Storybook component library to document, test, and showcase reusable UI components for consistency across teams.',
                    'Collaborating with cross-functional teams to define frontend architecture best practices and ensure scalable, maintainable code.',
                    'Mentored and supported 8-9 teams of developers, providing guidance on frontend best practices, debugging, and code structure.',
                    'Collaborated with the ARS team to enhance test script reliability by implementing unique, stable e2e IDs across UI components.',
                    'Contributing to code reviews, technical documentation, and agile delivery cycles.'
                ],
                skills: ['Angular', 'TypeScript', 'Storybook', 'Angular Material', 'AI Tools']
            },
            {
                dateRange: 'Mar 2018 — Jun 2025 (7 yrs 3 mos)',
                title: 'Senior Software Engineer',
                company: 'EX Squared',
                location: 'Faridabad, India',
                icon: 'data_exploration',
                iconType: 'material',
                isCurrent: false,
                projectName: 'SLB CDS — Oilfield Client Onboarding & Order Creation',
                responsibilities: [
                    'Developed and maintained responsive web applications using Angular, HTML5, CSS3, and JavaScript.',
                    'Implemented 100+ reusable Angular components, resulting in a 25% reduction in development time across multiple client projects.',
                    'Designed and implemented mobile-first layouts using Tailwind CSS.',
                    'Integrated third-party APIs for real-time order tracking and updates.',
                    'Reduced initial application load time by 20% by implementing lazy loading and optimizing bundle size.'
                ],
                skills: ['Angular', 'RxJS', 'Tailwind CSS', 'TypeScript', 'Performance']
            },
            {
                dateRange: 'Mar 2018 — Jun 2025',
                title: 'Senior Software Engineer',
                company: 'EX Squared',
                location: 'Faridabad, India',
                icon: 'home',
                iconType: 'material',
                isCurrent: false,
                projectName: 'HomLuv — Home Search Platform',
                responsibilities: [
                    'Developed web pages using Angular, HTML, CSS, and JavaScript, enhancing user engagement.',
                    'Created reusable CSS/SCSS mixins and variables to improve code maintainability.',
                    'Ensured cross-browser compatibility across all major browsers.',
                    'Collaborated with designers to maintain brand consistency and developed UI from prototypes.',
                    'Conducted code reviews to maintain code quality and enforce best practices across the team.',
                    'Mentored and supported 8-9 teams of developers, providing guidance on frontend best practices.'
                ],
                skills: ['Angular', 'SCSS', 'Code Reviews', 'Mentoring', 'UI/UX']
            },
            {
                dateRange: 'Nov 2015 — Mar 2018',
                title: 'Software Engineer',
                company: 'Adventesoft Solution, Kaffeine Labs & MCube Web Technology',
                icon: 'rocket_launch',
                iconType: 'material',
                isCurrent: false,
                responsibilities: [
                    'Built and maintained client-facing web pages and portals using HTML, CSS, JavaScript, jQuery, and Bootstrap across multiple agencies.',
                    'Developed and customised WordPress themes and responsive HTML email templates tailored to client brand requirements.',
                    'Collaborated with designers to translate mockups into pixel-perfect, cross-browser compatible web pages.'
                ],
                skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap']
            }
        ];
    }

    getSkills(): Skill[] {
        return [
            { name: 'Angular & TypeScript', percentage: 98 },
            { name: 'Performance Optimization', percentage: 95 },
            { name: 'Component Architecture', percentage: 96 },
            { name: 'SCSS / CSS3 / Tailwind', percentage: 94 },
            { name: 'RxJS & State Management', percentage: 90 }
        ];
    }

    getSkillCategories(): { category: string; icon: string; skills: string[] }[] {
        return [
            {
                category: 'Core Expertise',
                icon: 'code',
                skills: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'CSS3', 'JavaScript', 'Performance Optimization', 'RxJS']
            },
            {
                category: 'Tools & Platforms',
                icon: 'terminal',
                skills: ['Git', 'GitHub', 'JIRA', 'Storybook', 'NX', 'Devin', 'Intact GPT', 'GitHub Copilot']
            },
            {
                category: 'Styling & Libraries',
                icon: 'palette',
                skills: ['Tailwind CSS', 'FlexBox', 'PrimeNG', 'Angular Material', 'Bootstrap', 'GSAP']
            },
            {
                category: 'Familiar With',
                icon: 'explore',
                skills: ['React', 'Vue.js']
            }
        ];
    }

    getContributions(): Contribution[] {
        return [
            { icon: 'domain', name: 'Intact Insurance' },
            { icon: 'data_exploration', name: 'EX Squared' },
            { icon: 'oil_barrel', name: 'SLB (Schlumberger)' }
        ];
    }

    getProjects(): Project[] {
        return [
            {
                title: 'Enterprise Insurance Platform',
                description: 'Leading performance optimization of an enterprise Angular application at Intact Insurance. Driving Angular Material migration, Storybook component library, and AI-powered development workflows with 600+ contributions.',
                techStack: ['Angular', 'TypeScript', 'Angular Material', 'Storybook', 'AI Tools'],
                featured: true
            },
            {
                title: 'SLB CDS — Oilfield Client Onboarding',
                description: 'Built a complex client onboarding and order creation system for Schlumberger. Implemented 100+ reusable Angular components, achieving 25% reduction in development time and 20% faster load times via lazy loading.',
                techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'RxJS'],
                featured: true
            },
            {
                title: 'HomLuv — Home Search Platform',
                description: 'Developed a feature-rich home search platform with Angular, creating reusable SCSS mixins, ensuring cross-browser compatibility, and collaborating closely with design teams on brand-consistent UI.',
                techStack: ['Angular', 'SCSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
                featured: false
            },
            {
                title: 'Reusable Component Library',
                description: 'Built scalable, reusable Angular component libraries adopted consistently across multiple projects, significantly reducing development time across teams and ensuring design consistency.',
                techStack: ['Angular', 'Storybook', 'TypeScript', 'SCSS', 'NX'],
                featured: false
            }
        ];
    }

    getEducation(): Education[] {
        return [
            {
                degree: 'Master of Computer Applications (MCA)',
                institution: 'Lovely Professional University',
                period: '2014 – 2016',
                icon: 'school'
            },
            {
                degree: 'Bachelor of Computer Applications (BCA)',
                institution: 'Maharshi Dayanand University (MDU)',
                period: '2010 – 2013',
                icon: 'school'
            }
        ];
    }

    getCertifications(): Certification[] {
        return [
            {
                name: 'Angular (Intermediate)',
                issuer: 'HackerRank',
                icon: 'verified'
            },
            {
                name: 'Responsive Web Design',
                issuer: 'freeCodeCamp',
                icon: 'verified'
            }
        ];
    }

    getSocialLinks(): SocialLink[] {
        return [
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/pradeepsaini1',
                svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
            },
            {
                name: 'GitHub',
                url: 'https://github.com/pradeep191992',
                svgPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
            }
        ];
    }
}

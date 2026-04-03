export interface PersonalInfo {
    name: string;
    initials: string;
    title: string;
    tagline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    currentFocus: string;
    availabilityStatus: string;
    yearsOfExperience: string;
    photoUrl: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    github: string;
    techBadges: TechBadge[];
    stats: Stat[];
}

export interface TechBadge {
    name: string;
    colorClass: string;
    borderClass: string;
}

export interface Stat {
    icon: string;
    value: string;
    label: string;
}

export interface Experience {
    dateRange: string;
    title: string;
    company: string;
    location?: string;
    icon: string;
    iconType: 'material' | 'image';
    imageUrl?: string;
    isCurrent: boolean;
    projectName?: string;
    responsibilities: string[];
    skills: string[];
}

export interface Skill {
    name: string;
    percentage: number;
}

export interface Contribution {
    icon: string;
    name: string;
}

export interface Achievement {
    icon: string;
    title: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    imageUrl?: string;
    techStack: string[];
    liveUrl?: string;
    sourceUrl?: string;
    featured: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    icon: string;
}

export interface Certification {
    name: string;
    issuer: string;
    icon: string;
}

export interface NavLink {
    label: string;
    path: string;
    exact: boolean;
}

export interface SocialLink {
    name: string;
    url: string;
    svgPath: string;
}

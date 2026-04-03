import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal<boolean>(true);

    constructor() {
        this.initTheme();
    }

    private initTheme() {
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme');

            if (savedTheme) {
                this.isDarkMode.set(savedTheme === 'dark');
            } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                this.isDarkMode.set(prefersDark);
            }

            this.applyTheme();
        }
    }

    toggleTheme() {
        this.isDarkMode.set(!this.isDarkMode());
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
        }
        this.applyTheme();
    }

    private applyTheme() {
        if (typeof document !== 'undefined') {
            const htmlElement = document.documentElement;
            if (this.isDarkMode()) {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
        }
    }
}

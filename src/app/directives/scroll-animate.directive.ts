import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
    selector: '[appScrollAnimate]',
    standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
    @Input() animationClass = 'animate-fade-in-up';
    @Input() animationDelay = '0ms';

    private observer!: IntersectionObserver;

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.style.opacity = '0';
        this.el.nativeElement.style.transform = 'translateY(30px)';
        this.el.nativeElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        this.el.nativeElement.style.transitionDelay = this.animationDelay;

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.el.nativeElement.style.opacity = '1';
                        this.el.nativeElement.style.transform = 'translateY(0)';
                        this.observer.unobserve(this.el.nativeElement);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

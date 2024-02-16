import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
  selector: 'joanhm-home-page',
  template: `
    <joanhm-hero-section></joanhm-hero-section>
    <joanhm-features-section></joanhm-features-section>
  `,
  standalone: true,
  imports: [HeroSectionComponent, FeaturesSectionComponent],
})
export class HomePageComponent {}

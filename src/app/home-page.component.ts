import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
  selector: 'joanhm-home-page',
  template: `
    <div class="principal" display="flex">
      <div class="p1"><joanhm-hero-section></joanhm-hero-section></div>
      <div class="p2"><joanhm-features-section></joanhm-features-section></div>
    </div>
  `,
  standalone: true,
  imports: [HeroSectionComponent, FeaturesSectionComponent],
})
export class HomePageComponent {}

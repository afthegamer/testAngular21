import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  private router = inject(Router);
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
}

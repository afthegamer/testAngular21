import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  userEmail: string = 'brad.ddsp';
  userFirstname: string = 'brad';
  userLastname: string = 'ddsp';
  userData: { name: string; firstname: string; email: string } = {
    name: this.userLastname,
    firstname: this.userFirstname,
    email: this.userEmail,
  };
  private router = inject(Router);
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}

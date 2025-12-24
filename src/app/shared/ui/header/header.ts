import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);
  onAddNewFaceSnap() {
    this.router.navigateByUrl('/create');
    console.log('Adding a new FaceSnap...');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  createdDateToNow() {
    const createdYear = 2025;
    if (new Date().getFullYear() - createdYear > 0)
      return `© ${2025 - new Date().getFullYear()} MyCompany.com Inc.`;
    return `© 2025 MyCompany.com Inc. All rights reserved.`;
  }
}

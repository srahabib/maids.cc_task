import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
  holdTime = 0;
  buttonClass = '';
  progress = 0;

  holdHandler(holdTime: number): void {
    this.holdTime = holdTime;
    this.progress = Math.min((holdTime / 10000) * 100, 100); // Calculate the progress percentage and cap at 100%

    if (holdTime >= 10000) { // 10 seconds
      window.location.href = 'https://www.linkedin.com/in/sara-habib-033a581b3/';
    } else if (holdTime > 0) {
      this.buttonClass = 'bg-blue-700'; // Change background color on hold
    } else {
      this.buttonClass = 'bg-blue-500'; // Default background color
      this.progress = 0; // Reset progress
    }
  }
}

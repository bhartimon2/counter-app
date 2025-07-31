import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LogEntry {
  action: string;    
  counter: number; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app.css']
})
export class App {
  counter = 0;
  private resetLoggedAtZero = false;


  log: LogEntry[] = [];

  animateCounter() {
    const counterElem = document.querySelector('.counter') as HTMLElement;
    if (!counterElem) return;
  
    counterElem.classList.remove('animate');
  
    void counterElem.offsetWidth;
  
    counterElem.classList.add('animate');
  }
  

  increment() {
    this.counter++;
    this.animateCounter();
    this.log.push({ action: '+1', counter: this.counter });
  }

  decrement() {
    this.counter--;
    this.animateCounter();

    this.log.push({ action: '-1', counter: this.counter });
  }

  reset() {
    this.animateCounter();

    if (this.counter !== 0) {
      this.counter = 0;
      this.resetLoggedAtZero = true;
      this.log.push({ action: 'Reset', counter: this.counter });
    } else if (!this.resetLoggedAtZero) {
      this.resetLoggedAtZero = true;
      this.log.push({ action: 'Reset', counter: this.counter });
    }
  }

  clearHistory() {
    this.counter = 0;
    this.animateCounter();
    this.log = [];
    this.resetLoggedAtZero = false; 
  }
}

import { Component, Renderer2, ElementRef } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

const QUOTES: string[] = [
  "Believe in yourself and all that you are!",
  "Know that there is something inside you that is greater than any obstacle!",
  "Success is not final, failure is not fatal!",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "Failure doesn't reset your progress",
  "You are never too old to set another goal or to dream a new dream.",
  "It's not all about talent. It's about dependability, consistency, and being able to improve",
  "Start small so you get discourage and give up. Remember it is all about consistency!",
  "Falling over does not un-run your marathon"
];

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss']
})
export class GoalsPage {
  selectedHobbies: { [hobby: string]: boolean } = {};
  quotes: string[] = QUOTES;
  selectedQuote: string | undefined;
  goals: string | undefined;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.selectedHobbies = this.route.snapshot.paramMap.keys
      .filter(key => key.startsWith('hobby_'))
      .reduce((acc, key) => ({ ...acc, [key]: true }), {});
  }

  showRandomQuote() {
    const quoteElement = this.el.nativeElement.querySelector('.quote');
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const randomQuote = QUOTES[randomIndex];
    this.renderer.setProperty(quoteElement, 'textContent', randomQuote);
    this.renderer.setStyle(quoteElement, 'opacity', 1);
    setTimeout(() => {
      this.renderer.setStyle(quoteElement, 'opacity', 0);
    }, 2000); // fade out after 2 seconds (total display time = 3 seconds)
  }

  saveGoals() {
    const notepadContent = this.el.nativeElement.querySelector(".notepad-content");
    const goals = notepadContent.textContent.trim();
    if (typeof goals === 'string') {
      localStorage.setItem("goals", goals);
    }
  }
  
  navigateToMain() {
    // Navigate to the main page with selected hobbies and goals in the state object
    this.navCtrl.navigateForward(['/main-page'], {
      state: { selectedHobbies: this.selectedHobbies, goals: this.goals }
    });
  }

  selectQuote(quote: string) {
    this.selectedQuote = quote;
  }

  next() {
    this.saveGoals();
    this.navigateToMain();
  }
}
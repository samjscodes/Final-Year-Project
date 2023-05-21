import { Component, Renderer2, ElementRef } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { GoalsTipsPagePageModule } from '../goals-tips-page/goals-tips-page.module';
import { GoalsTipsPagePage } from '../goals-tips-page/goals-tips-page.page';



@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss']
})
export class GoalsPage {
  selectedHobbies: { [hobby: string]: boolean } = {};

  goals: string | undefined;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef,
    private modalController: ModalController
  ) {
    // Initialize selected hobbies based on the route parameters
    this.selectedHobbies = this.route.snapshot.paramMap.keys
      .filter(key => key.startsWith('hobby_'))
      .reduce((acc, key) => ({ ...acc, [key]: true }), {});
  }

  saveGoals() {
    // Save the goals entered in the notepad to localStorage
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

  async openTipsModal() {
    const modal = await this.modalController.create({
      component: GoalsTipsPagePage,
      cssClass: 'goals-tips-modal'
    });
    return await modal.present();
  }
  
  next() {
    // Save goals and navigate to the main page
    this.saveGoals();
    this.navigateToMain();
  }
}

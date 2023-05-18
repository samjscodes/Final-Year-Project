import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.page.html',
  styleUrls: ['./activity-list.page.scss'],
})
export class ActivityListPage {
  // Array of available hobbies
  hobbies: string[] = ['Gym', 'Knitting', 'Coding', 'Instrument', 'Art', 'Chores', 'Dancing', 'Reading', 'Gardening', 'Language'];
  
  // Object to track selected hobbies
  selectedHobbies: {[hobby: string]: boolean} = {};
  
  // Counter for the number of selected hobbies
  selectionCount: number = 0;

  constructor(private storage: Storage, private navCtrl: NavController) { }

  // Lifecycle hook called when the view has entered
  async ionViewDidEnter() {
    // Create the storage instance
    await this.storage.create();

    // Retrieve saved selections from storage
    const savedSelections = await this.storage.get('selectedHobbies');
    
    // If saved selections exist, update the selected hobbies and count
    if (savedSelections) {
      this.selectedHobbies = savedSelections;
      this.updateSelectionCount();
    }
  }

  // Update the selection count when a hobby is selected or deselected
  async updateSelectionCount(event?: any) {
    let numSelected = 0;
    for (let hobby in this.selectedHobbies) {
      if (this.selectedHobbies[hobby]) {
        numSelected++;
      }
    }
    this.selectionCount = numSelected;

    // Save the selections after updating the count
    await this.saveSelections();
  }
  
  // Save the selected hobbies to storage
  async saveSelections(): Promise<{[hobby: string]: boolean}> {
    await this.storage.set('selectedHobbies', this.selectedHobbies);
    return this.selectedHobbies;
  }
  
  // Navigate to the instructions and goals page
  navigateToInstructionsGoals() {
    this.navCtrl.navigateForward('goals-instructions', {
      state: {
        selectedHobbies: this.selectedHobbies
      }
    });
    console.log("Selected hobbies:", this.selectedHobbies);
  }
}

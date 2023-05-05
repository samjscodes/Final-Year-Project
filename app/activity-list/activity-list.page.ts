import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.page.html',
  styleUrls: ['./activity-list.page.scss'],
})
export class ActivityListPage {
  
  hobbies: string[] = ['Gym', 'Knitting', 'Coding', 'Instrument', 'Art', 'Chores', 'Dancing', 'Reading', 'Gardening', 'Language'];
  selectedHobbies: {[hobby: string]: boolean} = {};
  selectionCount: number = 0;

  constructor(private storage: Storage, private navCtrl: NavController) { }

  async ionViewDidEnter() {
    await this.storage.create();
    const savedSelections = await this.storage.get('selectedHobbies');
    if (savedSelections) {
      this.selectedHobbies = savedSelections;
      this.updateSelectionCount();
    }
  }

  async updateSelectionCount(event?: any) {
    let numSelected = 0;
    for (let hobby in this.selectedHobbies) {
      if (this.selectedHobbies[hobby]) {
        numSelected++;
      }
    }
    this.selectionCount = numSelected;
    await this.saveSelections();
  }
  
  
  async saveSelections(): Promise<{[hobby: string]: boolean}> {
    await this.storage.set('selectedHobbies', this.selectedHobbies);
    return this.selectedHobbies;
  }
  
  
  navigateToInstructionsGoals() {
    this.navCtrl.navigateForward('goals-instructions', {
      state: {
        selectedHobbies: this.selectedHobbies
        
      }
      
    });
    console.log("Selected hobbies:", this.selectedHobbies);
    
  }
  
  
}

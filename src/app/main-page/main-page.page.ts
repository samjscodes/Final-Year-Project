import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ModalController, NavController } from '@ionic/angular';
import { InfoModalComponent } from '../info-modal/info-modal.component';


@Component({
   selector: 'app-main-page',
   templateUrl: './main-page.page.html',
   styleUrls: ['./main-page.page.scss'],
   
   
})
export class MainPagePage {
  
  quotes = [
    "Believe in yourself and all that you are!",
    "Know that there is something inside you that is greater than any obstacle!",
    "Success is not final, failure is not fatal!",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "You are never too old to set another goal or to dream a new dream.",
    "It's not all about talent. It's about dependability, consistency, and being able to improve",
    "Start small so you don't get discouraged and give up. Remember it is all about consistency!"
  ];
  
  displayQuote: string | null = null;

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.displayQuote = this.quotes[randomIndex];
    setTimeout(() => {
      this.displayQuote = null;
    }, 5000);
  }
  

  selectedHobbies: string[] = [];
  tasks: {[key: string]: string[]} = {
    Gym: ['Do 10 squats', 'Do 10 push-ups', 'Do 10 lunges', 'Rest!', 'Do 10 sit-ups', 'Do 10 jumping jacks', '15 sec Plank', 'Rest!', 'Repeat!', 'You made it! Great job!'],
    Knitting: ['Knit 10 rows of a scarf', 'Knit 1 inch of a hat', 'Knit 1 row of a sweater', 'Rest!', 'Knit 10 stitches of a scarf', 'Knit 1 round of a hat', 'Knit 1 sleeve of a sweater', 'Rest!', 'Repeat!', 'You made it! Congratulations on completing!'],
    Coding:['Write 10 lines of HTML', 'Create a basic web page', 'Write 10 lines of JavaScript', 'Rest!', 'Build a simple game level', 'Create a function with parameters', 'Design a user interface', 'Rest!', 'Repeat!', '! Well done on building your coding project!'],
    Instrument: ['Practice scales for 10 minutes', 'Learn the first verse of a new song', 'Write 4 measures of a song', 'Rest!', 'Practice arpeggios for 10 minutes', 'Play through a song from memory', 'Experiment with chord progressions', 'Rest!', 'Repeat!', ' Congratulations on playing the song!'],
    Art: ['Sketch for 10 minutes', 'Paint a background for a landscape', 'Sculpt a small object', 'Rest!', 'Draw a portrait in pen', 'Mix colors to match a reference photo', 'Add details to a sculpture', 'Rest!', 'Repeat!', 'Well done on creating a beautiful art!'],
    Chores:['Pick up clothes from the floor', 'Make your bed', 'Vacuum your room', 'Rest!', 'Wipe down surfaces', 'Clean mirrors and windows', 'Dust furniture', 'Rest!', 'Repeat!', 'Great job on tidying up your space!'],
    Dancing:['Do 10 pliés', 'Do 10 tendus', 'Do 10 relevés', 'Rest!', 'Do 10 sautés', 'Practice turns for 5 minutes', 'Practice a short dance routine', 'Rest!', 'Repeat!', 'Congrats on learning a new dance move!'],
    Reading:['Read for 15 minutes', 'Finish a chapter of a book', 'Read an article', 'Rest!', 'Read a short story', 'Read a poem', 'Rest!', 'Repeat!', 'Well done on finishing the book and expanding your knowledge!']
  };
  taskIndex: {[key: string]: number} = {};

  constructor(private storage: Storage, private navCtrl: NavController, private modalController: ModalController) {}
  
  async openInfoModal() {
    const modal = await this.modalController.create({
      component: InfoModalComponent
    });
    return await modal.present();
  }
  goToGoalsPage() {
    this.navCtrl.navigateForward('/goals');
  }
  

  goToActivitiesPage() {
    this.navCtrl.navigateForward('/activity-list');
  }

  goToReportPage() {
    this.navCtrl.navigateForward('/report');
  }

  goToSettingsPage() {
    this.navCtrl.navigateForward('/settings');
  }

  

  async ionViewDidEnter() {
    await this.storage.create();
    const savedSelections = await this.storage.get('selectedHobbies');
    if (savedSelections) {
      this.selectedHobbies = Object.keys(savedSelections).filter(hobby => savedSelections[hobby]);
    }
    this.updateSelectedHobbies();
  }

  updateSelectedHobbies() {
    this.selectedHobbies.forEach(hobby => {
      if (!this.taskIndex.hasOwnProperty(hobby)) {
        this.taskIndex[hobby] = 0;
      }
    });
  }

  getFirstTask(hobby: string): string {
    if (!this.tasks.hasOwnProperty(hobby)) {
      console.error(`"${hobby}" is not a valid hobby key in tasks object.`);
      return '';
    }
    
    if (!this.taskIndex.hasOwnProperty(hobby)) {
      this.taskIndex[hobby] = 0;
    }
    
    return this.tasks[hobby][this.taskIndex[hobby]];
  }
  

  goToNextTask(hobby: string) {
    this.taskIndex[hobby]++;
    if (this.taskIndex[hobby] >= this.tasks[hobby].length) {
      this.taskIndex[hobby] = 0;
    }
  }
  
}


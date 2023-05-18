import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
   selector: 'app-main-page',
   templateUrl: './main-page.page.html',
   styleUrls: ['./main-page.page.scss'],
   
   
})
export class MainPagePage {
  
  isCelebrating: boolean = false;
celebrationTimeout: any;

// Method to start the celebration
startCelebration() {
  this.isCelebrating = true;
  this.celebrationTimeout = setTimeout(() => {
    this.isCelebrating = false;
  }, 7000);
}

// Method to stop the celebration
stopCelebration() {
  this.isCelebrating = false;
  clearTimeout(this.celebrationTimeout);
}

  // Array of quotes
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
  
  // Variable to store the currently displayed quote
  displayQuote: string | null = null;

  // Method to display a random quote
  displayRandomQuote() {
    // Generate a random index within the range of quotes array
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    // Set the displayQuote variable to a random quote
    this.displayQuote = this.quotes[randomIndex];
    // After 5 seconds, reset the displayQuote variable to null
    setTimeout(() => {
      this.displayQuote = null;
    }, 5000);
  }
  
  // Array to store selected hobbies
  selectedHobbies: string[] = [];

  // Object that maps hobbies to their corresponding tasks
  tasks: {[key: string]: string[]} = {
    Gym: ['Do 10 squats', 'Do 10 push-ups', 'Do 10 lunges', 'Rest!', 'Do 10 sit-ups', 'Do 10 jumping jacks', '15 sec Plank', 'Rest!', 'Repeat!', 'You made it! Great job!'],
    Knitting: ['Knit 10 rows of a scarf', 'Knit 1 inch of a hat', 'Knit 1 row of a sweater', 'Rest!', 'Knit 10 stitches of a scarf', 'Knit 1 round of a hat', 'Knit 1 sleeve of a sweater', 'Rest!', 'Repeat!', 'You made it! Congratulations on completing!'],
    Coding:['Write 10 lines of HTML', 'Create a basic web page', 'Write 10 lines of JavaScript', 'Rest!', 'Build a simple game level', 'Create a function with parameters', 'Design a user interface', 'Rest!', 'Repeat!', '! Well done on building your coding project!'],
    Instrument: ['Practice scales for 10 minutes', 'Learn the first verse of a new song', 'Write 4 measures of a song', 'Rest!', 'Practice arpeggios for 10 minutes', 'Play through a song from memory', 'Experiment with chord progressions', 'Rest!', 'Repeat!', ' Congratulations on playing the song!'],
    Art: ['Sketch for 10 minutes', 'Paint a background for a landscape', 'Sculpt a small object', 'Rest!', 'Draw a portrait in pen', 'Mix colors to match a reference photo', 'Add details to a sculpture', 'Rest!', 'Repeat!', 'Well done on creating a beautiful art!'],
    Chores:['Pick up clothes from the floor', 'Make your bed', 'Vacuum your room', 'Rest!', 'Wipe down surfaces', 'Clean mirrors and windows', 'Dust furniture', 'Rest!', 'Repeat!', 'Great job on tidying up your space!'],
    Dancing:['Do 10 pliés', 'Do 10 tendus', 'Do 10 relevés', 'Rest!', 'Do 10 sautés', 'Practice turns for 5 minutes', 'Practice a short dance routine', 'Rest!', 'Repeat!', 'Congrats on learning a new dance move!'],
    Reading:['Read for 15 minutes', 'Finish a chapter of a book', 'Read an article', 'Rest!', 'Read a short story', 'Read a poem', 'Rest!', 'Repeat!', 'Well done on finishing the book and expanding your knowledge!'],
    Gardening:['Buy seeds and plant them','Water all the plants in your garden', 'Weed the garden for 15 minutes', 'Rest!', 'Prune the trees or bushes in your garden', 'Water your indoor plants', 'Fertilize the soil', 'Rest', 'Practice pruning your plants for 10 minutes', 'Congrats on having beautiful plants!'],
    Language:['Research what language to learn', 'Learn 5 new vocabulary words', 'Write a short story using the vocabulary words', 'Rest!', 'Learn 5 more words', 'Write a short story using all 10 vocabulary words', 'Write a description of a favorite place or travel destination', 'Rest', 'Repeat!', 'Write a description of a favorite place or travel destination', 'Congrats on improving your written language skills!']
  };
  taskIndex: {[key: string]: number} = {};

  
  constructor(private storage: Storage, private navCtrl: NavController, private router: Router) {}
    
  
  getLastTask(hobby: string): string {
    const tasks = this.tasks[hobby];
    const lastTaskIndex = tasks.length - 1;
    return tasks[lastTaskIndex];
  } 

  // Method to navigate to the Goals page
  goToGoalsPage() {
    this.navCtrl.navigateForward('/goals');
  }
  
  // Method to navigate to the Activities page
  goToActivitiesPage() {
    this.navCtrl.navigateForward('/activity-list');
  }

  // Method to navigate to Report page
  goToReportPage() {
    this.navCtrl.navigateForward('/report');
  }

  // Method to navigate to the Settings page
  goToSettingsPage() {
    this.navCtrl.navigateForward('/settings');
  }

  // Method to navigate to the Info page
  goToInfoPage() {
    this.router.navigate(['/info']);
  }

  // Method to navigate to the Tips page
  goToTipsPage() {
    this.router.navigate(['/tips']);
  }
  
  // Lifecycle method called when the page is entered
  async ionViewDidEnter() {
    // Create the storage instance
    await this.storage.create();

    // Retrieve the saved selections from storage
    const savedSelections = await this.storage.get('selectedHobbies');
    // If there are saved selections, update the selectedHobbies array
    if (savedSelections) {
      this.selectedHobbies = Object.keys(savedSelections).filter(hobby => savedSelections[hobby]);
    }

    // Update the task index for the selected hobbies
    this.updateSelectedHobbies();
  }
  
  // Method to update the task index for the selected hobbies
  updateSelectedHobbies() {
    this.selectedHobbies.forEach(hobby => {
      if (!this.taskIndex.hasOwnProperty(hobby)) {
        this.taskIndex[hobby] = 0;
      }
    });
  }

  // Method to get the first task for a hobby
  getFirstTask(hobby: string): string {
    // Check if the hobby exists in the tasks object
    if (!this.tasks.hasOwnProperty(hobby)) {
      console.error(`"${hobby}" is not a valid hobby key in tasks object.`);
      return '';
    }
    
    // If the task index is not set for the hobby, initialize it as 
    if (!this.taskIndex.hasOwnProperty(hobby)) {
      this.taskIndex[hobby] = 0;
    }
    
    // Return the first task for the hob
    return this.tasks[hobby][this.taskIndex[hobby]];
  }
  
 
  goToNextTask(hobby: string) {
    // Increment the task index for the hobby
    this.taskIndex[hobby]++;
  
    // If the task index exceeds the number of tasks, wrap around to the first task
    if (this.taskIndex[hobby] >= this.tasks[hobby].length) {
      this.taskIndex[hobby] = 0;
      this.startCelebration(); // Start the celebration when the last task is completed
    }
  }
  
  onTaskComplete(hobby: string) {
    this.goToNextTask(hobby);
    this.stopCelebration(); // Stop the celebration when the check button is clicked
  }
  

  
}


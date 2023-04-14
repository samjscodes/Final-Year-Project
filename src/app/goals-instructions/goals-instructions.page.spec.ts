import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsInstructionsPage } from './goals-instructions.page';

describe('GoalsInstructionsPage', () => {
  let component: GoalsInstructionsPage;
  let fixture: ComponentFixture<GoalsInstructionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsInstructionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsInstructionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

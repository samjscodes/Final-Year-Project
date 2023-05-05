import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalsInstructionsPage } from './goals-instructions.page';

describe('GoalsInstructionsPage', () => {
  let component: GoalsInstructionsPage;
  let fixture: ComponentFixture<GoalsInstructionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoalsInstructionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

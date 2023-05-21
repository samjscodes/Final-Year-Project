import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GoalsTipsPagePage } from './goals-tips-page.page';

describe('GoalsTipsPagePage', () => {
  let component: GoalsTipsPagePage;
  let fixture: ComponentFixture<GoalsTipsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoalsTipsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

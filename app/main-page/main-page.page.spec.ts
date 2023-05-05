import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MainPagePage } from './main-page.page';

describe('MainPagePage', () => {
  let component: MainPagePage;
  let fixture: ComponentFixture<MainPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPagePage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

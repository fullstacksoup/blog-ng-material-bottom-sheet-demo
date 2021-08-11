import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationLayoutComponent } from './main-navigation-layout.component';

describe('MainNavigationLayoutComponent', () => {
  let component: MainNavigationLayoutComponent;
  let fixture: ComponentFixture<MainNavigationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

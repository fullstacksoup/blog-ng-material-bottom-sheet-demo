import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBottomSheetLayoutComponent } from './parent-bottom-sheet-layout.component';

describe('ParentBottomSheetLayoutComponent', () => {
  let component: ParentBottomSheetLayoutComponent;
  let fixture: ComponentFixture<ParentBottomSheetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBottomSheetLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBottomSheetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

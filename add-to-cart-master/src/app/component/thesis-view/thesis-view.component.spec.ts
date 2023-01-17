import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisViewComponent } from './thesis-view.component';

describe('ThesisViewComponent', () => {
  let component: ThesisViewComponent;
  let fixture: ComponentFixture<ThesisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

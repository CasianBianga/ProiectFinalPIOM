import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewComponent } from './studentView.component';

describe('ProductsComponent', () => {
  let component: StudentViewComponent;
  let fixture: ComponentFixture<StudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

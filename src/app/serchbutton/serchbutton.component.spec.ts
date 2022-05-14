import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchbuttonComponent } from './serchbutton.component';

describe('SerchbuttonComponent', () => {
  let component: SerchbuttonComponent;
  let fixture: ComponentFixture<SerchbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

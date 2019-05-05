import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRedComponent } from './add-red.component';

describe('AddRedComponent', () => {
  let component: AddRedComponent;
  let fixture: ComponentFixture<AddRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

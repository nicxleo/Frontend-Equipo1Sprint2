import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAvanceRedComponent } from './ver-avance-red.component';

describe('VerAvanceRedComponent', () => {
  let component: VerAvanceRedComponent;
  let fixture: ComponentFixture<VerAvanceRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAvanceRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAvanceRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

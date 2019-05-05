import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleREDComponent } from './detalle-red.component';

describe('DetalleREDComponent', () => {
  let component: DetalleREDComponent;
  let fixture: ComponentFixture<DetalleREDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleREDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleREDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

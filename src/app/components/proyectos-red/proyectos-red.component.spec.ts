import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosRedComponent } from './proyectos-red.component';

describe('DetalleREDComponent', () => {
  let component: ProyectosRedComponent;
  let fixture: ComponentFixture<ProyectosRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

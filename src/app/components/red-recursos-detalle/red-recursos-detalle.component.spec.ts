import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedRecursosDetalleComponent } from './red-recursos-detalle.component';

describe('RedRecursosDetalleComponent', () => {
  let component: RedRecursosDetalleComponent;
  let fixture: ComponentFixture<RedRecursosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedRecursosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedRecursosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsRelacionadosComponent } from './reds-relacionados.component';

describe('RedsRelacionadosComponent', () => {
  let component: RedsRelacionadosComponent;
  let fixture: ComponentFixture<RedsRelacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsRelacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsRelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

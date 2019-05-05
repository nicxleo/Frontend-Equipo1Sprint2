import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsPorPersonaComponent } from './reds-por-persona.component';

describe('RedsPorPersonaComponent', () => {
  let component: RedsPorPersonaComponent;
  let fixture: ComponentFixture<RedsPorPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsPorPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsPorPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

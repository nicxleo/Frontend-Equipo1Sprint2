import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedRecursosComponent } from './red-recursos.component';

describe('RedRecursosComponent', () => {
  let component: RedRecursosComponent;
  let fixture: ComponentFixture<RedRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

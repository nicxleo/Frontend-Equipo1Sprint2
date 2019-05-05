import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanesComponent } from './tab-panes.component';

describe('TabPanesComponent', () => {
  let component: TabPanesComponent;
  let fixture: ComponentFixture<TabPanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

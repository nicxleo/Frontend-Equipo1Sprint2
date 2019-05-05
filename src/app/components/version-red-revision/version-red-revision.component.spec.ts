import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionRedRevisionComponent } from './version-red-revision.component';

describe('VersionRedRevisionComponent', () => {
  let component: VersionRedRevisionComponent;
  let fixture: ComponentFixture<VersionRedRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionRedRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionRedRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

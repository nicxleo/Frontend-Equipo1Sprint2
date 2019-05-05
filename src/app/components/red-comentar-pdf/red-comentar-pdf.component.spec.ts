import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedComentarPdfComponent } from './red-comentar-pdf.component';

describe('RedComentarPdfComponent', () => {
  let component: RedComentarPdfComponent;
  let fixture: ComponentFixture<RedComentarPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedComentarPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedComentarPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

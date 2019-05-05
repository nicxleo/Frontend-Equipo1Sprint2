import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AgregarRecursoModelMock } from '../Mocks/agregar-recurso.component.model.mocks';
import { AgregarRecursoComponent } from './agregar-recurso.component';
import { AgregarRecursoClientService } from '../services/agregar-recurso-client.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';


describe('AgregarRecursoComponent', () => {
  let component: AgregarRecursoComponent;
  let fixture: ComponentFixture<AgregarRecursoComponent>;
  let agregarRecursoClientService: AgregarRecursoClientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule, FormsModule],
      providers: [AgregarRecursoClientService],
      declarations: [ AgregarRecursoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRecursoComponent);
    agregarRecursoClientService = fixture.debugElement.injector.get(AgregarRecursoClientService);
    spyOn(agregarRecursoClientService, 'register').and.returnValue(of(AgregarRecursoModelMock.POST));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

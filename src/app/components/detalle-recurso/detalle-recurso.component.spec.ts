import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ResourceDetailModelMock } from '../Mocks/detalle-recurso.component.model.mock';
import { DetalleRecursoComponent } from './detalle-recurso.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResourceDetailsRestClientService } from 'src/app/services/recurso/detalle/resource-details-rest-client.service';


describe('DetalleRecursoComponent', () => {
  let component: DetalleRecursoComponent;
  let fixture: ComponentFixture<DetalleRecursoComponent>;
  let resourceDetailsRestClientService: ResourceDetailsRestClientService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpModule],
      providers: [ResourceDetailsRestClientService],
      declarations: [DetalleRecursoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRecursoComponent);
    resourceDetailsRestClientService = fixture.debugElement.injector.get(ResourceDetailsRestClientService);
    spyOn(resourceDetailsRestClientService, 'getResourceDetailsById').and.returnValue(of(ResourceDetailModelMock.GET_BY_ID))
    spyOn(resourceDetailsRestClientService, 'updateResourceDetail').and.returnValue(of(ResourceDetailModelMock.UPDATE))
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Given that edit method is called then the variable showInputText is assigned with true', () => {
    component.edit();
    expect(component.showInputText).toBeTruthy();
  });

  it('Given that cancel method is called then the variable showInputText is assigned with false', () => {
    component.cancelEdit();
    expect(component.showInputText).toBeFalsy();
  });

  it('Given that ngOnInit method is called then the variable detailResourceForm is different from null', () => {
    component.getResourceDetail(3);
    expect(component.resourceDetailsoModel).toBeDefined();
    expect(component.resourceDetailsoModel.author).toEqual(ResourceDetailModelMock.GET_BY_ID.getAutor);
    expect(component.resourceDetailsoModel.description).toEqual(ResourceDetailModelMock.GET_BY_ID.descripcion);
    expect(component.resourceDetailsoModel.lastUserModification).toEqual(ResourceDetailModelMock.GET_BY_ID.getResponsableModificacion);
    expect(component.resourceDetailsoModel.name).toEqual(ResourceDetailModelMock.GET_BY_ID.nombre);
  });

  it('Given that updateResource method is called then the return observable with the aswer', () => {
    spyOnProperty(component.detailResourceForm, 'valid', 'get').and.returnValue(true);
    component.updateResource();
    expect(resourceDetailsRestClientService.updateResourceDetail).toHaveBeenCalledTimes(1);
  });



});

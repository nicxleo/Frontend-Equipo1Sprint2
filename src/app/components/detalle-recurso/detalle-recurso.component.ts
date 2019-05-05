import { Component, OnInit } from "@angular/core";
import { ResourceDetailModel } from "./detalle-recurso.component.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ResourceDetailsRestClientService } from 'src/app/services/recurso/detalle/resource-details-rest-client.service';

@Component({
  selector: "app-detalle-recurso",
  templateUrl: "./detalle-recurso.component.html",
  styleUrls: ["./detalle-recurso.component.css"]
})
export class DetalleRecursoComponent implements OnInit {

  public detailResourceForm: FormGroup;
  public resourceDetailsoModel: ResourceDetailModel;
  public showInputText = false;
  public staticAlertClosed = false;
  public successMessage: string;
  private idResource: number;
  private _success = new Subject<string>();


  constructor(
    private route: ActivatedRoute,
    private resourceDetailsRestClientService: ResourceDetailsRestClientService
  ) {
    this.route.params.subscribe(param => {
      this.idResource = Number(param["id"]);
    });
  }

  ngOnInit(): void {
    this.loadForm();
    this.getResourceDetail(this.idResource);
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public edit(): void {
    this.showInputText = true;
  }

  public cancelEdit(): void {
    this.showInputText = false;
  }

  loadForm(): void {
    this.detailResourceForm = new FormGroup({
      type: new FormControl(""),
      name: new FormControl("", Validators.required),
      author: new FormControl(""),
      updateDate: new FormControl(""),
      description: new FormControl(""),
      metadata: new FormControl(""),
    });
  }

  public getResourceDetail(id: number): void {
    this.resourceDetailsRestClientService
      .getResourceDetailsById(id)
      .subscribe(response => {
        this.resourceDetailsoModel = {
          type: response.tipo,
          author: response.getAutor,
          updateDate: response.fecha_ultima_modificacion,
          creationDate: response.fecha_creacion,
          lastUserModification: response.getResponsableModificacion,
          description: response.descripcion,
          metadata: response.metadata,
          name: response.nombre,
          thumbnail: response.thumbnail
        };
      });
  }

  public updateResource(): void {
    this.showInputText = false;
    if (this.detailResourceForm.valid) {
      const json = {
        name: this.detailResourceForm.controls.name.value,
        description: this.detailResourceForm.controls.description.value,
        lastUserModification: "1",
        id: this.idResource
      }
      this.resourceDetailsRestClientService.updateResourceDetail(json).subscribe(response => {
        this.getResourceDetail(this.idResource);
        this._success.next('Recurso: ' + this.resourceDetailsoModel.name + ' editado con exito');
      }
      );
    }

  }
}

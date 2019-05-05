import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location, formatDate } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { AgregarRecursoClientService } from 'src/app/services/recurso/agregar/agregar-recurso-client.service';

@Component({
  selector: 'app-agregar-recurso',
  templateUrl: './agregar-recurso.component.html',
  styleUrls: ['./agregar-recurso.component.scss']
})
export class AgregarRecursoComponent implements OnInit {

  @ViewChild('file') file
  public files: Set<File> = new Set();
  FileSelected = false;
  progress;
  uploading = false;
  uploadSuccessful = false;
  url;
  today = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
  IdRed: number;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private agregarRecursoRestClientService: AgregarRecursoClientService,
  ) {
      this.IdRed = this.route.snapshot.params['idRed'];
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      fechaCreacion: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      file: new FormControl()
    });
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
        this.FileSelected = true;
        this.registerForm.get('tipo').setValue(files[key].type);
        this.registerForm.get('fechaCreacion').setValue(this.today);
        this.registerForm.get('autor').setValue('Francisco Perneth');
        this.registerForm.controls.autor.disable();
        this.registerForm.controls.fechaCreacion.disable();
        this.registerForm.controls.tipo.disable();
        this.url = 'https://content.dropboxapi.com/2/files/download/' + files[key].name;
      }
    }
  }
//function to upload file resource and register on database  related information
  register() {
    this.uploadSuccessful = false;
    const nombre = this.registerForm.get('nombre').value;
    const tipo = this.registerForm.get('tipo').value;
    const autor = this.registerForm.get('autor').value;
    const descripcion = this.registerForm.get('descripcion').value;
    const url = this.url;
    debugger;
    const recurso = {'nombre': nombre, 'archivo':url, 'thumbnail':'urlThumbnail',
    'tipo': tipo, 'descripcion':descripcion, 'autor':1, 'idRed':this.IdRed};
    console.log(recurso);

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.agregarRecursoRestClientService.register(recurso).subscribe(response => {
      console.log(response);
      this.progress = this.agregarRecursoRestClientService.upload(this.files);

      // convert the progress map into an array
      const allProgressObservables = [];
      for (let key in this.progress) {
        allProgressObservables.push(this.progress[key].progress);
      }
      // When all progress-observables are completed...
      forkJoin(allProgressObservables).subscribe(end => {
        if(end[0] === 100){

        this.uploadSuccessful = true;  
        // ... and the component is no longer uploading
        this.uploading = false;

        this.registerForm.reset();

        this.files.clear();

        this.FileSelected = false;
        this.registerForm.controls.autor.enable();
        this.registerForm.controls.fechaCreacion.enable();
        this.registerForm.controls.tipo.enable();
        }
      });
    }, error => {
      console.log(error);
      this.uploadSuccessful = false;
      this.uploading = false;
      alert('Formulario Invalido');
      this.registerForm.reset();
    });
  };

  goBack(): void {
    this.location.back();
  };

}

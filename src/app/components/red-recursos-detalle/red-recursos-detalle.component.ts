import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursoService } from 'src/app/services/recurso/recurso.service';

@Component({
  selector: 'app-red-recursos-detalle',
  templateUrl: './red-recursos-detalle.component.html',
  styleUrls: ['./red-recursos-detalle.component.css']
})
export class RedRecursosDetalleComponent implements OnInit {
  recursos = [];
  idrecurso: number = 0;
  idred: number = 0;

  public recurso;

  public loading = true;

  public sisredColor = '#3c8dbc';

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: RecursoService
  ) {
    this.idrecurso = this.activatedRoute.snapshot.params['idrecurso'];
    this.getResources();
    this.idred = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {}

  getResources = () => {
    this.api.getRecursos(this.idrecurso).subscribe(
      data => {
        this.recursos = data;
        console.log(this.idrecurso);
        console.log(data);
        if (this.recursos.length > 0) {
          this.recurso = this.recursos[0];
        }
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  };
}

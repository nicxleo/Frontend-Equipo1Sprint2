import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedService } from 'src/app/services/red/red.service';

@Component({
  selector: 'app-reds-relacionados',
  templateUrl: './reds-relacionados.component.html',
  styleUrls: ['./reds-relacionados.component.css']
})
export class RedsRelacionadosComponent implements OnInit {
  @Input() proyectoConectate;

  private modal = null;

  public redsList = [];

  public redsListOptions = [];

  public loading = true;

  public selectedMultimedia = null;

  public nombreCortoProyecto = null;

  public nombreProyecto = null;

  public sisredColor = '#3c8dbc';

  public idProyectoC = 0;

  constructor(
    private redService: RedService,
    private activatedRoute: ActivatedRoute
  ) {
    this.idProyectoC = this.activatedRoute.snapshot.params['idRed'];
    console.log(this.idProyectoC);
  }

  ngOnInit() {
    this.loadReds();
  }

  loadReds() {
    this.redService
      .getRedsRelacionados(this.idProyectoC)
      .then((data: any) => {
        this.nombreCortoProyecto = data.nombreCortoProyecto;
        this.nombreProyecto = data.nombreProyecto;
        this.redsListOptions = data.redsRelacionados;
        console.log(data);

        this.redsListOptions.sort(this.compare);
        this.redsList = this.redsListOptions;
        this.loading = false;
        console.log(this.idProyectoC);
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  }

  compare(a, b) {
    if (a.fechaCreacion < b.fechaCreacion) {
      return 1;
    }
    if (a.fechaCreacion > b.fechaCreacion) {
      return -1;
    }
    return 0;
  }
}

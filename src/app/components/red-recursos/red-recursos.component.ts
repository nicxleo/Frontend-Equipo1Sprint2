import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedService } from 'src/app/services/red/red.service';

@Component({
  selector: 'app-red-recursos',
  templateUrl: './red-recursos.component.html',
  styleUrls: ['./red-recursos.component.css']
})
export class RedRecursosComponent implements OnInit {
  reds: [] = [];
  id: number = 0;

  public loading = true;

  public sisredColor = '#3c8dbc';

  public red;

  constructor(private activatedRoute: ActivatedRoute, private api: RedService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getReds();
  }

  ngOnInit() {}

  getReds = () => {
    this.api.getRedRecursosDetalle(this.id).subscribe(
      data => {
        this.reds = data;
        if (this.reds.length > 0) {
          this.red = data[0];
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

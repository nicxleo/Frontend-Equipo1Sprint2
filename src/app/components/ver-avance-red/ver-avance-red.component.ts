import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RED } from './Models/red';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvanceRedRestClientService } from 'src/app/services/red/advance-red-rest-client.service';

@Component({
  selector: 'app-ver-avance-red',
  templateUrl: './ver-avance-red.component.html',
  styleUrls: ['./ver-avance-red.component.css']
})
export class VerAvanceRedComponent implements OnInit {

  public red: RED;
  subred: Array<RED>;
  public advanceRedForm: FormGroup;
  private idRed: number;

  constructor(    
    private route: ActivatedRoute,
    private advanceRedRestClientService: AdvanceRedRestClientService,
    private _route: Router) {
      this.route.params.subscribe(param => {
        this.idRed = Number(param["id"]);
      });
   }

  ngOnInit(): void {
    this.loadForm();
    this.getAdvanceRed(this.idRed);
  }

  loadForm(): void {
    this.advanceRedForm = new FormGroup({
      nombre: new FormControl(""),
      getProyecto: new FormControl(""),
      getFase: new FormControl(""),
    });
  }

  public getAdvanceRed(id: number): void {
    this.advanceRedRestClientService
      .getAdvanceRedById(id)
      .subscribe(response => {
        this.red = response[0];
        this.subred = response;
      });
  }

  public onChangePageRed(): void{
    this._route.navigate(['/ver-detalle-red/' + this.idRed]);
  }

}

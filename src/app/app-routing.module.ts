import { NotFoundComponent } from './components/not-found/not-found.component';
import { RedsPorPersonaComponent } from './components/reds-por-persona/reds-por-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRedComponent } from './components/add-red/add-red.component';
import { AgregarRecursoComponent } from './components/agregar-recurso/agregar-recurso.component';
import { DetalleRecursoComponent } from './components/detalle-recurso/detalle-recurso.component';
import { DetalleREDComponent } from './components/detalle-red/detalle-red.component';
import { ProyectosRedComponent } from './components/proyectos-red/proyectos-red.component';
import { RedRecursosDetalleComponent } from './components/red-recursos-detalle/red-recursos-detalle.component';
import { RedRecursosComponent } from './components/red-recursos/red-recursos.component';
import { RedAsignadosComponent } from './components/red/asignaciones/red-asignados.component';
import { RedsRelacionadosComponent } from './components/reds-relacionados/reds-relacionados.component';
import { VerAvanceRedComponent } from './components/ver-avance-red/ver-avance-red.component';
import { VersionRedRevisionComponent } from './components/version-red-revision/version-red-revision.component';
import { HabilitarUsuarioComponent } from './components/HabilitarUsuario/Habilitar-Usuario.component';
import { RedComentarPdfComponent } from './components/red-comentar-pdf/red-comentar-pdf.component';

const routes: Routes = [
  { path: '', component: RedAsignadosComponent },
  { path: 'red/:idRed/proyecto/agregar', component: AddRedComponent },
  { path: 'red/:idRed/detalle', component: DetalleREDComponent },
  { path: 'reds/:idUsuario', component: RedAsignadosComponent },
  { path: 'asignaciones', component: RedsPorPersonaComponent },
  { path: 'habilitarusuario', component: HabilitarUsuarioComponent },
  {
    path: 'red/:idRed/version/:version',
    component: VersionRedRevisionComponent
  },
  { path: 'red/:idRed/proyectos', component: ProyectosRedComponent },
  {
    path: 'red/:idRed/relacionados',
    component: RedsRelacionadosComponent
  },
  {
    path: 'red/:id/recursos',
    component: RedRecursosComponent
  },
  {
    path: 'red/:idRed/recursos/agregar',
    component: AgregarRecursoComponent
  },
  // {
  //   path: 'red/:id/recursos/:idrecurso',
  //   component: RedRecursosDetalleComponent
  // },
  {
    path: 'red/:idRed/recursos/:id',
    component: DetalleRecursoComponent
  },
  {
    path: 'reds/:id/avance',
    component: VerAvanceRedComponent
  },
  {
    path: 'reds/:id/comentar',
    component: RedComentarPdfComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSpinKitModule } from "ng-spin-kit";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddRedComponent } from "./components/add-red/add-red.component";
import { AgregarRecursoComponent } from "./components/agregar-recurso/agregar-recurso.component";
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { TabPanesComponent } from './components/dashboard/tab-panes/tab-panes.component';
import { DetalleRecursoComponent } from "./components/detalle-recurso/detalle-recurso.component";
import { DetalleREDComponent } from "./components/detalle-red/detalle-red.component";
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProyectosRedComponent } from "./components/proyectos-red/proyectos-red.component";
import { RedRecursosDetalleComponent } from "./components/red-recursos-detalle/red-recursos-detalle.component";
import { RedRecursosComponent } from "./components/red-recursos/red-recursos.component";
import { RedAsignadosComponent } from "./components/red/asignaciones/red-asignados.component";
import { RedsPorPersonaComponent } from './components/reds-por-persona/reds-por-persona.component';
import { RedsRelacionadosComponent } from "./components/reds-relacionados/reds-relacionados.component";
import { VerAvanceRedComponent } from "./components/ver-avance-red/ver-avance-red.component";
import { VersionRedRevisionComponent } from './components/version-red-revision/version-red-revision.component';
import { AgregarRecursoClientService } from './services/recurso/agregar/agregar-recurso-client.service';
import { ResourceDetailsRestClientService } from './services/recurso/detalle/resource-details-rest-client.service';
import { PdfViewerComponent } from './common/pdf-viewer/pdf-viewer.component';
import { HabilitarUsuarioComponent } from './components/HabilitarUsuario/Habilitar-Usuario.component';
import { UserHabilitarModel } from './components/HabilitarUsuario/Habilitar-Usuario.component.model';
import { HabilitarUsuarioClientService } from './services/HabilitarUsuario/habilita-usuario-client.service';
import { ClickOutsideDirectiveDirective } from './common/pdf-viewer/click-outside-directive.directive';
import { RedComentarPdfComponent } from './components/red-comentar-pdf/red-comentar-pdf.component';



@NgModule({
  declarations: [
    AppComponent,
    RedsPorPersonaComponent,
    AddRedComponent,
    RedAsignadosComponent,
    DetalleREDComponent,
    ProyectosRedComponent,
    AppComponent,
    RedsRelacionadosComponent,
    RedRecursosDetalleComponent,
    RedRecursosComponent,
    DetalleRecursoComponent,
    VerAvanceRedComponent,
    AgregarRecursoComponent,
    NotFoundComponent,
    VersionRedRevisionComponent,
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    TabPanesComponent,
    PdfViewerComponent,
    HabilitarUsuarioComponent,
    ClickOutsideDirectiveDirective,
    RedComentarPdfComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgSpinKitModule,
    NgbAlertModule,
    NgbPaginationModule,
    HttpModule,
    NgxSpinnerModule,
    PdfViewerModule,
    NgbModule,
  ],
  providers: [AgregarRecursoClientService, ResourceDetailsRestClientService,HabilitarUsuarioClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExplaboralComponent } from './componentes/explaboral/explaboral.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ProyComponent } from './componentes/proy/proy.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PersonaService } from './componentes/encabezado/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { ExpLaboralService } from './componentes/explaboral/explaboral.service';
import { EducacionService } from './componentes/estudios/educacion.service';
import { HabilidadesService } from './componentes/hys/habilidades.service';
import { ProyectosService } from './componentes/proy/Proyectos.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoAPComponent,
    AcercademiComponent,
    ExplaboralComponent,
    EstudiosComponent,
    ProyComponent,
    HysComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PersonaService,
              ExpLaboralService,
              EducacionService,
              HabilidadesService,
              ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

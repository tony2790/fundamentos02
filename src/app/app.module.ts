import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosEntradaComponent } from './datos-entrada/datos-entrada.component';
import { EjercicioFormularioComponent } from './ejercicio-formulario/ejercicio-formulario.component';
import { FTypeScriptComponent } from './f-type-script/f-type-script.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosEntradaComponent,
    EjercicioFormularioComponent,
    FTypeScriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

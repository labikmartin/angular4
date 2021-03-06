import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { RendererHighlightDirective } from './renderer-highlight/renderer-highlight.directive';
import { StructuralDirecDirective } from './structural-direc/structural-direc.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    RendererHighlightDirective,
    StructuralDirecDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

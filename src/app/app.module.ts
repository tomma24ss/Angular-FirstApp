import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecretchatComponent } from './secretchat/secretchat.component';
import { WiskFormulesComponent } from './wisk-formules/wisk-formules.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SecretchatComponent,
    WiskFormulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

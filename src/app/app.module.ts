import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

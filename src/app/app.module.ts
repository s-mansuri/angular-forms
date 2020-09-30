import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BasicFormComponent } from './basicForm/basic-form/basic-form.component';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';
import { ReactiveDynamicFormComponent } from './reactiveDynamicForm/reactive-dynamic-form/reactive-dynamic-form.component';
import { ShowModelErrorComponent } from './shared/show-model-error/show-model-error.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './templateForm/template-form/template-form.component';
import { UpdateOnComponent } from './updateOn/update-on/update-on.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ControlValueAccessorComponent,
    ReactiveDynamicFormComponent,
    ShowModelErrorComponent,
    StarterReactiveFormComponent,
    StarterTemplateFormComponent,
    TemplateFormComponent,
    UpdateOnComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,  FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

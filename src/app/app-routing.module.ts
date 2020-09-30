import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basicForm/basic-form/basic-form.component';

import { ReactiveDynamicFormComponent } from './reactiveDynamicForm/reactive-dynamic-form/reactive-dynamic-form.component';
import { StarterReactiveFormComponent } from './starterReactiveForm/starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starterTemplateForm/starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './templateForm/template-form/template-form.component';
import { UpdateOnComponent } from './updateOn/update-on/update-on.component';
import { ReactiveFormComponent } from './reactiveForm/reactive-form/reactive-form.component';
import { AppComponent } from './app.component';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'startertemplateform', component: StarterTemplateFormComponent    },
  { path: 'starterreactiveform', component: StarterReactiveFormComponent },
  { path: 'basicform',  component: BasicFormComponent },
  { path: 'templateform',  component: TemplateFormComponent },
  { path: 'reactiveform',     component: ReactiveFormComponent  },
  { path: 'updateon', component: UpdateOnComponent },
  { path: 'reactivedynamicform', component: ReactiveDynamicFormComponent },
  { path: '**', redirectTo: '/startertemplateform'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    StarterTemplateFormComponent, StarterReactiveFormComponent,
    BasicFormComponent, TemplateFormComponent, ReactiveFormComponent,
    UpdateOnComponent, ReactiveDynamicFormComponent, ControlValueAccessorComponent
  ];
}


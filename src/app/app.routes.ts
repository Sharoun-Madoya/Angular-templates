import { Routes } from '@angular/router';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { TemplateComponent } from './Forms/template/template.component';

export const routes: Routes = [
    {path:"", component:ReactiveComponent},
    {path:"template", component:TemplateComponent}
];

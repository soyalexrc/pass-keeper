import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './feature-a.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {FeatureARoutingModule} from "./feature-a-routing.module";



@NgModule({
  declarations: [
    FeatureAComponent,
    PageAComponent,
    PageBComponent,
    ScopedComponentAComponent,
    ScopedComponentBComponent,
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }

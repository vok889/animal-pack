// app.routes.ts
import { Routes } from '@angular/router';
import { DirectedByComponent } from './directed-by/directed-by.component';

export const routes: Routes = [
  { path: 'directed-by/:director', component: DirectedByComponent }
];

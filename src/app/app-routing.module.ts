import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: async () => import('./game').then(m => m.GameModule)
  },
  {
    path: 'start',
    loadChildren: async () => import('./start').then(m => m.StartModule)
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/start'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

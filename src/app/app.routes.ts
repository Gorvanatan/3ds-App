import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'model-detail',
    loadComponent: () => import('./pages/model-detail/model-detail.page').then( m => m.ModelDetailPage)
  },
  {
    path: 'compare',
    loadComponent: () => import('./pages/compare/compare.page').then( m => m.ComparePage)
  },
];

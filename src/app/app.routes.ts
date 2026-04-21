import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs/tab2/:id',
    loadComponent: () =>
      import('./pages/model-detail/model-detail.page').then((m) => m.ModelDetailPage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
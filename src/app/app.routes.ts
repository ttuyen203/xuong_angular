import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { AddComponent } from './pages/admin/products/add/add.component';
import { UpdateComponent } from './pages/admin/products/update/update.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products/list',
        pathMatch: 'full',
      },
      {
        path: 'products/list',
        component: ListComponent,
      },
      {
        path: 'products/add',
        component: AddComponent,
      },
      {
        path: 'products/edit/:id',
        component: UpdateComponent,
      },
    ],
  },
];

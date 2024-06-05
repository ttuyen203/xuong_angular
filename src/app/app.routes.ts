import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { AddComponent } from './pages/admin/products/add/add.component';
import { UpdateComponent } from './pages/admin/products/update/update.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ShopComponent } from './pages/client/shop/shop.component';
import { DetailComponent } from './pages/client/detail/detail.component';
import { ViewComponent } from './pages/admin/products/view/view.component';

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
      {
        path: 'products/:id',
        component: ViewComponent,
      },
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'product/:id',
        component: DetailComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cart',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./product/product.component').then(m => m.ProductComponent)
    },
    {
        path: 'todos',
        loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent)
    },
    
];

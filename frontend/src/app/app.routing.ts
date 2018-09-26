import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ShopComponent } from './store/shop/shop.component';
import { ProductComponent } from './store/product/product.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { LoginComponent } from './store/login/login.component';


export const AppRoutes: Routes = [
    { path: '', component: ShopComponent },
    { path: 's/:search', component: ShopComponent },
    { path: 'product/:id/:name', component: ProductComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ShopComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { PrincipalComponent } from "./component/principal/principal.component";


const app_routes: Routes = [
    { 
        path: '', 
        component:PrincipalComponent
    },
    {
        path: 'Login',
        component:LoginComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}
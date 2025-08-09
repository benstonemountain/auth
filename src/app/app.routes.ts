import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"home", loadComponent: () => import("./components/home/home").then(m => m.Home) },
    {path:"sign-up", loadComponent: () => import("./components/sign-up/sign-up").then(m => m.SignUp) },
    {path:"login", loadComponent: () => import("./components/login/login").then(m => m.Login) },
    {path:"landing-page", loadComponent: () => import("./components/landing-page/landing-page").then(m => m.LandingPage) },
];

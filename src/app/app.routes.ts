import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./promo/components/promo/promo.component").then((m) => m.PromoComponent),
    },
    {
        path: "company",
        loadComponent: () => import("./company/components/company/company.component").then((m) => m.CompanyComponent),
    },
    { path: "**", redirectTo: "/" },
];

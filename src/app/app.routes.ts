import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./promo/components/promo/promo.component").then(
                (m) => m.PromoComponent
            ),
    },
];

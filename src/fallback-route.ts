import { Route } from "@angular/router";

export const fallbackRoute: Route =
  { path: '**', redirectTo: '/form1', pathMatch: 'full' };


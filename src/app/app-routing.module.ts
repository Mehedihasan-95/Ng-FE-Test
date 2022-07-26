import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const routes: Route[] = [
  { path: 'month/:id', component: CardComponent },
  { path: '', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

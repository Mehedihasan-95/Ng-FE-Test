import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const routes: Route[] = [
  {
    path: 'm/:id',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

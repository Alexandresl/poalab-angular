import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EspacoComponent } from './views/espaco/espaco.component';
import { EquipamentosComponent } from './views/equipamentos/equipamentos.component';
import { LinksComponent} from './views/links/links.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "espaco",
    component: EspacoComponent
  },
  {
    path: 'equipamentos',
    component: EquipamentosComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

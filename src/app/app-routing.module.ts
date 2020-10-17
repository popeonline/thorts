import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceMailComponent } from './_shared/components/space-mail/space-mail.component';
import { TheGalaxyComponent } from './_shared/components/the-galaxy/the-galaxy.component';
import { IntroComponent } from './_shared/components/intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'the-galaxy', component: TheGalaxyComponent },
  { path: 'space-mail', component: SpaceMailComponent },
  { path: 'space-mail/:id', component: SpaceMailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

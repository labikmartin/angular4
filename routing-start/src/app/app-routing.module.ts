import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolveService } from './servers/server/server-resolver.service';

import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent},
  ]},
  {path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
    {path: ':id', component: ServerComponent, resolve: {server: ServerResolveService}},
    {path: ':id/edit', canDeactivate: [CanDeactivateGuardService], component: EditServerComponent}
  ]},
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found LOL'}},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
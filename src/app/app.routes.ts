
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PageOthersComponent } from './components/pages/page-others/page-others.component';
import { PageServicesComponent } from './components/pages/page-services/page-services.component';
import { PageDirectivesComponent } from './components/pages/page-directives/page-directives.component';
import { PageComponentComponent } from './components/pages/page-component/page-component.component';
import { PagePipesComponent } from './components/pages/page-pipes/page-pipes.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'components', component: PageComponentComponent },
  { path: 'directives', component: PageDirectivesComponent },
  { path: 'services', component: PageServicesComponent },
  { path: 'pipes', component: PagePipesComponent },
  { path: 'others', component: PageOthersComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
];

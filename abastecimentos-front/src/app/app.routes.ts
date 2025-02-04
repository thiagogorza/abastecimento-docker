import {Routes} from '@angular/router';

import {AbastecimentoFormComponent} from './components/abastecimento-form/abastecimento-form.component';
import {AbastecimentoListComponent} from './components/abastecimento-list/abastecimento-list.component';

export const routes: Routes = [
  {path: '', component: AbastecimentoListComponent},
  {path: 'novo', component: AbastecimentoFormComponent},
  {path: '**', redirectTo: ''}
];

import { Routes } from '@angular/router';
import { MainComponent } from './View/Main/Main.component';
import { SearchComponent } from './View/Search/Search.component';

export const routes: Routes = [
    {path: 'search/:query', component: SearchComponent},
    {path: '**', component: MainComponent}
];

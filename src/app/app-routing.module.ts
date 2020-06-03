import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'blood-and-money',
    loadChildren: () => import('./filmes/blood-and-money/blood-and-money.module').then( m => m.BloodAndMoneyPageModule)
  },
  {
    path: 'aprendiz-de-espia',
    loadChildren: () => import('./filmes/aprendiz-de-espia/aprendiz-de-espia.module').then( m => m.AprendizDeEspiaPageModule)
  },
  {
    path: 'legacy',
    loadChildren: () => import('./filmes/legacy/legacy.module').then( m => m.LegacyPageModule)
  },
  {
    path: 'dilwale-dulhania-le-jayenge',
    loadChildren: () => import('./filmes/dilwale-dulhania-le-jayenge/dilwale-dulhania-le-jayenge.module').then( m => m.DilwaleDulhaniaLeJayengePageModule)
  },
  {
    path: 'o-poderoso-chefao',
    loadChildren: () => import('./filmes/o-poderoso-chefao/o-poderoso-chefao.module').then( m => m.OPoderosoChefaoPageModule)
  },
  {
    path: 'game-of-thrones',
    loadChildren: () => import('./series/game-of-thrones/game-of-thrones.module').then( m => m.GameOfThronesPageModule)
  },
  {
    path: 'a-cacada',
    loadChildren: () => import('./filmes/a-cacada/a-cacada.module').then( m => m.ACacadaPageModule)
  },
  {
    path: 'os-simpsons',
    loadChildren: () => import('./desenhos/os-simpsons/os-simpsons.module').then( m => m.OsSimpsonsPageModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./desenhos/rick-and-morty/rick-and-morty.module').then( m => m.RickAndMortyPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

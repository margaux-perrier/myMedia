import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/core/models/item';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { appActions, appSelectors } from 'src/app/state/app';
import { itemsActions, itemsSelectors } from 'src/app/state/items';
import { filterActions } from 'src/app/state/filter';
import { Router } from '@angular/router';

/**
* @description display moviesList 
* @param { State } Store
*/
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePageComponent implements OnInit {
   
  constructor(private store : Store<State>, private route : Router) { }
  isMenuBurgerOpen$! : Observable<boolean>; 
  moviesList$ ! : Observable<IItem[]>; 
  seriesList$ ! : Observable<IItem[]>; 
  currentUrl! : string; 

  ngOnInit(): void {
    this.isMenuBurgerOpen$ = this.store.select(appSelectors.getShowMenuBurgerProperty); 
    this.store.dispatch(filterActions.resetFilter()); 
    this.store.dispatch(itemsActions.loadItemListAction());  
    this.currentUrl = this.route.url; 
    // this.store.dispatch(appActions.handleCurrentRouteAction({url : this.currentUrl}))
    this.moviesList$ = this.store.select(itemsSelectors.getMoviesList); 
    this.seriesList$ = this.store.select(itemsSelectors.getSeriesList);
  }
}

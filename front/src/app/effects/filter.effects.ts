import { Injectable } from '@angular/core'; 
import { GenreService } from '../services/genre/genre.service';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { loadFilterListAction, loadFilterListSuccessAction, loadFilterListFailure} from '../actions/filter.action';

/** @class
* effect
* @param {Action} action$
* @param {GenreService} genreService - service
* @return {Action} action$ - new action
*/
@Injectable()
export class filterListEffects{

    constructor( private actions$ : Actions, private genreService : GenreService ){}

    loadGenre$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(loadFilterListAction), 
            mergeMap(() => this.genreService.genreList$.pipe(
                map(genreList => loadFilterListSuccessAction ({genreList})),
                catchError(error => of(loadFilterListFailure({error}))),
            )),
        )
    })
}
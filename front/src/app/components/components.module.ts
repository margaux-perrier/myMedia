import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { menuburgerReducer } from './menu-burger/menuburger.reducer';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SearchPipe } from '../pipes/search-pipe.pipe';



@NgModule({
  declarations: [
    CardComponent, 
    CardListComponent, 
    FilterComponent, 
    FooterComponent, 
    HeaderComponent, 
    MenuBurgerComponent, 
    SearchComponent, 
    TagComponent, 
    HomePageComponent, 
    MoviePageComponent, 
    NotFoundPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule, 
    FontAwesomeModule, 
    AppRoutingModule,
    StoreModule.forFeature('menuburger', menuburgerReducer)
  ]
})
export class ComponentsModule { }
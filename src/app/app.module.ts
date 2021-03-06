import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { FilteringComponent } from './filtering/filtering.component';
import { PhotographsThemeComponent } from './photographs-theme/photographs-theme.component';
import { ReplaceSpacesPipe } from './replace-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    BreadcrumbComponent,
    PhotographsComponent,
    ArtistsComponent,
    ArtistDetailsComponent,
    FilteringComponent,
    PhotographsThemeComponent,
    ReplaceSpacesPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path : '', component: WelcomeComponent},
      {path: 'photographies', component: PhotographsComponent},
      {path: 'photographies/par_theme/:themeName', component: PhotographsThemeComponent},
      {path: 'artistes', component: ArtistsComponent},
      {path: 'artistes/:name', component: ArtistDetailsComponent},
      {path : '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

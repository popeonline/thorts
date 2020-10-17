import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './_shared/components/intro/intro.component';
import { StarsComponent } from './_shared/components/stars/stars.component';
import { SpaceMailComponent } from './_shared/components/space-mail/space-mail.component';
import { TheGalaxyComponent } from './_shared/components/the-galaxy/the-galaxy.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageNamePipe } from './_shared/pipes/image-name.pipe';
import { NavigationComponent } from './_shared/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StarsComponent,
    SpaceMailComponent,
    TheGalaxyComponent,
    ImageNamePipe,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

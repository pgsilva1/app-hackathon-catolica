import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChartsModule } from 'ng2-charts-x';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CursosPage } from '../pages/cursos/cursos';
import { InsigniasPage } from '../pages/insignias/insignias';
import { ResumoPage } from '../pages/resumo/resumo';

@NgModule({
  declarations: [
    MyApp,
    CursosPage,
    InsigniasPage,
    ResumoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CursosPage,
    InsigniasPage,
    ResumoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

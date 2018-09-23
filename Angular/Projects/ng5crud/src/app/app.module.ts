import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CoinService } from './coin.service';

@NgModule({
  declarations: [AppComponent, IndexComponent, CreateComponent, EditComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule {}

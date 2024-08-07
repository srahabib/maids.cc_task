import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-detail/user-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './Interceptors/loading.interceptor';
import { LoadingService } from './Service/loading.service';
import { HoldableDirective } from './holdable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    LoadingComponent,
    HoldableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

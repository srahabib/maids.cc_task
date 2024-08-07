// src/app/store/app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
})
export class AppStoreModule {}

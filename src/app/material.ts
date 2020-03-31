import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule ({
  imports: [
      MatSliderModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule
    ],
  exports: [
      MatSliderModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule
    ],
})

export class MaterialModule { }
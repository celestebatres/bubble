import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {HeaderComponentModule} from '../header/header.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HeaderComponentModule  ,
    HttpClientModule , NgFor
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

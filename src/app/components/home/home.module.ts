
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
    declarations: [
    BannerComponent,
    HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule
    ]
})
export class HomeModule {

}

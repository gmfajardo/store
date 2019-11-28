
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
    BannerComponent,
    HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class HomeModule {

}

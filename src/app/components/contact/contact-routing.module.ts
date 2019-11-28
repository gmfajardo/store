import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {

}

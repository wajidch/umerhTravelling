
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [

      { path:'bookings',component:HomeComponent,data: {title: ':: Al-Musawar | Travels &amp; Tours ::'}},
     
  
      {path:'**',redirectTo:'',pathMatch:'full',data: {title: ':: Al-Musawar | Travels &amp; Tours ::'}}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

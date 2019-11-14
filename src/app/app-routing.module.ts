
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';



const routes: Routes = [

      { path:'',component:ComingSoonComponent,data: {title: ':: Al-Musawar | Travels &amp; Tours ::'}},

      { path:'bookings',component:HomeComponent,data: {title: ':: Al-Musawar | Travels &amp; Tours ::'}},
     
  
      {path:'**',redirectTo:'',pathMatch:'full',data: {title: ':: Al-Musawar | Travels &amp; Tours ::'}}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

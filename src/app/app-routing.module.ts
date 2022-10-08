import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { ApprovalComponent } from './Components/approval/approval.component';
import { ClientComponent } from './Components/client/client.component';
import { HistoryComponent } from './Components/history/history.component';
import { NavbarComponent } from './Components/navbar/navbar.component';



const routes: Routes = [{path:'admin',component:AdminComponent},
{path:'Client',component:ClientComponent},
{path:'Approval',component:ApprovalComponent},
{path:'History',component:HistoryComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentBottomSheetLayoutComponent } from './components/bottom-sheet-demo/parent-bottom-sheet-layout/parent-bottom-sheet-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ParentBottomSheetLayoutComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ParentBottomSheetLayoutComponent, DemoBottomSheet } from './components/bottom-sheet-demo/parent-bottom-sheet-layout/parent-bottom-sheet-layout.component';
import { MainNavigationLayoutComponent } from './components/main-layout/main-navigation-layout/main-navigation-layout.component';
import { DataTableComponent } from './components/bottom-sheet-demo/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentBottomSheetLayoutComponent,
    DemoBottomSheet,
    MainNavigationLayoutComponent,
    DataTableComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    DemoBottomSheet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

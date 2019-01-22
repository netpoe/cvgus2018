import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworksComponent } from './networks/networks.component';

@NgModule({
  declarations: [NetworksComponent],
  imports: [
    CommonModule
  ],
  exports: [NetworksComponent],
})
export class SharedModule { }

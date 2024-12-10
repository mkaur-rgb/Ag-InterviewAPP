import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../assets/shared/services/common.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CommonService], // Provide CommonService in the module
})
export class SharedModule {}

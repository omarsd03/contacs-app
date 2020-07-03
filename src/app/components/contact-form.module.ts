import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class ContactFormModule {}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder, public contactsService: ContactsService) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get telefonoNoValido() {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

  get mensajeNoValido() {
    return this.forma.get('mensaje').invalid && this.forma.get('mensaje').touched;
  }

  crearFormulario() {

    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(200)]]
    });

  }

  guardar() {

    console.log(this.forma.value);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((c) => c.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    } else {
      this.contactsService.postContactos(this.forma.value).subscribe( (resp: any) => {
        console.log(resp);
      });
    }

    this.forma.reset();

  }
}

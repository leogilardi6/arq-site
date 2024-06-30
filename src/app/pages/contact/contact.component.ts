import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { contact_info } from '../../../assets/resources/contact';
import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  contactInfo = contact_info;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm?.valid) {
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
      emailjs.send(
        'service_642dw7a',
        'template_027clgk',
        {
          full_name: this.contactForm.controls['full_name'].value,
          email: this.contactForm.controls['email'].value,
          phone: this.contactForm.controls['phone'].value,
          message: this.contactForm.controls['message'].value,
        },
        'jo9_Jmf_6_6rzEd2P'
      );
      this.contactForm.reset();
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .send('service_642dw7a', 'template_027clgk', e.target as HTMLFormElement)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          // Aquí puedes manejar la respuesta exitosa, como mostrar un mensaje al usuario
        },
        (error) => {
          console.log(error.text);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      );
  }
}

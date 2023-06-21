import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/discover/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    name: [, Validators.required],
    password: [, [Validators.required]]
  })

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
  }

  saveRegister() {
    if (!this.formRegister.valid) {
      this.formRegister.markAllAsTouched();
      return;
    }
    this.authservice.authRegister(this.formRegister.value).subscribe(response => {
      this.router.navigate(['/login'])
      Swal.fire(
        'Good job!',
        'User Register successfull!',
        'success'
      )
    }, error => {
      this.formRegister.reset()
      var message = ''
      for (const field in error.error) {
        message += `${field} errors: ${error.error[field].join(', ')} \n`
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      })
    })
  }

}

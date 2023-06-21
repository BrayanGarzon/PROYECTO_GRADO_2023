import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/discover/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup = this.fb.group({
    email: [, [Validators.required]],
    password: [, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  saveLogin() {
    if (!this.formLogin.valid) {
      this.formLogin.markAllAsTouched()
      return;
    }
    this.authService.authLogin(this.formLogin.value).subscribe(response => {
      Swal.fire(
        'Good job!',
        'login is successfull!',
        'success'
      )
      this.router.navigateByUrl('/discover').then(() => {
        // Recarga la página
        window.location.reload();
      });
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.non_field_errors.join(', '),
      })
      
    })
  }

}

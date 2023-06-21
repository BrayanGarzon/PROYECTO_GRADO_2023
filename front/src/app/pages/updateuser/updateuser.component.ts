import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/discover/user.interface';
import { AuthService } from 'src/app/services/discover/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  public user: User = {
    name: '',
    email: '',
    password: '',
    fake_name: ''
  };

  formRegister: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    name: [, Validators.required],
    password: [, [Validators.required]]
  })

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.getMe()
  }

  getMe() {
    this.authservice.authMe(null).subscribe( resp => {
      this.user = resp;
      console.log(this.user);
    } )
  }

  saveRegister() {
    if (!this.formRegister.valid) {
      this.formRegister.markAllAsTouched();
      return;
    }
    this.authservice.updateRegister(this.formRegister.value).subscribe(response => {
      localStorage.clear();
      this.router.navigateByUrl('/login').then(() => {
        // Recarga la página
        window.location.reload();
      });
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

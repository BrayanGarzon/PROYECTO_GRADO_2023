import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendmailService } from 'src/app/services/discover/sendmail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formEmail: FormGroup = this.fb.group({
    full_name: [ , Validators.required],
    message: [ , Validators.required],
    email: [ , Validators.required]
  });

  constructor(private fb: FormBuilder, private sendMailService: SendmailService) { }

  sendEmail() {
    if (!this.formEmail.valid) {
      this.formEmail.markAllAsTouched()
      return;
    }

    this.sendMailService.sendMail(this.formEmail.value).subscribe(resp => {
      this.formEmail.reset()
      if (!resp.success) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resp.message,
        })
      } else {
        Swal.fire(
          'Good job!',
          resp.message,
          'success'
        )
      }
    });
  }

}

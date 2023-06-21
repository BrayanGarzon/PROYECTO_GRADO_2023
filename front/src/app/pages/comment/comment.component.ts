import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/discover/comment.interface';
import { CommentsService } from 'src/app/services/discover/comments.service';
import { SitesService } from 'src/app/services/discover/sites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private siteId: string | null;
  site: any;

  formComment: FormGroup = this.fb.group({
    message: [, [Validators.required]],
    quality: [ , [Validators.required, Validators.min(1), Validators.max(5)]]
  })

  constructor(private sitesService: SitesService, private commentsService: CommentsService ,private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.siteId = activatedRoute.snapshot.paramMap.get('site_id');
    this.getSite(this.siteId!)
  }

  getSite(siteId: string) {
    this.sitesService.getSiteById(siteId).subscribe(response => {
      this.site = response;
    })
  }

  sendComment() {
    if (!this.formComment.valid) {
      this.formComment.markAllAsTouched()
      return;
    }
    var comment: Comment = {
      name: this.formComment.controls['message'].value,
      site: Number(this.siteId),
      quality: this.formComment.controls['quality'].value,
    }
    this.commentsService.saveComment(comment).subscribe(respponse => {
      Swal.fire(
        'Good job!',
        'Gracias por tu comentario!',
        'success'
      )
      this.router.navigate(['/discover/comments/show/', this.siteId])
    }, error => {
      this.formComment.reset()
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error enviando tu comentario',
      })
    })
  }

}

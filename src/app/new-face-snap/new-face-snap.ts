import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnapModel } from '../model/face-snap.model';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe, UpperCasePipe, DatePipe],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnapModel>;
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        imageUrl: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/,
            ),
          ],
        ],
        location: [null],
      },
      {
        updateOn: 'blur',
      },
    );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0,
      })),
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
  }
}

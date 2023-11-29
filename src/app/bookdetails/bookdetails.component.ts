import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookDetailsComponent {
  bookdetails!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newform();
  }
  newform() {
    this.bookdetails = this.fb.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['',Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d*$/)]],
      genre: ['',Validators.required],
      publishedDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['',Validators.required]
    });
  }
  hasError(controlName: string, errorType: string): boolean {
    const control = this.bookdetails.get(controlName);
    return control?.hasError(errorType) && (control?.valid || control?.touched) || false;
  }

  Save() {
    alert("Book Details Saved Successfully");
    this.bookdetails.reset(this.bookdetails);
  }
}

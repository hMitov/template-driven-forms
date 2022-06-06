import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'template-driven-forms';

  @ViewChild('f') signUpForm: NgForm;
  questionDefault = 'pet';
  answer = 'kur';
  genders = [ 'male', 'female' ];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  isSubmitted = false;

  onSubmit() {
    this.user.username = this.signUpForm.form.value.userData.username;
    this.user.email = this.signUpForm.form.value.userData.email;
    this.user.secretQuestion = this.signUpForm.form.value.secret;
    this.user.answer = this.signUpForm.form.value.questionAnswer;
    this.user.gender = this.signUpForm.form.value.gender;
    this.isSubmitted = true;

    this.signUpForm.resetForm();
  }

  suggestUserName() {
    const suggestedName = 'Superstar';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
        userData: {
          username: suggestedName
        }
      }
    );
  }
}

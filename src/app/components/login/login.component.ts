import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../models/login';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { UUID } from 'angular2-uuid';
import { AuthenticationService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // login: Login;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get formEntryData() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log(this.formEntryData);

    this.loading = true;
    
      this.authenticationService.login(this.formEntryData.username.value, this.formEntryData.password.value,)
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          console.log('component', data)
            },
            error => {
              this.error = error;
              this.loading = false;
            })
          }
          
  register()
  {
    console.log("registering");
    let uu_id = UUID.UUID();
    this.authenticationService.register(uu_id, this.formEntryData.username.value, this.formEntryData.password.value,)
    .subscribe(
      res=>{
        console.log(res)
        // localStorage.setItem('token', res['token'])
        // this.router.navigate(['/private-tasks'])
      },
      err=>console.log(err)
    )

  }

}


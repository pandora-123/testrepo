import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../../Services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
registerForm: any;
response: any;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router,) {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      teleno: ['', [Validators.required]],
      address: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }
  get f() { return this.registerForm.controls; }
  saveUser() {
   const data = {firstName: this.f.firstName.value, lastName:this.f.lastName.value, telephone:this.f.lastName.teleno, address:this.f.address.value, ssn:this.f.ssn.teleno}
    this.apiService.registerUser(data).
    subscribe(
        resultArray => {this.response = resultArray;
                        if (this.response.status === 200) {
                            alert('User register successfully');
                        } else {
                          alert('User not register');
                         }
      },
      error => { if  (error) {
        alert('Some server error');
      }});
  }


}

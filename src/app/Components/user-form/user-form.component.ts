import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup;
  userFormArray: any[] = []
  userObject = {
    "firstName": "",
    "lastName": "",
    "userName": "",
    "email": "",
    "countryCode": 0,
    "phoneNumber": 0,
    "password": "",
    "confirmPassword": ""
  }

  phoneRegex: RegExp = /^((3[0-9])|(6[0-9])|(8[1-9])|(9[0-8]))[0-9]{6}$/;
  constructor(private formBuilder: FormBuilder, private user: UserService, private http: HttpClient) {
    this.userForm = new FormGroup({})
  }

  ngOnInit() {
    this.createForm()
  }

  confirmObj = {
    password: "",
    confirmPassword: "",
    errorShow:""
  }

  createForm() {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      countryCode: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern('[7-9]{1}[0-9]{9}')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get userName() {
    return this.userForm.get('userName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get countryCode() {
    return this.userForm.get('countryCode');
  }
  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  
  SaveUserDetails() {
    if (this.userForm.valid) {
      this.userObject = this.userForm.value;
      this.user.saveUserDetails(this.userObject).subscribe((result: any) => {
        this.userFormArray = result
        console.log(result)
      })
    }
  }
   
  checkPassword(){
    if(this.confirmObj.password !== this.confirmObj.confirmPassword){
    this.confirmObj.errorShow="Password does not match"
    }else {
      this.confirmObj.errorShow =''
    }
  }
}

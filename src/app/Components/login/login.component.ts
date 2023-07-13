import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj = {
    userName: '',
    password: ''
  }
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }
  onLogin() {
    if(this.loginObj.userName =='yash'&& this.loginObj.password=="yash"){
      localStorage.setItem('username', this.loginObj.userName)

    }
    this.http.post(`https://localhost:44348/api/UserRegistration/UserLogin?userName=${this.loginObj.userName}&password=${this.loginObj.password}`, this.loginObj).subscribe((res: any) => {
      localStorage.setItem('username', this.loginObj.userName)

    })
    this.router.navigateByUrl('register')
  }
}
 
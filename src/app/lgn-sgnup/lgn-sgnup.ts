import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lgn-sgnup',
  standalone: false,
  templateUrl: './lgn-sgnup.html',
  styleUrl: './lgn-sgnup.css'
})
export class LgnSgnup implements OnInit{
  Register:FormGroup;
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router){
    this.Register = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required])
    }, { validators: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  ngOnInit(){
    const container=document.getElementById('container');
    const registerBtn=document.getElementById('register');
    const loginBtn= document.getElementById('login');

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
    }
  }

  onSignUp(){
    if (this.Register.valid) {
      console.log('Form Submitted ✅', this.Register.value);
    } else {
      console.log('Form Invalid ❌');
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const success = this.auth.login(email, password);
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }
}

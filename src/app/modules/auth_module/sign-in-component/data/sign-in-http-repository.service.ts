import { Injectable } from '@angular/core';
import { SignInRepository } from '../domain/repositories/sign-in-repository';

@Injectable({
  providedIn: 'root'
})
export class SignInHttpRepositoryService implements SignInRepository {

  constructor() { }

  login(): String {
    return 'testing DI';
  }
}

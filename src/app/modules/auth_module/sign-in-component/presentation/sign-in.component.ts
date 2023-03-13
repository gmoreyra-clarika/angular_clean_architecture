import { Component } from '@angular/core';
import { SignInUseCase } from '../domain/interactor/sign-in-use-case';

@Component({
  selector: 'app-auth',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  _loadedText: String = '';

  constructor(_useCase: SignInUseCase) {
    this._loadedText = _useCase.execute();
  }
}

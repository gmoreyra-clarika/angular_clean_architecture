import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in-component/presentation/sign-in.component';
import { SignInRepository } from './sign-in-component/domain/repositories/sign-in-repository';
import { SignInHttpRepositoryService } from './sign-in-component/data/sign-in-http-repository.service';
import { SignInUseCase } from './sign-in-component/domain/interactor/sign-in-use-case';
import { SignInUseCaseImpl } from './sign-in-component/domain/interactor/sign-in-use-case-impl';


@NgModule({
  declarations: [
    SignInComponent
  ],
  providers: [
    { provide: SignInRepository, useClass: SignInHttpRepositoryService },
    { provide: SignInUseCase, useClass: SignInUseCaseImpl },
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

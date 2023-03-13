import { Injectable } from "@angular/core";
import { SignInRepository } from "../repositories/sign-in-repository";
import { SignInUseCase } from "./sign-in-use-case";

@Injectable()
export class SignInUseCaseImpl implements SignInUseCase {
    repository: SignInRepository;

    constructor(_repository: SignInRepository) {
        this.repository = _repository;
    }

    execute(): String {
        return this.repository?.login();
    }
}
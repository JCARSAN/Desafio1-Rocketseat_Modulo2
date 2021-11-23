import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
      const userExistys = this.usersRepository.findByEmail(email);
      if(userExistys){
        throw new Error("This email is already registered");
      }
      const user = this.usersRepository.create({ email, name });
      return user;
  }
}

export { CreateUserUseCase };

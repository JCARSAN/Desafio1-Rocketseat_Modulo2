import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if(!user){
      throw new Error("User not exists!");
    }else if(!user.admin){
      throw new Error("This user does not have permission of admin");
    }
    return this.usersRepository.list();
    /*
    if(user_id){
      return [this.usersRepository.findById(user_id)];
    }
    return this.usersRepository.list();
    */
  }

}

export { ListAllUsersUseCase };



import { AbstractControl, FormControl, Validator } from "@angular/forms";
import { UserService } from "app/user/user.service";
import { Observable } from "rxjs/Observable";
import { User } from "app/user/user";

export class UserValidators{

  static userService : UserService; 

  constructor(userService: UserService) {
    console.log("constructor usernameValidator");
    UserValidators.userService = userService;
  }

  shouldBeUnique(control : AbstractControl){
        return new Promise ((resolve, reject) => {
            let isDuplicate;
            UserValidators.userService.checkUsername(control.value)
               .then((response) => {
                    if(response.status && response.status == 200){
                        resolve(null)
                      }else{
                        resolve({duplicate: true})
                      }
                  }
                 )
               .catch(e => reject(e));
        })
    }
}
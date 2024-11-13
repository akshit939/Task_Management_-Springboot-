package com.Backend.backend1.controllers;

import com.Backend.backend1.entity.helperclasses.Addtask;
import com.Backend.backend1.entity.helperclasses.Login;
import com.Backend.backend1.entity.UserData;
import com.Backend.backend1.services.LoginSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class LoginSignupController {
    @Autowired
    LoginSignupService loginSignupService;
    @PostMapping("/register")
    @CrossOrigin(origins = "http://127.0.0.1:65385")
    public int register(@RequestBody UserData userData){
       boolean x= loginSignupService.RegisterService(userData);
        if(x){
            return 200;
        }else{
            return 500;
        }
    }
    @PostMapping("/login")
    @CrossOrigin(origins = "http://127.0.0.1:65385")
    public UserData login(@RequestBody Login login){
        if (loginSignupService.LoginService(login)!=null){
            return loginSignupService.LoginService(login);
        }else{
            return null;
        }

    }

    @PostMapping("/addtask")
    @CrossOrigin(origins = "http://127.0.0.1:65385")
    public UserData addtasks(@RequestBody Addtask addtask ){

        return loginSignupService.Addtasks(addtask);
    }
    @PostMapping("/completed")
    @CrossOrigin(origins = "http://127.0.0.1:65385")
    public  UserData completed(@RequestBody Addtask addtask){
        return loginSignupService.Completedtask(addtask);
    }
    @PostMapping("/deleted")
    @CrossOrigin(origins = "http://127.0.0.1:65385")
    public UserData deleted(@RequestBody Addtask addtask){
        return loginSignupService.DeleteTask(addtask);
    }


}

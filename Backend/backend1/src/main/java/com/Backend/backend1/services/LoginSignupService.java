package com.Backend.backend1.services;

import com.Backend.backend1.entity.Alltasks;
import com.Backend.backend1.entity.helperclasses.Addtask;
import com.Backend.backend1.entity.helperclasses.DateCompleteSetter;
import com.Backend.backend1.entity.helperclasses.Login;
import com.Backend.backend1.entity.UserData;
import com.Backend.backend1.repository.Mongorepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Component
public class LoginSignupService {
@Autowired
    Mongorepo mongorepo;
    public boolean RegisterService(UserData userData) {
        List<UserData> userDataList = mongorepo.findAll();
        boolean res=true;

        for (UserData user : userDataList) {
            if (user.getEmail().equals(userData.getEmail()) || user.getPassword().equals(userData.getPassword())) {
                res=false;
                break;

            }
        }


        if(res){
            mongorepo.save(userData);
            System.out.println("Added");
            System.out.println(userData.getEmail());
            return true;
        }else{
            return false;
        }
    }
    public UserData LoginService(Login login){
        int i=0;
        List<UserData> userDataList = mongorepo.findAll();
        for (UserData user : userDataList) {
            if (user.getEmail().equals(login.getEmail()) && user.getPassword().equals(login.getPassword())) {
                return userDataList.get(i);

            }
            else{
                i++;
            }
        }
        return null;
    }
//test api start here
public UserData Addtasks(Addtask addtask) {

    List<UserData> userDataList = mongorepo.findAll();

    for (UserData userData : userDataList) {
        if (userData.getEmail().equals(addtask.getEmail()) && userData.getPassword().equals(addtask.getPassword())) {

            if(!Objects.equals(addtask.getTaskname(), "") && !Objects.equals(addtask.getTaskdesc(), "") && !Objects.equals(addtask.getDate(), "")){
                Alltasks alltasks = new Alltasks();
                alltasks.setTaskname(addtask.getTaskname());
                alltasks.setTaskdesc(addtask.getTaskdesc());
                alltasks.setDate(addtask.getDate());

                userData.getPendingtask().add(alltasks);


                return mongorepo.save(userData);
            }
        }
    }

    throw new RuntimeException("Task Empty " + addtask.getEmail());
}

public UserData Completedtask(Addtask addtask){
        List<UserData> All = mongorepo.findAll();
        for(UserData userData :All){
            if(userData.getEmail().equals(addtask.getEmail())&& userData.getPassword().equals(addtask.getPassword())){
              for (int i=0;i<userData.getPendingtask().size();i++){
                  if(userData.getPendingtask().get(i).getTaskname().equals(addtask.getTaskname()) &&
                          userData.getPendingtask().get(i).getTaskdesc().equals(addtask.getTaskdesc()) &&
                          userData.getPendingtask().get(i).getDate().equals(addtask.getDate())){
                      Alltasks alltasks= new Alltasks();
                      alltasks.setTaskname(addtask.getTaskname());
                      alltasks.setTaskdesc(addtask.getTaskdesc());
                      DateCompleteSetter dateCompleteSetter= new DateCompleteSetter();
                      alltasks.setDate(dateCompleteSetter.getDate());
                      userData.getCompletedtask().add(alltasks);

                      userData.getPendingtask().remove(i);

                      return  mongorepo.save(userData);
                  }
              }

            }
        }
    return  null;
}


public UserData DeleteTask(Addtask addtask){
        List<UserData> All= mongorepo.findAll();
        for(UserData userData : All){
            if(userData.getEmail().equals(addtask.getEmail())&& userData.getPassword().equals(addtask.getPassword())){
                for (int i=0;i<userData.getPendingtask().size();i++){
                    if (userData.getPendingtask().get(i).getTaskname().equals(addtask.getTaskname()) &&
                            userData.getPendingtask().get(i).getTaskdesc().equals(addtask.getTaskdesc()) && userData.getPendingtask().get(i).getDate().equals(addtask.getDate())){
                        userData.getPendingtask().remove(i);
                      return   mongorepo.save(userData);
                    }
                }
            }
        }
        return null;
}
}

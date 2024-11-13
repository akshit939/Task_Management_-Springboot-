package com.Backend.backend1.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document
public class UserData {
    @Id
    private ObjectId id;
    private String userid;
    private String email;
    private String password;
    Alltasks at;
    private List<Alltasks> pendingtask = new ArrayList<>();
    private List<Alltasks> completedtask = new ArrayList<>();

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }
    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Alltasks> getPendingtask() {
        return (ArrayList<Alltasks>) pendingtask;
    }

    public void setPendingtask(ArrayList<Alltasks> pendingtask) {
        this.pendingtask = pendingtask;
    }

    public ArrayList<Alltasks> getCompletedtask() {
        return (ArrayList<Alltasks>) completedtask;
    }

    public void setCompletedtask(ArrayList<Alltasks> completedtask) {
        this.completedtask = completedtask;
    }
}


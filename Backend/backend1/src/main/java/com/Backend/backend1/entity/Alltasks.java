package com.Backend.backend1.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import java.awt.*;
import java.util.Date;
@Document
public class Alltasks {
    private String taskname;
    private String taskdesc;
    private String date;

    public String getTaskname() {
        return taskname;
    }

    public void setTaskname(String taskname) {
        this.taskname = taskname;
    }

    public String getTaskdesc() {
        return taskdesc;
    }

    public void setTaskdesc(String taskdesc) {
        this.taskdesc = taskdesc;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
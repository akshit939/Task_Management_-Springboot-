package com.Backend.backend1.entity.helperclasses;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateCompleteSetter {

        // Get the current date and time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // Define the desired format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

        // Format the current date and time
        String formattedDateTime = currentDateTime.format(formatter);

        public String getDate(){
            return formattedDateTime;
        }

}

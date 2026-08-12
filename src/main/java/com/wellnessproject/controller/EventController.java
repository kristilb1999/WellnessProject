package com.wellnessproject.controller;

import com.wellnessproject.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class EventController {

    private final EventService eventService;


    public EventController(
            EventService eventService) {

        this.eventService = eventService;
    }


    @PostMapping("/events")
    public String createEvent(

            @RequestParam String title,

            @RequestParam String description,

            @RequestParam String date,

            @RequestParam String startTime,

            @RequestParam String endTime) {


        eventService.createEvent(

                title,

                description,

                LocalDate.parse(date),

                LocalTime.parse(startTime),

                LocalTime.parse(endTime)

        );


        return "redirect:/day?date=" + date;

    }

}
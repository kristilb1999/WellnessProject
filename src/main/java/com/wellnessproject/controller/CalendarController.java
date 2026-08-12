package com.wellnessproject.controller;

import com.wellnessproject.model.CalendarEvent;
import com.wellnessproject.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

@Controller
public class CalendarController {

    private final EventService eventService;

    public CalendarController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/")
    public String monthView() {
        return "calendar";
    }

    @GetMapping("/day")
    public String dayView(
            @RequestParam String date,
            Model model) {

        LocalDate selectedDate = LocalDate.parse(date);

        List<CalendarEvent> events =
                eventService.getEventsForDate(selectedDate);

        model.addAttribute(
                "selectedDate",
                selectedDate
        );

        model.addAttribute(
                "events",
                events
        );

        return "day";
    }
}

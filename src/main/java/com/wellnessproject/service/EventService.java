package com.wellnessproject.service;

import com.wellnessproject.model.CalendarEvent;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    private final List<CalendarEvent> events = new ArrayList<>();

    private long nextId = 1;


    /**
     * Return all calendar events.
     */
    public List<CalendarEvent> getAllEvents() {
        return events;
    }


    /**
     * Return all events for a specific date.
     */
    public List<CalendarEvent> getEventsForDate(LocalDate date) {

        return events.stream()
                .filter(event -> event.getDate().equals(date))
                .toList();

    }


    /**
     * Create a new calendar event.
     */
    public CalendarEvent createEvent(
            String title,
            String description,
            LocalDate date,
            LocalTime startTime,
            LocalTime endTime) {

        CalendarEvent event = new CalendarEvent(
                nextId++,
                title,
                description,
                date,
                startTime,
                endTime
        );

        events.add(event);

        return event;
    }

}
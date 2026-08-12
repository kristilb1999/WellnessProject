@author  Kristi Evans
@date  11 August 2026

Planned Java Structure:

com.wellnessproject
│
├── WellnessProjectApplication.java
│
├── controller
│   ├── CalendarController.java
│   ├── EventController.java
│   ├── TodoController.java
│   └── WellnessController.java
│
├── model
│   ├── CalendarEvent.java
│   ├── Todo.java
│   └── DailyMessage.java
│
├── service
│   ├── CalendarService.java
│   ├── EventService.java
│   ├── TodoService.java
│   └── WellnessService.java
│
└── repository
    ├── EventRepository.java
    ├── TodoRepository.java
    └── DailyMessageRepository.java

Frontend Resources should look something like this:

src/main/resources
│
├── templates
│   ├── calendar.html
│   └── ...
│
├── static
│   ├── css
│   │   └── calendar.css
│   │
│   ├── js
│   │   └── calendar.js
│   │
│   └── images
│
└── application.properties

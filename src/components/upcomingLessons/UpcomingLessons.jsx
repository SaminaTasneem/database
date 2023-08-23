import React from 'react';
import './UpcomingLessons.css';

const UpcomingLessons = () => {
  const upcomingLessons = [
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'chapter-1',
      date: '2023-08-25',
      time: '10:00 AM',
    },
    {
      id: 2,
      subject: 'Science',
      topic: 'chapter-2',
      date: '2023-08-26',
      time: '02:30 PM',
    },
    // Add more lessons here
  ];

  return (
    <div className="upcoming-lessons">
      <h2>Upcoming Lessons</h2>
      <ul className="lesson-list">
        {upcomingLessons.map((lesson) => (
          <li key={lesson.id} className="lesson-item">
            <div className="lesson-details">
            <div className="lesson-subject-topic">
              <div className="lesson-subject">{lesson.subject}</div>
              <div className="lesson-topic">{lesson.topic}</div>
              </div>
              <div className="lesson-date-time">
                <div className="lesson-date">{lesson.date}</div>
                <div className="lesson-time">{lesson.time}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingLessons;

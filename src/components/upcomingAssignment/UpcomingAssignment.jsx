import React from 'react';

const UpcomingAssignment = () => {
  const upcomingAssignemts = [
    {
      id: 1,
      name: 'Assignment 1',
      topic: 'Science',
      date: '2023-08-25',
      time: '10:00 AM',
    },
    {
      id: 2,
      name: 'Assignment 2',
      topic: 'Science',
      date: '2023-08-26',
      time: '02:30 PM',
    },
  ];

  return (
    <div className="upcoming-lessons">
      <h2>Upcoming Assignments</h2>
      <ul className="lesson-list">
        {upcomingAssignemts.map((assignment) => (
          <li key={assignment.id} className="lesson-item">
            <div className="lesson-details">
            <div className="lesson-subject-topic">
              <div className="lesson-subject">{assignment.name}</div>
              <div className="lesson-topic">{assignment.topic}</div>
              </div>
              <div className="lesson-date-time">
                <div className="lesson-date">{assignment.date}</div>
                <div className="lesson-time">{assignment.time}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingAssignment;

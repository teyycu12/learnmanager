import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeeklySchedule from './WeeklySchedule';
import ScheduleEditor from './ScheduleEditor';
import Sidebar from './Sidebar'; // 確認導入 Sidebar
import Notebook from './Notebook';

function Dashboard() {
  const [scheduleData, setScheduleData] = useState({
    semester: '',
    weeks: '',
    startDate: '',
    schedule: {}, // 存儲課表資料
  });

  // 儲存學期資訊
  const handleSemesterSubmit = (data) => {
    setScheduleData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  // 儲存課程資訊
  const handleSaveCourse = (course) => {
    setScheduleData((prevData) => {
      const updatedSchedule = { ...prevData.schedule };
      if (!updatedSchedule[course.day]) {
        updatedSchedule[course.day] = {};
      }
      updatedSchedule[course.day][course.period] = {
        courseName: course.courseName,
        teacher: course.teacher,
        location: course.location,
      };
      return { ...prevData, schedule: updatedSchedule };
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 左側 Sidebar */}
      <div style={{ flex: 1, backgroundColor: '#f8f9fa', padding: '20px' }}>
        <Sidebar />
      </div>

      {/* 中間 WeeklySchedule */}
      <div style={{ flex: 2, padding: '20px', overflowY: 'auto' }}>
        <WeeklySchedule scheduleData={scheduleData} />
      </div>

      {/* 右側 ScheduleEditor */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0' }}>
        <ScheduleEditor
          onSubmit={handleSemesterSubmit}
          onSaveCourse={handleSaveCourse}
        />
      </div>
    </div>
  );
}

export default Dashboard;
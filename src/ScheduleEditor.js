import React, { useState } from 'react';

function ScheduleEditor({ onSubmit, onSaveCourse}) {
  // 學期資訊相關狀態
  const [semester, setSemester] = useState('');
  const [weeks, setWeeks] = useState('');
  const [startDate, setStartDate] = useState('');

  // 課程編輯相關狀態
  const [day, setDay] = useState('週一');
  const [period, setPeriod] = useState(1);
  const [courseName, setCourseName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [location, setLocation] = useState('');

  // 提交學期資訊
  const handleSemesterSubmit = () => {
    if (semester && weeks && startDate) {
      onSubmit({ semester, weeks, startDate });
    } else {
      alert('請完整填寫學期資訊');
    }
  };

  // 儲存課程資訊
  const handleCourseSave = () => {
    onSaveCourse({ day, period, courseName, teacher, location });
    setCourseName('');
    setTeacher('');
    setLocation('');
  };

  return (
    <div>
      <h3>學期設置</h3>
      <label>
        學期：
        <input
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          placeholder="例如：113-1"
        />
      </label>
      <br />
      <label>
        週數：
        <input
          type="number"
          value={weeks}
          onChange={(e) => setWeeks(e.target.value)}
          placeholder="例如：16"
        />
      </label>
      <br />
      <label>
        學期開始時間：
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSemesterSubmit}>提交學期資訊</button>

      <h3>編輯課程</h3>
      <label>
        星期：
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {['週一', '週二', '週三', '週四', '週五'].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        節次：
        <select value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((p) => (
            <option key={p} value={p}>
              第 {p} 節
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        課程名稱：
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </label>
      <br />
      <label>
        教師：
        <input
          type="text"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
      </label>
      <br />
      <label>
        教室：
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCourseSave}>儲存課程</button>
    </div>
  );
}

export default ScheduleEditor;
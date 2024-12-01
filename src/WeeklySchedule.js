import React from 'react';

function WeeklySchedule({ scheduleData }) {
  const days = ['週一', '週二', '週三', '週四', '週五'];
  const periods = Array.from({ length: 10 }, (_, i) => i + 1); // 1 到 10 節課

  return (
    <div>
      <h2>{scheduleData.semester} 課表</h2>
      <p>學期開始：{scheduleData.startDate}</p>
      <p>總週數：{scheduleData.weeks} 週</p>
      <table border="1" style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>節次</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((period) => (
            <tr key={period}>
              <td>第 {period} 節</td>
              {days.map((day) => (
                <td key={day + period}>
                  {scheduleData.schedule[day]?.[period] ? (
                    <div>
                      <strong>{scheduleData.schedule[day][period].courseName}</strong>
                      <br />
                      {scheduleData.schedule[day][period].teacher}
                      <br />
                      {scheduleData.schedule[day][period].location}
                    </div>
                  ) : (
                    <>&nbsp;</> // 空白儲存格
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeeklySchedule;

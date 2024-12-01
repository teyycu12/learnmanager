import React from 'react';

function DiaryList({ diaries }) {
  if (diaries.length === 0) {
    return <p>目前還沒有日記，快來新增吧！</p>;
  }

  return (
    <div>
      {diaries.map((diary) => (
        <div key={diary.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{diary.title}</h3>
          <p>{diary.content}</p>
          <small>日期：{diary.date}</small>
        </div>
      ))}
    </div>
  );
}

export default DiaryList;

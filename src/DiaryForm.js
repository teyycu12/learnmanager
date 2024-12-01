import React, { useState } from 'react';

function DiaryForm({ addDiary }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('請填寫標題與內容');
      return;
    }
    addDiary(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="日記標題"
          style={{ width: '300px', padding: '10px', margin: '5px' }}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="寫下你的日記..."
          style={{ width: '300px', height: '100px', padding: '10px', margin: '5px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px' }}>
        保存日記
      </button>
    </form>
  );
}

export default DiaryForm;

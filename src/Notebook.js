import React, { useState } from 'react';

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  return (
    <div>
      <h2>手札專區</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="輸入你的筆記..."
        rows="5"
        cols="40"
      />
      <br />
      <button onClick={handleAddNote}>新增筆記</button>
      <h3>筆記列表</h3>
      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notebook;

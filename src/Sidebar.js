/*import React from 'react';

function Sidebar() {
  return (
    <div>
      <h3>功能列表</h3>
      <ul>
        <li>記帳</li>
        <li>手札</li>
        <li>作業 Deadline</li>
      </ul>
    </div>
  );
}

export default Sidebar;*/

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ width: '200px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h3>功能列表</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">課表</Link>
        </li>
        <li>
          <Link to="/notebook">手札</Link>
        </li>
        <li>
          <Link to="/other-feature">記帳</Link> {/* 可擴展其他功能 */}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;


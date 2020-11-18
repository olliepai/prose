import React, { useState } from 'react';

export default function Editor(): JSX.Element {
  const [value, setValue] = useState('Enter calculations here.');

  return (
    <div className="editor">
      <h1>Prose</h1>
    <textarea value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

import React, { useState } from 'react';
import styles from './Editor.css';

export default function Editor(): JSX.Element {
  const [value, setValue] = useState('Enter calculations here.');

  return (
    <div className="editor">
    <textarea className={styles.pane} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

import React from 'react';
import styles from './styles/frame-styles';

export default function Frame({ children }) {
  return <div style={styles.root}>{children}</div>;
}

import React from 'react';
import { config } from '../config/config.yml';

export default function Footer() {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} {config.author}
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function ThemeToggle() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });


  useEffect(() => {

    localStorage.setItem('portfolio-theme', theme);

    document.body.className = ''; 
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className='theme-box'>
      
      <button 
        onClick={() => setTheme('light')}
        className='light-btn'
        style={{
          background: theme === 'light' ? 'rgba(255, 255, 255, 0.15)' : '#fff',
          color: theme === 'light' ? '#fff' : '#333',
          fontWeight: theme === 'light' ? 'bold' : 'normal'
        }}
      >
        ☀️ Light
      </button>

      <button 
        onClick={() => setTheme('dark')}
        className='dark-btn'
        style={{
          background: theme === 'dark' ? '#0070f3' : 'rgba(255, 255, 255, 0.15)',
          color: theme === 'dark' ? '#fff' : '#333',
          fontWeight: theme === 'dark' ? 'bold' : 'normal'
        }}
      >
        🌙 Dark
      </button>
</div>
  );
}

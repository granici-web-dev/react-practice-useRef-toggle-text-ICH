import { useRef, useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState('');
  const textRef = useRef(null);

  const handleToggle = () => {
    const text = textRef.current;

    if (duration === '') return;

      if (text) {
        text.style.transition = `opacity ${duration}ms ease`;
      }

    if (isVisible) {
      text.style.opacity = '0';
    } else {
      text.style.opacity = '1';
    }

    setIsVisible((prev) => !prev);
  };

  const handleDurationChange = (e) => {
    setDuration(Number(e.target.value));
  };

  const styles = {
    card: {
      background: '#d0dff6',
      borderRadius: 16,
      padding: '36px 40px',
      maxWidth: 480,
      width: '100%',
    },
    title: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '24px',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: 8,
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'background .2s',
      backgroundColor: '#0009bd',
      color: '#fff',
    },
    input: {
      padding: '10px 14px',
      borderRadius: 8,
      border: '1px solid #b6b6b6',
      background: '#fff',
      color: '#8f8f8f',
      fontSize: 14,
      width: 140,
      outline: 'none',
    },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Hiding and displaying text with animation</h2>
      <button type="submit" onClick={handleToggle} style={styles.button}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <input onChange={handleDurationChange} type="number" value={duration} style={styles.input} />
      <p className={styles.text} ref={textRef}>
        This is hidden text. Click the button to hide or show it.
      </p>
    </div>
  );
}

export default ToggleText;

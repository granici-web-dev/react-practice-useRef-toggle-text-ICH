import { useRef, useState } from 'react';
import styles from './styles.module.css';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState('');
  const textRef = useRef(null);

  const handleToggle = () => {
    const text = textRef.current;

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

  return (
    <div>
      <h2>Hiding and displaying text with animation</h2>
      <button type="submit" required={true} onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <input onChange={handleDurationChange} type="number" value={duration} />
      <p className={styles.text} ref={textRef}>
        This is hidden text. Click the button to hide or show it.
      </p>
    </div>
  );
}

export default ToggleText;

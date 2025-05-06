"use client";

import React, { useState } from 'react';

const demoImages = [
    '/demoAngry.png',
    '/demoContempt.png',
    '/demoDisgust.png',
    '/demoFear.png',
    '/demoHappy.png',
    '/demoNeutral.png',
    '/demoSad.png',
    '/demoSurprise.png',
];

export default function EmotionDemo() {
  const [selected, setSelected] = useState(demoImages[0]);
  const [emotion, setEmotion] = useState(null);

  const handleGuess = async () => {
    const form = new FormData();
    const resp = await fetch(selected);
    const blob = await resp.blob();
    form.append('file', blob, selected.split('/').pop());

    const res = await fetch('/api/predict', {
      method: 'POST',
      body: form,
    });

    if (res.ok) {
      const { emotion } = await res.json();
      setEmotion(emotion);
    } else {
      setEmotion('Error');
      console.error('Error fetching emotion:', res.statusText);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Try the Emotion API</h2>
      <img
        src={selected}
        alt="Demo"
        style={{ maxWidth: '300px', display: 'block', margin: '0 auto' }}
      />
      <div style={{ margin: '1rem' }}>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          {demoImages.map(img => (
            <option key={img} value={img}>
              {img.split('/').pop()}
            </option>
          ))}
        </select>
        <button onClick={handleGuess} style={{ marginLeft: '1rem' }}>
          Guess Emotion
        </button>
      </div>
      {emotion && (
        <p>
          <strong>Detected Emotion:</strong> {emotion}
        </p>
      )}
    </div>
  );
}
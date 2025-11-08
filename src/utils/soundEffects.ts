/**
 * Retro 8-bit sound effects generator
 * Nintendo-style sound effects using Web Audio API
 */

// Audio context singleton
let audioContext: AudioContext | null = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

/**
 * Toggle sound on/off
 */
export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  return soundEnabled;
};

/**
 * Get current sound state
 */
export const isSoundEnabled = (): boolean => {
  return soundEnabled;
};

/**
 * Set sound state
 */
export const setSoundEnabled = (enabled: boolean): void => {
  soundEnabled = enabled;
};

/**
 * Play a cursor move sound (short blip)
 * 8-bit Game Boy style cheerful blip
 */
export const playCursorSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // Bright, cheerful Game Boy tone
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    
    // Quick, happy fade
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  } catch (error) {
    console.log('Audio playback failed:', error);
  }
};

/**
 * Play a start game sound
 * Exciting, bright 8-bit fanfare for game start
 */
export const playStartSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    
    // Create exciting upward arpeggio
    const playTone = (frequency: number, startTime: number, duration: number) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(frequency, startTime);
      
      gainNode.gain.setValueAtTime(0.12, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };
    
    // Bright, exciting upward progression
    playTone(659, ctx.currentTime, 0.08);      // E
    playTone(784, ctx.currentTime + 0.08, 0.08); // G
    playTone(988, ctx.currentTime + 0.16, 0.12); // B
  } catch (error) {
    console.log('Audio playback failed:', error);
  }
};

/**
 * Play a confirm/select sound
 * 8-bit Game Boy style cheerful confirmation
 */
export const playConfirmSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    
    // Create a cheerful 8-bit confirmation
    const playTone = (frequency: number, startTime: number, duration: number) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(frequency, startTime);
      
      gainNode.gain.setValueAtTime(0.1, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };
    
    // Happy two-tone 8-bit chirp
    playTone(1000, ctx.currentTime, 0.06);
    playTone(1200, ctx.currentTime + 0.06, 0.08);
  } catch (error) {
    console.log('Audio playback failed:', error);
  }
};

/**
 * Play a success sound
 * Upward arpeggio for correct answers
 */
export const playSuccessSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const frequencies = [523, 659, 784, 1047]; // C, E, G, C (major chord)
    
    frequencies.forEach((freq, index) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime + index * 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.08 + 0.15);
      
      oscillator.start(ctx.currentTime + index * 0.08);
      oscillator.stop(ctx.currentTime + index * 0.08 + 0.15);
    });
  } catch (error) {
    console.log('Audio playback failed:', error);
  }
};

/**
 * Play an error sound
 * Downward tone for wrong answers
 */
export const playErrorSound = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(280, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);
    
    gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.25);
  } catch (error) {
    console.log('Audio playback failed:', error);
  }
};

// Web Audio API Temple Bell Sound Synthesizer
export function playTempleBell() {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Fundamental frequencies for a rich South Indian brass temple bell
    const frequencies = [440, 880, 1320, 1760, 2200, 2640];
    const gains = [1.0, 0.6, 0.4, 0.25, 0.15, 0.1];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);
    masterGain.connect(ctx.destination);

    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = index === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      oscGain.gain.setValueAtTime(gains[index], ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.5 - (index * 0.4));

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start();
      osc.stop(ctx.currentTime + 4.5);
    });
  } catch (err) {
    console.warn("Web Audio API bell playback prevented by browser:", err);
  }
}

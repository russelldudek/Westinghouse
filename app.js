(() => {
  const config = [
    { id: 'commitments', label: 'Commitment clarity', text: 'Clarify outcome, date, customer, owner, confidence, and dependencies before adding more reporting.' },
    { id: 'constraints', label: 'Constraint visibility', text: 'Make the limiting resource or dependency visible early enough to change the plan—not merely explain the miss.' },
    { id: 'decisions', label: 'Decision discipline', text: 'Define thresholds, decision rights, escalation routes, and decision aging so leadership attention is used intentionally.' },
    { id: 'learning', label: 'Learning reuse', text: 'Convert recurring recovery patterns into root-cause work, standards, planning assumptions, and reusable operating knowledge.' }
  ];

  const inputs = config.map(item => document.getElementById(item.id)).filter(Boolean);
  if (!inputs.length) return;

  const statusRing = document.getElementById('statusRing');
  const statusLabel = document.getElementById('statusLabel');
  const statusScore = document.getElementById('statusScore');
  const bottleneckLabel = document.getElementById('bottleneckLabel');
  const bottleneckText = document.getElementById('bottleneckText');

  function update() {
    const values = inputs.map((input, index) => {
      const value = Number(input.value);
      const out = document.getElementById(`${input.id}Out`);
      if (out) out.value = String(value);
      return { ...config[index], value };
    });

    const average = values.reduce((sum, item) => sum + item.value, 0) / values.length;
    const score = Math.round(average * 20);
    const bottleneck = [...values].sort((a, b) => a.value - b.value)[0];

    statusScore.textContent = String(score);
    bottleneckLabel.textContent = bottleneck.label;
    bottleneckText.textContent = bottleneck.text;

    let state = 'OUTSIDE ENVELOPE';
    let className = 'risk';
    if (score >= 78 && bottleneck.value >= 3) {
      state = 'WITHIN ENVELOPE';
      className = 'stable';
    } else if (score >= 55) {
      state = 'AT THE EDGE';
      className = 'edge';
    }
    statusLabel.textContent = state;
    statusRing.className = `status-ring ${className}`;
    statusRing.style.setProperty('--score', `${Math.min(score, 100) * 3.6}deg`);
  }

  inputs.forEach(input => input.addEventListener('input', update));
  update();
})();

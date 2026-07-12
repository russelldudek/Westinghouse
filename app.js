(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
  }

  const scenarioData = {
    balanced: { label: 'Balanced execution', status: 'LEGIBLE', message: 'Routine variance remains local; thresholds preserve executive judgment.', count: '1 signal' },
    capacity: { label: 'Capacity pinch', status: 'CONSTRAINED', message: 'Scarce capacity crosses commitments; leadership allocates before dates collide.', count: '4 signals' },
    decision: { label: 'Decision delay', status: 'AGING', message: 'A decision has exceeded its threshold; authority and closure must become explicit.', count: '3 signals' },
    learning: { label: 'Repeat failure', status: 'RECURRING', message: 'The same recovery pattern returned; convert the lesson into a reusable mechanism.', count: '5 signals' }
  };
  const heroSystem = document.getElementById('heroSystem');
  const heroStateLabel = document.getElementById('heroStateLabel');
  const coreStatus = document.getElementById('coreStatus');
  const attentionMessage = document.getElementById('attentionMessage');
  const attentionCount = document.getElementById('attentionCount');
  document.querySelectorAll('.scenario').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.scenario;
      const next = scenarioData[key];
      document.querySelectorAll('.scenario').forEach(b => b.classList.toggle('is-active', b === button));
      heroSystem.dataset.state = key;
      heroStateLabel.textContent = next.label;
      coreStatus.textContent = next.status;
      attentionMessage.textContent = next.message;
      attentionCount.textContent = next.count;
    });
  });

  const config = [
    { id: 'commitments', label: 'Commitment clarity', text: 'Clarify outcome, date, customer, owner, confidence, and dependencies before adding reporting.' },
    { id: 'constraints', label: 'Constraint visibility', text: 'Make the limiting resource or dependency visible early enough to change the plan.' },
    { id: 'decisions', label: 'Decision discipline', text: 'Define thresholds, authority, escalation routes, decision aging, and closure.' },
    { id: 'learning', label: 'Learning reuse', text: 'Convert recurring recovery into root-cause work, standards, and planning assumptions.' }
  ];
  const inputs = config.map(item => document.getElementById(item.id)).filter(Boolean);
  const statusRing = document.getElementById('statusRing');
  const statusLabel = document.getElementById('statusLabel');
  const statusScore = document.getElementById('statusScore');
  const bottleneckLabel = document.getElementById('bottleneckLabel');
  const bottleneckText = document.getElementById('bottleneckText');
  function updateSimulator() {
    if (!inputs.length) return;
    const values = inputs.map((input, index) => {
      const value = Number(input.value);
      const out = document.getElementById(`${input.id}Out`);
      if (out) out.value = String(value);
      return { ...config[index], value };
    });
    const average = values.reduce((sum, item) => sum + item.value, 0) / values.length;
    const score = Math.round(average * 20);
    const bottleneck = [...values].sort((a,b) => a.value - b.value)[0];
    statusScore.textContent = String(score);
    bottleneckLabel.textContent = bottleneck.label;
    bottleneckText.textContent = bottleneck.text;
    statusRing.style.setProperty('--score', `${Math.min(score,100) * 3.6}deg`);
    statusRing.dataset.level = score >= 78 && bottleneck.value >= 3 ? 'safe' : score >= 55 ? 'edge' : 'risk';
    statusLabel.textContent = statusRing.dataset.level === 'safe' ? 'WITHIN ENVELOPE' : statusRing.dataset.level === 'edge' ? 'AT THE EDGE' : 'OUTSIDE ENVELOPE';
  }
  inputs.forEach(input => input.addEventListener('input', updateSimulator));
  updateSimulator();
})();

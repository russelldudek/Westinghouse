(() => {
  const heroStylesheet = 'hero-envelope-v2.css';
  if (!document.querySelector(`link[href="${heroStylesheet}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = heroStylesheet;
    document.head.appendChild(link);
  }

  const heroSystem = document.getElementById('heroSystem');
  const heroSvg = heroSystem?.querySelector('.envelope-svg');

  if (heroSvg) {
    heroSvg.innerHTML = `
      <title id="envelopeTitle">Executive operating envelope</title>
      <desc id="envelopeDesc">A continuous operating loop connects commitments, constraints, decisions, and learning in sequence around the execution core. Scenario changes highlight the boundary that needs executive attention.</desc>
      <defs>
        <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="riskGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="packetGlow" x="-120%" y="-120%" width="340%" height="340%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="coreGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".65" fill="rgba(255,255,255,.045)"/></pattern>
      </defs>
      <rect class="diagram-field" x="48" y="38" width="664" height="486" rx="4"/>
      <g class="grid-lines" aria-hidden="true">
        <path d="M80 84H680M80 164H680M80 244H680M80 324H680M80 404H680M80 484H680" />
        <path d="M120 52V518M240 52V518M360 52V518M480 52V518M600 52V518" />
      </g>
      <g class="envelope-rings" aria-hidden="true">
        <ellipse class="envelope-ring envelope-ring-1" cx="380" cy="290" rx="234" ry="164"/>
        <ellipse class="envelope-ring envelope-ring-2" cx="380" cy="290" rx="178" ry="124"/>
        <ellipse class="envelope-ring envelope-ring-3" cx="380" cy="290" rx="122" ry="84"/>
      </g>
      <g class="operating-loop" aria-hidden="true">
        <path class="loop-track" d="M174 150H586V430H174Z"/>
        <path class="loop-segment loop-top" d="M204 150H556"/>
        <path class="loop-segment loop-right" d="M586 180V400"/>
        <path class="loop-segment loop-bottom" d="M556 430H204"/>
        <path class="loop-segment loop-left" d="M174 400V180"/>
        <path class="loop-flow" id="operatingLoopRoute" d="M174 150H586V430H174Z"/>
        <g class="loop-arrows">
          <path class="loop-arrow arrow-top" d="M370 141L387 150L370 159Z"/>
          <path class="loop-arrow arrow-right" d="M577 281L586 298L595 281Z"/>
          <path class="loop-arrow arrow-bottom" d="M390 421L373 430L390 439Z"/>
          <path class="loop-arrow arrow-left" d="M165 299L174 282L183 299Z"/>
        </g>
        <circle class="flow-packet packet-one" r="5"><animateMotion dur="7.2s" repeatCount="indefinite"><mpath href="#operatingLoopRoute"/></animateMotion></circle>
        <circle class="flow-packet packet-two" r="4"><animateMotion dur="7.2s" begin="-3.6s" repeatCount="indefinite"><mpath href="#operatingLoopRoute"/></animateMotion></circle>
      </g>
      <g class="system-node node-commit" transform="translate(174 150)">
        <circle class="node-halo" r="43"/><circle class="node-disc" r="31"/><text class="node-index" y="5">01</text>
        <text class="node-label" x="47" y="-7">Commitments</text><text class="node-sub" x="47" y="15">Outcome · owner · date · confidence</text>
      </g>
      <g class="system-node node-constraint" transform="translate(586 150)">
        <circle class="node-halo" r="43"/><circle class="node-disc" r="31"/><text class="node-index" y="5">02</text>
        <text class="node-label" x="-47" y="-7" text-anchor="end">Constraints</text><text class="node-sub" x="-47" y="15" text-anchor="end">Capacity · parts · field windows</text>
      </g>
      <g class="system-node node-decision" transform="translate(586 430)">
        <circle class="node-halo" r="43"/><circle class="node-disc" r="31"/><text class="node-index" y="5">03</text>
        <text class="node-label" x="-47" y="-7" text-anchor="end">Decisions</text><text class="node-sub" x="-47" y="15" text-anchor="end">Threshold · authority · aging</text>
      </g>
      <g class="system-node node-learning" transform="translate(174 430)">
        <circle class="node-halo" r="43"/><circle class="node-disc" r="31"/><text class="node-index" y="5">04</text>
        <text class="node-label" x="47" y="-7">Learning</text><text class="node-sub" x="47" y="15">Cause · standard · reuse</text>
      </g>
      <g class="execution-core" transform="translate(380 290)">
        <circle class="core-orbit" r="91"/><circle class="core-disc" r="76"/><circle class="core-pulse" r="57"/>
        <text y="-9">EXECUTION</text><text class="core-status" id="coreStatus" y="19">LEGIBLE</text>
      </g>`;
  }

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
  const heroStateLabel = document.getElementById('heroStateLabel');
  const coreStatus = document.getElementById('coreStatus');
  const attentionMessage = document.getElementById('attentionMessage');
  const attentionCount = document.getElementById('attentionCount');
  const scenarioButtons = [...document.querySelectorAll('.scenario')];
  let transitionTimer;

  function setScenario(button) {
    const key = button.dataset.scenario;
    const next = scenarioData[key];
    if (!next || !heroSystem) return;

    scenarioButtons.forEach(candidate => {
      const selected = candidate === button;
      candidate.classList.toggle('is-active', selected);
      candidate.setAttribute('aria-pressed', String(selected));
    });

    heroSystem.dataset.state = key;
    heroSystem.setAttribute('aria-label', `${next.label}. ${next.message} The operating loop connects commitments, constraints, decisions, and learning.`);
    heroStateLabel.textContent = next.label;
    coreStatus.textContent = next.status;
    attentionMessage.textContent = next.message;
    attentionCount.textContent = next.count;

    heroSystem.classList.remove('is-transitioning');
    void heroSystem.offsetWidth;
    heroSystem.classList.add('is-transitioning');
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => heroSystem.classList.remove('is-transitioning'), 650);
  }

  scenarioButtons.forEach((button, index) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
    button.addEventListener('click', () => setScenario(button));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % scenarioButtons.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + scenarioButtons.length) % scenarioButtons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = scenarioButtons.length - 1;
      scenarioButtons[nextIndex].focus();
      setScenario(scenarioButtons[nextIndex]);
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

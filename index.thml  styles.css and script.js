<!-- Interactive Web Pages Assignment
     File: interactive_assignment.html (single-file version)
     NOTE: This single HTML file contains embedded CSS and JS so you can open immediately in a browser.
     If you'd like separate files, save the <style> block into style.css and the <script> block into script.js.
-->

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Interactive Web Pages — Assignment</title>

  <style>
    /* ===== style.css (you may cut this into style.css) ===== */
    :root{
      --bg:#ffffff; --text:#111827; --muted:#6b7280; --accent:#2563eb; --card:#f9fafb;
    }
    [data-theme="dark"]{
      --bg:#0b1220; --text:#e6eef8; --muted:#9aa7bb; --accent:#60a5fa; --card:#071426;
    }
    *{box-sizing:border-box}
    body{font-family:Inter,Segoe UI,Roboto,Arial; margin:0; background:var(--bg); color:var(--text); line-height:1.5}
    header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;background:linear-gradient(90deg,rgba(37,99,235,0.06),transparent);border-bottom:1px solid rgba(0,0,0,0.04)}
    .container{max-width:900px;margin:1.25rem auto;padding:0 1rem}
    h1{font-size:1.45rem;margin:0}
    .controls{display:flex;gap:.5rem;align-items:center}
    button{cursor:pointer;padding:.5rem .75rem;border-radius:.5rem;border:1px solid rgba(0,0,0,0.08);background:var(--card);color:var(--text)}
    .card{background:var(--card);padding:1rem;border-radius:.6rem;margin:1rem 0;box-shadow:0 4px 10px rgba(2,6,23,0.04)}
    .muted{color:var(--muted)}

    /* Layout for interactive sections */
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .full{grid-column:1 / -1}

    /* Counter */
    .counter{display:flex;gap:.5rem;align-items:center}
    .count{font-weight:700;font-size:1.25rem;padding:.4rem .6rem;border-radius:.4rem;border:1px solid rgba(0,0,0,0.06);min-width:3rem;text-align:center}

    /* Tabs */
    .tabs{display:flex;gap:.25rem;margin-bottom:.75rem}
    .tab{padding:.5rem .75rem;border-radius:.5rem;border:1px solid rgba(0,0,0,0.05);background:transparent}
    .tab.active{background:var(--accent);color:white}

    /* FAQ collapsible */
    .faq-item{border-top:1px dashed rgba(0,0,0,0.06);padding:.6rem 0}
    .faq-question{display:flex;justify-content:space-between;align-items:center;cursor:pointer}
    .faq-answer{max-height:0;overflow:hidden;transition:max-height .28s ease;padding-top:0}
    .faq-answer.open{padding-top:.5rem;max-height:200px}

    /* Form */
    form{display:grid;gap:.6rem}
    label{font-size:.9rem}
    input,select{padding:.5rem .6rem;border-radius:.4rem;border:1px solid rgba(0,0,0,0.08);background:transparent;color:var(--text)}
    .error{color:#dc2626;font-size:.85rem}
    .success{color:#16a34a;font-weight:600}

    /* Small screens */
    @media (max-width:700px){.grid{grid-template-columns:1fr}.controls{flex-wrap:wrap}}
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Interactive Web Pages — Assignment</h1>
      <div class="muted">Practice: events, DOM manipulation, and validation</div>
    </div>

    <div class="controls">
      <button id="themeToggle">Toggle Dark</button>
      <button id="resetBtn">Reset Demo</button>
    </div>
  </header>

  <main class="container">

    <!-- ===== Interactive features: grid with counter, tabs, FAQ, and form ===== -->
    <section class="grid">

      <!-- Counter game: features 1 & 2 (interactive) -->
      <article class="card">
        <h2>Counter Game</h2>
        <p class="muted">Click the buttons to increase / decrease or play the randomize game.</p>
        <div class="counter" style="margin-top:.6rem">
          <button id="decrement">-</button>
          <div class="count" id="countDisplay">0</div>
          <button id="increment">+</button>
          <button id="randomize">Random</button>
          <button id="resetCount">Reset</button>
        </div>
        <p class="muted" style="margin-top:.5rem">Streak: <span id="streak">0</span></p>
      </article>

      <!-- Tabs (another interactive element) -->
      <article class="card">
        <h2>Tabbed Interface</h2>
        <div class="tabs" role="tablist" aria-label="Demo Tabs">
          <button class="tab active" data-tab="1">Info</button>
          <button class="tab" data-tab="2">Details</button>
          <button class="tab" data-tab="3">Stats</button>
        </div>
        <div id="tabContent" style="min-height:80px">
          <div class="tab-panel" data-panel="1">This is the <strong>Info</strong> tab. Use tabs to break content into bite-sized parts.</div>
          <div class="tab-panel" data-panel="2" style="display:none">More <strong>Details</strong> live here. You can update this dynamically via JS.</div>
          <div class="tab-panel" data-panel="3" style="display:none">Stats: <span id="tabStats">No data yet</span></div>
        </div>
      </article>

      <!-- FAQ (collapsible) -->
      <article class="card full">
        <h2>Collapsible FAQ</h2>
        <div class="faq-item">
          <div class="faq-question"><span>How does this demo work?</span><span class="muted">+</span></div>
          <div class="faq-answer">The page uses JavaScript event listeners to react to user actions — no page reloads required.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Can I split the files?</span><span class="muted">+</span></div>
          <div class="faq-answer">Yes — you can extract the CSS and JS into separate files. See the top comments for guidance.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question"><span>Does the form validate in real time?</span><span class="muted">+</span></div>
          <div class="faq-answer">Yes — it validates on input and on submit, showing clear error messages.</div>
        </div>
      </article>

      <!-- Form validation (must be custom JS validation) -->
      <article class="card full">
        <h2>Registration Form (Custom Validation)</h2>
        <form id="regForm" novalidate>
          <div>
            <label for="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe">
            <div class="error" data-error-for="name"></div>
          </div>

          <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com">
            <div class="error" data-error-for="email"></div>
          </div>

          <div>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="at least 8 chars, include letter + number">
            <div class="error" data-error-for="password"></div>
          </div>

          <div>
            <label for="confirm">Confirm password</label>
            <input id="confirm" name="confirm" type="password" placeholder="repeat password">
            <div class="error" data-error-for="confirm"></div>
          </div>

          <div>
            <label for="age">Age</label>
            <input id="age" name="age" type="number" min="1" placeholder="e.g., 21">
            <div class="error" data-error-for="age"></div>
          </div>

          <div>
            <label for="role">Role</label>
            <select id="role" name="role">
              <option value="student">Student</option>
              <option value="developer">Developer</option>
              <option value="other">Other</option>
            </select>
            <div class="error" data-error-for="role"></div>
          </div>

          <div style="display:flex;gap:.6rem;align-items:center;margin-top:.4rem">
            <button type="submit">Submit</button>
            <div id="formMessage" aria-live="polite"></div>
          </div>
        </form>
      </article>

    </section>

  </main>

  <script>
    /* ===== script.js (you may cut this into script.js) ===== */

    // --------- Utility helpers ---------
    const $ = selector => document.querySelector(selector);
    const $$ = selector => Array.from(document.querySelectorAll(selector));

    // --------- Theme toggle (dark/light) ---------
    const themeBtn = $('#themeToggle');
    function setTheme(isDark){
      if(isDark) document.documentElement.setAttribute('data-theme','dark');
      else document.documentElement.removeAttribute('data-theme');
      themeBtn.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
    // Initialize theme based on prefers-color-scheme
    setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
      setTheme(isDark);
    });

    // --------- Counter game (interactive feature #1) ---------
    let count = 0;
    let streak = 0;
    const countDisplay = $('#countDisplay');
    const streakDisplay = $('#streak');

    function updateCount(){
      countDisplay.textContent = count;
      streakDisplay.textContent = streak;
      // update stats tab when changed
      $('#tabStats').textContent = `Count=${count}, Streak=${streak}`;
    }

    $('#increment').addEventListener('click', () => {
      count += 1; streak = Math.max(0, streak + 1); updateCount();
    });

    $('#decrement').addEventListener('click', () => {
      count -= 1; streak = Math.max(0, streak - 1); updateCount();
    });

    $('#randomize').addEventListener('click', () => {
      const prev = count;
      count = Math.floor(Math.random() * 100) - 10; // can be negative intentionally
      streak = (Math.abs(count - prev) > 0) ? streak + 1 : 0;
      updateCount();
    });

    $('#resetCount').addEventListener('click', () => { count = 0; streak = 0; updateCount(); });

    // Button to reset entire demo
    $('#resetBtn').addEventListener('click', () => {
      // reset stateful parts
      count = 0; streak = 0; updateCount();
      // collapse FAQ answers
      $$('.faq-answer').forEach(a => { a.classList.remove('open'); a.style.display = ''; });
      // clear form
      $('#regForm').reset(); clearErrors(); $('#formMessage').textContent = '';
      // reset tabs
      activateTab(1);
      // reset theme to system default
      setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // --------- Tabs (interactive feature #2) ---------
    function activateTab(tabIndex){
      $$('.tab').forEach(t => { t.classList.toggle('active', t.dataset.tab == tabIndex); });
      $$('.tab-panel').forEach(p => { p.style.display = (p.dataset.panel == tabIndex) ? '' : 'none'; });
    }
    $$('.tab').forEach(t => t.addEventListener('click', () => activateTab(t.dataset.tab)));

    // --------- FAQ collapsible behavior ---------
    $$('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      const a = item.querySelector('.faq-answer');
      q.addEventListener('click', () => {
        const open = a.classList.toggle('open');
        // set inline max-height to allow transition
        if(open){ a.style.display = 'block'; a.style.maxHeight = a.scrollHeight + 'px'; q.querySelector('.muted') && (q.querySelector('.muted').textContent = '-'); }
        else { a.style.maxHeight = '0px'; setTimeout(()=>{ a.style.display = ''; }, 300); q.querySelector('.muted') && (q.querySelector('.muted').textContent = '+'); }
      });
    });

    // --------- Form validation (custom logic) ---------
    const form = $('#regForm');
    const validators = {
      name: value => value.trim().length >= 3 || 'Name must be at least 3 characters',
      email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email',
      password: value => (value.length >= 8 && /[0-9]/.test(value) && /[A-Za-z]/.test(value)) || 'Password must be 8+ chars, include letters and numbers',
      confirm: (val, all) => (val === all.password) || 'Passwords do not match',
      age: value => (value === '' || (Number(value) >= 10 && Number(value) <= 120)) || 'Age must be between 10 and 120',
      role: value => ['student','developer','other'].includes(value) || 'Select a valid role'
    };

    // Clear error messages
    function clearErrors(){ $$('.error').forEach(e => e.textContent = ''); }

    // Show validation errors using data-error-for attributes
    function showError(field, message){ const el = document.querySelector(`[data-error-for="${field}"]`); if(el) el.textContent = message; }

    // Validate a single field, return true if valid
    function validateField(name){
      const input = form.elements[name];
      const value = input ? input.value : '';
      const v = validators[name];
      let result = true;
      if(typeof v === 'function'){
        const res = v(value, Object.fromEntries(new FormData(form)));
        if(res !== true) { showError(name, res); result = false; }
        else showError(name, '');
      }
      return result;
    }

    // Real-time validation on input for certain fields
    ['name','email','password','confirm','age','role'].forEach(field => {
      const el = form.elements[field];
      if(!el) return;
      el.addEventListener('input', () => validateField(field));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent page reload
      clearErrors();
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      // Validate all fields
      let valid = true;
      for(const name of ['name','email','password','confirm','age','role']){
        if(!validateField(name)) valid = false;
      }

      const messageEl = $('#formMessage');
      if(!valid){
        messageEl.textContent = ''; // errors shown inline
        messageEl.className = '';
        return; // stop submission
      }

      // Simulate successful submission (no server)
      messageEl.textContent = 'Registration successful!';
      messageEl.className = 'success';

      // Show some effect: update a tab with submitted name
      activateTab(3);
      $('#tabContent').querySelector('[data-panel="3"]').textContent = `Submitted by ${values.name} — role: ${values.role}`;

      // Keep the form values but you may also choose to clear them
      // form.reset();
    });

    // Initialize UI
    updateCount();
    activateTab(1);

    // Accessibility: keyboard support for tabs (left/right)
    document.querySelectorAll('.tab').forEach((t,i) => {
      t.addEventListener('keydown', (ev) => {
        if(ev.key === 'ArrowRight'){ const next = (i+1) % $$('.tab').length; $$('.tab')[next].focus(); }
        if(ev.key === 'ArrowLeft'){ const prev = (i-1 + $$('.tab').length) % $$('.tab').length; $$('.tab')[prev].focus(); }
      });
    });

    /* End of script.js */
  </script>
</body>
</html>

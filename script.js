// Havfly 4 — Ultimate Direct-Response Ad Landing Page Engine
// Designed for High-Volume Meta Advertisers & D2C Brands

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navDrawer = document.getElementById('mobile-nav-drawer');

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener('click', () => {
      navDrawer.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navDrawer.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close drawer on clicking any nav item
    navDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // ==========================================================================
  // 2. INTERACTIVE DIAGNOSTIC AUDIT
  // ==========================================================================
  const diagData = {
    cap: {
      painTitle: "Meta Restricts Your Daily Budget At Just ₹4,000",
      painDesc: "Your creatives are generating 3.8x ROAS, but Meta caps your spend. While you wait 60+ days for arbitrary bumps, competitors clone your winning angles and scale past you.",
      impact: "Estimated Lost Profit: <strong>₹60,000 to ₹1,80,000 / month</strong>",
      solutionTitle: "Uncapped Spend From Day 1",
      solutionDesc: "Havfly provisions audited, enterprise-tier Meta Agency Partner accounts with unlimited daily spend limits immediately. Scale straight from ₹10,000 to ₹10,00,000+ daily with zero bottlenecks.",
      perks: [
        "Uncapped daily scaling from minute one",
        "Zero waiting for limit increases",
        "Dominant delivery in the Meta auction"
      ],
      waText: "Hi Havfly, I need to fix my daily spend limit issue with an agency account."
    },
    ban: {
      painTitle: "Sudden Business Manager Banned With Zero Human Support",
      painDesc: "Waking up right before Diwali or peak weekend sales to find your primary ad account disabled by automated AI bots with zero human explanation or appeal replies.",
      impact: "Campaigns Halted • <strong>Lakhs in Revenue Lost to Downtime</strong>",
      solutionTitle: "Guaranteed 30-Minute Account Swap",
      solutionDesc: "Under our Zero Ban Downtime Guarantee, our team immediately migrates your existing unspent balance to a fresh, aged, pre-warmed backup agency account in under 30 minutes.",
      perks: [
        "Zero ban downtime replacement guarantee",
        "Instant unspent balance transfer",
        "Dedicated agency partner whitelist"
      ],
      waText: "Hi Havfly, I need ban protection and emergency account swap support."
    },
    card: {
      painTitle: "Debit/Credit Card Declines & Failed 3DS OTP Checks",
      painDesc: "Indian debit/credit cards failing 3DS checks, RBI transaction limits pausing campaigns, and constant OTP verification failures resetting machine learning.",
      impact: "Pixel Learning Disrupted • <strong>Ads Frozen Mid-Campaign</strong>",
      solutionTitle: "Seamless Domestic UPI & 100% GST Invoicing",
      solutionDesc: "Fund ad spend smoothly via domestic UPI, NEFT, IMPS or Net Banking in Indian Rupees with 100% official GST invoices to claim 18% Input Tax Credit.",
      perks: [
        "Zero payment decline errors or card blocks",
        "Instant balance top-ups via WhatsApp desk",
        "Official 18% GST tax deduction invoices"
      ],
      waText: "Hi Havfly, I want to use domestic UPI/bank top-ups with official GST invoices."
    }
  };

  const diagTabs = document.querySelectorAll('.diag-tab');
  const diagPainTitle = document.getElementById('diag-pain-title');
  const diagPainDesc = document.getElementById('diag-pain-desc');
  const diagImpactBox = document.getElementById('diag-impact-box');
  const diagSolutionTitle = document.getElementById('diag-solution-title');
  const diagSolutionDesc = document.getElementById('diag-solution-desc');
  const diagPerks = document.getElementById('diag-perks');
  const diagCtaBtn = document.getElementById('diag-cta-btn');
  const diagStage = document.getElementById('diag-stage');

  diagTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      diagTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const diagKey = tab.getAttribute('data-diag');
      const data = diagData[diagKey];
      if (!data) return;

      if (diagStage) {
        diagStage.classList.add('fading');
      }

      setTimeout(() => {
        if (diagPainTitle) diagPainTitle.textContent = data.painTitle;
        if (diagPainDesc) diagPainDesc.textContent = data.painDesc;
        if (diagImpactBox) {
          diagImpactBox.innerHTML = `<i class="fa-solid fa-arrow-trend-down text-red"></i> <span>${data.impact}</span>`;
        }
        if (diagSolutionTitle) diagSolutionTitle.textContent = data.solutionTitle;
        if (diagSolutionDesc) diagSolutionDesc.textContent = data.solutionDesc;

        if (diagPerks) {
          diagPerks.innerHTML = data.perks
            .map(perk => `<div class="diag-perk-item"><i class="fa-solid fa-check text-green"></i> <span>${perk}</span></div>`)
            .join('');
        }

        if (diagCtaBtn) {
          diagCtaBtn.href = `https://wa.me/?text=${encodeURIComponent(data.waText)}`;
        }

        if (diagStage) {
          diagStage.classList.remove('fading');
        }
      }, 120);
    });
  });

  // ==========================================================================
  // 3. TRANSPARENT PRICING TERMINAL BILLING SWITCH
  // ==========================================================================
  const btnMonthly = document.getElementById('btn-monthly-cycle');
  const btnQuarterly = document.getElementById('btn-quarterly-cycle');
  const switchToggle = document.getElementById('pricing-cycle-switch');
  const displayAmt = document.getElementById('pricing-display-amt');
  const displayCycle = document.getElementById('pricing-display-cycle');
  const displaySubnote = document.getElementById('pricing-display-subnote');
  const activateCta = document.getElementById('pricing-activate-cta');

  let isQuarterly = false;

  function setPricingCycle(quarterly) {
    isQuarterly = quarterly;
    if (isQuarterly) {
      if (btnMonthly) btnMonthly.classList.remove('active');
      if (btnQuarterly) btnQuarterly.classList.add('active');
      if (switchToggle) {
        switchToggle.classList.add('active');
        switchToggle.setAttribute('aria-checked', 'true');
      }
      if (displayAmt) displayAmt.textContent = '14,999';
      if (displayCycle) displayCycle.textContent = '/ quarter';
      if (displaySubnote) {
        displaySubnote.innerHTML = '<i class="fa-solid fa-circle-check text-green"></i> Equivalent to ₹4,999/mo (Save 17%) • 100% GST Tax Invoiced';
      }
      if (activateCta) {
        activateCta.href = 'https://wa.me/?text=Hi%20Havfly%20Team%2C%20I%20want%20to%20activate%20my%20Quarterly%20%E2%82%B914%2C999%20Meta%20Agency%20Account%20plan%20(Save%2017%25).';
      }
    } else {
      if (btnMonthly) btnMonthly.classList.add('active');
      if (btnQuarterly) btnQuarterly.classList.remove('active');
      if (switchToggle) {
        switchToggle.classList.remove('active');
        switchToggle.setAttribute('aria-checked', 'false');
      }
      if (displayAmt) displayAmt.textContent = '5,999';
      if (displayCycle) displayCycle.textContent = '/ month';
      if (displaySubnote) {
        displaySubnote.innerHTML = '<i class="fa-solid fa-circle-check text-green"></i> 100% Tax Compliant GST Billing • Cancel Anytime';
      }
      if (activateCta) {
        activateCta.href = 'https://wa.me/?text=Hi%20Havfly%20Team%2C%20I%20want%20to%20activate%20my%20%E2%82%B95%2C999%20Meta%20Agency%20Account%20plan.';
      }
    }
  }

  if (btnMonthly) btnMonthly.addEventListener('click', () => setPricingCycle(false));
  if (btnQuarterly) btnQuarterly.addEventListener('click', () => setPricingCycle(true));
  if (switchToggle) switchToggle.addEventListener('click', () => setPricingCycle(!isQuarterly));

  // ==========================================================================
  // 6. THE DIRECTOR PROOF VAULT CONTROLLER (WITH AUTO-ROTATION)
  // ==========================================================================
  const directorVaultData = [
    {
      name: "Ritesh Goel",
      title: "Director • E-Commerce & Retail",
      photo: "assets/ritesh-goel.webp",
      metric: "1 Account Replaced 3 Old BMs",
      kicker: "ONE VERIFIED ACCOUNT, ZERO PAYMENT FAILURES.",
      before: "Managing 2-3 personal ad accounts for one business was a nightmare with non-stop card OTP declines and paused campaigns.",
      after: "Smooth, uninterrupted scaling with just one verified agency account — zero errors, zero switching, 100% uptime.",
      quote: "“We were facing serious issues in scaling our campaigns due to continuous payment failures. Managing 2-3 ad accounts for just one business had become a nightmare. After switching to Havfly Advert, everything ran smoothly with just one verified account — no errors, no switching, just seamless scaling.”"
    },
    {
      name: "Narender Bansal",
      title: "Director • ₹2–2.5 Lakh Daily Ad Spend",
      photo: "assets/narender-bansal.webp",
      metric: "Scaled to ₹2.5L/Day Without Bans",
      kicker: "SCALING RS 2-2.5 LAKH DAILY, WITHOUT STRESS.",
      before: "Constant payment issues and personal account limits stalled campaigns during peak demand days.",
      after: "Single high-budget agency account running smoothly with instant top-ups and zero stress.",
      quote: "“We were running a daily ad budget of Rs 2–2.5 lakh, but constant payment issues and account restrictions were stalling our campaigns. We had to juggle 2-3 ad accounts just to keep things moving. Then we found Havfly Advert. Now we manage everything from one account without stress.”"
    },
    {
      name: "Parveen Singhal",
      title: "Director • Pan-India Brand Scaling",
      photo: "assets/parveen-singhal.webp",
      metric: "Pan-India High-Budget Campaigns",
      kicker: "PAN-INDIA SCALE, HIGH-BUDGET SUCCESS.",
      before: "Frequent ad rejections and restricted Business Managers prevented national scale.",
      after: "High-trust agency whitelist delivered smooth ad approvals and lower customer acquisition costs.",
      quote: "“We wanted to scale across India to promote our brand, but account issues held us back. With Havfly Advert’s verified account, we ran high-budget campaigns smoothly and got great results without fear of sudden shutdowns.”"
    },
    {
      name: "Ankit Singal Bansal",
      title: "Director • High-Growth E-Commerce",
      photo: "assets/ankit-singal-bansal.webp",
      metric: "Zero Downtime During Festive Drops",
      kicker: "SEAMLESS SCALING, ZERO AD DISRUPTIONS.",
      before: "Constantly losing revenue and momentum during sales events due to sudden policy flags.",
      after: "Guaranteed stability, instant ad approvals, and unlimited budget scaling right when needed most.",
      quote: "“We were constantly losing momentum during high-demand sales events due to sudden policy flags and spend restrictions. Switching to Havfly Advert gave us complete stability, instant ad approvals, and unlimited scaling without interruptions.”"
    },
    {
      name: "Sahil Goyal",
      title: "Director • Performance Marketing Agency",
      photo: "assets/sahil-goyal.webp",
      metric: "100% GST Invoicing & Domestic UPI",
      kicker: "UNINTERRUPTED CAMPAIGNS, INSTANT TOP-UPS & GST.",
      before: "Managing client credit cards with foreign markups and decline errors created client friction.",
      after: "Smooth domestic UPI/bank top-ups with official GST invoices for full 18% tax credit.",
      quote: "“Managing multiple accounts with card decline issues was a huge headache. Havfly Advert provided a rock-solid agency account with instant INR top-ups, 100% GST invoicing, and 24/7 dedicated support. Our campaigns have been scaling smoothly ever since.”"
    }
  ];

  const vaultButtons = document.querySelectorAll('.vault-director-btn');
  const dossierCard = document.getElementById('vault-dossier');
  const dossierImg = document.getElementById('dossier-img');
  const dossierName = document.getElementById('dossier-name');
  const dossierTitle = document.getElementById('dossier-title');
  const dossierMetric = document.getElementById('dossier-metric');
  const dossierKicker = document.getElementById('dossier-kicker');
  const dossierBefore = document.getElementById('dossier-before');
  const dossierAfter = document.getElementById('dossier-after');
  const dossierQuote = document.getElementById('dossier-quote');
  const vaultProgressBar = document.getElementById('vault-progress-bar');

  let currentDirectorIndex = 0;
  let vaultAutoTimer = null;
  let vaultProgressInterval = null;
  let vaultElapsedMs = 0;
  const VAULT_CYCLE_MS = 7000;

  function updateVaultProgress() {
    if (vaultProgressBar) {
      const pct = Math.min(100, (vaultElapsedMs / VAULT_CYCLE_MS) * 100);
      vaultProgressBar.style.width = `${pct}%`;
    }
  }

  function switchDossier(index, isUserClick = false) {
    const data = directorVaultData[index];
    if (!data) return;
    currentDirectorIndex = index;
    vaultElapsedMs = 0;
    updateVaultProgress();

    if (dossierCard) {
      dossierCard.classList.add('fading');
    }

    setTimeout(() => {
      if (dossierImg) {
        dossierImg.src = data.photo;
        dossierImg.alt = data.name;
      }
      if (dossierName) dossierName.textContent = data.name;
      if (dossierTitle) dossierTitle.textContent = data.title;
      if (dossierMetric) {
        dossierMetric.innerHTML = `<i class="fa-solid fa-bolt text-yellow"></i> ${data.metric}`;
      }
      if (dossierKicker) dossierKicker.textContent = data.kicker;
      if (dossierBefore) dossierBefore.textContent = data.before;
      if (dossierAfter) dossierAfter.textContent = data.after;
      if (dossierQuote) dossierQuote.textContent = data.quote;

      vaultButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });

      if (dossierCard) {
        dossierCard.classList.remove('fading');
      }
    }, 140);

    if (isUserClick) {
      pauseVaultAuto();
    }
  }

  function startVaultAuto() {
    if (vaultAutoTimer) clearInterval(vaultAutoTimer);
    if (vaultProgressInterval) clearInterval(vaultProgressInterval);

    vaultProgressInterval = setInterval(() => {
      vaultElapsedMs += 100;
      updateVaultProgress();
      if (vaultElapsedMs >= VAULT_CYCLE_MS) {
        vaultElapsedMs = 0;
        const nextIndex = (currentDirectorIndex + 1) % directorVaultData.length;
        switchDossier(nextIndex, false);
      }
    }, 100);
  }

  function pauseVaultAuto() {
    if (vaultAutoTimer) clearInterval(vaultAutoTimer);
    if (vaultProgressInterval) clearInterval(vaultProgressInterval);
    if (vaultProgressBar) vaultProgressBar.style.width = '0%';
    setTimeout(startVaultAuto, 15000);
  }

  vaultButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-director'), 10);
      if (!isNaN(idx)) switchDossier(idx, true);
    });
  });

  // Start auto-rotation with progress bar
  startVaultAuto();

  // Pause on hover over dossier card
  if (dossierCard) {
    dossierCard.addEventListener('mouseenter', () => {
      if (vaultProgressInterval) clearInterval(vaultProgressInterval);
    });
    dossierCard.addEventListener('mouseleave', () => {
      startVaultAuto();
    });
  }

  // ==========================================================================
  // 7. OBJECTION BUSTER FAQ ACCORDION
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-plus';
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          const icon = item.querySelector('.faq-toggle-icon i');
          if (icon) icon.className = 'fa-solid fa-minus';
        }
      });
    }
  });

  // ==========================================================================
  // 8. LIVE BATCH ALLOCATION COUNTDOWN TIMER
  // ==========================================================================
  const timerEl = document.getElementById('batch-timer');
  if (timerEl) {
    let totalSeconds = 3 * 3600 + 41 * 60 + 20;

    setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        totalSeconds = 4 * 3600;
      }

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      const pad = (n) => String(n).padStart(2, '0');
      timerEl.textContent = `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
    }, 1000);
  }

  // ==========================================================================
  // 9. DYNAMIC PRICING BILLING CYCLE TOGGLE (MONTHLY / QUARTERLY)
  // ==========================================================================
  const pricingCycleSwitch = document.getElementById('pricing-cycle-switch');
  const btnMonthlyCycle = document.getElementById('btn-monthly-cycle');
  const btnQuarterlyCycle = document.getElementById('btn-quarterly-cycle');
  const pricingAmt = document.getElementById('pricing-display-amt');
  const pricingCycle = document.getElementById('pricing-display-cycle');
  const pricingSubnote = document.getElementById('pricing-display-subnote');
  const pricingActivateCta = document.getElementById('pricing-activate-cta');

  const pricingPlans = {
    monthly: {
      amt: "5,999",
      cycle: "/ month",
      subnote: '<i class="fa-solid fa-circle-check text-green"></i> 100% Tax Compliant GST Billing • Cancel Anytime',
      waText: "Hi Havfly Team, I want to activate my ₹5,999/month Meta Agency Account plan."
    },
    quarterly: {
      amt: "14,999",
      cycle: "/ quarter",
      subnote: '<i class="fa-solid fa-circle-check text-green"></i> Save ₹2,998 (17% OFF) • Priority Partner BM Whitelisting Included',
      waText: "Hi Havfly Team, I want to activate the Quarterly VIP Scaling Pass for ₹14,999 with Priority Whitelisting."
    }
  };

  let activeBillingCycle = 'monthly';

  function setBillingCycle(cycle) {
    activeBillingCycle = cycle;
    const plan = pricingPlans[cycle];
    if (!plan) return;

    if (pricingCycleSwitch) {
      pricingCycleSwitch.classList.toggle('active', cycle === 'quarterly');
      pricingCycleSwitch.setAttribute('aria-checked', cycle === 'quarterly' ? 'true' : 'false');
    }

    if (btnMonthlyCycle) btnMonthlyCycle.classList.toggle('active', cycle === 'monthly');
    if (btnQuarterlyCycle) btnQuarterlyCycle.classList.toggle('active', cycle === 'quarterly');

    if (pricingAmt) {
      pricingAmt.style.opacity = '0.3';
      setTimeout(() => {
        pricingAmt.textContent = plan.amt;
        pricingAmt.style.opacity = '1';
      }, 100);
    }

    if (pricingCycle) pricingCycle.textContent = plan.cycle;
    if (pricingSubnote) pricingSubnote.innerHTML = plan.subnote;

    if (pricingActivateCta) {
      pricingActivateCta.href = `https://wa.me/?text=${encodeURIComponent(plan.waText)}`;
    }
  }

  if (pricingCycleSwitch) {
    pricingCycleSwitch.addEventListener('click', () => {
      setBillingCycle(activeBillingCycle === 'monthly' ? 'quarterly' : 'monthly');
    });
  }

  if (btnMonthlyCycle) {
    btnMonthlyCycle.addEventListener('click', () => setBillingCycle('monthly'));
  }

  if (btnQuarterlyCycle) {
    btnQuarterlyCycle.addEventListener('click', () => setBillingCycle('quarterly'));
  }

  // ==========================================================================
  // 10. LIVE SOCIAL PROOF ACTIVITY TOAST STREAM
  // ==========================================================================
  const activityToast = document.getElementById('activity-toast');
  const toastMsg = document.getElementById('toast-message');
  const toastTime = document.getElementById('toast-time');
  const closeToastBtn = document.getElementById('close-toast-btn');

  const toastNotifications = [
    { text: "<strong>Amit K.</strong> from Mumbai just activated a Verified Agency Account", time: "3 minutes ago • Target: ₹3L/mo" },
    { text: "<strong>Rohan S.</strong> from Delhi scaled past ₹4k daily limit with Havfly", time: "7 minutes ago • Spent: ₹1.8L today" },
    { text: "<strong>Vikram M.</strong> from Bangalore received active Business Manager access", time: "12 minutes ago • 15-Min Setup" },
    { text: "<strong>Pooja T.</strong> from Jaipur scaled D2C fashion store with zero bans", time: "18 minutes ago • 4.5x ROAS" },
    { text: "<strong>Deepak G.</strong> from Surat top-up completed with 100% GST Invoice", time: "24 minutes ago • Domestic UPI" },
    { text: "<strong>Manish V.</strong> from Gurgaon switched 3 personal accounts to 1 Agency BM", time: "31 minutes ago • Zero Downtime" }
  ];

  let toastIndex = 0;
  let toastTimer = null;

  function showNextToast() {
    if (!activityToast || !toastMsg) return;

    const data = toastNotifications[toastIndex];
    toastMsg.innerHTML = data.text;
    if (toastTime) toastTime.textContent = data.time;

    activityToast.classList.add('show');

    setTimeout(() => {
      activityToast.classList.remove('show');
    }, 4500);

    toastIndex = (toastIndex + 1) % toastNotifications.length;
  }

  if (activityToast) {
    let hasStartedToast = false;
    function startToastStream() {
      if (hasStartedToast) return;
      hasStartedToast = true;
      showNextToast();
      toastTimer = setInterval(showNextToast, 12000);
    }

    if (window.innerWidth <= 768) {
      const onScrollCheck = () => {
        if (window.scrollY > 300) {
          startToastStream();
          window.removeEventListener('scroll', onScrollCheck);
        }
      };
      window.addEventListener('scroll', onScrollCheck, { passive: true });
      // Fallback after 14s if user stays on page
      setTimeout(() => {
        startToastStream();
        window.removeEventListener('scroll', onScrollCheck);
      }, 14000);
    } else {
      setTimeout(startToastStream, 6000);
    }

    if (closeToastBtn) {
      closeToastBtn.addEventListener('click', () => {
        activityToast.classList.remove('show');
        if (toastTimer) clearInterval(toastTimer);
      });
    }
  }

  // ==========================================================================
  // 11. ACCESSIBLE LEAD CLAIM MODAL
  // ==========================================================================
  const leadModal = document.getElementById('lead-modal');
  const openModalBtns = [
    document.getElementById('header-quick-claim-btn'),
    document.getElementById('mobile-claim-btn')
  ].filter(Boolean);
  const closeModalBtn = document.getElementById('close-lead-modal');
  const modalForm = document.getElementById('modal-quick-form');

  function openModal() {
    if (leadModal) {
      leadModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      const firstInput = leadModal.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }

  function closeModal() {
    if (leadModal) {
      leadModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (leadModal) {
    leadModal.addEventListener('click', (e) => {
      if (e.target === leadModal) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && leadModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name')?.value.trim() || 'Advertiser';
      const phone = document.getElementById('modal-phone')?.value.trim() || '';
      const spend = document.getElementById('modal-spend')?.value || '₹2 Lakh - ₹5 Lakh / mo';
      const bottleneck = document.getElementById('modal-bottleneck')?.value || 'Bypass ₹4,000 Daily Spend Limit';

      const message = `Hi Havfly Team, my name is ${name}. I want to claim a Verified Meta Agency Account.
• WhatsApp: ${phone}
• Monthly Ad Budget: ${spend}
• Primary Bottleneck: ${bottleneck}
• Selected Plan: ${activeBillingCycle === 'quarterly' ? 'Quarterly VIP Pass (₹14,999)' : 'Monthly Pass (₹5,999)'}
Please assign an account specialist to hand over my Business Manager access.`;

      const encodedUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(encodedUrl, '_blank');
      closeModal();
    });
  }

  // ==========================================================================
  // 12. SMOOTH SCROLLING FOR INTERNAL ANCHORS
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 72;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile drawer if open
          if (navDrawer && navDrawer.classList.contains('open')) {
            navDrawer.classList.remove('open');
            if (menuToggle) {
              const icon = menuToggle.querySelector('i');
              if (icon) icon.className = 'fa-solid fa-bars';
            }
          }
        }
      }
    });
  });

  // ==========================================================================
  // 13. STICKY HEADER SCROLL SHADOW & BLUR
  // ==========================================================================
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('header-scrolled');
      } else {
        siteHeader.classList.remove('header-scrolled');
      }
    }, { passive: true });
  }

});

"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import schemesData from "../data/schemes.json";
import ContactUs from "./ContactUs";

// ─────────────────────────────────────────────────────────────────────────────
// SCORING ENGINE
// ─────────────────────────────────────────────────────────────────────────────

const WEIGHTS = {
  fundingType: 35,
  sector: 30,
  entityType: 15,
  amountRange: 10,
  state: 5,
  dpiit: 3,
  female: 2,
};

const SCORE_THRESHOLD = 60;

function scoreScheme(scheme, filters) {
  let score = 0;

  if (filters.fundingType && filters.fundingType !== "Any") {
    if (scheme.funding_type === filters.fundingType) {
      score += WEIGHTS.fundingType;
    } else {
      return null;
    }
  } else {
    score += WEIGHTS.fundingType;
  }

  if (filters.sector) {
    const schemeSectors = scheme.sectors || [];
    if (schemeSectors.includes(filters.sector)) {
      score += WEIGHTS.sector;
    } else if (schemeSectors.includes("Major Sector")) {
      score += Math.round(WEIGHTS.sector * 0.6);
    } else {
      return null;
    }
  } else {
    score += WEIGHTS.sector;
  }

  if (filters.entityType) {
    const schemeEntities = scheme.entity_types || [];
    if (schemeEntities.includes(filters.entityType)) {
      score += WEIGHTS.entityType;
    } else if (schemeEntities.length === 0) {
      score += Math.round(WEIGHTS.entityType * 0.7);
    } else {
      score += 0;
    }
  } else {
    score += Math.round(WEIGHTS.entityType * 0.5);
  }

  if (
    filters.amountRange &&
    filters.amountRange.min !== null &&
    filters.amountRange.max !== null
  ) {
    const schemeMin = scheme.amount_min_lakhs ?? 0;
    const schemeMax = scheme.amount_max_lakhs ?? Infinity;
    const { min: fMin, max: fMax } = filters.amountRange;

    const overlap = Math.min(schemeMax, fMax) - Math.max(schemeMin, fMin);

    if (overlap >= 0) {
      const filterSpan = fMax - fMin || 1;
      const overlapRatio = Math.min(overlap / filterSpan, 1);
      score += Math.round(WEIGHTS.amountRange * overlapRatio);
    } else {
      score += 0;
    }
  } else {
    score += Math.round(WEIGHTS.amountRange * 0.5);
  }

  const schemeStates = scheme.states || [];
  if (filters.state) {
    if (schemeStates.length === 0) {
      score += WEIGHTS.state;
    } else if (schemeStates.includes(filters.state)) {
      score += WEIGHTS.state;
    } else {
      return null;
    }
  } else {
    score +=
      schemeStates.length === 0
        ? WEIGHTS.state
        : Math.round(WEIGHTS.state * 0.4);
  }

  if (scheme.requires_dpiit) {
    if (filters.isDpiit) {
      score += WEIGHTS.dpiit;
    } else {
      return null;
    }
  } else {
    score += WEIGHTS.dpiit;
  }

  if (scheme.requires_female_founder) {
    if (filters.isFemaleFounder) {
      score += WEIGHTS.female;
    } else {
      return null;
    }
  } else {
    score += WEIGHTS.female;
  }

  return score;
}

function scoredFilter(data, filters, threshold = SCORE_THRESHOLD) {
  const scored = [];

  for (const scheme of data) {
    const score = scoreScheme(scheme, filters);
    if (score === null) continue;
    if (score < threshold) continue;

    scored.push({
      ...scheme,
      _score: score,
    });
  }

  scored.sort((a, b) =>
    b._score !== a._score
      ? b._score - a._score
      : (b.amount_max_lakhs ?? 0) - (a.amount_max_lakhs ?? 0),
  );

  return scored;
}

function extractOptions(data) {
  const sectors = new Set();
  const entities = new Set();
  const states = new Set();
  data.forEach((item) => {
    (item.sectors || []).forEach((s) => {
      if (s !== "Major Sector") sectors.add(s);
    });
    (item.entity_types || []).forEach((e) => entities.add(e));
    (item.states || []).forEach((st) => states.add(st));
  });
  return {
    sectors: Array.from(sectors).sort(),
    entities: Array.from(entities).sort(),
    states: Array.from(states).sort(),
  };
}

const AMOUNT_RANGES = [
  { label: "Up to ₹10 L", value: { min: 0, max: 10 } },
  { label: "₹10 L – ₹50 L", value: { min: 10, max: 50 } },
  { label: "₹50 L – ₹1 Cr", value: { min: 50, max: 100 } },
  { label: "₹1 Cr – ₹5 Cr", value: { min: 100, max: 500 } },
  { label: "₹5 Cr – ₹25 Cr", value: { min: 500, max: 2500 } },
  { label: "Above ₹25 Cr", value: { min: 2500, max: 999999 } },
  { label: "Any Amount", value: { min: null, max: null } },
];

const BADGE = {
  Grant: { bg: "#e6f4ee", color: "#1a6b3c" },
  Loan: { bg: "#e6f0fb", color: "#185FA5" },
  Equity: { bg: "#f0eeff", color: "#5433b0" },
  Subsidy: { bg: "#fef3e2", color: "#854F0B" },
};

const STEPS = {
  GREETING: "greeting",
  CONFIRM: "confirm",
  CAPITAL: "capital",
  SECTOR: "sector",
  ENTITY: "entity",
  AMOUNT: "amount",
  STATE: "state",
  DPIIT: "dpiit",
  FEMALE: "female",
  LOADING: "loading",
  RESULTS: "results",
  LEAD: "lead",
  DONE: "done",
};

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "10px 14px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#94a3b8",
            display: "inline-block",
            animation: `fcBlink 1s infinite ${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function OptionBtns({ options, onSelect, disabled }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
      {options.map((opt) => (
        <button
          key={opt.value ?? opt.label}
          disabled={disabled}
          onClick={() => !disabled && onSelect(opt)}
          style={{
            padding: "7px 16px",
            borderRadius: 20,
            border: "1.5px solid #1C4268",
            background: disabled ? "#f1f5f9" : "transparent",
            color: disabled ? "#94a3b8" : "#1C4268",
            fontSize: 13,
            fontWeight: 500,
            cursor: disabled ? "default" : "pointer",
            transition: "all 0.15s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.background = "#1C4268";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1C4268";
            }
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function ResultCard({ item, onUnlockClick }) {
  const b = BADGE[item.funding_type] || BADGE.Grant;
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "0.5px solid #e2e8f0",
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        minHeight: 80,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 6,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 10px",
              borderRadius: 10,
              background: b.bg,
              color: b.color,
              letterSpacing: "0.05em",
            }}
          >
            {item.funding_type}
          </span>
   
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#0f172a",
            lineHeight: 1.35,
            marginBottom: 4,
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#64748b",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.description || "No description available"}
        </div>
          <button
        onClick={() => onUnlockClick(item)}
        style={{
          flexShrink: 0,
          background: "#1C4268",
          color: "white",
          border: "none",
          borderRadius: 8,
          padding: "8px 14px",
          fontSize: 11,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
          whiteSpace: "nowrap",
          transition: "all 0.15s",
          alignSelf: "center",
          minHeight: 36,
          marginTop:2
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#0f2a44";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#1C4268";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Click to Unlock Opportunities →
      </button>
      </div>
    
    </div>
  );
}

function LoaderBar() {
  return (
    <div
      style={{
        height: 4,
        background: "#e2e8f0",
        borderRadius: 2,
        overflow: "hidden",
        margin: "8px 0 4px",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "linear-gradient(90deg,#1C4268,#3b82f6)",
          borderRadius: 2,
          animation: "fcFill 1.3s ease forwards",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNDING DATA
// ─────────────────────────────────────────────────────────────────────────────

const fundingData = schemesData;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function FundingChatbot({ data = fundingData }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(STEPS.GREETING);
  const [showContactUs, setShowContactUs] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [filters, setFilters] = useState({
    fundingType: "Any",
    sector: "",
    entityType: "",
    amountRange: null,
    state: "",
    isDpiit: false,
    isFemaleFounder: false,
  });
  const [typing, setTyping] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [selectVal, setSelectVal] = useState("");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const endRef = useRef(null);
  const initialized = useRef(false);
  const options = extractOptions(data);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true;
      startGreeting();
    }
  }, [open]);

  const botMsg = useCallback(
    (content, delay = 0) =>
      new Promise((res) =>
        setTimeout(() => {
          setMessages((p) => [
            ...p,
            { id: Date.now() + Math.random(), role: "bot", content },
          ]);
          res();
        }, delay),
      ),
    [],
  );

  const userMsg = (text) =>
    setMessages((p) => [
      ...p,
      { id: Date.now() + Math.random(), role: "user", content: text },
    ]);

  const typeFor = (ms = 800) =>
    new Promise((res) => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        res();
      }, ms);
    });

  const resetAll = () => {
    setMessages([]);
    setFilters({
      fundingType: "Any",
      sector: "",
      entityType: "",
      amountRange: null,
      state: "",
      isDpiit: false,
      isFemaleFounder: false,
    });
    setLeadForm({ name: "", email: "", phone: "" });
    setSelectVal("");
    setInputDisabled(false);
    initialized.current = false;
    setStep(STEPS.GREETING);
    setShowContactUs(false);
    setSelectedScheme(null);
    // Re-initialize the chat
    setTimeout(() => {
      startGreeting();
    }, 300);
  };

  const handleUnlockClick = (scheme) => {
    setSelectedScheme(scheme);
    setShowContactUs(true);
    setOpen(false);
  };

  // ── FLOW ──────────────────────────────────────────────────────────────────

  async function startGreeting() {
    await typeFor(700);
    await botMsg("👋 Hi there! I'm FundBot, your personal funding advisor.");
    await typeFor(800);
    await botMsg(
      "I can help you discover grants, loans, equity, and subsidies available for your startup. Would you like to find your funding opportunity?",
    );
    setStep(STEPS.CONFIRM);
  }

  async function onConfirm(opt) {
    setInputDisabled(true);
    userMsg(opt.label);
   if (opt.value === "no") {
  await typeFor(600);

  await botMsg(
    <>
      <div>
        ⚠️ <strong>You're missing out on your best funding opportunities!</strong>
        <br />
        <br />
        Don't let valuable government schemes and funding benefits slip away.
        Our experts can help you find the right opportunities for your business.
      </div>

      <div style={{ marginTop: "16px" }}>
        <a
          href="tel:9737388388"
          style={{
            display: "inline-block",
            padding: "4px 4px",
            borderRadius: 20,
            border: "none",
            background: "#1C4268",
            color: "white",
            fontSize: 13,
            fontWeight: 400,
            cursor: "pointer",
            fontFamily: "inherit",
            textAlign: "center",
            textDecoration: "none",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0f2a44";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1C4268";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
        📞 Speak with an Expert: 9737388388
        </a>
      </div>
    </>
  );

  setStep(STEPS.DONE);
  setInputDisabled(false);
  return;
} else {
      await typeFor(700);
      await botMsg(
        "Excellent! Let's find the best match for you. I'll ask a few quick questions."
      );
      await typeFor(600);
      await botMsg("What type of capital are you looking for?");
      setStep(STEPS.CAPITAL);
      setInputDisabled(false);
    }
  }

  async function onCapital(opt) {
    setInputDisabled(true);
    userMsg(opt.label);
    setFilters((f) => ({ ...f, fundingType: opt.value }));
    await typeFor(600);
    await botMsg(
      "Which industry sector does your startup operate in? (Required — cannot be skipped)"
    );
    setStep(STEPS.SECTOR);
    setSelectVal("");
    setInputDisabled(false);
  }

  async function onSector(val) {
    if (!val) return;
    setInputDisabled(true);
    userMsg(val);
    setFilters((f) => ({ ...f, sector: val }));
    setSelectVal("");
    await typeFor(600);
    await botMsg("What is your legal entity type? (Optional — you can skip)");
    setStep(STEPS.ENTITY);
    setSelectVal("");
    setInputDisabled(false);
  }

  async function onEntity(val, skip = false) {
    setInputDisabled(true);
    userMsg(skip ? "Skipped" : val);
    setFilters((f) => ({ ...f, entityType: skip ? "" : val }));
    setSelectVal("");
    await typeFor(600);
    await botMsg(
      "What funding amount range are you looking for? (Optional — you can skip)"
    );
    setStep(STEPS.AMOUNT);
    setInputDisabled(false);
  }

  async function onAmount(opt, skip = false) {
    setInputDisabled(true);
    userMsg(skip ? "Any Amount" : opt.label);
    setFilters((f) => ({
      ...f,
      amountRange: skip ? null : opt.value,
    }));
    await typeFor(600);
    await botMsg(
      "Which state is your startup registered in? (Skip to show All India)"
    );
    setStep(STEPS.STATE);
    setSelectVal("");
    setInputDisabled(false);
  }

  async function onState(val, skip = false) {
    setInputDisabled(true);
    userMsg(skip ? "All India" : val);
    setFilters((f) => ({ ...f, state: skip ? "" : val }));
    setSelectVal("");
    await typeFor(500);
    await botMsg("Are you DPIIT recognized? (Optional)");
    setStep(STEPS.DPIIT);
    setInputDisabled(false);
  }

  async function onDpiit(opt) {
    setInputDisabled(true);
    userMsg(opt.label);
    setFilters((f) => ({ ...f, isDpiit: opt.value }));
    await typeFor(500);
    await botMsg("Is your startup founded by a woman? (Optional)");
    setStep(STEPS.FEMALE);
    setInputDisabled(false);
  }

  async function onFemale(opt) {
    setInputDisabled(true);
    userMsg(opt.label);
    const final = { ...filters, isFemaleFounder: opt.value };
    setFilters(final);
    await typeFor(500);
    await botMsg("Perfect! Searching through all available schemes for you...");
    setStep(STEPS.LOADING);

    setTimeout(async () => {
      const found = scoredFilter(data, final);

      if (found.length === 0) {
        await botMsg(
          "I couldn't find any matching opportunities with these criteria."
        );
        await typeFor(400);
        await botMsg(
          "Try selecting 'Any' for funding type or broadening your sector. Would you like to start a new search?"
        );
        setStep(STEPS.DONE);
        setInputDisabled(false);
        return;
      }

      const topN = found.slice(0, 5);
      const extras = found.length - 5;

      await botMsg(
        `🎉 Found ${found.length} matching opportunit${found.length === 1 ? "y" : "ies"} for you! Here are the top results:`
      );
      setMessages((p) => [
        ...p,
        {
          id: Date.now() + Math.random(),
          role: "bot",
          type: "results",
          items: topN,
        },
      ]);
      await typeFor(400);

      if (extras > 0) {
        await botMsg(
          `There are ${extras} more opportunities! Would you like the full report sent to your email?`
        );
      } else {
        await botMsg(
          "Would you like a detailed report with application guidance for all these schemes?"
        );
      }

      setStep(STEPS.RESULTS);
      setInputDisabled(false);
    }, 1400);
  }

  async function onResults(opt) {
    setInputDisabled(true);
    userMsg(opt.label);
    if (opt.value === "restart") {
      resetAll();
      return;
    }
    if (opt.value === "report") {
      setShowContactUs(true);
      setOpen(false);
      setInputDisabled(false);
      return;
    }
    await typeFor(600);
    await botMsg(
      "To send you the full report, I just need a few quick details:"
    );
    setStep(STEPS.LEAD);
    setInputDisabled(false);
  }

  async function onLeadSubmit() {
    if (!leadForm.name.trim() || !leadForm.email.trim()) return;
    setInputDisabled(true);
    userMsg(
      `${leadForm.name} · ${leadForm.email}${leadForm.phone ? ` · ${leadForm.phone}` : ""}`
    );
    await typeFor(400);

    const payload = {
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      phone: leadForm.phone ? leadForm.phone.trim() : "",
      state: filters.state || "Not specified",
      fundingType: filters.fundingType,
      sector: filters.sector,
      entityType: filters.entityType,
      amountRange: filters.amountRange,
      isDpiit: filters.isDpiit,
      isFemaleFounder: filters.isFemaleFounder,
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Lead submitted successfully:", result.data);
        await botMsg(
          "✅ Thank you! Your full funding report is being prepared and will be sent to your email shortly. Our advisor will reach out to guide you through the application process. 🚀"
        );
      } else {
        console.error("❌ Failed to submit lead:", result.error);
        await botMsg(
          "⚠️ There was an issue submitting your details. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error("❌ Error submitting lead:", error);
      await botMsg(
        "⚠️ There was an issue submitting your details. Please try again or contact us directly."
      );
    }

    await typeFor(600);
    await botMsg("Is there anything else I can help you with?");
    setStep(STEPS.DONE);
    setInputDisabled(false);
  }

  // ── INPUT AREA RENDERER ───────────────────────────────────────────────────

  const sel = {
    width: "100%",
    padding: "9px 12px",
    borderRadius: 10,
    border: "0.5px solid #cbd5e1",
    background: "#f8fafc",
    fontSize: 13,
    color: "#0f172a",
    outline: "none",
    fontFamily: "inherit",
    marginBottom: 6,
  };
  const skipBtn = {
    background: "none",
    border: "none",
    color: "#94a3b8",
    fontSize: 11.5,
    cursor: "pointer",
    textDecoration: "underline",
    fontFamily: "inherit",
    padding: 0,
    display: "block",
    marginTop: 2,
  };
  const inputField = {
    padding: "9px 12px",
    borderRadius: 10,
    border: "0.5px solid #cbd5e1",
    background: "#f8fafc",
    fontSize: 13,
    color: "#0f172a",
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  };

  function renderInput() {
    switch (step) {
      case STEPS.CONFIRM:
        return (
          <OptionBtns
            options={[
              { label: "Yes, let's go!", value: "yes" },
              { label: "No thanks", value: "no" },
            ]}
            onSelect={onConfirm}
            disabled={inputDisabled}
          />
        );

      case STEPS.CAPITAL:
        return (
          <OptionBtns
            options={[
              { label: "Grant", value: "Grant" },
              { label: "Loan", value: "Loan" },
              { label: "Equity", value: "Equity" },
              { label: "Subsidy", value: "Subsidy" },
              { label: "Any / All", value: "Any" },
            ]}
            onSelect={onCapital}
            disabled={inputDisabled}
          />
        );

      case STEPS.SECTOR:
        return (
          <select
            style={sel}
            value={selectVal}
            disabled={inputDisabled}
            onChange={(e) => {
              setSelectVal(e.target.value);
              if (e.target.value) onSector(e.target.value);
            }}
          >
            <option value="">Select your sector...</option>
            {options.sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        );

      case STEPS.ENTITY:
        return (
          <div>
            <select
              style={sel}
              value={selectVal}
              disabled={inputDisabled}
              onChange={(e) => {
                setSelectVal(e.target.value);
                if (e.target.value) onEntity(e.target.value);
              }}
            >
              <option value="">Select entity type...</option>
              {options.entities.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
            <button
              style={skipBtn}
              disabled={inputDisabled}
              onClick={() => onEntity("", true)}
            >
              Skip this question →
            </button>
          </div>
        );

      case STEPS.AMOUNT:
        return (
          <div>
            <OptionBtns
              options={AMOUNT_RANGES.filter(
                (r) => r.label !== "Any Amount",
              ).map((r) => ({
                label: r.label,
                value: r.value,
              }))}
              onSelect={(opt) => onAmount(opt)}
              disabled={inputDisabled}
            />
            <button
              style={skipBtn}
              disabled={inputDisabled}
              onClick={() => onAmount(null, true)}
            >
              Skip (show all amounts) →
            </button>
          </div>
        );

      case STEPS.STATE:
        return (
          <div>
            <select
              style={sel}
              value={selectVal}
              disabled={inputDisabled}
              onChange={(e) => {
                setSelectVal(e.target.value);
                if (e.target.value) onState(e.target.value);
              }}
            >
              <option value="">Select your state...</option>
              {options.states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button
              style={skipBtn}
              disabled={inputDisabled}
              onClick={() => onState("", true)}
            >
              Skip (show All India) →
            </button>
          </div>
        );

      case STEPS.DPIIT:
        return (
          <OptionBtns
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
            onSelect={onDpiit}
            disabled={inputDisabled}
          />
        );

      case STEPS.FEMALE:
        return (
          <OptionBtns
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
            onSelect={onFemale}
            disabled={inputDisabled}
          />
        );

      case STEPS.LOADING:
        return <LoaderBar />;

      case STEPS.RESULTS:
        return (
          <OptionBtns
            options={[
              { label: "Yes, get full report", value: "report" },
              { label: "Start new search", value: "restart" },
            ]}
            onSelect={onResults}
            disabled={inputDisabled}
          />
        );

      case STEPS.LEAD:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <input
              type="text"
              placeholder="Your name *"
              style={inputField}
              value={leadForm.name}
              onChange={(e) =>
                setLeadForm((f) => ({ ...f, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Email address *"
              style={inputField}
              value={leadForm.email}
              onChange={(e) =>
                setLeadForm((f) => ({ ...f, email: e.target.value }))
              }
            />
            <input
              type="tel"
              placeholder="Phone number (optional)"
              style={inputField}
              value={leadForm.phone}
              onChange={(e) =>
                setLeadForm((f) => ({ ...f, phone: e.target.value }))
              }
            />
            <button
              onClick={onLeadSubmit}
              style={{
                background: "#1C4268",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "10px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                marginTop: 2,
              }}
            >
              Send me the report →
            </button>
          </div>
        );

      case STEPS.DONE:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
            <button
              onClick={resetAll}
              style={{
                padding: "10px 20px",
                borderRadius: 20,
                border: "1.5px solid #1C4268",
                background: "transparent",
                color: "#1C4268",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1C4268";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1C4268";
              }}
            >
              Start new search
            </button>
         
          </div>
        );

      default:
        return null;
    }
  }

  // ── RENDER ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes fcBlink { 0%,80%,100%{opacity:.2} 40%{opacity:1} }
        @keyframes fcFill   { from{width:0} to{width:100%} }
        @keyframes fcSlide  { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes fcPulse  { 0%,100%{box-shadow:0 4px 20px rgba(28,66,104,.4)} 50%{box-shadow:0 4px 32px rgba(28,66,104,.65)} }
        .fc-fab:hover  { transform:scale(1.08)!important; box-shadow:0 6px 28px rgba(28,66,104,.55)!important; }
        .fc-fab:active { transform:scale(0.96)!important; }
      `}</style>

      {showContactUs && (
        <ContactUs 
          scheme={selectedScheme} 
          onClose={() => {
            setShowContactUs(false);
            setSelectedScheme(null);
          }} 
        />
      )}

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            width: 360,
            maxWidth: "calc(100vw - 32px)",
            height: 545,
            maxHeight: "calc(100vh - 115px)",
            background: "white",
            borderRadius: 20,
            boxShadow: "0 8px 40px rgba(0,0,0,0.16)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
            animation: "fcSlide .25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1C4268",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              🤖
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                FundBot
              </div>
              <div style={{ color: "rgba(255,255,255,.65)", fontSize: 11.5 }}>
                Funding Opportunity Finder
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,.12)",
                border: "none",
                color: "white",
                width: 28,
                height: 28,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px 8px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((msg) => {
              if (msg.type === "results") {
                return (
                  <div key={msg.id} style={{ width: "100%" }}>
                    {msg.items.map((item) => (
                      <ResultCard 
                        key={item.id} 
                        item={item} 
                        onUnlockClick={handleUnlockClick}
                      />
                    ))}
                  </div>
                );
              }
              return (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "9px 13px",
                      borderRadius:
                        msg.role === "user"
                          ? "14px 14px 3px 14px"
                          : "14px 14px 14px 3px",
                      background: msg.role === "user" ? "#1C4268" : "#f1f5f9",
                      color: msg.role === "user" ? "white" : "#0f172a",
                      fontSize: 13,
                      lineHeight: 1.55,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}
            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "14px 14px 14px 3px",
                    display: "inline-flex",
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "10px 14px 14px",
              borderTop: "0.5px solid #e2e8f0",
              flexShrink: 0,
              background: "white",
            }}
          >
            {renderInput()}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        className="fc-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open funding chatbot"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#1C4268",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          transition: "transform .2s, box-shadow .2s",
          animation: "fcPulse 2.5s ease-in-out infinite",
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
          </svg>
        )}
      </button>
    </>
  );
}
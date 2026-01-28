> 🔒 Responsible AI first • Human-in-the-loop • Interpretable baseline

## Responsible AI

### 🔗 Live Demo
https://prakhardewangan2005-hash.github.io/SentinelRank-Responsible-ML/

This project follows Microsoft-aligned Responsible AI principles and is designed as a **decision-support system**, not a fully automated decision-maker.

### Intended Use
- Assist teams in prioritizing potential customer churn risk.
- Provide **interpretable signals** (score, label, confidence, reasons) for triage and review.
- Support operational monitoring via latency and confidence metrics.

### Limitations
- Uses a **rule-based baseline** (not trained on labeled outcomes).
- Confidence is a heuristic derived from triggered risk signals.
- Accuracy metric represents **high-confidence rate**, not real-world predictive accuracy.

### Human-in-the-Loop
Decisions are automatically flagged for **manual review** when:
- Confidence < 0.55, or
- Score is borderline (0.45–0.55)

This ensures critical or uncertain cases are reviewed by a human agent.

### Failure Modes
- New customers with limited history may receive inflated risk.
- Pricing or policy changes can invalidate thresholds.
- Missing or incorrect metadata can affect scoring.

### Fairness & Monitoring
- Exploratory **fairness slices** are monitored by contract type.
- Metrics include average score, high-risk rate, and review rate per group.
- Intended for monitoring and diagnostics, not compliance certification.

### Next Steps
- Add ground-truth outcomes and calibrate confidence.
- Evaluate fairness gaps with statistical confidence intervals.

- Replace baseline rules with trained ML models while preserving explainability.


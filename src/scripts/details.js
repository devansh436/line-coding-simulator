const encodingDetails = {
    "NRZ-L": {
      sync: "Poor synchronization due to long sequences without voltage change (e.g., 00000 → no transitions)",
      dc: "High DC component as voltage remains constant over long periods",
      baseline: "High baseline wandering caused by extended DC levels",
    },
    "NRZ-I": {
      sync: "Better than NRZ-L; transitions occur only on 1s (e.g., 10011 → transition, no, transition, transition)",
      dc: "Moderate DC component; 1s cause transitions, but long sequences of 0s can still maintain constant voltage",
      baseline: "Moderate wandering but better than NRZ-L due to 1-based transitions",
    },
    "RZ": {
      sync: "Good synchronization due to signal returning to zero every bit (e.g., 1 → high→0, 0 → low→0)",
      dc: "Lower DC component as signal regularly returns to zero",
      baseline: "Moderate baseline wandering; improved due to zero-level resets",
    },
    "Manchester": {
      sync: "Excellent synchronization (each bit has a mid-bit transition; e.g., 1 → high→low, 0 → low→high)",
      dc: "No DC component; signal is self-clocking and balanced",
      baseline: "No baseline wandering; transitions ensure balance around zero",
    },
    "AMI": {
      sync: "Good synchronization by alternating polarity of 1s (e.g., 1 → +, next 1 → −)",
      dc: "No DC component as 1s cancel out over time; 0s are always at zero voltage",
      baseline: "Low baseline wandering; polarity alternation keeps signal centered",
    },
    "MLT-3": {
      sync: "Moderate synchronization; signal changes level only on a 1, cycling through 3 voltage levels (e.g., 1s → 0→+1→0→-1...)",
      dc: "Very low DC component due to frequent returns to zero and cycling pattern",
      baseline: "Minimal baseline wandering; balanced transitions help maintain signal level",
    },
  };
  
  export default encodingDetails;
  
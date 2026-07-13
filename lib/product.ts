export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "RejectMail",
  slug: "rejectmail",
  tagline: "Polite rejection emails for every stage.",
  description: "Generate empathetic, professional rejection emails for screening or final-stage candidates, matched to your tone.",
  toolTitle: "Write a rejection email",
  resultLabel: "Your rejection email",
  ctaLabel: "Write email",
  features: [
  "Stage-aware copy",
  "Warm or neutral tone",
  "Keep-the-door-open line",
  "Short and respectful"
],
  inputs: [
  {
    "key": "stage",
    "label": "Stage",
    "type": "select",
    "options": [
      "Screening",
      "After interview",
      "Final"
    ]
  },
  {
    "key": "role",
    "label": "Role",
    "type": "input",
    "placeholder": "e.g. Data Analyst"
  },
  {
    "key": "tone",
    "label": "Tone",
    "type": "select",
    "options": [
      "Warm",
      "Neutral",
      "Brief"
    ]
  },
  {
    "key": "reason",
    "label": "Reason (optional)",
    "type": "input",
    "placeholder": "e.g. stronger match found"
  }
] as InputField[],
  systemPrompt: "You are an empathetic HR communicator. Given a rejection stage, a role, a tone, and an optional reason, write a short, respectful rejection email. Keep the door open where appropriate, avoid false hope, and never disclose other candidates. In demo mode, return a realistic sample email following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 emails/mo"
  },
  {
    "tier": "Pro",
    "price": "$15/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const stage = inputs['stage'] || 'Screening'
  const role = (inputs['role'] || 'the role').trim()
  const t = inputs['tone'] || 'Warm'
  const r = (inputs['reason'] || '').trim()
  let out = 'REJECTION EMAIL (' + stage + ' | ' + t + ')\n\n'
  out += 'Subject: Update on your ' + role + ' application\n\n'
  out += 'Hi there,\n\n'
  out += 'Thank you for taking the time to apply for the ' + role + ' role' + (stage === 'Screening' ? '' : ' and for the conversation') + '.\n\n'
  out += 'We have decided to move forward with another candidate' + (r ? ' (' + r + ')' : '') + '. This was a close call and we appreciated your time.\n\n'
  out += 'We will keep your details on file for future fits. Wishing you the best,\n'
  out += 'The hiring team\n\n'
  out += '\n--- (Mock demo. Add the role and stage for a tailored email.)'
  return out
}
}

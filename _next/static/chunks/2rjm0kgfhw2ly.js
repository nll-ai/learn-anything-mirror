(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,34634,70053,53031,43794,e=>{"use strict";var t=e.i(29294),a=e.i(93903);function n(e){let t;return new Date(e).toLocaleDateString("en-US",{dateStyle:"long",timeZone:0===(t=new Date(e)).getUTCHours()&&0===t.getUTCMinutes()&&0===t.getUTCSeconds()&&0===t.getUTCMilliseconds()?"UTC":"America/Los_Angeles"})}function i(e){return void 0!==e?n(e):a.BALANCE_DUE_LABEL}function r(e,t,a){return e.every(e=>!0===t[e]&&!0===a[e])}e.s(["acceptButtonLabel",0,function(e){if(e.full)return`Accept & open your ${(0,a.formatUsd)(e.tuitionCents)} tuition invoice`;if(e.split){let t=e.splitBalanceCents??e.dueCents;return`Accept & open your ${(0,a.formatUsd)(t)} invoice`}return`Accept & open your ${(0,a.formatUsd)(e.dueCents)} balance invoice`},"clickwrapReady",0,r,"isSplitSchedule",0,function(e){return(e.openInstallments?.length??0)>0||(e.paidDeposits?.length??0)>1},"paSplitSummary",0,function(e,t,a){if(0!==e.length)return{installmentCents:e.reduce((e,t)=>e+t.amountCents,0),installmentDueLabel:i(e[0].dueAt),splitBalanceCents:t,splitDueLabel:i(a)}},"paSummaryLines",0,function(e,n,i,r,o){let s=o?.dueLabel??a.BALANCE_DUE_LABEL,c=o?.refundLabel??a.REFUND_DEADLINE_LABEL,l=o?.paidRefundableLabel??c,d=(0,t.approvedRefundClause)(c),h=l===c?"payments are non-refundable":`new payments are non-refundable. Amounts already paid stay refundable on request until ${l}`;return e?[`This is the contract for your spot. Tuition is ${(0,a.formatUsd)(a.TUITION_TOTAL_CENTS)} — lodging, meals, and materials included, travel is not — due in one payment by ${s}.`,`Tuition ${d} If the Organizers cancel or make a major change to the retreat, you get a full refund.`,`Participants are expected to treat each other with respect and can be removed for serious disruption. Declining this agreement ends participation — everything paid is refunded if you decline on or before ${c}; after that date, ${h}.`]:[r?`This is the contract for your spot. Tuition is ${(0,a.formatUsd)(a.TUITION_TOTAL_CENTS)} — lodging, meals, and materials included, travel is not — and your remaining ${(0,a.formatUsd)(i)} is split in two: ${(0,a.formatUsd)(r.installmentCents)} by ${r.installmentDueLabel}, and ${(0,a.formatUsd)(r.splitBalanceCents)} by ${r.splitDueLabel}.`:`This is the contract for your spot. Tuition is ${(0,a.formatUsd)(a.TUITION_TOTAL_CENTS)} — lodging, meals, and materials included, travel is not — and your ${(0,a.formatUsd)(i)} balance is due ${s}.`,`Your ${(0,a.formatUsd)(n)} deposit ${d}`,"If the Organizers cancel or make a major change to the retreat, you get a full refund.",`Participants are expected to treat each other with respect and can be removed for serious disruption. Declining this agreement ends participation — everything paid is refunded if you decline on or before ${c}; after that date, ${h}.`]},"splitLedgerRows",0,function(e){let t=e.paidDeposits,n=t[0]?.amountCents??e.paidTuitionCents,r=t.slice(1),o=i(e.splitDueAt),s=[{name:"Deposit",sub:`${(0,a.formatUsd)(n)} \xb7 paid`,stamp:"Paid"}],c=0;for(let e of r){c+=1;let t=[(0,a.formatUsd)(e.amountCents),"paid",e.stripeNumber?`invoice ${e.stripeNumber}`:null].filter(e=>null!==e);s.push({name:`Installment ${c}`,sub:t.join(" · "),stamp:"Paid"})}for(let t of e.openInstallments){c+=1;let e=[(0,a.formatUsd)(t.amountCents),`due ${i(t.dueAt)}`,t.stripeNumber?`invoice ${t.stripeNumber}`:null].filter(e=>null!==e);s.push({name:`Installment ${c}`,sub:e.join(" · "),stamp:"Due",stampDue:!0,payHref:t.hostedInvoiceUrl,payLabel:`Pay ${(0,a.formatUsd)(t.amountCents)} on Stripe`})}return c+=1,s.push({name:`Installment ${c}`,sub:`${(0,a.formatUsd)(e.splitBalanceCents)} \xb7 due ${o} \xb7 opens when you accept`,stamp:"Opens on accept",stampDue:!0}),s},"splitReadyNote",0,function(e){let t=e.paidDeposits[0]?.amountCents??e.paidTuitionCents,n=i(e.splitDueAt),r=`${(0,a.formatUsd)(e.splitBalanceCents)}, due ${n}, which opens when you accept`,o=e.openInstallments,s=e.paidDeposits.slice(1);if(o.length>0){let n=o[0];i(n.dueAt);let s=n.stripeNumber?` (invoice ${n.stripeNumber})`:"";return`your ${(0,a.formatUsd)(t)} deposit is in, and it holds your seat. Tuition is ${(0,a.formatUsd)(a.TUITION_TOTAL_CENTS)}. Remaining tuition is two invoices: ${(0,a.formatUsd)(n.amountCents)}${s}, which you can pay on Stripe now, and ${r}. Accepting opens the ${(0,a.formatUsd)(e.splitBalanceCents)} invoice only — it does not charge you. What is left on this page: read the three documents below and check each box.`}let c=s.length>0?` Installment 1 (${(0,a.formatUsd)(s[0].amountCents)}) is paid.`:"";return`your ${(0,a.formatUsd)(t)} deposit is in, and it holds your seat.${c} Installment 2 is ${r}. Accepting opens that invoice only — it does not charge you. What is left on this page: read the three documents below and check each box.`}],34634);var o=e.i(43476),s=e.i(71645);function c(e,t){return e.split(/(\*\*[^*]+\*\*)/g).map((e,a)=>e.startsWith("**")&&e.endsWith("**")?(0,o.jsx)("strong",{children:e.slice(2,-2)},`${t}-${a}`):(0,o.jsx)("span",{children:e},`${t}-${a}`))}function l(e){return e.replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function d({cell:e,header:t=!1,k:a}){return(0,o.jsx)(t?"th":"td",{children:c(e,a)},a)}function h({rows:e,k:t}){let a=e.filter(e=>!/^\|(\s*:?-+:?\s*\|)+\s*$/.test(e));if(0===a.length)return null;let[n,...i]=a;return(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:l(n).map((e,t)=>(0,o.jsx)(d,{cell:e,header:!0,k:`h${t}`},`h${t}`))})}),(0,o.jsx)("tbody",{children:i.map((e,t)=>(0,o.jsx)("tr",{children:l(e).map((e,a)=>(0,o.jsx)(d,{cell:e,k:`c${t}-${a}`},`c${t}-${a}`))},t))})]},t)}function u({markdown:e}){let t=[],a=[],n=!1,i=[],r=[],s=e=>{if(0===a.length)return;let i=a.map((t,a)=>(0,o.jsx)("li",{children:c(t,`${e}-${a}`)},a));t.push(n?(0,o.jsx)("ol",{children:i},e):(0,o.jsx)("ul",{children:i},e)),a=[]},l=e=>{0!==r.length&&(t.push((0,o.jsx)("p",{children:c(r.join(" "),e)},e)),r=[])},d=e=>{0!==i.length&&(t.push((0,o.jsx)(h,{rows:i,k:e},e)),i=[])};return e.split("\n").forEach((e,h)=>{let u=`b${h}`,p=e.trim();p.startsWith("### ")?(l(`${u}-p`),s(`${u}-l`),d(`${u}-t`),t.push((0,o.jsx)("h4",{children:c(p.slice(4),u)},u))):p.startsWith("## ")?(l(`${u}-p`),s(`${u}-l`),d(`${u}-t`),t.push((0,o.jsx)("h3",{children:c(p.slice(3),u)},u))):p.startsWith("# ")?(l(`${u}-p`),s(`${u}-l`),d(`${u}-t`),t.push((0,o.jsx)("h2",{children:c(p.slice(2),u)},u))):p.startsWith("|")?(l(`${u}-p`),s(`${u}-l`),i.push(p)):i.length>0?(d(`${u}-t`),""===p?(l(`${u}-p`),s(`${u}-l`)):p.startsWith("- ")?(l(`${u}-p`),n=!1,a=[p.slice(2)]):/^\d+\.\s/.test(p)?(l(`${u}-p`),n=!0,a=[p.replace(/^\d+\.\s/,"")]):a.length>0?a[a.length-1]+=` ${p}`:r.push(p)):p.startsWith("- ")?(l(`${u}-p`),a&&!n?a.push(p.slice(2)):(s(`${u}-l0`),n=!1,a=[p.slice(2)])):/^\d+\.\s/.test(p)?(l(`${u}-p`),n?a.push(p.replace(/^\d+\.\s/,"")):(s(`${u}-l1`),n=!0,a=[p.replace(/^\d+\.\s/,"")])):""===p?(l(`${u}-p`),s(`${u}-l`)):a.length>0?a[a.length-1]+=` ${p}`:r.push(p)}),l("tail-p"),s("tail"),d("tail-t"),(0,o.jsx)("div",{className:"legal-doc",children:t})}let p=`# Participant Agreement (Terms & Conditions) — Learn Anything Retreat

This Agreement is between you, the participant, and **Non-Linear Labs, LLC** and
**Pandarrow, Inc** (collectively, the "Organizers"), the co-organizers of the Retreat. It
governs your participation in the **Learn Anything Retreat**, **February 15–19, 2027**,
at a venue in **San Diego, California** (the
"Retreat"). **Paying the deposit reserves your spot on the terms stated in the Deposit Terms
published at https://learn-anything.nonlinearlabs.ai/terms (the "Deposit Terms"), linked in
your invitation email and deposit invoice: all payments are fully refundable for any
reason if you cancel on or before December 15, 2026, and non-refundable after that
date (\xa73).** This
Agreement is presented for electronic acceptance **before the balance payment**;
acceptance is a condition of paying the balance and of participating. If you decline to
accept it, your participation ends and any monies you have already paid are treated under
\xa73 as of the date you decline — a Full Refund if that date is on or before December 15,
2026; no refund after that date.

## 1. Eligibility and application

Participation is by application. You represent that you are at least 18 years of age and
legally able to enter a binding contract. The Organizers screen applicants for fit (a new
knowledge domain to learn, existing learning habits, ability to participate fully) and accept
applications at their sole discretion. Acceptance is communicated by email and is valid for
**7 days from the date of the Organizers' acceptance email**. After that, the invitation
expires and the Organizers may, but are not required to, offer the spot to another applicant
or extend the window. Screening is for program fit only. It is not a health, medical,
criminal-history, or safety screening, and the Organizers make no representation regarding
any participant's conduct; participants remain responsible for their own behavior (\xa75).

## 2. Deposit and payment

- **Deposit:** A **deposit** — **$100 USD** for the standard invitation, or the
  amount stated on your deposit invoice when the Organizers arrange a larger one —
  credited toward the full $4,997 amount, is due
  within the 7-day acceptance window to secure your spot. The deposit exists for that
  purpose only: it holds your place in the cohort, and it is **fully refundable for any
  reason through December 15, 2026**; after that date it is non-refundable (\xa73). No balance-stage
  documents are accepted or required at the deposit stage: this Agreement, the Liability
  Waiver & Release, and the Privacy Notice are presented for acceptance before the balance
  payment. Paying the deposit accepts the **Deposit Terms** published at
  https://learn-anything.nonlinearlabs.ai/terms and is acceptance of the Deposit Terms
  only; it is not acceptance of this Agreement.
- **Tuition:** **$4,997 USD** total, covering **tuition, course materials, lodging, and
  meals on venue**, and including all applicable sales, lodging, and similar taxes owed
  on the Retreat itself; excludes travel to and from the venue, insurance, and personal
  purchases. You are not responsible for any additional taxes on your tuition.
- **Balance due:** The remaining balance (the $4,997 tuition less the deposit or
  deposits you have already paid) is due in full by 11:59 p.m. Pacific Time
  on **December 15, 2026** — the refund deadline itself (\xa73): tuition paid on or before
  that date is fully refundable through it, and after it payments are non-refundable; the
  \xa74 refunds (the Organizers cancel, a Material Change, or force majeure) still apply.**
  **Before paying
  the balance, you must accept this Agreement,
  the Liability Waiver & Release, and the Privacy Notice as presented by the Organizers;
  if you decline, you may not participate and any monies you have already paid are treated
  under \xa73 as of the date you decline — a Full Refund if that date is on or before
  December 15, 2026; no refund after that date — except that declining a revised Waiver
  presented under Waiver \xa74 is treated as an Organizer-side change under \xa74: all monies
  paid are refunded in full.** The balance is due in a single payment;
  installment plans are not
  offered. If the balance is not received by that date, the Organizers may send a written
  reminder, and may in their discretion allow a grace period; neither a reminder nor a grace
  period is required, extends the due date, or limits the Organizers' right to cancel for
  nonpayment. If the balance remains unpaid as of 11:59 p.m. Pacific Time on December 22,
  2026, the Organizers may cancel your participation by written notice, effective when
  sent. On such cancellation your seat is released and **any monies you have already paid
  are treated under \xa73 as of the cancellation date — a Full Refund if that date is on or
  before December 15, 2026; no refund after that date**; unpaid balance after such
  cancellation creates no further payment obligation of any kind. The Organizers may
  reinstate a cancelled participant who pays the balance in full, at their sole discretion.
- **Payment methods and taxes.** Payment is through the Organizers' payment
  processor (Stripe). The listed tuition **includes** all applicable taxes owed on the
  Retreat itself (sales, lodging, and similar taxes). You are not responsible for any additional taxes on your tuition. The Organizers
  pay payment-processing fees; you are charged only the amounts stated in this Agreement.

## 3. Cancellation by you

As used in this Agreement, the Retreat "begins" at 12:01 a.m. Pacific Time on February 15,
2027, and "Full Refund" means all monies you paid to the Organizers, including the deposit.

- **The refund deadline is 11:59 p.m. Pacific Time on December 15, 2026.** If you cancel
  on or before that date, you receive a Full Refund — for any reason or no reason at all —
  within 14 days of your cancellation notice.
- **If you cancel after 11:59 p.m. Pacific Time on December 15, 2026, nothing you have
  paid is refundable.** This applies to the deposit and to any balance paid, whatever the
  reason for cancelling. The balance is due on the refund deadline itself —
  December 15, 2026 — so the full tuition is payable by the deadline, and after it
  nothing is refundable.
- No refunds are issued for late arrival, early departure, failure to attend,
  or non-participation in individual activities. Cancellations for personal,
  medical, or family emergencies receive no special treatment — past the deadline there
  are no refunds whatever the reason. The Organizers do not ask for or evaluate the
  reason for a cancellation; refund rights depend only on the cancellation date and \xa74.
- Nothing in this Section limits the Organizers' discretion to refund in full or in part
  in exceptional circumstances, such as the death of a participant.
- **How to cancel.** Cancel in writing (email) to **eric.ma@nonlinearlabs.ai**, effective
  on the date sent to that address, provided the Organizers receive it no later than three
  days later; the Organizers will confirm within two business days. If the Organizers
  receive the email more than three days after it was sent, the cancellation is effective
  on the date of actual receipt.
- **Refund timing.** All refunds are issued to the original payment method within **14
  calendar days** of the triggering event (the date of your cancellation notice, the
  Organizers' cancellation or change notice, or the removal notice, as applicable). "Days" in this Agreement means calendar days unless
  stated otherwise.
- **Travel insurance.** The Organizers strongly recommend travel insurance, including "Cancel
  For Any Reason" (CFAR) coverage — as recommended in the Deposit Terms — purchased within
  14–21 days of your initial payment. The
  Organizers do not provide trip, travel, or medical coverage.
- **Payment disputes.** By checking the Participant Agreement box before paying the
  balance, you affirm
  that you understand this Section's cancellation and refund terms. If you initiate a
  chargeback or payment reversal and the dispute is resolved in the Organizers'
  favor (the funds are returned to the Organizers), you agree to reimburse the Organizers
  for the processor's chargeback fee and their reasonable, documented out-of-pocket costs
  of responding
  to the dispute, which the Organizers may deduct from any refund otherwise due. If the
  dispute is resolved in your favor or the funds are not returned to the Organizers, your
  participation ends immediately, and any refund otherwise owed to you is offset by the
  processor's chargeback fee the Organizers actually incurred. This Section does not limit
  any claim or remedy either party has under applicable law.

## 4. Cancellation, changes, and force majeure by the Organizers

- If the Organizers cancel the Retreat for any reason (including insufficient enrollment), you
  receive a **Full Refund** within **14 days** of the cancellation notice. The Organizers are not
  liable for costs paid to third parties (for example, airfare); travel insurance may cover
  such losses.
- **Material Changes.** A "Material Change" means: (a) any change of Retreat dates by more than
  48 hours; (b) relocation of the Retreat by more than 50 miles; or (c) the absence of both
  named facilitators (Eric Ma and Daniel Chen) for more than one program day. If the Organizers make a
  Material Change, you may cancel for a **Full Refund** by notifying the Organizers in writing
  within **7 days** of the change notice and before the Retreat begins. Changes that are not
  Material Changes (schedule, sessions, venue logistics, substitute facilitators) may be made
  at the Organizers' reasonable discretion.
- **Force majeure.** Neither party is liable for failure or delay caused by events beyond its
  reasonable control, including natural disaster, severe weather, epidemic, government order,
  civil unrest, or failure of essential venue utilities. If a force majeure event prevents the
  Retreat from proceeding on the scheduled dates, the Organizers may, at their option, (a)
  reschedule the Retreat to reasonable alternative dates, (b) convert the program to a
  substantially equivalent virtual or alternative-venue format, or (c) cancel and provide a
  Full Refund, in each case without further liability. If the Organizers reschedule or convert
  and you do not attend, you receive a Full Refund.
- This Agreement survives your death for the limited purpose of refund rights, which inure to
  your estate. A participant's death is treated as a cancellation under \xa73 as of the date
  of death: the estate receives what \xa73 provides at that timing (everything paid is
  refunded if the cancellation date is on or before December 15, 2026; nothing is
  refundable after that date). If you die after the Retreat begins, your estate receives the pro-rata
  value of unused program days and unused prepaid lodging across all monies paid.

## 5. Conduct and removal

You agree to treat facilitators, venue staff, and fellow participants with respect. The Organizers
may remove any participant whose behavior, in the Organizers' reasonable judgment, endangers
others or seriously disrupts the Retreat,
including violations of venue rules or applicable law. Illegal drugs are prohibited; alcohol
policy follows venue rules. Removal requires written notice stating the specific conduct,
effective when delivered. **If you are removed before the Retreat begins, monies you have
paid are treated exactly as \xa73 provides as of the removal date — a Full Refund if that
date is on or before December 15, 2026; no refund after that date. If you are removed
after the Retreat begins, you receive a refund
of the pro-rata value of unused program days and unused prepaid lodging across all monies
paid, within 14 days.** The Organizers screen applicants before acceptance;
this Section governs any removal that is nonetheless necessary. Removal
and any refund under this Section are commercial terms and are not a waiver, release, or
remedy under the Liability Waiver & Release.

## 6. Health and nature of services

The Retreat is an **educational program**. Facilitators are educators, not medical,
psychological, or other professional practitioners, and nothing in the program constitutes
medical, psychological, legal, or financial advice. You confirm you are able to participate in
a program of reading, writing, discussion, and computer use, and will seek medical clearance if
you have relevant concerns. Detailed health, emergency-care, and recording terms are in the
**Liability Waiver & Release**, which you must accept as a condition of participation.

## 7. Recording

All sessions and one-on-one conversations (scheduled or ad hoc) are recorded; recordings and transcripts are
confidential to the Retreat cohort, are delivered as described in Waiver \xa76, and are not
published publicly by the Organizers. You agree not to publish, redistribute, or submit recordings
outside the cohort without the prior written consent of the Organizers and each identifiable
participant in the recording, and not to make your own recordings of sessions or other
participants without the Organizers' prior written consent. The Organizers may create
derivatives of recordings and transcripts — including summaries, notes, and teaching
materials — for the Organizers' program, teaching, and promotional purposes; derivatives
will not identify you by name or any other identifying detail without your consent (\xa78).
Speaking about the Retreat under \xa78 — including quoting and excerpting session content —
is not publication of the recordings or transcripts; raw recordings and full transcripts
stay cohort-confidential and unpublished.

## 8. Intellectual property

**Your work.** You retain all right, title, and interest in work product you create during the
Retreat ("Your Materials"). You grant the Organizers a non-exclusive, royalty-free license to
reference, describe, discuss, quote, excerpt, teach from, and otherwise speak about the
Retreat, its sessions, and Your Materials — in any medium and for any purpose, including
program materials, teaching, blog posts, conference talks, publications, and promotion —
**without asking permission**, provided the use does not identify you. **The only use that
requires your prior written permission is one that identifies you** — by name, likeness,
voice, or any other identifying detail, including your employer or other affiliation, or a
project or detail that, alone or combined with other public information, is reasonably
likely to identify you, including associating your name with your project or work. You
agree that Your Materials as displayed or shared during Retreat sessions may appear in
session recordings and transcripts delivered to the cohort under \xa77 and Waiver \xa76; that
use is part of the program and does not require separate permission under this Section.
You represent that Your Materials are yours to share and that the licensed uses will not
breach any obligation you owe a third party, such as an employer. **You may opt out of
this license at any time** by emailing **eric.ma@nonlinearlabs.ai**; after your opt-out,
the Organizers will not make new references to Your Materials (uses already published
cannot be recalled). **Organizer
materials.** All curriculum, workbooks, slides, exercises, and recordings are owned by the
Organizers; you receive a limited, non-transferable, cohort-only license to use them for
personal learning, and agree not to redistribute or commercially exploit them.

## 9. Limitation of liability

To the maximum extent permitted by law, the Organizers' total liability to you arising out of or
relating to the Retreat is limited to the amounts you actually paid to the Organizers, and neither
party is liable for indirect, incidental, consequential, special, or punitive damages.
**This limitation does not apply to: (a) liability caused by a party's gross negligence,
recklessness, willful misconduct, or fraud; (b) claims of bodily injury or death; (c) breach of
the data-security obligations in Waiver \xa76; or (d) any liability that cannot lawfully be
limited.**

**Deadline for claims.** To the fullest extent permitted by law, any claim between you and
the Organizers arising out of or relating to the Retreat, this Agreement, or the other
Retreat documents — whether in contract, tort, statute, or otherwise, including any claim
for indemnity or reimbursement — must be brought within one year after the claim accrues.
A claim accrues when the person bringing it knew, or reasonably should have known, the
facts giving rise to it. This deadline is shorter than the default deadlines provided by
law. Claims that applicable law does not allow to be shortened are not subject to it.

## 10. General

This Agreement is governed by the laws of the State of **California**, and any dispute arising
out of or relating to this Agreement shall be brought exclusively in the state courts
located in **San Diego County, California**, and the United States District Court for the
Southern District of California, mirroring the Liability Waiver & Release. If any provision is held
unenforceable, it shall be enforced to the maximum extent permissible and only the excess
breadth shall be severed; the remainder survives. **Order of precedence:** the Waiver
controls as to release, assumption of risk, health, and recording consent; this Agreement
controls as to payment and cancellation, except that the Deposit Terms control as to the
deposit-stage promises, which this Agreement does not supersede. This Agreement, the
Liability Waiver & Release, the Privacy Notice acknowledgment, the Deposit Terms, and any
executed Photo & Media Release constitute the entire agreement between you and the
Organizers regarding the Retreat and supersede all prior communications.

**Survival.** Sections 3 (amounts owed), 7 (recordings), 8 (IP licenses), 9 (limitation of
liability), and this Section 10 survive cancellation or termination. **Notices.** Notices to
the Organizers go to **eric.ma@nonlinearlabs.ai**; notices to you go to your enrollment email
and are effective when sent. **Amendment.** The Organizers may amend this Agreement for future
retreats by posting updated terms; the version accepted at your enrollment governs your
participation. **Assignment.** You may not assign this Agreement or any claim arising under it
without the Organizers' written consent.

**Electronic records.** You consent to receive, execute, and retain this Agreement
electronically under the U.S. ESIGN Act (15 U.S.C. \xa7 7001 et seq.) and applicable UETA law.
By checking the Participant Agreement box before paying the balance — which is enabled
only after the full
text of this Agreement is displayed — you consent to: (a) conduct business with the Organizers
electronically, including electronically accepting this Agreement; (b) receive the executed
record and legal notices electronically; and (c) the Organizers' logging and retention of the
acceptance record (document version, checkbox text, date and time, IP address where
available, and a content hash of the accepted text). The Organizers will provide a copy of
the executed record at no charge on request by emailing **eric.ma@nonlinearlabs.ai**. You may
withdraw this electronic consent by emailing the Organizers; withdrawal is prospective, does
not affect acceptances already made, and means the Organizers can no longer accept your
electronic acceptance (participation requires electronic acceptance). Keep your enrollment
email address current with the Organizers. Standard hardware and software (a modern browser
and email client) is sufficient to receive and retain electronic records.

**Acceptance.** This Agreement is accepted electronically before the balance payment,
following acceptance of the Liability Waiver & Release. The deposit stated on your
deposit invoice reserves the
spot under the Deposit Terms and is acceptance of the Deposit Terms only; it is not
acceptance of this Agreement. By accepting this Agreement you also ratify the acceptance
of the Deposit Terms made by your deposit payment or by any payment made on your behalf.`,m=`# Liability Waiver & Release — Learn Anything Retreat

**Non-Linear Labs, LLC** and **Pandarrow, Inc** (collectively, the "Organizers"), the
co-organizers of the **Learn Anything Retreat** taking place **February 15–19, 2027**
at a venue in **San Diego, California** (the
"Retreat"), require every participant ("you") to accept this Waiver as a condition of
participation. This Waiver must be accepted before the Organizers accept the balance
payment from you and before participation. If you decline to accept it, you may not
participate and the Organizers will refund what Participant Agreement \xa73 provides as of
the date you decline — a full refund if that date is on or before December 15, 2026; no
refund after that date. If you do not understand any part of this
Waiver, do not accept it; consult an attorney first.

## NOTICE — THIS IS A LEGALLY BINDING AGREEMENT

**BY ACCEPTING THIS WAIVER YOU GIVE UP SUBSTANTIAL LEGAL RIGHTS, INCLUDING YOUR RIGHT TO
SUE.** Read it carefully. You acknowledge that you accept it freely and voluntarily, and
that you are at least 18 years of age.

## 1. Released Parties

As used in this Waiver, "Released Parties" means: Non-Linear Labs, LLC and Pandarrow, Inc;
their respective members, managers, directors, officers, shareholders, trustees, employees,
contractors, agents, volunteers, and facilitators (including Eric Ma and Daniel Chen,
individually), and their respective successors and assigns; and the venue, including the
owner and operator of the venue at which the Retreat takes place, and its trustees, staff,
employees, and agents. If the
Organizers' facility contract identifies a different legal entity as the venue's owner or
operator, that entity is included in "the venue" as used in this Waiver. **The Released
Parties are intended third-party beneficiaries of this Waiver and may enforce it directly.**

## 2. Acknowledgment and Assumption of Inherent Risks

I understand and acknowledge that participating in the Retreat involves inherent risks, both
known and unknown, including but not limited to: **allergic reactions, including severe or
life-threatening reactions (anaphylaxis), from food, beverages, or environmental exposure**;
food-borne illness and communicable disease; slips, trips, and falls on stairs, walkways,
trails, and uneven terrain; **use of venue grounds and recreational facilities, which may
include swimming pools, hot tubs, saunas, fitness equipment, or trails**; **riding as a
passenger in vehicles, shuttles, or transportation arranged by or provided through the
Organizers**; **consumption of food, beverages, or alcohol provided or hosted by the Organizers or
the venue**; ergonomic strain from computer and desk work; emotional distress; property
damage, loss, or theft; risks arising from the acts or negligence of other participants; and
risks arising from travel to, from, and around the venue. Retreat programming is primarily
sedentary knowledge work (reading, writing, discussion, and computer use); transportation
arranged by the Organizers is part of Retreat programming, not free-time recreational use. With
knowledge and understanding of these risks, I choose to participate of my own free will and
volition, and I voluntarily assume full responsibility for all such risks.

## 3. RELEASE OF LIABILITY & COVENANT NOT TO SUE — READ CAREFULLY; THIS SECTION WAIVES YOUR RIGHT TO SUE

In consideration of being permitted to participate in the Retreat, I, on behalf of myself,
hereby release, waive, discharge, and covenant not to sue the Released Parties from and for
any and all claims, causes of action, damages, losses, or expenses (including attorney's
fees), known or unknown, **INCLUDING CLAIMS ARISING FROM THE ORDINARY
NEGLIGENCE OF THE RELEASED PARTIES,** arising out of or relating to my participation in or
presence at the Retreat, including claims for bodily injury, illness, property damage,
wrongful death, or loss of services, **EXCEPT TO THE EXTENT CAUSED BY THE GROSS NEGLIGENCE,
RECKLESSNESS, OR WILLFUL MISCONDUCT OF A RELEASED PARTY, OR AS OTHERWISE PROHIBITED BY
LAW.** This release applies to claims arising from participation in scheduled Retreat
programming and activities on the venue premises, including Organizer-arranged
transportation. To the extent any of my heirs, executors, administrators, or personal
representatives has separately executed a counterpart of this Waiver, this release is also
given on their behalf.

### 3.1 Waiver of unknown claims

I expressly waive all rights I may have under any law limiting a general release to claims
known at the time of execution, including under common law and under California Civil Code
\xa7 1542 or any similar statute of any jurisdiction. California Civil Code \xa7 1542 currently
provides: "A general release does not extend to claims that the creditor or releasing
party does not know or suspect to exist in his or her favor at the time of executing the
release and that, if known by him or her, would have materially affected his or her
settlement with the debtor or released party." I
acknowledge that I may later discover claims or facts in addition to or different from those
I now know or believe to exist, and this Waiver applies to all such claims, known or
unknown, suspected or unsuspected.

## 4. Emergency Medical Treatment and Financial Responsibility

I consent to emergency transportation and medical treatment reasonably necessary in the event
of injury or illness during the Retreat, and if I am unable to communicate consent, I authorize
the Organizers' facilitators to arrange such transportation and treatment on my behalf and to
share my disclosed health information with treating personnel. **I accept full personal
responsibility for payment of all emergency transportation, treatment, and subsequent medical
expenses incurred on my behalf.** As of the date I accept this Waiver, the Organizers have
not purchased and do not maintain any health, accident, or medical insurance covering me,
and I understand that maintaining adequate health and travel insurance is solely my
responsibility. If
the Organizers later bind participant accident-medical coverage, its terms (including any
order-of-benefits priority) will be disclosed in a revised Waiver presented for electronic
re-acceptance to all then-enrolled participants before the balance payment; a participant
who declines the revised Waiver receives a full refund of all monies paid. I agree to
indemnify and hold harmless the Released
Parties from any costs incurred for emergency care provided to me, except to the extent such
costs arise from the gross negligence, recklessness, or willful misconduct of a Released
Party.

## 5. Health Disclosure

I will disclose to the Organizers, in writing by email to **eric.ma@nonlinearlabs.ai** with
the subject line "Health Disclosure — [your name]" no later than **February 1, 2027** (14
days before the Retreat begins), and promptly after any material change, any pre-existing
medical conditions, food allergies, medications, dietary restrictions, and emergency-contact
information that emergency medical personnel or food providers should know. I understand
that the Organizers and their facilitators are educators, not medical providers, are under
no obligation to monitor or act upon any medical condition, and provide no medical services.
If I fail to disclose a condition, the Organizers and their food providers cannot accommodate
my needs, and I assume the risk of complications from undisclosed conditions, but only to
the extent such complications are actually and proximately caused by the undisclosed
condition and except to the extent caused by a Released Party's gross negligence,
recklessness, or willful misconduct. Health disclosures are accessible only to the
Organizers' designated facilitators responsible for emergency response and food service, are
used solely for those purposes and for dietary accommodation, and are deleted within 30 days
after the Retreat. See the Privacy Notice for full handling details.

## 6. Recording Consent and Data Handling

I understand and consent that all Retreat sessions, group activities, and one-on-one
conversations (scheduled or ad hoc) may be recorded (audio/video) and transcribed by the Organizers, and I
consent to such recording of my participation and voice. Specifically:

1. **Delivery.** The Organizers will deliver session recordings (or transcripts) to participants
   within 30 days after the Retreat. **One-on-one recordings are delivered only to the
   participant in that session.**
2. **Access and security.** Recordings and transcripts are stored on access-controlled,
   encrypted systems limited to the cohort and the Organizers' facilitators. The Organizers will
   not publish or release them outside the cohort.
3. **Retention and deletion.** Recordings are kept in the cohort archive unless you ask us
   to delete them; you may request deletion of recordings containing your voice or image at
   any time by writing to **eric.ma@nonlinearlabs.ai**; the Organizers will honor verified
   requests within 30 days.
4. **Processing.** Audio may be processed on the Organizers' behalf by third-party transcription
   services under contracts requiring confidentiality and deletion of source audio after
   transcription. A current list of such processors and transfer safeguards is available on
   request from the Organizers; see the Privacy Notice.
5. **Withdrawal.** I may withdraw consent to recording of my one-on-one conversations at any
   time, before or during the Retreat, by notifying a facilitator or emailing
   **eric.ma@nonlinearlabs.ai**; withdrawal is prospective only. After withdrawal, the
   Organizers will not record my one-on-one conversations and will pause or exclude capture
   of my audio during my contributions to group sessions; group sessions continue to be
   recorded and I may participate off-camera, and recordings identifying me made after
   withdrawal will be excluded from materials distributed to the cohort and from any
   derivatives.
6. **Incidents.** The Organizers document any unauthorized access to recordings and notify
   affected participants without undue delay where the incident is likely to result in a
   high risk to their rights and freedoms, and notify regulators where required by law.
7. **Cohort confidentiality.** Recordings and transcripts are confidential to the Retreat
   cohort. I agree not to publish, redistribute, or submit them to any service or person
   outside the cohort (including public AI platforms) without the prior written consent of the
   Organizers and each identifiable participant in the recording.
8. **Participant recordings.** I may not make my own audio/video recordings of sessions or of
   other participants without the Organizers' prior written consent.
9. **Derivatives.** The Organizers may create derivatives of the recordings and
   transcripts — including summaries, notes, and teaching materials — for the Organizers'
   program, teaching, and promotional purposes, consistent with Participant Agreement \xa78.
   Derivatives will not identify me by name or any other identifying detail without my
   separate consent.

Promotional photography and testimonials are covered separately by the optional Photo & Media
Release.

## 7. Indemnification

I agree to defend, indemnify, and hold harmless the Released Parties from and against any and
all claims, demands, suits, liabilities, damages, and expenses (including reasonable attorney's
fees) arising out of (a) my negligent or intentional acts or omissions during the Retreat,
including injury to third parties or damage to property, or (b) my breach of this Waiver;
provided, however, that this indemnity does not apply to the extent a claim, loss, or expense
is caused by the negligence, gross negligence, recklessness, or willful misconduct of a
Released Party.

## 8. Severability and Reformation

If any provision of this Waiver is held invalid, illegal, or unenforceable, it shall be enforced
to the maximum extent permissible and only the excess breadth shall be severed; the remainder
of this Waiver shall continue in full force and effect.

## 9. Governing Law and Venue

This Waiver shall be governed by the laws of the State of **California**, without regard to
conflict-of-laws principles. I irrevocably submit to the exclusive jurisdiction of the state
courts located in **San Diego County, California**, and the United States District Court for the
Southern District of California, for any dispute arising out of or relating to this Waiver or the
Retreat. If California law would not enforce any provision of this Waiver, that provision
applies only to the fullest extent permitted by California law.

**Deadline for claims.** To the fullest extent permitted by law, any claim arising out of
or relating to this Waiver or the Retreat must be brought within one year after the claim
accrues. A claim accrues when the person bringing it knew, or reasonably should have
known, the facts giving rise to it. This deadline is shorter than the default deadlines
provided by law, applies to claims in contract, tort, statute, or otherwise (including
any claim for indemnity or reimbursement), and does not apply to claims that applicable
law does not allow to be shortened.

## 10. Electronic Signature and Consent

This Waiver is executed and delivered electronically under the U.S. ESIGN Act (15 U.S.C.
\xa7 7001 et seq.) and applicable UETA law. By checking the Liability Waiver box before
paying the balance,
you consent to: (a) accepting this Waiver electronically; (b) receiving the executed record
and legal notices electronically; and (c) the Organizers' logging and retention of the
execution record described in the Execution Record provision below (document version,
checkbox text, timestamp, IP address where available, and a content hash of the text
accepted). You may request a paper copy of this Waiver or of your execution record at no
charge by emailing **eric.ma@nonlinearlabs.ai**. You may withdraw this electronic consent by
emailing the Organizers; withdrawal is prospective, does not affect acceptances already made,
and means the Organizers can no longer accept your electronic acceptance (participation
requires electronic acceptance). Keep your enrollment email address current with the
Organizers. Standard hardware and software (a modern browser and email client) is sufficient
to receive and retain electronic records.

## 11. Full Understanding; Entire Agreement

I have read this Waiver in its entirety and understand it, including that I am giving up
substantial rights, including the right to sue. I have had the opportunity to consult an
attorney. I accept it freely and voluntarily, and I intend this to be a complete and
unconditional release of liability to the greatest extent permitted by law. This Waiver,
together with the Participant Agreement and any executed Photo & Media Release and Privacy
Notice acknowledgment, is the entire agreement between the parties regarding liability,
health, and recording, and may be amended only in a writing (including by electronic
acceptance) that I sign or accept.

**Execution record.** This Waiver is accepted electronically through a personal
acceptance link the Organizers email to your enrollment email address. By checking the
Liability Waiver box before paying the balance — which is
enabled only after the full text of this Waiver is displayed — you electronically accept
this Waiver with the same force and effect as a handwritten signature. The Organizers log
and retain as the execution record: the document version, the checkbox text, the date and
time of acceptance, your enrollment identity (the email address your acceptance link was
sent to), your IP address (where available),
and a content hash of the Waiver text accepted. No handwritten signature, initials, printed
name, or date of birth is collected.`,y=`# Privacy Notice — Learn Anything Retreat

**Non-Linear Labs, LLC** and **Pandarrow, Inc** (collectively, the "Organizers," "we") are the
controllers of personal data collected in connection with the **Learn Anything Retreat**
**February 15–19, 2027**. Contact: **eric.ma@nonlinearlabs.ai**, 82 Wendell Avenue, STE 100,
Pittsfield, MA 01201.

The Organizers jointly organize the Retreat and are together responsible for the personal
data described in this notice. **Non-Linear Labs, LLC** operates the enrollment site,
hosting, analytics, email, and payments, and handles all privacy questions and requests for
both Organizers: **eric.ma@nonlinearlabs.ai**.

Effective date: September 4, 2026. Last updated: September 27, 2026. This site does not
respond to Do Not Track browser signals; no third parties collect personally identifiable
information about your online activities over time or across third-party websites when you
use this site, except the site analytics described in the table below, which our analytics
provider collects on this site only, at our direction.

## What we collect and why

| Data | Purpose | Lawful basis (GDPR/UK GDPR) |
| --- | --- | --- |
| Enrollment and application data (name, email, intended learning domain, and messages you send us) | Running the application process and the Retreat | Performance of a contract; legitimate interests |
| Acceptance records — for each legal document you accept: document version, checkbox text, date/time, IP address (where available), and a content hash — kept as evidence of your electronic acceptance | Evidence of electronic acceptance of the legal documents | Performance of a contract; legitimate interests |
| Payment data (handled by our payment processor; we do not store card numbers) | Tuition collection, refunds | Performance of a contract; legal obligation (tax) |
| Billing data (name, email, billing address, company, tax ID as you provide them, shared with our payment processor) | Creating invoices and payment records | Performance of a contract; legal obligation (tax) |
| Session and 1:1 recordings and transcripts | Delivered to you as part of the program (Waiver \xa76) | Performance of a contract; your consent (withdrawable for 1:1s) |
| Digital credential data (name, email, your taught domain, festival talk title, and artifact reference, shared with our credential provider Certifier) | Issuing your completion credential on a verification page hosted by Certifier that stays live after the Retreat | Performance of a contract; legitimate interests |
| Health disclosures (conditions, allergies, medications), submitted by email before the Retreat and accessible only to the Organizers' designated facilitators for emergency response and dietary accommodation | Emergency response and dietary accommodation only | Your explicit consent (given with your acceptance of Waiver \xa75); vital interests in a medical emergency where you cannot consent |
| Emergency-contact information you submit with your health disclosure | Emergency use only; shared with medical personnel only as necessary | Vital interests; your consent |
| Product analytics (PostHog): usage events across this site, including the waitlist and enrollment flows, and standard device/browser metadata including IP address. PostHog hosts this data in the United States. No contents of legal documents are included. | Improving the enrollment and learning experience | Legitimate interests |
| Waitlist and marketing data (email, sign-up source, marketing-subscription status) | Running the waitlist and communications you requested | Consent (withdrawable) |
| Promotional photos, video, and testimonials | Used per your optional Photo & Media Release | Your consent (withdrawable prospectively) |

Where we rely on legitimate interests, those interests are: operating and improving the
application and enrollment process, keeping evidence of your acceptance of our legal
documents, and understanding how this site is used — weighed against your reasonable
expectations and your privacy. You may object to processing based on legitimate interests
(see Your rights below).

Providing application, enrollment, and billing data is necessary to enter into and perform
the enrollment contract; without it we cannot process your application or payment. Health
and emergency-contact disclosures are required by the Liability Waiver & Release (\xa75) so
that we can respond to emergencies and accommodate dietary needs; if you do not provide
them, we cannot provide those accommodations, and the risk provisions of Waiver \xa75 apply.
Waitlist and marketing data is optional; without it you will not receive those
communications. Analytics does not affect your application. We do not make decisions about
you based solely on automated processing.

We share personal data with: Stripe (payments); Convex (site hosting); PostHog (analytics);
Certifier (our digital-credential provider); our email provider; third-party transcription
services under confidentiality contracts; and
medical personnel in an emergency. Please tell your emergency contact that you are
providing their details to us and why.

## How recordings are handled

Recordings are stored on access-controlled, encrypted systems limited to the cohort and
facilitators; one-on-one recordings are delivered only to the participant in that session.
Recordings are kept in the cohort archive unless you ask us to delete them — email
**eric.ma@nonlinearlabs.ai** and we will honor deletion requests within 30 days. Unauthorized
access is documented,
and affected participants are informed without undue delay where an incident is likely to
result in a high risk to their rights and freedoms. Audio may be processed by third-party
transcription services under contracts requiring confidentiality and deletion of source audio
after transcription. Data may be
processed in the United States and other countries where our service providers operate; our
application data is hosted by Convex (United States), which maintains SOC 2 Type II
certification and states GDPR compliance. Where your data is transferred outside the UK or
the European Economic Area, we rely on the EU–US Data Privacy Framework (including the UK
Extension) where a provider is certified under it, and otherwise on the European
Commission's Standard Contractual Clauses together with the UK International Data Transfer
Addendum. You may request details of the safeguards that apply to each provider by emailing
**eric.ma@nonlinearlabs.ai**.

## Retention

We keep personal data only as long as necessary for the purposes described in this notice,
to comply with legal, accounting, and tax obligations, and to resolve disputes and enforce
our agreements. Specifically: application data is kept 12 months from your application
decision. Acceptance logs are kept as evidence of your acceptance of the legal documents
and to establish, exercise, or defend legal claims; they include your enrollment identity (the email address your acceptance link was sent
to), the document version, the checkbox text, the date/time, your IP address where
available, and a content hash. Health disclosures (and emergency-contact information submitted with them)
are used only for safety and dietary accommodation, and are kept as long as necessary for
those purposes and to respond to any related claims — you may ask us to delete them at any
time. Recordings are kept in the cohort archive unless you ask us to delete them. Credential
data and the credential's hosted verification page are kept for as long as the credential
remains available; ask us and we will remove it within 30 days. Billing
and payment records are kept as long as tax and accounting law requires. Waitlist and
marketing data is kept until you unsubscribe or ask us to delete it. Analytics data is kept
for as long as we run product analytics, deleted when we stop using it or on your request.

## Your rights (EU/UK/Canada)

Where GDPR, UK GDPR, or PIPEDA applies, you may request access to your personal data, or its
rectification or erasure, object to or restrict processing, receive the data you provided to
us in a structured, commonly used, machine-readable format (data portability), and lodge a
complaint with your supervisory authority (or the ICO in the UK). To exercise any right,
email **eric.ma@nonlinearlabs.ai**; we respond within 30 days. You may withdraw consent for
1:1 recording, health-data processing, and marketing communications at any time without
affecting the lawfulness of processing before withdrawal.

Regardless of where you live, you can ask us to show you, correct, or delete your personal
data at any time by emailing **eric.ma@nonlinearlabs.ai**. If we make a material change to
this notice, we will update the effective date above and post the current version here;
for material changes we will also email enrolled participants and waitlist subscribers
where we have a working email address for you.

## Security and breaches

We apply access controls, encryption at rest and in transit, and least-privilege access to
personal data. If a personal-data breach occurs, we will document it and, where the law
requires, notify the competent supervisory authority — in the EU/UK within 72 hours of
becoming aware of a qualifying breach. If a breach is likely to result in a high risk to
your rights and freedoms, we will inform you without undue delay.`;var g=e.i(19923);let f=["participantAgreement","liabilityWaiver","privacyNotice"],b=[{key:"participantAgreement",name:"Participant Agreement",qualifier:"Terms & Conditions",updated:"October 7, 2026",body:p.replace(/^# .*$/m,"").trim(),checkbox:g.LEGAL_CHECKBOX.participantAgreement},{key:"liabilityWaiver",name:"Liability Waiver",qualifier:"& Release",updated:"September 24, 2026",body:m.replace(/^# .*$/m,"").trim(),checkbox:g.LEGAL_CHECKBOX.liabilityWaiver,summary:["This is a legally binding waiver: by accepting it you give up substantial legal rights, including your right to sue. The text itself asks you not to accept it if any part is unclear, and to consult an attorney first.","You accept that the retreat carries inherent risks — things like food allergies and illness, use of the venue and its facilities, and travel arranged by the Organizers. The Organizers make a best effort to mitigate those risks; responsibility for the risks that remain is yours.","You release the Organizers, their team, and the venue from claims arising out of the retreat — including claims from ordinary negligence — except where caused by gross negligence, recklessness, or willful misconduct, or where the law does not allow.","You are responsible for your own health insurance and any medical costs if something happens. Accepting also covers your health disclosure (§5) and how session recordings are handled (§6)."]},{key:"privacyNotice",name:"Privacy Notice",qualifier:"",updated:"September 24, 2026",body:y.replace(/^# .*$/m,"").trim(),checkbox:g.LEGAL_CHECKBOX.privacyNotice,summary:["What we collect: your enrollment details, payment and billing data (cards are handled by Stripe — we never store card numbers), your health and emergency-contact disclosures, session recordings, and basic product analytics.","Accepting the documents on this page creates an acceptance record — document version, checkbox text, date and time, your IP address where available, and a content hash — kept as evidence that you accepted.","Who processes your data: us, plus Stripe (payments), Convex (hosting), PostHog (analytics), our email provider, and transcription services under confidentiality contracts. Data is hosted in the United States.","Session recordings stay in the cohort archive until you ask us to delete them — email eric.ma@nonlinearlabs.ai and we honor it within 30 days. The full notice lists your rights (EU/UK/Canada) and how to use them."]}];function v(){return(0,o.jsx)("svg",{className:"acc-chev",width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M4 2.5 L8 6 L4 9.5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function w(e,t){let i=void 0!==e?n(e):a.BALANCE_DUE_LABEL,r=t?` \xb7 Invoice ${t}`:"";return`Due ${i}${r}.`}e.s(["AcceptClickwrap",0,function({paSummary:e,buttonLabel:t,onAccept:a,submitting:n=!1,error:i=null,notice:c=null}){let[l,d]=(0,s.useState)({}),[h,p]=(0,s.useState)({}),m=r(f,l,h),y=f.every(e=>l[e]);return(0,o.jsxs)(o.Fragment,{children:[c?(0,o.jsx)("p",{className:"acc-terms-notice",children:c}):null,(0,o.jsx)("p",{className:"acc-section-label",children:"The three documents"}),b.map(t=>(0,o.jsxs)("details",{className:"acc-doc","data-doc":t.key,onToggle:e=>{e.target.open&&d(e=>({...e,[t.key]:!0}))},children:[(0,o.jsxs)("summary",{onClick:()=>d(e=>({...e,[t.key]:!0})),children:[(0,o.jsx)(v,{}),(0,o.jsxs)("span",{className:"acc-doc-id",children:[(0,o.jsx)("span",{className:"acc-doc-name",children:t.name}),t.qualifier?(0,o.jsx)("span",{className:"acc-doc-qualifier",children:t.qualifier}):null]}),l[t.key]?(0,o.jsx)("span",{className:"ledger-stamp acc-stamp-read",children:"Read"}):(0,o.jsx)("span",{className:"acc-open-hint",children:"open to read — unlocks its checkbox"})]}),(0,o.jsxs)("div",{className:"acc-doc-body",children:[(0,o.jsxs)("div",{className:"acc-plain",children:[(0,o.jsx)("p",{className:"acc-plain-label",children:"In plain English"}),(0,o.jsx)("p",{className:"acc-plain-disclaimer",children:"Provided for convenience only — this summary is not part of the document and does not change it. If it differs from the full text in any way, the full text below governs."}),(0,o.jsx)("ul",{children:("participantAgreement"===t.key?e:t.summary)?.map((e,t)=>(0,o.jsx)("li",{children:e},t))})]}),(0,o.jsxs)("p",{className:"acc-doc-updated",children:["Last updated ",t.updated]}),(0,o.jsx)(u,{markdown:t.body})]})]},t.key)),(0,o.jsxs)("section",{className:`panel acc-sign${m?" acc-sign-live":""}`,children:[(0,o.jsx)("h3",{children:"Your signature"}),(0,o.jsx)("div",{className:"acc-checks",children:b.map(e=>(0,o.jsxs)("label",{className:"legal-agree",children:[(0,o.jsx)("input",{type:"checkbox","data-doc-check":e.key,disabled:!l[e.key],checked:!!h[e.key],onChange:t=>p(a=>({...a,[e.key]:t.target.checked}))})," ",e.checkbox]},e.key))}),i?(0,o.jsx)("p",{className:"acc-error",children:i}):null,(0,o.jsx)("button",{className:"cta-button","data-accept":"",disabled:n||!m,onClick:()=>void a(),children:n?"Recording your acceptance…":t}),y?null:(0,o.jsx)("p",{className:"acc-sign-hint",children:"Each box unlocks once its document has been opened — the record of your acceptance includes the exact text you read."})]})]})}],70053),e.s(["AcceptTuitionLedger",0,function({rows:e,note:t}){return(0,o.jsxs)("section",{className:"panel acc-ledger",children:[(0,o.jsx)("div",{className:"ledger",children:e.map(e=>(0,o.jsxs)("div",{className:"ledger-row",children:[(0,o.jsxs)("div",{className:"ledger-info",children:[(0,o.jsx)("span",{className:"ledger-name",children:e.name}),(0,o.jsx)("span",{className:"ledger-sub",children:e.sub})]}),e.payHref&&e.payLabel?(0,o.jsx)("a",{className:"cta-button",href:e.payHref,target:"_blank",rel:"noreferrer",children:e.payLabel}):(0,o.jsx)("span",{className:e.stampDue?"ledger-stamp acc-stamp-due":"ledger-stamp",children:e.stamp})]},e.name))}),(0,o.jsx)("p",{className:"acc-note",children:t})]})}],53031),e.s(["AcceptInvoiceReady",0,function({name:e,outstanding:t,hostedInvoiceUrl:n,amountCents:i,dueAt:r,stripeNumber:s}){let c=!!t&&t.length>0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"shell-title",children:"Your terms are on file."}),(0,o.jsxs)("section",{className:"panel",children:[(0,o.jsxs)("p",{children:["Your acceptance of all three documents is recorded",e?`, ${e}`:""," —"," ",c?"your remaining invoices are below.":"one step left."]}),c?(0,o.jsxs)(o.Fragment,{children:[t.map((e,n)=>(0,o.jsxs)("div",{className:"acc-ready-invoice",children:[(0,o.jsxs)("span",{className:"ledger-name",children:[t.length>1?`Installment ${n+1}`:"Balance"," ","· ",(0,a.formatUsd)(e.amountCents)]}),(0,o.jsx)("a",{className:"cta-button acc-action",href:e.hostedInvoiceUrl,target:"_blank",rel:"noreferrer",children:`Pay ${(0,a.formatUsd)(e.amountCents)} on Stripe`}),(0,o.jsx)("p",{className:"acc-fine",children:w(e.dueAt,e.stripeNumber)})]},e.hostedInvoiceUrl)),(0,o.jsx)("p",{className:"acc-fine",children:"Keep this page — it always brings you back to these invoices. Each Stripe page has the printable version if your employer is reimbursing you, and paid invoices include a downloadable PDF receipt."})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("a",{className:"cta-button acc-action",href:n,target:"_blank",rel:"noreferrer",children:void 0!==i?`Pay ${(0,a.formatUsd)(i)} on Stripe`:"Pay on Stripe"}),(0,o.jsxs)("p",{className:"acc-fine",children:[w(r,s)," Keep this link — it always brings you back to this invoice. The Stripe page has the printable version if your employer is reimbursing you, and paid invoices include a downloadable PDF receipt."]})]}),(0,o.jsx)("p",{className:"acc-fine",children:"On file: your acceptance of the Participant Agreement, the Liability Waiver & Release, and the Privacy Notice."})]})]})}],43794)}]);
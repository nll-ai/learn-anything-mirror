(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95742,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(22016),n=e.i(18566);e.i(50711);var r=e.i(82045),o=e.i(20565),s=e.i(83394);function l(e,a){return e.split(/(\*\*[^*]+\*\*)/g).map((e,i)=>e.startsWith("**")&&e.endsWith("**")?(0,t.jsx)("strong",{children:e.slice(2,-2)},`${a}-${i}`):(0,t.jsx)("span",{children:e},`${a}-${i}`))}function c(e){return e.replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function d({cell:e,header:a=!1,k:i}){return(0,t.jsx)(a?"th":"td",{children:l(e,i)},i)}function h({rows:e,k:a}){let i=e.filter(e=>!/^\|(\s*:?-+:?\s*\|)+\s*$/.test(e));if(0===i.length)return null;let[n,...r]=i;return(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:c(n).map((e,a)=>(0,t.jsx)(d,{cell:e,header:!0,k:`h${a}`},`h${a}`))})}),(0,t.jsx)("tbody",{children:r.map((e,a)=>(0,t.jsx)("tr",{children:c(e).map((e,i)=>(0,t.jsx)(d,{cell:e,k:`c${a}-${i}`},`c${a}-${i}`))},a))})]},a)}function u({markdown:e}){let a=[],i=[],n=!1,r=[],o=[],s=e=>{if(0===i.length)return;let r=i.map((a,i)=>(0,t.jsx)("li",{children:l(a,`${e}-${i}`)},i));a.push(n?(0,t.jsx)("ol",{children:r},e):(0,t.jsx)("ul",{children:r},e)),i=[]},c=e=>{0!==o.length&&(a.push((0,t.jsx)("p",{children:l(o.join(" "),e)},e)),o=[])},d=e=>{0!==r.length&&(a.push((0,t.jsx)(h,{rows:r,k:e},e)),r=[])};return e.split("\n").forEach((e,h)=>{let u=`b${h}`,p=e.trim();p.startsWith("### ")?(c(`${u}-p`),s(`${u}-l`),d(`${u}-t`),a.push((0,t.jsx)("h4",{children:l(p.slice(4),u)},u))):p.startsWith("## ")?(c(`${u}-p`),s(`${u}-l`),d(`${u}-t`),a.push((0,t.jsx)("h3",{children:l(p.slice(3),u)},u))):p.startsWith("# ")?(c(`${u}-p`),s(`${u}-l`),d(`${u}-t`),a.push((0,t.jsx)("h2",{children:l(p.slice(2),u)},u))):p.startsWith("|")?(c(`${u}-p`),s(`${u}-l`),r.push(p)):r.length>0?(d(`${u}-t`),""===p?(c(`${u}-p`),s(`${u}-l`)):p.startsWith("- ")?(c(`${u}-p`),n=!1,i=[p.slice(2)]):/^\d+\.\s/.test(p)?(c(`${u}-p`),n=!0,i=[p.replace(/^\d+\.\s/,"")]):i.length>0?i[i.length-1]+=` ${p}`:o.push(p)):p.startsWith("- ")?(c(`${u}-p`),i&&!n?i.push(p.slice(2)):(s(`${u}-l0`),n=!1,i=[p.slice(2)])):/^\d+\.\s/.test(p)?(c(`${u}-p`),n?i.push(p.replace(/^\d+\.\s/,"")):(s(`${u}-l1`),n=!0,i=[p.replace(/^\d+\.\s/,"")])):""===p?(c(`${u}-p`),s(`${u}-l`)):i.length>0?i[i.length-1]+=` ${p}`:o.push(p)}),c("tail-p"),s("tail"),d("tail-t"),(0,t.jsx)("div",{className:"legal-doc",children:a})}let p=`# Participant Agreement (Terms & Conditions) — Learn Anything Retreat

This Agreement is between you, the participant, and **Non-Linear Labs, LLC** and
**Pandarrow, Inc** (collectively, the "Organizers"), the co-organizers of the Retreat. It
governs your participation in the **Learn Anything Retreat**, **February 15–19, 2027**,
at a venue in **San Diego, California** (the
"Retreat"). **Paying the deposit reserves your spot on the terms stated in the Deposit Terms
published at https://learn-anything.nonlinearlabs.ai/terms (the "Deposit Terms"), linked in
your invitation email and deposit invoice: the deposit is fully refundable for any reason, at
any time before the Retreat begins.** This
Agreement is presented for electronic acceptance **before the balance payment**;
acceptance is a condition of paying the balance and of participating. If you decline to
accept it, your participation ends and all monies you have paid, including the deposit,
are refunded in full within 14 days.

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

- **Deposit:** A **$100 USD deposit** — credited toward the full $4,997 amount — is due
  within the 7-day acceptance window to secure your spot. The deposit exists for that
  purpose only: it holds your place in the cohort, and it is **fully refundable for any
  reason whatsoever** at any time before the Retreat begins (\xa73). No balance-stage
  documents are accepted or required at the deposit stage: this Agreement, the Liability
  Waiver & Release, and the Privacy Notice are presented for acceptance before the balance
  payment. Paying the deposit accepts the **Deposit Terms** published at
  https://learn-anything.nonlinearlabs.ai/terms and is acceptance of the Deposit Terms
  only; it is not acceptance of this Agreement.
- **Tuition:** **$4,997 USD** total, covering **tuition, course materials, lodging, and
  meals on venue**, and including all applicable sales, lodging, and similar taxes owed
  on the Retreat itself; excludes travel to and from the venue, insurance, and personal
  purchases. You are not responsible for any additional taxes on your tuition.
- **Balance due:** The remaining balance ($4,897) is due in full by 11:59 p.m. Pacific Time
  on **January 15, 2027**. **Before paying the balance, you must accept this Agreement,
  the Liability Waiver & Release, and the Privacy Notice as presented by the Organizers;
  if you decline, you may not participate and all monies you have paid, including the
  deposit, are refunded in full within 14 days.** The balance is due in a single payment;
  installment plans are not
  offered. If the balance is not received by that date, the Organizers may send a written
  reminder, and may in their discretion allow a grace period; neither a reminder nor a grace
  period is required, extends the due date, or limits the Organizers' right to cancel for
  nonpayment. If the balance remains unpaid as of 11:59 p.m. Pacific Time on January 22,
  2027, the Organizers may cancel your participation by written notice, effective when
  sent. On such cancellation your seat is released and **all monies you have paid,
  including the deposit, are refunded in full within 14 days**; unpaid balance after such
  cancellation creates no further payment obligation of any kind. The Organizers may
  reinstate a cancelled participant who pays the balance in full, at their sole discretion.
- **Payment methods and taxes.** Payment is through the Organizers' payment
  processor (Stripe). The listed tuition **includes** all applicable taxes owed on the
  Retreat itself (sales, lodging, and similar taxes). You are not responsible for any additional taxes on your tuition. The Organizers
  pay payment-processing fees; you are charged only the amounts stated in this Agreement.

## 3. Cancellation by you

As used in this Agreement, the Retreat "begins" at 12:01 a.m. Pacific Time on February 15,
2027, and "Full Refund" means all monies you paid to the Organizers, including the deposit.
"Replacement" means an attendee the Organizers have accepted under \xa71 who has paid the
deposit in full and executed the Liability Waiver, whether identified by you or by the
Organizers (including via the waitlist).

- **The $100 deposit is fully refundable for any reason whatsoever.** You may cancel at
  any time before the Retreat begins, for any reason or no reason at all, and the deposit
  is refunded in full within 14 days of your cancellation notice. Any balance you have
  paid is refunded under the timing rules below.
- **Before 11:59 p.m. Pacific Time on January 15, 2027:** if you cancel, all balance paid
  is refunded in full.
- **At or after 11:59 p.m. Pacific Time on January 15, 2027 (balance only):** the balance
  is non-refundable
  unless your spot is filled by a Replacement before the Retreat begins, in which case the
  balance is refunded within 14 days. The refund equals the amounts you actually paid,
  regardless of the price the Replacement pays. If your spot is filled by a Replacement on
  or after the Retreat begins, a pro-rata refund of unused program days, across all monies
  paid, applies within 14 days. The balance pays for a reserved seat in a capped cohort:
  by the balance due date the Organizers commit fixed per-participant costs (venue,
  lodging, meals, and materials) in reliance on expected enrollment, and the parties
  agreed to these post-deadline terms as a reasonable approximation of the Organizers'
  loss.
- The Organizers will use commercially reasonable efforts to fill cancelled spots, including
  through the waitlist; this is an efforts obligation only and does not guarantee a
  Replacement.
- No refunds are issued for late arrival, early departure, failure to attend,
  or non-participation in individual activities. Cancellations for personal,
  medical, or family emergencies receive no special refund tier — they follow
  the same timing rules above. The Organizers do not ask for or evaluate the
  reason for a cancellation; refund rights depend only on the timing and refill rules in
  this Section and \xa74.
- **How to cancel.** Cancel in writing (email) to **eric.ma@nonlinearlabs.ai**, effective
  on the date sent to that address, provided the Organizers receive it no later than three
  days later; the Organizers will confirm within two business days. If the Organizers
  receive the email more than three days after it was sent, the cancellation is effective
  on the date of actual receipt.
- **Refund timing.** All refunds are issued to the original payment method within **14
  calendar days** of the triggering event (the date of your cancellation notice, the
  Organizers' cancellation or change notice, the date your spot is filled by a Replacement,
  or the removal notice, as applicable). "Days" in this Agreement means calendar days unless
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
  of death: the estate receives what \xa73 provides at that timing (the deposit is refunded in
  full any time before the Retreat begins; the balance follows \xa73's timing and Replacement
  rules). If you die after the Retreat begins, your estate receives the pro-rata
  value of unused program days and unused prepaid lodging across all monies paid.

## 5. Conduct and removal

You agree to treat facilitators, venue staff, and fellow participants with respect. The Organizers
may remove any participant whose behavior, in the Organizers' reasonable judgment, endangers
others or seriously disrupts the Retreat,
including violations of venue rules or applicable law. Illegal drugs are prohibited; alcohol
policy follows venue rules. Removal requires written notice stating the specific conduct,
effective when delivered. **If you are removed before the Retreat begins, your deposit is
refunded in full and any balance you have paid is refunded under the timing rules in \xa73 as
of the removal date. If you are removed after the Retreat begins, you receive a refund
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
materials — for the Organizers' program purposes; derivatives will not identify you by
name or any other identifying detail without your consent.

## 8. Intellectual property

**Your work.** You retain all right, title, and interest in work product you create during the
Retreat ("Your Materials"). You grant the Organizers a non-exclusive, royalty-free license to
display excerpts of Your Materials for internal review and, with your separate written
permission, in promotional or educational contexts. You agree that Your Materials as displayed
or shared during Retreat sessions may appear in session recordings and transcripts delivered
to the cohort under \xa77 and Waiver \xa76; that use is part of the program and is not a promotional
or educational publication requiring separate permission under this Section. **Organizer
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
following acceptance of the Liability Waiver & Release. The $100 deposit reserves the
spot under the Deposit Terms and is acceptance of the Deposit Terms only; it is not
acceptance of this Agreement. By accepting this Agreement you also ratify the acceptance
of the Deposit Terms made by your deposit payment or by any payment made on your behalf.`,y=`# Liability Waiver & Release — Learn Anything Retreat

**Non-Linear Labs, LLC** and **Pandarrow, Inc** (collectively, the "Organizers"), the
co-organizers of the **Learn Anything Retreat** taking place **February 15–19, 2027**
at a venue in **San Diego, California** (the
"Retreat"), require every participant ("you") to accept this Waiver as a condition of
participation. This Waiver must be accepted before the Organizers accept the balance
payment from you and before participation. If you decline to accept it, you may not
participate and the Organizers will refund all
monies you have paid, including your deposit. If you do not understand any part of this
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
   program purposes. Derivatives will not identify me by name or any other identifying
   detail without my separate consent.

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

**Execution record.** This Waiver is accepted electronically through the Organizers'
enrollment application. By checking the Liability Waiver box before paying the balance —
which is
enabled only after the full text of this Waiver is displayed — you electronically accept
this Waiver with the same force and effect as a handwritten signature. The Organizers log
and retain as the execution record: the document version, the checkbox text, the date and
time of acceptance, your authenticated account identity, your IP address (where available),
and a content hash of the Waiver text accepted. No handwritten signature, initials, printed
name, or date of birth is collected.`,m=`# Privacy Notice — Learn Anything Retreat

**Non-Linear Labs, LLC** and **Pandarrow, Inc** (collectively, the "Organizers," "we") are the
controllers of personal data collected in connection with the **Learn Anything Retreat**
**February 15–19, 2027**. Contact: **eric.ma@nonlinearlabs.ai**, 82 Wendell Avenue, STE 100,
Pittsfield, MA 01201.

The Organizers jointly organize the Retreat and are together responsible for the personal
data described in this notice. **Non-Linear Labs, LLC** operates the enrollment site,
hosting, analytics, email, and payments, and handles all privacy questions and requests for
both Organizers: **eric.ma@nonlinearlabs.ai**.

Effective date: September 4, 2026. Last updated: September 24, 2026. This site does not
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
our email provider; third-party transcription services under confidentiality contracts; and
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
and to establish, exercise, or defend legal claims; they include your account identity, the
document version, the checkbox text, the date/time, your IP address where available, and a
content hash. Health disclosures (and emergency-contact information submitted with them)
are used only for safety and dietary accommodation, and are kept as long as necessary for
those purposes and to respond to any related claims — you may ask us to delete them at any
time. Recordings are kept in the cohort archive unless you ask us to delete them. Billing
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
your rights and freedoms, we will inform you without undue delay.`;var g=e.i(19923),f=e.i(93903);let b={terms_being_finalized:"Your participant terms are being finalized — we'll email you when your acceptance link is live.",invalid_link:"This link isn't valid. Links are personal and can't be reconstructed — use the link in your email exactly as sent, or reply to that email and we'll send a fresh one.",link_expired:"This link has expired (the balance deadline has passed). Email us and we'll sort it out under the Participant Agreement.",stage_not_billable_closed:"This entry is closed. If you think that's a mistake, reply to your invitation email.",stage_not_billable_cancelled:"This entry was cancelled. If you think that's a mistake, reply to your invitation email.",deposit_not_paid:"We don't have a confirmed deposit on file for this entry yet — this page opens once your deposit is paid. Reply to your invitation email if that's a surprise.",billing_name_required:"Your entry is missing the name the invoice should be made out to. Reply to your email with your full name and we'll fix it — then this page will work.",participant_acceptance_required:"We couldn't record your acceptance — nothing was charged. Please try again, or reply to your email for help.",stage_not_billable:"This entry can't be billed right now. Reply to your email and we'll fix it.",stuck_void_use_retry_void:"Preparing your invoice hit a snag on our side. Reply to your email and we'll fix it — nothing has been charged.",errored_balance_use_retry:"Preparing your invoice hit a snag. Reply to your email and we'll fix it — nothing has been charged."};function v(e){return b[e.startsWith("stage_not_billable:")?`stage_not_billable_${e.split(":")[1]}`:e.split(":")[0]]??b[e]??e}function w({state:e,entryId:a,token:i}){switch(e.state){case"gate_closed":return(0,t.jsx)("section",{className:"legal-section",children:(0,t.jsxs)("p",{children:["Your participant terms are being finalized. We'll email your personal acceptance link as soon as they are —"," ",(0,t.jsx)("strong",{children:"your seat is already held"}),", and there is nothing you need to do right now."]})});case"invalid_link":return(0,t.jsx)(x,{children:b.invalid_link});case"expired":return(0,t.jsx)(x,{children:b.link_expired});case"unavailable":return(0,t.jsx)(x,{children:b[`stage_not_billable_${e.reason}`]??"This entry is not open for acceptance. Reply to your email and we'll help."});case"deposit_not_paid":return(0,t.jsx)(x,{children:b.deposit_not_paid});case"paid":return(0,t.jsx)("section",{className:"legal-section",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"You're fully enrolled."})," Your terms are on file and the tuition is settled — we'll email you everything you need before the retreat."]})});case"invoice_error":return(0,t.jsx)(O,{entryId:a,token:i});case"preparing":return(0,t.jsx)("section",{className:"legal-section",children:(0,t.jsx)("p",{children:"Your terms are recorded and your balance invoice is being prepared. This page updates by itself — keep it open."})});case"invoice_ready":return(0,t.jsx)(A,{state:e});case"ready":return(0,t.jsx)(R,{name:e.name,entryId:a,token:i});default:return(0,t.jsx)(x,{children:"Unexpected state — reply to your email and we'll help."})}}function x({children:e}){return(0,t.jsx)("section",{className:"legal-section",children:(0,t.jsx)("p",{children:e})})}let k=[{key:"participantAgreement",title:"Participant Agreement (Terms & Conditions)",version:g.LEGAL_VERSIONS.participantAgreement,body:p,checkbox:g.LEGAL_CHECKBOX.participantAgreement},{key:"liabilityWaiver",title:"Liability Waiver & Release",version:g.LEGAL_VERSIONS.liabilityWaiver,body:y,checkbox:g.LEGAL_CHECKBOX.liabilityWaiver},{key:"privacyNotice",title:"Privacy Notice",version:g.LEGAL_VERSIONS.privacyNotice,body:m,checkbox:g.LEGAL_CHECKBOX.privacyNotice}];function R({name:e,entryId:i,token:n}){let[l,c]=(0,a.useState)({}),[d,h]=(0,a.useState)({}),[p,y]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null),b=(0,r.useMutation)(s.api.acceptLink.accept),w=(0,o.usePostHog)(),x=k.every(e=>l[e.key]),O=k.every(e=>d[e.key]);async function A(){let e;y(!0),g(null);try{let t=await fetch("/api/ip");t.ok&&(e=(await t.json()).ip??void 0)}catch{}try{let t=await b({entryId:i,token:n,ip:e});if(!t.ok){g(v(t.error??"")),y(!1);return}w?.capture("accept_balance_terms_accepted")}catch{g("Something went wrong. Please try again."),y(!1)}}return(0,t.jsxs)("section",{className:"legal-section",children:[(0,t.jsxs)("p",{children:[e?(0,t.jsxs)(t.Fragment,{children:["Hi ",e," — "]}):null,"your deposit holds your seat, and the"," ",(0,t.jsxs)("strong",{children:[(0,f.formatUsd)(f.BALANCE_AMOUNT_CENTS)," balance"]})," is due"," ",f.BALANCE_DUE_LABEL,". Before the invoice can be issued, please read all three documents below and check each box. No account needed — this page is your personal link."]}),k.map(e=>(0,t.jsxs)("details",{className:"accept-doc",onToggle:t=>{t.target.open&&c(t=>({...t,[e.key]:!0}))},children:[(0,t.jsxs)("summary",{children:[e.title,l[e.key]?null:(0,t.jsx)("span",{className:"accept-open-hint",children:"open to unlock its box"})]}),(0,t.jsxs)("p",{className:"legal-version",children:["Version ",e.version]}),(0,t.jsx)(u,{markdown:e.body})]},e.key)),(0,t.jsx)("div",{className:"accept-checks",children:k.map(e=>(0,t.jsxs)("label",{className:"legal-agree",children:[(0,t.jsx)("input",{type:"checkbox",disabled:!l[e.key],checked:!!d[e.key],onChange:t=>h(a=>({...a,[e.key]:t.target.checked}))})," ",e.checkbox]},e.key))}),m?(0,t.jsx)("p",{className:"pay-line-error",children:m}):null,(0,t.jsx)("button",{className:"cta-button",disabled:p||!x||!O,onClick:()=>void A(),children:p?"Recording your acceptance…":`Accept & open your ${(0,f.formatUsd)(f.BALANCE_AMOUNT_CENTS)} balance invoice →`}),x?null:(0,t.jsx)("p",{className:"legal-muted",children:"Each box unlocks once its document has been opened — the record of your acceptance includes the exact text you read."})]})}function O({entryId:e,token:i}){let[n,o]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null),d=(0,r.useMutation)(s.api.acceptLink.accept);async function h(){o(!0),c(null);try{let t=await d({entryId:e,token:i});t.ok||c(v(t.error??""))}catch{c("Something went wrong. Please try again.")}finally{o(!1)}}return(0,t.jsxs)("section",{className:"legal-section",children:[(0,t.jsx)("p",{children:"Your acceptance is recorded, but preparing the invoice hit a snag. You can retry right here — nothing has been charged."}),l?(0,t.jsx)("p",{className:"pay-line-error",children:l}):null,(0,t.jsx)("button",{className:"cta-button",disabled:n,onClick:()=>void h(),children:n?"Retrying…":"Retry preparing my invoice →"})]})}function A({state:e}){return(0,t.jsxs)("section",{className:"legal-section",children:[(0,t.jsxs)("p",{children:["Your terms are on file",e.name?`, ${e.name}`:""," — your balance invoice is ready."]}),(0,t.jsx)("p",{children:(0,t.jsxs)("a",{className:"cta-button",href:e.hostedInvoiceUrl,target:"_blank",rel:"noreferrer",children:["Pay ",(0,f.formatUsd)(f.BALANCE_AMOUNT_CENTS)," on Stripe →"]})}),(0,t.jsxs)("p",{className:"legal-muted",children:["Due"," ",e.dueAt?new Date(e.dueAt).toLocaleDateString(void 0,{dateStyle:"long"}):f.BALANCE_DUE_LABEL,e.stripeNumber?` \xb7 Invoice ${e.stripeNumber}`:"",". Keep this link — it always brings you back to this invoice. The Stripe page has the printable version if your employer is reimbursing you, and paid invoices include a downloadable PDF receipt."]}),(0,t.jsxs)("p",{className:"legal-muted",children:["Recorded: Participant Agreement ",g.LEGAL_VERSIONS.participantAgreement," · Liability Waiver ",g.LEGAL_VERSIONS.liabilityWaiver," · Privacy Notice"," ",g.LEGAL_VERSIONS.privacyNotice,"."]})]})}e.s(["AcceptFlow",0,function(){let e,a=function(){let e="",t="";try{let a=(0,n.useSearchParams)();e=a.get("e")??"",t=a.get("t")??""}catch{}return{entryId:e,token:t}}(),o=(0,r.useQuery)(s.api.acceptLink.inspect,{entryId:a.entryId,token:a.token});return e=void 0===o?(0,t.jsx)("p",{className:"legal-muted",children:"Loading…"}):(0,t.jsx)(w,{state:o,entryId:a.entryId,token:a.token}),(0,t.jsxs)("main",{className:"legal-page",children:[(0,t.jsxs)("section",{className:"legal-intro",children:[(0,t.jsx)("p",{className:"legal-eyebrow",children:"Learn Anything Retreat · February 15–19, 2027"}),(0,t.jsx)("h1",{children:"Accept your participant terms"})]}),e,(0,t.jsxs)("footer",{className:"legal-footer",children:[(0,t.jsxs)("p",{children:["Questions about any of this? Reply to your email, or write to"," ",(0,t.jsx)("a",{href:"mailto:eric.ma@nonlinearlabs.ai",children:"eric.ma@nonlinearlabs.ai"}),"."]}),(0,t.jsx)("p",{className:"legal-muted",children:(0,t.jsx)(i.default,{href:"/",children:"Learn Anything"})})]})]})}],95742)}]);
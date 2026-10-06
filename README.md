# learn-anything-mirror

Static mirror of https://learn-anything.nonlinearlabs.ai published by
`.github/workflows/deploy-mirror.yml` in the private
`nll-ai/learn-anything` repo (issue #196). Every file here is generated —
do not edit by hand; the next deploy overwrites the branch.

Signups post directly to the production Convex backend; enrollments
originating here skip the advisory IP field (/api/ip does not exist on a
static export). Account sign-in is not part of the mirror — auth pages are
stripped (issue #195 made them server-rendered), so MirrorAuthGate sends
signed-out visitors of /status and /enroll to the canonical site instead.

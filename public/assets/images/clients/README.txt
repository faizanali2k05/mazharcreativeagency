CLIENT LOGOS
============

Drop each client's transparent-background logo (PNG or SVG) into THIS folder
using the exact filenames below. The Clients section (src/components/Clients.tsx)
loads them automatically. Until a file exists, a text wordmark is shown instead.

Required files:
  montage.png         -> Montage International
  sessa.png           -> Sessa Design & Sourcing
  wymara.png          -> Wymara Resort + Villas
  beach-enclave.png   -> Beach Enclave
  south-bank.png      -> South Bank
  ambergris-cay.png   -> Ambergris Cay
  aman.png            -> Aman

Notes:
- Use transparent PNGs (or SVGs). SVG is best for crispness — if you use SVG,
  rename the file to e.g. montage.svg AND update the matching path in
  src/components/Clients.tsx.
- The logos are rendered in a uniform white tint on the dark background so they
  stay visible and look cohesive. To show ORIGINAL colors instead, remove the
  `brightness-0 invert` classes from the <img> in src/components/Clients.tsx
  (note: dark/black logos may then be hard to see on the dark background).

CLIENT LOGOS
============

These are the client logos shown in the "Our Clients" section
(src/components/Clients.tsx). They rotate through a spotlight one by one,
with a full clickable lineup beneath so every logo stays visible on any device.

Current files:
  montage.png         -> Montage International
  sessa.png           -> Sessa Design & Sourcing
  wymara.webp         -> Wymara Resort + Villas
  beach-enclave.png   -> Beach Enclave
  south-bank.png      -> South Bank
  ambergris-cay.png   -> Ambergris Cay
  aman.png            -> Aman

Notes:
- Logos are shown in their original colours on a light "plaque" so mixed
  light/dark/colour marks all read cleanly against the dark theme.
- To add or replace a client, drop the file here and update the CLIENTS
  array (name + file path) in src/components/Clients.tsx.
- If you swap a file's format, update its extension in that array too.

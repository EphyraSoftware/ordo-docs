---
title: ordo-agent
description: The per-machine managed agent binary.
---

This document contains the help content for the `ordo-agent` command-line program.

**Command Overview:**

* [`ordo-agent`↴](#ordo-agent)
* [`ordo-agent connect`↴](#ordo-agent-connect)

## `ordo-agent`

Ordo agent — runs on each managed machine.

By default, listens on UDP port 4747 for an orchestrator discovery broadcast and connects automatically when one is received. Use the `connect` subcommand to connect directly to a known orchestrator address instead.

**Usage:** `ordo-agent [OPTIONS] [COMMAND]`

###### **Subcommands:**

* `connect` — Connect directly to an orchestrator at a known address

###### **Options:**

* `--data-dir <DATA_DIR>` — Data directory for identity files
* `--hostname <HOSTNAME>` — Hostname to report to the orchestrator
* `--config <CONFIG>` — Path to the agent configuration file



## `ordo-agent connect`

Connect directly to an orchestrator at a known address.

Reconnects automatically using exponential backoff if the connection drops or fails.

**Usage:** `ordo-agent connect [OPTIONS] <ADDRESS>`

###### **Arguments:**

* `<ADDRESS>` — Orchestrator address, e.g. `192.168.1.10:4747`

###### **Options:**

* `--orchestrator-key <ORCHESTRATOR_KEY>` — Hex-encoded Ed25519 public key of the orchestrator (64 hex characters).

   When provided, the agent uses the Noise IK handshake pattern, which completes in 1 round-trip. When omitted, the agent uses XX (trust-on-first-use) unless a key was previously pinned.



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

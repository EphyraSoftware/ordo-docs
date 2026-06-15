---
title: ordo-orchestrator
description: The orchestrator control-plane binary.
---

This document contains the help content for the `ordo-orchestrator` command-line program.

**Command Overview:**

* [`ordo-orchestrator`↴](#ordo-orchestrator)
* [`ordo-orchestrator serve`↴](#ordo-orchestrator-serve)

## `ordo-orchestrator`

Ordo orchestrator — the Ordo control plane.

Listens for agent connections and exposes an HTTP management API. Run without a subcommand (or with `serve`) to start the orchestrator.

**Usage:** `ordo-orchestrator [OPTIONS] [COMMAND]`

###### **Subcommands:**

* `serve` — Accept agent connections and start the management API (default)

###### **Options:**

* `--config <CONFIG>` — Path to a YAML configuration file
* `--agent-port <AGENT_PORT>` — TCP port for agent connections
* `--api-port <API_PORT>` — HTTP port for the management API
* `--api-host <API_HOST>` — Interface to bind the management API
* `--advertised-host <ADVERTISED_HOST>` — Address advertised to agents during discovery
* `--data-dir <DATA_DIR>` — Data directory for identity files and persistent storage
* `--bootstrap-key <BOOTSTRAP_KEY>` — Hex-encoded Ed25519 public key for the bootstrap operator.

   Required on first run to establish the initial administrator. Ignored on subsequent starts once a bootstrap operator exists.
* `--bootstrap-username <BOOTSTRAP_USERNAME>` — Human-readable username for the bootstrap operator.

   Required on first run alongside `--bootstrap-key`. Must be 1-64 Unicode letters/digits/`-`/`_`, starting with a letter. Ignored on subsequent starts once a bootstrap operator exists.
* `--no-tls` — Disable TLS and serve the management API over plaintext HTTP
* `--tls-cert <TLS_CERT>` — Path to a PEM-encoded TLS certificate. Requires --tls-key
* `--tls-key <TLS_KEY>` — Path to a PEM-encoded TLS private key. Requires --tls-cert



## `ordo-orchestrator serve`

Accept agent connections and start the management API (default)

**Usage:** `ordo-orchestrator serve`



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

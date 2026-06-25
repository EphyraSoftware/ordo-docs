---
title: ordo
description: Command-line reference for the ordo binary.
---

This document contains the help content for the `ordo` command-line program.

**Command Overview:**

* [`ordo`↴](#ordo)
* [`ordo status`↴](#ordo-status)
* [`ordo agents`↴](#ordo-agents)
* [`ordo agents list`↴](#ordo-agents-list)
* [`ordo agents approve`↴](#ordo-agents-approve)
* [`ordo agents reject`↴](#ordo-agents-reject)
* [`ordo agents remove`↴](#ordo-agents-remove)
* [`ordo agents tag`↴](#ordo-agents-tag)
* [`ordo agents untag`↴](#ordo-agents-untag)
* [`ordo discover`↴](#ordo-discover)
* [`ordo operator`↴](#ordo-operator)
* [`ordo operator init`↴](#ordo-operator-init)
* [`ordo operator whoami`↴](#ordo-operator-whoami)
* [`ordo operator add`↴](#ordo-operator-add)
* [`ordo operator list`↴](#ordo-operator-list)
* [`ordo operator remove`↴](#ordo-operator-remove)
* [`ordo profile`↴](#ordo-profile)
* [`ordo profile create`↴](#ordo-profile-create)
* [`ordo profile update`↴](#ordo-profile-update)
* [`ordo profile list`↴](#ordo-profile-list)
* [`ordo profile set-default`↴](#ordo-profile-set-default)
* [`ordo profile remove`↴](#ordo-profile-remove)
* [`ordo terminal`↴](#ordo-terminal)
* [`ordo terminal open`↴](#ordo-terminal-open)
* [`ordo terminal list`↴](#ordo-terminal-list)
* [`ordo terminal show`↴](#ordo-terminal-show)
* [`ordo metrics`↴](#ordo-metrics)
* [`ordo web-login`↴](#ordo-web-login)
* [`ordo audit`↴](#ordo-audit)
* [`ordo audit list`↴](#ordo-audit-list)
* [`ordo audit prune`↴](#ordo-audit-prune)
* [`ordo audit retention`↴](#ordo-audit-retention)
* [`ordo audit retention show`↴](#ordo-audit-retention-show)
* [`ordo audit retention set`↴](#ordo-audit-retention-set)
* [`ordo audit retention disable`↴](#ordo-audit-retention-disable)
* [`ordo channel`↴](#ordo-channel)
* [`ordo channel add`↴](#ordo-channel-add)
* [`ordo channel list`↴](#ordo-channel-list)
* [`ordo channel remove`↴](#ordo-channel-remove)
* [`ordo channel test`↴](#ordo-channel-test)
* [`ordo maintenance`↴](#ordo-maintenance)
* [`ordo maintenance start`↴](#ordo-maintenance-start)
* [`ordo maintenance schedule`↴](#ordo-maintenance-schedule)
* [`ordo maintenance list`↴](#ordo-maintenance-list)
* [`ordo maintenance end`↴](#ordo-maintenance-end)
* [`ordo maintenance remove`↴](#ordo-maintenance-remove)
* [`ordo notifications`↴](#ordo-notifications)
* [`ordo notifications list`↴](#ordo-notifications-list)
* [`ordo notifications read-all`↴](#ordo-notifications-read-all)
* [`ordo secrets`↴](#ordo-secrets)
* [`ordo secrets set`↴](#ordo-secrets-set)
* [`ordo secrets list`↴](#ordo-secrets-list)
* [`ordo secrets get`↴](#ordo-secrets-get)
* [`ordo secrets remove`↴](#ordo-secrets-remove)
* [`ordo state`↴](#ordo-state)
* [`ordo state apply`↴](#ordo-state-apply)
* [`ordo state plan`↴](#ordo-state-plan)
* [`ordo state drift`↴](#ordo-state-drift)
* [`ordo state query`↴](#ordo-state-query)
* [`ordo state list`↴](#ordo-state-list)
* [`ordo state show`↴](#ordo-state-show)
* [`ordo state drift-list`↴](#ordo-state-drift-list)
* [`ordo state drift-show`↴](#ordo-state-drift-show)
* [`ordo assignments`↴](#ordo-assignments)
* [`ordo assignments list`↴](#ordo-assignments-list)
* [`ordo assignments show`↴](#ordo-assignments-show)
* [`ordo assignments create`↴](#ordo-assignments-create)
* [`ordo assignments remove`↴](#ordo-assignments-remove)
* [`ordo assignments apply`↴](#ordo-assignments-apply)
* [`ordo assignments plan`↴](#ordo-assignments-plan)

## `ordo`

Ordo — operator CLI for the Ordo orchestrator.

Run without arguments to start an interactive REPL connected to the orchestrator. All commands are also available as subcommands for scripting.

**Usage:** `ordo [OPTIONS] [COMMAND]`

###### **Subcommands:**

* `status` — Show orchestrator status
* `agents` — List and manage agents
* `discover` — Trigger a local network discovery broadcast
* `operator` — Manage operators
* `profile` — Manage connection profiles
* `terminal` — Open and manage remote terminal sessions
* `metrics` — Show system metrics for an agent
* `web-login` — Authenticate and produce a session token for the web UI
* `audit` — Query and manage the audit log
* `channel` — Manage notification channels
* `maintenance` — Manage maintenance windows
* `notifications` — View and manage notifications
* `secrets` — Manage secrets
* `state` — Apply, plan, and inspect state operations
* `assignments` — Manage assignments (named module-to-tag-selector associations)

###### **Options:**

* `--host <HOST>` — Orchestrator API host

  Default value: `127.0.0.1`
* `--port <PORT>` — Orchestrator API port

  Default value: `4748`
* `--danger-trust-orchestrator` — Accept and pin the orchestrator's TLS certificate without prompting.

   DANGER: skips trust-on-first-use verification. Intended for automated and test environments where the orchestrator serves its auto-generated self-signed certificate. Also settable via the `ORDO_DANGER_TRUST_ORCHESTRATOR` environment variable.



## `ordo status`

Show orchestrator status

**Usage:** `ordo status`



## `ordo agents`

List and manage agents

**Usage:** `ordo agents [COMMAND]`

###### **Subcommands:**

* `list` — List agents (default when no subcommand given)
* `approve` — Approve a pending agent
* `reject` — Reject an agent
* `remove` — Remove a rejected agent's record
* `tag` — Set tags on an agent
* `untag` — Remove tags from an agent



## `ordo agents list`

List agents (default when no subcommand given)

**Usage:** `ordo agents list [OPTIONS]`

###### **Options:**

* `--status <STATUS>` — Filter by status: pending, approved, or rejected
* `--filter <FILTER>` — Filter by tag expression (e.g. "env=production role=webserver")



## `ordo agents approve`

Approve a pending agent

**Usage:** `ordo agents approve --name <NAME> <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent to approve

###### **Options:**

* `--name <NAME>` — Immutable, human-readable name to assign to the agent.

   Must be 1-64 Unicode letters/digits/`-`/`_`, starting with a letter. Once set, it cannot be changed.



## `ordo agents reject`

Reject an agent

**Usage:** `ordo agents reject <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent to reject



## `ordo agents remove`

Remove a rejected agent's record

**Usage:** `ordo agents remove <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent to remove



## `ordo agents tag`

Set tags on an agent

**Usage:** `ordo agents tag <AGENT> <TAGS>...`

###### **Arguments:**

* `<AGENT>` — Node ID or name of the agent
* `<TAGS>` — Tags to set (key=value or key for boolean tags)



## `ordo agents untag`

Remove tags from an agent

**Usage:** `ordo agents untag <AGENT> <KEYS>...`

###### **Arguments:**

* `<AGENT>` — Node ID or name of the agent
* `<KEYS>` — Tag keys to remove



## `ordo discover`

Trigger a local network discovery broadcast

**Usage:** `ordo discover`



## `ordo operator`

Manage operators

**Usage:** `ordo operator <COMMAND>`

###### **Subcommands:**

* `init` — Generate an operator keypair
* `whoami` — Print the local operator identity (public key and operator ID)
* `add` — Add a new operator
* `list` — List operators
* `remove` — Remove an operator (soft delete)



## `ordo operator init`

Generate an operator keypair

**Usage:** `ordo operator init [OPTIONS]`

###### **Options:**

* `--from-ssh <FROM_SSH>` — Import an existing Ed25519 SSH keypair instead of generating a new one



## `ordo operator whoami`

Print the local operator identity (public key and operator ID)

**Usage:** `ordo operator whoami`



## `ordo operator add`

Add a new operator

**Usage:** `ordo operator add [OPTIONS] --username <USERNAME> <PUBLIC_KEY>`

###### **Arguments:**

* `<PUBLIC_KEY>` — Hex-encoded Ed25519 public key of the new operator

###### **Options:**

* `--username <USERNAME>` — Immutable, human-readable username for the new operator.

   Must be 1-64 Unicode letters/digits/`-`/`_`, starting with a letter. Once set, it cannot be changed.
* `--role <ROLE>` — Role to assign: admin or operator (default: operator)

  Default value: `operator`



## `ordo operator list`

List operators

**Usage:** `ordo operator list [OPTIONS]`

###### **Options:**

* `--include-removed` — Include removed operators



## `ordo operator remove`

Remove an operator (soft delete)

**Usage:** `ordo operator remove <OPERATOR_ID>`

###### **Arguments:**

* `<OPERATOR_ID>` — Operator ID to remove



## `ordo profile`

Manage connection profiles

**Usage:** `ordo profile <COMMAND>`

###### **Subcommands:**

* `create` — Create a connection profile
* `update` — Update a connection profile
* `list` — List connection profiles
* `set-default` — Set the default profile
* `remove` — Remove a connection profile



## `ordo profile create`

Create a connection profile

**Usage:** `ordo profile create [OPTIONS] --host <HOST> <NAME>`

###### **Arguments:**

* `<NAME>` — Profile name

###### **Options:**

* `--host <HOST>` — Orchestrator host
* `--port <PORT>` — Orchestrator API port

  Default value: `4748`
* `--no-tls` — Disable TLS for this profile. Required when the orchestrator was started with `--no-tls`



## `ordo profile update`

Update a connection profile

**Usage:** `ordo profile update [OPTIONS] <NAME>`

###### **Arguments:**

* `<NAME>` — Profile name to update

###### **Options:**

* `--host <HOST>` — New orchestrator host
* `--port <PORT>` — New orchestrator API port
* `--no-tls` — Switch the profile to plaintext HTTP
* `--tls` — Switch the profile to HTTPS
* `--accept-new-certificate` — Clear the pinned TLS fingerprint so the next connection accepts whatever certificate the orchestrator now presents



## `ordo profile list`

List connection profiles

**Usage:** `ordo profile list`



## `ordo profile set-default`

Set the default profile

**Usage:** `ordo profile set-default <NAME>`

###### **Arguments:**

* `<NAME>` — Profile name to set as default



## `ordo profile remove`

Remove a connection profile

**Usage:** `ordo profile remove <NAME>`

###### **Arguments:**

* `<NAME>` — Profile name to remove



## `ordo terminal`

Open and manage remote terminal sessions

**Usage:** `ordo terminal <COMMAND>`

###### **Subcommands:**

* `open` — Open an interactive terminal session to an agent
* `list` — List terminal sessions
* `show` — Show a session transcript



## `ordo terminal open`

Open an interactive terminal session to an agent

**Usage:** `ordo terminal open [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--shell <SHELL>` — Shell binary path on the agent
* `--cols <COLS>` — Terminal width in columns

  Default value: `80`
* `--rows <ROWS>` — Terminal height in rows

  Default value: `24`



## `ordo terminal list`

List terminal sessions

**Usage:** `ordo terminal list [OPTIONS]`

###### **Options:**

* `--status <STATUS>` — Filter by status: active, closed, or interrupted



## `ordo terminal show`

Show a session transcript

**Usage:** `ordo terminal show <SESSION_ID>`

###### **Arguments:**

* `<SESSION_ID>` — Session ID to display



## `ordo metrics`

Show system metrics for an agent

**Usage:** `ordo metrics [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--history` — Show recent history instead of just the latest snapshot
* `--since <SINCE>` — Only show samples after this UNIX timestamp (implies --history)
* `--json` — Output as JSON



## `ordo web-login`

Authenticate and produce a session token for the web UI

**Usage:** `ordo web-login`



## `ordo audit`

Query and manage the audit log

**Usage:** `ordo audit <COMMAND>`

###### **Subcommands:**

* `list` — List audit events with optional filters
* `prune` — Permanently delete audit events older than a cutoff. Admin only
* `retention` — Show or update the audit retention setting



## `ordo audit list`

List audit events with optional filters

**Usage:** `ordo audit list [OPTIONS]`

###### **Options:**

* `--agent <AGENT>` — Filter by agent node ID or operator-assigned name
* `--operator <OPERATOR>` — Filter by operator ID or username
* `--type <EVENT_TYPE>` — Exact dotted event type (e.g. `agent.approved`)
* `--category <CATEGORY>` — Event-type prefix (e.g. `agent` matches every `agent.*`)
* `--after <AFTER>` — Lower bound on event timestamp, ISO 8601 / RFC 3339
* `--before <BEFORE>` — Upper bound on event timestamp (exclusive), ISO 8601 / RFC 3339
* `--cursor <CURSOR>` — Pagination cursor (event ID from a previous page)
* `--limit <LIMIT>` — Maximum events to return (default 50, max 500)
* `--json` — Output as raw JSON instead of a table



## `ordo audit prune`

Permanently delete audit events older than a cutoff. Admin only

**Usage:** `ordo audit prune --before <BEFORE>`

###### **Options:**

* `--before <BEFORE>` — Cutoff timestamp; events strictly before this point are deleted



## `ordo audit retention`

Show or update the audit retention setting

**Usage:** `ordo audit retention <COMMAND>`

###### **Subcommands:**

* `show` — Show the current retention setting
* `set` — Set the retention period in days. Admin only
* `disable` — Disable automatic pruning. Admin only



## `ordo audit retention show`

Show the current retention setting

**Usage:** `ordo audit retention show`



## `ordo audit retention set`

Set the retention period in days. Admin only

**Usage:** `ordo audit retention set --days <DAYS>`

###### **Options:**

* `--days <DAYS>` — Number of days to retain audit events



## `ordo audit retention disable`

Disable automatic pruning. Admin only

**Usage:** `ordo audit retention disable`



## `ordo channel`

Manage notification channels

**Usage:** `ordo channel <COMMAND>`

###### **Subcommands:**

* `add` — Add a notification channel
* `list` — List notification channels
* `remove` — Remove a notification channel
* `test` — Send a test notification through a channel



## `ordo channel add`

Add a notification channel

**Usage:** `ordo channel add [OPTIONS] --name <NAME> --type <CHANNEL_TYPE>`

###### **Options:**

* `--name <NAME>` — Human-readable channel name
* `--type <CHANNEL_TYPE>` — Channel type: webhook, discord, slack, or ntfy
* `--url <URL>` — Webhook or service URL (for webhook/discord/slack types)
* `--secret <SECRET>` — Webhook signing secret
* `--webhook-url <WEBHOOK_URL>` — Discord or Slack webhook URL
* `--topic <TOPIC>` — ntfy topic name
* `--token <TOKEN>` — ntfy authentication token



## `ordo channel list`

List notification channels

**Usage:** `ordo channel list [OPTIONS]`

###### **Options:**

* `--json` — Output as raw JSON instead of a table



## `ordo channel remove`

Remove a notification channel

**Usage:** `ordo channel remove <ID>`

###### **Arguments:**

* `<ID>` — Channel ID to remove



## `ordo channel test`

Send a test notification through a channel

**Usage:** `ordo channel test <ID>`

###### **Arguments:**

* `<ID>` — Channel ID to test



## `ordo maintenance`

Manage maintenance windows

**Usage:** `ordo maintenance <COMMAND>`

###### **Subcommands:**

* `start` — Start a maintenance window now
* `schedule` — Schedule a future maintenance window
* `list` — List maintenance windows
* `end` — End a maintenance window early
* `remove` — Remove a maintenance window



## `ordo maintenance start`

Start a maintenance window now

**Usage:** `ordo maintenance start --reason <REASON> --ends-at <ENDS_AT>`

###### **Options:**

* `--reason <REASON>` — Reason for the maintenance window
* `--ends-at <ENDS_AT>` — When the window ends (ISO 8601 / RFC 3339)



## `ordo maintenance schedule`

Schedule a future maintenance window

**Usage:** `ordo maintenance schedule --reason <REASON> --starts-at <STARTS_AT> --ends-at <ENDS_AT>`

###### **Options:**

* `--reason <REASON>` — Reason for the maintenance window
* `--starts-at <STARTS_AT>` — When the window starts (ISO 8601 / RFC 3339)
* `--ends-at <ENDS_AT>` — When the window ends (ISO 8601 / RFC 3339)



## `ordo maintenance list`

List maintenance windows

**Usage:** `ordo maintenance list [OPTIONS]`

###### **Options:**

* `--json` — Output as raw JSON instead of a table



## `ordo maintenance end`

End a maintenance window early

**Usage:** `ordo maintenance end <ID>`

###### **Arguments:**

* `<ID>` — Maintenance window ID to end



## `ordo maintenance remove`

Remove a maintenance window

**Usage:** `ordo maintenance remove <ID>`

###### **Arguments:**

* `<ID>` — Maintenance window ID to remove



## `ordo notifications`

View and manage notifications

**Usage:** `ordo notifications <COMMAND>`

###### **Subcommands:**

* `list` — List notifications
* `read-all` — Mark all notifications as read



## `ordo notifications list`

List notifications

**Usage:** `ordo notifications list [OPTIONS]`

###### **Options:**

* `--unread` — Only show unread notifications
* `--limit <LIMIT>` — Maximum number of notifications to return
* `--json` — Output as raw JSON instead of a table



## `ordo notifications read-all`

Mark all notifications as read

**Usage:** `ordo notifications read-all`



## `ordo secrets`

Manage secrets

**Usage:** `ordo secrets <COMMAND>`

###### **Subcommands:**

* `set` — Create or update a secret
* `list` — List all secrets (metadata only)
* `get` — Get a secret's details (no value)
* `remove` — Remove a secret



## `ordo secrets set`

Create or update a secret

**Usage:** `ordo secrets set [OPTIONS] <NAME>`

###### **Arguments:**

* `<NAME>` — Secret name

###### **Options:**

* `--value <VALUE>` — Secret value (as a string). Prefer --file or interactive prompt for sensitive values to avoid shell history exposure
* `--file <FILE>` — Read the secret value from a file
* `--description <DESCRIPTION>` — Human-readable description
* `--restrict-tags <RESTRICT_TAGS>` — Restrict to agents matching a tag selection expression
* `--restrict-nodes <RESTRICT_NODES>` — Restrict to specific agent node IDs (comma-separated)
* `--expires <EXPIRES>` — Expiry date (YYYY-MM-DD or RFC 3339 timestamp)
* `--clear-expires` — Clear the expiry date (requires --value or --file)



## `ordo secrets list`

List all secrets (metadata only)

**Usage:** `ordo secrets list`



## `ordo secrets get`

Get a secret's details (no value)

**Usage:** `ordo secrets get <NAME>`

###### **Arguments:**

* `<NAME>` — Secret name



## `ordo secrets remove`

Remove a secret

**Usage:** `ordo secrets remove <NAME>`

###### **Arguments:**

* `<NAME>` — Secret name



## `ordo state`

Apply, plan, and inspect state operations

**Usage:** `ordo state <COMMAND>`

###### **Subcommands:**

* `apply` — Apply an agent's assigned modules, plus any named ad-hoc
* `plan` — Preview an apply without changing anything
* `drift` — Compare the agent's current machine state against the last successful apply
* `query` — Query an agent's believed machine state (applied, pending removals, unapplied)
* `list` — List recent state operations
* `show` — Show per-resource results for a state operation
* `drift-list` — List drift records, optionally filtered by agent and/or status
* `drift-show` — Show details of a single drift record



## `ordo state apply`

Apply an agent's assigned modules, plus any named ad-hoc.

With no `--module`, the agent is reconciled to its assignments: the union of the modules of every assignment whose selector matches it. Each `--module` adds a module on top for this run only — temporary unless the module is itself backed by a matching assignment. With no matching assignments and no `--module`, the desired set is empty and previously applied resources are removed; run `state plan` first to preview.

**Usage:** `ordo state apply [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--module <MODULES>` — Extra modules to apply ad-hoc, on top of the agent's assignments (repeatable)
* `--json` — Output the full apply response as JSON



## `ordo state plan`

Preview an apply without changing anything.

Resolves the same desired set as `state apply` — the agent's assignments plus any `--module` named here — and reports the diff.

**Usage:** `ordo state plan [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--module <MODULES>` — Extra modules to plan ad-hoc, on top of the agent's assignments (repeatable)
* `--json` — Output the full plan response as JSON



## `ordo state drift`

Compare the agent's current machine state against the last successful apply

**Usage:** `ordo state drift [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--json` — Output the full drift response as JSON



## `ordo state query`

Query an agent's believed machine state (applied, pending removals, unapplied)

**Usage:** `ordo state query [OPTIONS] <NODE_ID>`

###### **Arguments:**

* `<NODE_ID>` — Node ID of the agent

###### **Options:**

* `--json` — Output the full state response as JSON



## `ordo state list`

List recent state operations

**Usage:** `ordo state list [OPTIONS]`

###### **Options:**

* `--agent <AGENT>` — Restrict to a single agent (node ID or operator-assigned name)
* `--limit <LIMIT>` — Maximum number of operations to return
* `--offset <OFFSET>` — Zero-based offset into the most-recent-first ordering. Use with `--limit` to page through history
* `--json` — Output the full list response as JSON



## `ordo state show`

Show per-resource results for a state operation

**Usage:** `ordo state show [OPTIONS] <OPERATION_ID>`

###### **Arguments:**

* `<OPERATION_ID>` — Operation ID returned by a previous apply

###### **Options:**

* `--json` — Output the full operation record as JSON



## `ordo state drift-list`

List drift records, optionally filtered by agent and/or status

**Usage:** `ordo state drift-list [OPTIONS]`

###### **Options:**

* `--agent <AGENT>` — Restrict to a single agent (node ID or operator-assigned name)
* `--limit <LIMIT>` — Maximum number of records to return (default 20, max 500)
* `--status <STATUS>` — Filter by status: `drifted`, `in_sync`, `failed`, `cancelled`
* `--json` — Output the full list as JSON



## `ordo state drift-show`

Show details of a single drift record

**Usage:** `ordo state drift-show [OPTIONS] <DRIFT_ID>`

###### **Arguments:**

* `<DRIFT_ID>` — Drift ID returned by `ordo state drift` or `ordo state drift-list`

###### **Options:**

* `--json` — Output the full drift record as JSON



## `ordo assignments`

Manage assignments (named module-to-tag-selector associations)

**Usage:** `ordo assignments <COMMAND>`

###### **Subcommands:**

* `list` — List all assignments
* `show` — Show a single assignment, including the agents it currently matches
* `create` — Create an assignment
* `remove` — Remove an assignment (does not undo any applied state)
* `apply` — Apply an assignment to every agent its selector currently matches
* `plan` — Plan an assignment against every agent its selector currently matches



## `ordo assignments list`

List all assignments

**Usage:** `ordo assignments list [OPTIONS]`

###### **Options:**

* `--json` — Output the full list response as JSON



## `ordo assignments show`

Show a single assignment, including the agents it currently matches

**Usage:** `ordo assignments show [OPTIONS] <NAME>`

###### **Arguments:**

* `<NAME>` — Assignment name

###### **Options:**

* `--json` — Output the full assignment as JSON



## `ordo assignments create`

Create an assignment

**Usage:** `ordo assignments create [OPTIONS] --module <MODULES> --selector <SELECTOR> <NAME>`

###### **Arguments:**

* `<NAME>` — Assignment name

###### **Options:**

* `--module <MODULES>` — Module names in the assignment (repeatable)
* `--selector <SELECTOR>` — Tag selector the assignment targets
* `--description <DESCRIPTION>` — Human-readable description



## `ordo assignments remove`

Remove an assignment (does not undo any applied state)

**Usage:** `ordo assignments remove <NAME>`

###### **Arguments:**

* `<NAME>` — Assignment name



## `ordo assignments apply`

Apply an assignment to every agent its selector currently matches

**Usage:** `ordo assignments apply [OPTIONS] <NAME>`

###### **Arguments:**

* `<NAME>` — Assignment name

###### **Options:**

* `--json` — Output the full fan-out response as JSON



## `ordo assignments plan`

Plan an assignment against every agent its selector currently matches

**Usage:** `ordo assignments plan [OPTIONS] <NAME>`

###### **Arguments:**

* `<NAME>` — Assignment name

###### **Options:**

* `--json` — Output the full fan-out response as JSON



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

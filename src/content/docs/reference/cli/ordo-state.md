---
title: ordo-state
description: Command-line reference for the ordo-state binary.
---

This document contains the help content for the `ordo-state` command-line program.

**Command Overview:**

* [`ordo-state`↴](#ordo-state)
* [`ordo-state validate`↴](#ordo-state-validate)
* [`ordo-state check`↴](#ordo-state-check)
* [`ordo-state deps`↴](#ordo-state-deps)
* [`ordo-state schema`↴](#ordo-state-schema)

## `ordo-state`

Declarative infrastructure management for stateful machines

**Usage:** `ordo-state <COMMAND>`

###### **Subcommands:**

* `validate` — Parse and validate one or more modules
* `check` — Run conflict detection across the specified modules
* `deps` — Display the module dependency graph
* `schema` — Generate a JSON Schema for the module file format



## `ordo-state validate`

Parse and validate one or more modules

**Usage:** `ordo-state validate <PATHS>...`

###### **Arguments:**

* `<PATHS>` — File or directory paths to validate



## `ordo-state check`

Run conflict detection across the specified modules

**Usage:** `ordo-state check <PATHS>...`

###### **Arguments:**

* `<PATHS>` — File or directory paths to check for conflicts



## `ordo-state deps`

Display the module dependency graph

**Usage:** `ordo-state deps <PATHS>...`

###### **Arguments:**

* `<PATHS>` — File or directory paths to analyze



## `ordo-state schema`

Generate a JSON Schema for the module file format.

The schema can be used by editors (e.g. VS Code with the YAML extension) for autocompletion and inline validation.

**Usage:** `ordo-state schema [OPTIONS]`

###### **Options:**

* `--output <OUTPUT>` — Write the schema to a file instead of stdout



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>

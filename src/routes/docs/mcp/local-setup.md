---
layout: componentLayout
title: s-ui MCP Local Setup
breadcrumb_title: Local Setup
component_title: Local Setup
dir: MCP
description: Learn how to install and configure the s-ui MCP server locally on your machine for use with Claude Desktop and other MCP clients.
---

## Local Setup

The local (or stdio) version of the s-ui MCP server runs directly on your machine. You'll need to clone the repository and build it locally before configuring it with your MCP client.

### Installation

```bash
git clone git@github.com:shinokada/s-ui-mcp.git
cd s-ui-mcp
pnpm install
pnpm run copy:llm  # Fetch latest s-ui docs
pnpm run build
```

### Configuration

Here's how to set it up in common MCP clients:

#### Claude Desktop

1. In the Settings > Developer section, click on **Edit Config**
2. This opens the folder containing `claude_desktop_config.json`
3. Edit the file to include:

```json
{
  "mcpServers": {
    "s-ui": {
      "command": "node",
      "args": ["/absolute/path/to/s-ui-mcp/build/server.js"]
    }
  }
}
```

**Important:** Replace `/absolute/path/to/` with the actual path where you cloned the repository.

4. Restart Claude Desktop

#### Testing

After setup, test the installation by asking Claude:

- "Search the s-ui docs for how to use an Accordion"
- "What components are available in s-ui?"
- "Show me how to use the Button component"

### Troubleshooting

**Tools not working:**
1. Verify the path in your config is absolute and correct
2. Ensure you ran `pnpm run build` after cloning
3. Restart your MCP client after configuration changes
4. Check the client's logs for error messages

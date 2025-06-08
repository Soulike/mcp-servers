import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';

import {setupPrompts} from '@/server/setup-prompts.js';

const server = new McpServer({
  name: 'code-explainer',
  version: '1.0.0',
});

setupPrompts(server);

export {server};

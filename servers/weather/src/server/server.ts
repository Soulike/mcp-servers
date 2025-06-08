import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';

import {setupTools} from '@/server/setup-tools.js';

const server = new McpServer({
  name: 'weather',
  version: '1.0.0',
});

setupTools(server);

export {server};

import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {z} from 'zod';

export function setupPrompts(server: McpServer) {
  server.prompt(
    'explain-code',
    'Explain how code works',
    {
      code: z.string().describe('The code to explain'),
      language: z.string().describe('The programming language of the code'),
    },
    ({code, language}) => {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Explain how this ${language} code works:\n\n${code}`,
            },
          },
        ],
      };
    },
  );
}

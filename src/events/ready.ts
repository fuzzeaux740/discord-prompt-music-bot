// src/events/ready.ts

import { Client } from 'discord.js';

export const onReady = (client: Client) => {
    console.log(`Logged in as ${client.user?.tag}! Ready to receive commands.`);
};
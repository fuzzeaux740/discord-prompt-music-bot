import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ],
});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', async (message) => {
  // Ignore messages from bots (including itself)
  if (message.author.bot) return;

  if (message.content.startsWith('!generate')) {
    const prompt = message.content.slice(9);
    await message.channel.sendTyping();
    await message.reply({
      content: `🎵 Generating playlist for: "${prompt}"\nPlease wait while I create your playlist...`,
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
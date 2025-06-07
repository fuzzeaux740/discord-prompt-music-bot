import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';
import { PlaylistGenerator } from './services/playlist-generator';

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

const playlistGenerator = new PlaylistGenerator();

client.on('messageCreate', async (message) => {
  // Ignore messages from bots (including itself)
  if (message.author.bot) return;

  if (message.content.startsWith('!generate')) {
    const prompt = message.content.slice(9);
    await message.channel.sendTyping();
    try {
      const songs = await playlistGenerator.generatePlaylist(prompt);
      
      const embed = new EmbedBuilder()
        .setTitle(`🎵 Playlist: ${prompt}`)
        .setColor('#00FF00')
        .setDescription('Here are some songs that match your prompt:')
        .addFields(
          songs.map(song => ({
            name: song.title,
            value: `by ${song.artist} (${song.genre || 'Unknown genre'})`
          }))
        );

      await message.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error generating playlist:', error);
      await message.reply('Sorry, I encountered an error while generating your playlist.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
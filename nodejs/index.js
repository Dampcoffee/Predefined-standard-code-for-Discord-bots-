require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  const content = message.content.trim();
  if (content === '!ping') {
    message.reply('Pong!');
  }
  if (content.startsWith('!echo ')) {
    message.channel.send(content.slice(6));
  }
});

client.login(process.env.TOKEN);

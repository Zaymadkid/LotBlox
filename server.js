const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const app = express();
app.use(cors());
app.use(express.json());

// Store for pending requests
const pendingRequests = new Map();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Handle messages from Discord
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    
    // Check if this is a response to a pending request
    const channelRequests = Array.from(pendingRequests.entries())
        .filter(([id, req]) => req.channelId === message.channel.id);
    
    if (channelRequests.length > 0) {
        const [requestId, request] = channelRequests[0];
        request.resolve(message.content);
        pendingRequests.delete(requestId);
    }
});

// API endpoint to send messages to Discord
app.post('/send', async (req, res) => {
    try {
        const { channelId, message } = req.body;
        const channel = await client.channels.fetch(channelId);
        await channel.send(message);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// API endpoint to get messages from Discord
app.post('/receive', async (req, res) => {
    try {
        const { channelId, timeout = 30000 } = req.body;
        
        const requestId = Date.now().toString();
        const promise = new Promise((resolve, reject) => {
            pendingRequests.set(requestId, {
                channelId,
                resolve,
                reject,
                timeout: setTimeout(() => {
                    pendingRequests.delete(requestId);
                    reject(new Error('Timeout'));
                }, timeout)
            });
        });
        
        const response = await promise;
        res.json({ success: true, message: response });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

client.login(process.env.BOT_TOKEN);

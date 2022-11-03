const Discord = require("discord.js");
const client = new Discord.Client();
const Config = require("./config.json")
const fs = require("fs")
require('dotenv').config();

let prefix = Config.prefix;

client.snipes = new Map();
client.on('messageDelete', async function(message){
  let q = await client.snipes.get(message.channel.id);
  let size = q ? q.length : 0;

  if(message.content.startsWith(`${prefix}c`) || message.content.startsWith(`${prefix}cal`)) return;

  let values = {
    content: message.content,
    author: message.author.tag,
    icon: message.author.avatarURL(),
    channel: message.channel,
    aut: message.author,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  };

  oldValues = [];

  oldValues.push(values)

  for(let i = 0; i < size; i++){
    await oldValues.push(q[i])
  }
  
  client.snipes.set(message.channel.id, oldValues);

  /* Papi remastered por el FurroG */
})

client.editsnipes = new Map();
client.on('messageUpdate', async function(message) {
  let q = await client.editsnipes.get(message.channel.id);
  let size = q ? q.length : 0;

  if(message.content.startsWith(`${prefix}c`) || message.content.startsWith(`${prefix}cal`)) return;

  let values = {
    content: message.content,
    author: message.author.tag,
    icon: message.author.avatarURL(),
    channel: message.channel,
    aut: message.author
  }

  oldValues = [];

  oldValues.push(values)

  for(let i = 0; i < size; i++){
    await oldValues.push(q[i])
  }

  client.editsnipes.set(message.channel.id, oldValues);
})

client.comandos = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("No hay comandos.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    client.comandos.set(props.help.name, props);
    client.comandos.set(props.help.alias, props);
  });
});

client.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let author = message.author;
    let guild = message.guild;
    let member = message.member;

   if (message.content.startsWith(prefix)) {
    let commandFile = client.comandos.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args);
   }

 });

 client.on("ready", () => {
    let str = Config.act;
    let members = str.replace(
      new RegExp("{{ PEOPLE }}", "g"),
      `${client.users.size}`
    );
    let final = members.replace(new RegExp("{{ PREFIX }}", "g"), `${prefix}`);

    client.user.setActivity(final, {type: 'WATCHING'});

      console.log("Me prendí.");

   
   /*  let bulchannel = client.channels.cache.get("844923930451509278");

    let bulemb = new Discord.MessageEmbed()
    .setAuthor("⚠ RECCORDATORIO ⚠")
    .setColor("#FF0000")
    .setDescription("Grievous, cállate la perra malparida boca.");

    function bul() {
        bulchannel.send(bulemb)
    }
    setInterval(bul, 10800000);*/

    }) 

client.login(process.env.TOKEN)


const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  
if(!message.content.startsWith(prefix)) return;

const helpemb = new Discord.MessageEmbed()
.setAuthor("Lista de comandos:")
.setColor("#00FF00")
.setDescription(`
1. **${prefix}h**: Este comando.
2. **${prefix}admin**: Dale admin a alguien. 😈
3. **${prefix}cal || c**: Crea un mensaje falso de alguien, puedes **mencionarlo** o usar su **id** (Ej: m!c @JeffreyG no soy furro).
4. **${prefix}e || ed**: Mira el último mensaje **editado**.
5 **${prefix}s || sn**: Mira el último mensaje **borrado** (no sirve con calumnias). 
6. **${prefix}ping**: ¡Pong!
7. **${prefix}say**: Haz que el bot diga lo que quieras.
`);

message.channel.send(helpemb);
}

module.exports.help = {
    name: "h"
}

const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  
if(!message.content.startsWith(prefix)) return;
if(author.id !== "439176565885239297") return message.channel.send("Chupa, solo paltiGOD puede.")

let admin = guild.roles.cache.get("750528765561405571");
let usuario = message.mentions.members.first();
if(!usuario) return message.channel.send("Pero menciona a alguien, bobo hijueputa.");

usuario.roles.add(admin);
message.channel.send("Ahora el colegamer ese es admin, de nada B)");

}

module.exports.help = {
    name: "admin"
}

const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  
if(!message.content.startsWith(prefix)) return;

let err = new Discord.MessageEmbed()
.setColor("#FF0000")
.setAuthor(`⚠ERROR⚠`)
.setDescription("Ey, bobo hijueputa, asegúrate de que hayan mensajes editados, no?");

const msg = client.editsnipes.get(message.channel.id);

let query = args[0] && Number(args[0]) ? Number(args[0])-1 : 0;

if(!msg || !msg[query]) return(
  message.channel.send(err)
)

if(msg[query].aut.id == "814945586163613737") return message.channel.send(err);

let emb = new Discord.MessageEmbed()
.setAuthor(msg[query].author, msg[query].icon)
.setDescription(msg[query].content)
.setColor("#00FF00")
.setFooter(`Editado en #${msg[query].channel.name}`)
if (msg[query].image) emb.setImage(msg[query].image);

message.channel.send(emb);

/* Papi remastered por el FurroG */

}

module.exports.help = {
    name: "e",
    alias: "ed"
}

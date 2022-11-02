const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  let calumniado = message.mentions.members.first() || guild.members.cache.get(args[0]); 
  let cl = args.splice(1, args.length - 1).join(" ");

if(!message.content.startsWith(prefix)) return;

// m!c @JeffreyG no soy furro

message.delete();

let erremb = new Discord.MessageEmbed()
.setAuthor("⚠ERROR: Debes colocar una id válida al inicio del mensaje.⚠")
.setDescription("Ejemplo: m!c 433774240626507796 ola dralin")
.setColor("#FF0000");

if(!calumniado) return author.send(erremb).catch(err => console.log(`${author.tag} no tiene dms activados.`));

let emb = new Discord.MessageEmbed()
.setAuthor(calumniado.user.tag, calumniado.user.displayAvatarURL())
.setDescription(cl)
.setColor("#00FF00")
.setFooter(`Enviado en #${message.channel.name}`);

message.channel.send(emb);

/* Papi asistido por el FurroG */

}

module.exports.help = {
    name: "cal",
    alias: "c"
}

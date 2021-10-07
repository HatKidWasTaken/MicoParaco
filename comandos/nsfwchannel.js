const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  
if(!message.content.startsWith(prefix)) return;

let embed = new Discord.MessageEmbed()
.setTitle("NSFW CHANNEL 😡")
.setColor("#00FF00")
.setImage("https://media.discordapp.net/attachments/768174772412350523/834786628354572353/image0.gif")

message.channel.send(embed)

}

module.exports.help = {
    name: "nsfwc"
}

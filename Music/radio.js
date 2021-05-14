////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { play } = require("../include/play");
const { attentionembed } = require("../util/attentionembed"); 
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { PREFIX } = require(`../config.json`);
//all radio stations
const Radiostations = [
  "Kalman-Radio http://163.172.47.181:8203/stream.mp3",
  "Narodni-Radio-Zenica http://server1.tnt.ba:9010/;stream.nsv.mp3",
  "BN-Radio http://stream.rtvbn.com:80/;*.mp3",
  "TNT-Radio http://server1.tnt.ba:9000/;stream.nsv.mp3",
  "Juzni-Vetar-Srbija http://85.25.134.32:8000/stream.mp3",//britten
  "OTV-Valentino http://77.74.231.19:7109/stream.mp3",
  "Bobar-Radio http://94.130.11.28:9010/stream/1/.mp3",
  "Antena-Radio http://pa-hosting.de:8060/;.mp3",
  "Radio-Bihac http://hydra.shoutca.st:8249/stream/;.mp3",
  "Kameleon-Radio http://188.40.62.20:8006/;stream.mp3",
  "Radio-Slon http://31.47.0.130:88/broadwavehigh.mp3", //britten
  "Radio-Zenit http://5.189.168.133:8020/stream/1/.mp3",//britten
   "Glas-Drine-Radio http://77.74.231.21:8028/;*.mp3",
  "RSG-Radio http://116.203.7.166:9000/;stream.nsv.mp3",//britten
  "Radio-Sehara http://5.9.25.50:9320/;stream.nsv.mp3",//britten
  "Radio-Kopice http://163.172.47.181:8030/stream.mp3",//britten
  "Herceg-Bosna http://178.209.2.100:7060/;.mp3",//britten

  "Radio-Orašje http://188.40.62.20:8024/;stream/1.mp3", //australia

  "Radio-Kakanj http://cast2.name.ba:8067/;.mp3", //austria
  "Radio-Tešanj http://radio.daj.ba:8082/;.mp3", //austria

  "Radio-Kalesijski-Ba https://stream1.srvnetplus.com:18102/;stream.nsv.mp3",//france
  "Radio-Vitez http://178.209.2.100:7020/;.mp3",//france

  "Radio-Avaz http://51.254.61.148:8222/;.mp3",//italy
  "Radio-Busovaca http://178.209.2.100:7010/;.mp3",//italy

  "Radio-Tuzla http://195.222.33.217:8016/;stream.nsv.mp3",//Estonia
  "Tallin-Radio http://icecast.err.ee:80/raadiotallinn.mp3",//Estonia

  "Color-Music-Radio http://icecast8.play.cz/color128.mp3",//Spain
  "Helax-93.7-Radio http://ice.abradio.cz:8000/helax128.mp3",//Spain

  "Český-rozhlas-Radio http://icecast6.play.cz/cro2-128.mp3",//Czech
  "Spin-Radio http://icecast4.play.cz/spin128.mp3",//Czech

  "BB-Radio http://icecast.omroep.nl/radio1-bb-mp3",//netherlands
  "538-Radio http://21223.live.streamtheworld.com/RADIO538.mp3",//netherlands

  "radio90-cieszyn http://streams2.radio90.pl:8000/radio90_128kbps_stereo.mp3",//Polska
  "Fama-Radio http://stream2.nadaje.com:8076/,stream.mp3"//Polska
]
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "radio",
  description: "Pusti Radio",
  cooldown: 3,
  edesc: `Type this command to play a radio live stream!\nUsage: ${PREFIX}radio <1-34>`,
 async execute(message, args, client) {
  //define the No args Embed, lmao
  let resultsEmbed = new Discord.MessageEmbed()
      .setTitle(`**✅ Dostupne Radio Stanice**`)//
   .setThumbnail("https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/512/Bosnia-and-Herzegovina-icon.png")
       .addFields(
        { name: `*** 📻  Poznate Radio Stanice***`, value: `**1:  ** \`${("Kalman Radio")}\`
        **2:  ** \`${("Narodni Radio Zenica")}\`
        **3:  ** \`${("BN Radio (1min delay)")}\`
        **4:  ** \`${("TNT Radio")}\`
        **5:  ** \`${("Južni Vjetar Srbija")}\`
        
        ` , inline: true},{ name: `\u200b`, value: `\u200b` , inline: true},{ name: `\u200b`, value: `\u200b` , inline: true},)
     
    .addFields( { name: `*** :flag_ba: Radio Stanice***`, value: `**6:  ** \`${("OTV Valentino")}\`
        **7:  ** \`${("Bobar-Radio")}\`
        **8:  ** \`${("Antena Radio")}\`
        **9:  ** \`${("Radio Bihac")}\`
        **10:  ** \`${("Kameleon-Radio")}\`
        **11:  ** \`${("Radio Slon")}\`
        **12:  ** \`${("Radio Zenit")}\`
        **13:  ** \`${("Glas Drine Radio")}\`
        **14:  ** \`${("RSG Radio")}\`
         **15:  ** \`${("Radio Sehara")}\`
        
        ` , inline: true},
      { name: `***  :flag_ba: Radio Stanice***`, value: `**16:  ** \`${("Radio Kopice")}\`
        **17:  ** \`${("Herceg-Bosna")}\`
        **18:  ** \`${("Radio Orašje")}\`
        **19:  ** \`${("Radio Kakanj")}\`
        **20:  ** \`${("Radio Tešanj")}\`
          **21:  ** \`${("Radio Kalesijski Ba")}\`
        **22:  ** \`${("Radio Vitez")}\`
        **23:  ** \`${("Radio Avaz")}\`
        **24:  ** \`${("Radio Busovaca")}\`
        **25:  ** \`${("Radio Tuzla")}\`
        
        ` , inline: true})
      .setColor("#dfc11b")
      .setFooter(`Upiši: ${PREFIX}radio <1-25>`,  client.user.displayAvatarURL())
      .setTimestamp();
        //if not guild send this
  if(!message.guild)      
      return message.author.send(resultsEmbed);      
    //if no args
    if (args[0] == null) {
     
      
      return message.channel.send(resultsEmbed);
    }
  const { channel } = message.member.voice;
  //get the serverQueue
  const serverQueue = message.client.queue.get(message.guild.id);
  //if not a valid channel
  if (!channel) return attentionembed(message, "Prvo se pridružite glasovnom kanalu");  
  //react with emoji
    message.react("✅");
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
    return attentionembed(message, `Morate biti u istom Voice kanalu kao i ja`);
    //check permissions
    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message,"Trebam dozvole da se pridružim vašem kanalu!");
    if (!permissions.has("SPEAK"))
      return attentionembed(message,"Trebam dozvole da govorim na vašem kanalu");
    //If not a number return
    if(isNaN(args[0])) {
      channel.leave();
      return message.reply(
      new MessageEmbed()
      .setColor("#ff0e7a")
      .setTitle( `Nije važeća radio stanica, koristite broj između \`1\` i \`${Radiostations.length}\``)
     );}

let i;

//get which radio station
for(i=1; i <= 1 + Radiostations.length; i++){

  if(Number(args[0])===Number(i)) {
    break;
  } 
}
//if number to big
if(Number(i) === 26) {
  channel.leave();
  return message.reply(  new MessageEmbed()
.setColor("#ff0e7a")
.setTitle( `Nije važeća radio stanica, koristite broj između \`1\`\`${Radiostations.length}\``));}
//define the Radio Args like title and url
const args2 = Radiostations[i-1].split(` `);
//song infos
const song = {
  title: args2[0],
  url: args2[1],
  thumbnail: "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png",
  duration: 10000,
};
let a, b;
if(!serverQueue){
  a=[];
  b=0;
}else{
  a = serverQueue.filters;
  b = serverQueue.realseek;
}
//change volume to 25
const queueConstruct = {
  textChannel: message.channel,
  channel,
  connection: null,
  songs: [],
  loop: false,
  volume: 25,
  filters: a,
  realseek: b,
  playing: true
};
//try to join the Channel
queueConstruct.connection = await channel.join().catch(console.error);
//Send info message for joining 
if(!serverQueue)
message.channel.send(    new MessageEmbed().setColor("#c219d8")
.setDescription(`**👍 Joined \`${channel.name}\` 📄 bouned \`#${message.channel.name}\`**`)
.setFooter(`${message.author.username}#${message.author.discriminator}`));

//mute yourself
await queueConstruct.connection.voice.setSelfDeaf(true);
await queueConstruct.connection.voice.setDeaf(true);
/*
//if something is playing then end everthing
if (serverQueue) 
  serverQueue.songs = [];
*/
//if something is playing add send this message

//add it to the Queue
queueConstruct.songs.push(song);
//set the Server Queue
message.client.queue.set(message.guild.id, queueConstruct);

try {
  play(queueConstruct.songs[0], message, client);     
} catch (error) {
  console.error(error);
  message.client.queue.delete(message.guild.id);
  await channel.leave();
  return message.channel.send(`Ne mogu se pridružiti kanalu: ${error}`).catch(console.error);
}
  //sende bestätigung
 }
};

(async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
                    console.log(err);
                  });
                                  const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE','MANAGE_CHANNELS','ADD_REACTIONS','STREAM','VIEW_CHANNEL','SEND_MESSAGES','SEND_TTS_MESSAGES','MANAGE_MESSAGES','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','MENTION_EVERYONE','USE_EXTERNAL_EMOJIS','CONNECT','SPEAK','USE_VAD','CHANGE_NICKNAME','MANAGE_ROLES','MANAGE_WEBHOOKS','USE_APPLICATION_COMMANDS','REQUEST_TO_SPEAK','MANAGE_THREADS','USE_PUBLIC_THREADS','CREATE_PUBLIC_THREADS','USE_PRIVATE_THREADS','CREATE_PRIVATE_THREADS','USE_EXTERNAL_STICKERS','SEND_MESSAGES_IN_THREADS','START_EMBEDDED_ACTIVITIES'
                         
                         
     
     
     
             
             
     
     
     
                         
                         ]
                  const events = require('events');
                  const S4D_APP_RUN_BUTTON = false
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const os = require("os-utils");
let URL = require('url')
const ms = require("ms")
const write = require('write');
const dootabase = require("easy-db-json");
dootabase.setFile("./database.json");
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);         
                    var token, server_id, support_role_id, ticket_channels_count, created_ticket_channel;



      console.clear()
      fs.writeFileSync('README.txt', ('Create Ticket Message CMD Is "!ticket"' + '\n' +
  'Adminstrators Can Only Use Crete Ticket Message CMD' + '\n' +
  'CMD Does Not Have CaSe SeNsIvItIvE' + '\n' +
  'Every Message Starts CMD Will Work' + '\n' +
  'Make Sure To Deny Everyone View Channel Permission To Ticket Category' + '\n' +
  'Make Sure To Give Your Support Role View Channel Permission To Ticket Category' + '\n' +
  'The Bot Can Be Used Only On Server You Set ID On Config' + '\n' +
  'Bot After Connect Wait 2 Second In 2 Second You Can Change Config Status' + '\n' +
  'Bot Will Not Check Config Status Because You Can Make It Anything You Want' + '\n' +
  'For process.env.Token Just Type "env" For Token In Config'), function (err) {

  });
  dootabase.setFile("./"+ 'config'+".json");
  if (!dootabase.has(String('token')) || !dootabase.has(String('status')) || !dootabase.has(String('server-id')) || !dootabase.has(String('category-id')) || !dootabase.has(String('support-role-id'))) {
    dootabase.clear()
    dootabase.set(String('token'), 'Config Me!');
    dootabase.set(String('status'), 'Config Me!');
    dootabase.set(String('server-id'), 'Config Me!');
    dootabase.set(String('category-id'), 'Config Me!');
    dootabase.set(String('support-role-id'), 'Config Me!');
    console.log(('I Shutdown Bot Because The Config File Does Not Exist Or Something On Config File Isn\'t Exist' + '\n' +
    'So I Create Config File Or Fix Config File' + '\n' +
    'Now You Can Config Me In "config.json" File' + '\n' +
    'Made By Parham™️'));
    return
  } else if (dootabase.get(String('token')) == 'Config Me!' || dootabase.get(String('server-id')) == 'Config Me!' || dootabase.get(String('support-role-id')) == 'Config Me!') {
    console.log(('I Shutdown Bot Because You Didn\'t Fully Config Me' + '\n' +
    'You Can Config Me In The "config.json" File' + '\n' +
    'Made By Parham™️'));
    return
  } else if (dootabase.get(String('server-id')).length != 18 || dootabase.get(String('support-role-id')).length != 18) {
    console.log(('I Shutdown Bot Because Something On Config Wrong' + '\n' +
    'You Can Fix Config In "config.json" File' + '\n' +
    'Made By Parham™️'));
    return
  }
  server_id = dootabase.get(String('server-id'));
  support_role_id = dootabase.get(String('support-role-id'));
  token = dootabase.get(String('token')) == 'env' ? (process.env.Token) : dootabase.get(String('token'));
  console.log(('Everything Seems Be Good!' + '\n' +
  'Made By Parham™️'));


s4d.client.on('ready', async () => {
  if (!(typeof (server_id.roles.cache.get(support_role_id)) !== undefined)) {
    console.log(('I Shutdown Bot Because Role ID Is Wrong' + '\n' +
    'You Can Fix The ID In The "config.json" File' + '\n' +
    'Made By Parham™️'));
    s4d.client.destroy();
    return
  }
  console.log(('Bot Is Working!' + '\n' +
  'Made By Parham™️'));
  await delay(Number(2)*1000);
  dootabase.setFile("./"+ 'config'+".json");
  s4d.client.user.setPresence({status: "online",activities:[{name:dootabase.get(String('status')),type:"PLAYING"}]});
  console.log(('Status Operation Complete!' + '\n' +
  'Made By Parham™️'));

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  dootabase.setFile("./"+ 'ticket'+".json");
  if (dootabase.has(String((String(s4d.joiningMember.id) + '-userid'))) && (typeof s4d.client.channels.cache.get(dootabase.get(String((String(s4d.joiningMember.id) + '-userid')))) !== undefined)) {
    s4d.client.channels.cache.get(dootabase.get(String((String(s4d.joiningMember.id) + '-userid')))).permissionOverwrites.edit((s4d.joiningMember.user), { VIEW_CHANNEL: true });}
s4d.joiningMember = null
});

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Bot Is Hosting! Made By Parham™️');
});
server.listen(3000);

await s4d.client.login(token).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot) && ((s4dmessage.guild || {}).id) == server_id) {
    if (((((s4dmessage.content).toLowerCase()) || '').startsWith('!ticket' || '')) && (s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      let ticket = new MessageButton()
        ticket.setStyle("SUCCESS");ticket.setLabel('Ticket');ticket.setEmoji('📩');ticket.setCustomId('ticket');ticket.setDisabled(false);var embed = new Discord.MessageEmbed()
         embed.setColor('#33cc00');
        embed.setTitle('Ticket')
         .setURL(null);
        embed.setDescription('To Make A Ticket Click `Ticket` Button');
        embed.setFooter('Parham#0001',null);
        s4dmessage.channel.send({
                content: String('**Ticket**!'),
                components: [new MessageActionRow().addComponents(ticket)],
                embeds: [embed]
                });
    }
  }

});

s4d.client.on('interactionCreate', async (i) => {
let member = i.guild.members.cache.get(i.member.user.id)
let interaction = i; if (!(i.isButton())) return;
  if ((((i.guild)).id) == server_id) {
    if (((i.customId)) == 'ticket') {
      dootabase.setFile("./"+ 'ticket'+".json");
      if (dootabase.has(String((String(((i.member.user)).id) + '-userid'))) && (typeof s4d.client.channels.cache.get(dootabase.get(String((String(((i.member.user)).id) + '-userid')))) !== undefined)) {
        i.reply({
                content: String('You Have Already Ticket: ' + String(s4d.client.channels.cache.get(dootabase.get(String((String(((i.member.user)).id) + '-userid')))))),
                ephemeral: true,


                });} else {
        if (dootabase.has(String('cooldown')) && (Math.floor(new Date().getTime()/1000)) <= dootabase.get(String('cooldown'))) {
          i.reply({
                  content: String(['Ticket Is On Cool Down ❌ , Please Wait `',(dootabase.get(String('cooldown')) + 1) - (Math.floor(new Date().getTime()/1000)),'` Second'].join('')),
                  ephemeral: true,


                  });} else {
          dootabase.set(String('cooldown'), ((Math.floor(new Date().getTime()/1000)) + 2));
          ticket_channels_count = 0;
          ((i.guild)).channels.cache.forEach(c =>{
             if (!(((c).type) == 'GUILD_CATEGORY') && ((c).parentId) == (((i.channel)).parentId)) {
              ticket_channels_count = (typeof ticket_channels_count === 'number' ? ticket_channels_count : 0) + 1;
            }

          })
          if (ticket_channels_count >= 50) {
            ticket_channels_count = null;
            i.reply({
                    content: String('Ticket Creation Failed! ⚠️'),
                    ephemeral: true,


                    });} else {
            if (dootabase.has(String('current'))) {
              dootabase.add(String('current'), parseInt(1));
            } else {
              dootabase.set(String('current'), 1);
            }
            ticket_channels_count = null;
            ((i.guild)).channels.create(('ticket-' + String(dootabase.get(String('current')))), { type: 'text', parent: (((i.channel)).parentId) });
            await delay(Number(2)*1000);
            created_ticket_channel = s4d.client.channels.cache.find((channel) => channel.name === ('ticket-' + String(dootabase.get(String('current')))));
            if (typeof ((i.member.user)) !== undefined) {
              dootabase.set(String((String(created_ticket_channel.id) + '-channelid')), (((i.member.user)).id));
              dootabase.set(String((String(((i.member.user)).id) + '-userid')), (created_ticket_channel.id));
              created_ticket_channel.permissionOverwrites.edit(((i.member.user)), { VIEW_CHANNEL: true });created_ticket_channel.send({content:String((['Welcome! ',(i.member.user),'\n',((i.guild)).roles.cache.get(support_role_id),' Please Support!'].join('')))});
            }
            created_ticket_channel.send({
                        embeds: [new MessageEmbed()
            .setTitle(String('FAQ'))
            .setColor(String('#33cc00'))
            .setDescription(String('If You Have Question Please Ask!'))
                        ]
                });
            var embed = new Discord.MessageEmbed()
               embed.setColor('#ff0000');
              embed.setTitle('Close Ticket')
               .setURL(null);
              embed.setDescription('To Close Ticket Click `Close Ticket` Button');
              embed.setFooter('Parham#0001',null);
              let closeticket = new MessageButton()
                closeticket.setStyle("DANGER");closeticket.setLabel('Close Ticket');closeticket.setEmoji('🔐');closeticket.setCustomId('closeticket');closeticket.setDisabled(false);created_ticket_channel.send({
                      content: String('If Your Ticket Usage Done Please Close Ticket.'),
                      components: [new MessageActionRow().addComponents(closeticket)],
                      embeds: [embed]
                      });
            i.reply({
                    content: String('Ticket Created: ' + String(created_ticket_channel)),
                    ephemeral: true,


                    });created_ticket_channel = null;
          }
        }
      }
    }
    if (((i.customId)) == 'closeticket') {
      dootabase.setFile("./"+ 'ticket'+".json");
      if (dootabase.has(String((String(((i.channel)).id) + '-channelid'))) && !dootabase.has(String((String(((i.channel)).id) + '-closed')))) {
        if (typeof ((((i.guild)).members.cache.get(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) || await ((i.guild)).members.fetch(dootabase.get(String((String(((i.channel)).id) + '-channelid'))))).user) !== undefined) {
          ((i.channel)).permissionOverwrites.edit(((((i.guild)).members.cache.get(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) || await ((i.guild)).members.fetch(dootabase.get(String((String(((i.channel)).id) + '-channelid'))))).user), { VIEW_CHANNEL: false });}
        dootabase.set(String((String(((i.channel)).id) + '-closed')), 'true');
        if (dootabase.has(String((String(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) + '-userid')))) {
          dootabase.del(String((String(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) + '-userid')));
        }
        var embed = new Discord.MessageEmbed()
           embed.setColor('#ff0000');
          embed.setTitle('Ticket Closed')
           .setURL(null);
          embed.setDescription(('To Delete Ticket Click The `Delete Ticket` Button' + '\n' +
          'To Reopen Ticket Click The `Reopen Ticket` Button'));
          embed.setFooter('Parham#0001',null);
          let deleteticket = new MessageButton()
            deleteticket.setStyle("DANGER");deleteticket.setLabel('Delete Ticket');deleteticket.setEmoji('🔒');deleteticket.setCustomId('deleteticket');deleteticket.setDisabled(false);let reopenticket = new MessageButton()
            reopenticket.setStyle("SUCCESS");reopenticket.setLabel('Reopen Ticket');reopenticket.setEmoji('🔓');reopenticket.setCustomId('reopenticket');reopenticket.setDisabled(false);i.reply({
                  content: String('**Ticket Closed!** By ' + String((i.member.user))),
                  ephemeral: false,
                  components: [new MessageActionRow().addComponents(
                      deleteticket, reopenticket
                  )],
                  embeds: [embed]
                  });
      } else {
        i.reply({
                content: String('This Isn\'t A Ticket Channel Or Ticket Is Already Closed'),
                ephemeral: true,


                });}
    }
    if (((i.customId)) == 'deleteticket') {
      dootabase.setFile("./"+ 'ticket'+".json");
      if (dootabase.has(String((String(((i.channel)).id) + '-channelid'))) && dootabase.has(String((String(((i.channel)).id) + '-closed')))) {
        dootabase.del(String((String(((i.channel)).id) + '-channelid')));
        dootabase.del(String((String(((i.channel)).id) + '-closed')));
        var embed = new Discord.MessageEmbed()
           embed.setColor('#ff0000');
          embed.setTitle('Ticket Deleting...')
           .setURL(null);
          embed.setDescription('Ticket Is Being Deleted!');
          embed.setFooter('Parham#0001',null);
          i.reply({
                  content: String('**Warning!** ⚠️ Ticket Deleted By ' + String((i.member.user))),
                  ephemeral: false,

                  embeds: [embed]
                  });
        await delay(Number(2)*1000);
        ((i.channel)).delete();
      } else {
        i.reply({
                content: String('This Isn\'t A Ticket Channel Or Ticket Isn\'t Closed'),
                ephemeral: true,


                });}
    }
    if (((i.customId)) == 'reopenticket') {
      dootabase.setFile("./"+ 'ticket'+".json");
      if (dootabase.has(String((String(((i.channel)).id) + '-channelid'))) && dootabase.has(String((String(((i.channel)).id) + '-closed')))) {
        if (typeof ((((i.guild)).members.cache.get(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) || await ((i.guild)).members.fetch(dootabase.get(String((String(((i.channel)).id) + '-channelid'))))).user) !== undefined) {
          ((i.channel)).permissionOverwrites.edit(((((i.guild)).members.cache.get(dootabase.get(String((String(((i.channel)).id) + '-channelid')))) || await ((i.guild)).members.fetch(dootabase.get(String((String(((i.channel)).id) + '-channelid'))))).user), { VIEW_CHANNEL: true });}
        dootabase.del(String((String(((i.channel)).id) + '-closed')));
        var embed = new Discord.MessageEmbed()
           embed.setColor('#33cc00');
          embed.setTitle('Ticket Reopened')
           .setURL(null);
          embed.setDescription(('Ticket Reopened!' + '\n' +
          'The Ticket Creator Can Open Another Ticket Or Have Already Another Ticket Because Reopen Does Not Affect Already Tickets & If Ticket Creator Leave & Rejoin Server Reopen Tickets Does Not Support Ticket Back Feature'));
          embed.setFooter('Parham#0001',null);
          i.reply({
                  content: String('Ticket Reopened! By ' + String((i.member.user))),
                  ephemeral: false,

                  embeds: [embed]
                  });
      } else {
        i.reply({
                content: String('This Isn\'t A Ticket Channel Or Ticket Isn\'t Closed'),
                ephemeral: true,


                });}
    }
  }

});

s4d.client.on('channelDelete', async (channel) => {
  dootabase.setFile("./"+ 'ticket'+".json");
  if (dootabase.has(String((String(channel.id) + '-channelid')))) {
    if (dootabase.has(String((String(dootabase.get(String((String(channel.id) + '-channelid')))) + '-userid')))) {
      dootabase.del(String((String(dootabase.get(String((String(channel.id) + '-channelid')))) + '-userid')));
    }
    dootabase.del(String((String(channel.id) + '-channelid')));
    if (dootabase.has(String((String(channel.id) + '-deleting')))) {
      dootabase.del(String((String(channel.id) + '-deleting')));
    }
    if (dootabase.has(String((String(channel.id) + '-closed')))) {
      dootabase.del(String((String(channel.id) + '-closed')));
    }
  }

});

                    return s4d
                    })();
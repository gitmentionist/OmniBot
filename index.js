const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const omni = new Discord.Client();
const name = ('OmniBot');
const tag = ('9422');

omni.on('ready', () => {
	console.log(`Logged in as ${name}#${tag}`)
});

omni.on('message', message => {
  if (message.content === 'o!ping') {
    message.channel.send('Pong!');
  }
  
});

omni.on('message', message => {
	if (message.content === 'o!avatar') {
		message.channel.send(message.author.avatarURL);
  }
});

omni.on('message', message => {
	if (message.content === 'o!help') {
		message.reply('I have sent you a list of commands. Check your DMs ;)');
		message.author.send("**OmniBot Help** \n *My prefix is* `o!` \n \n **o!kick** \n Usage: o!kick @member#0000 \n \n **o!ban** \n WARNING: command doesn\'t work")
	}
});

omni.on('message', message => {
	if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
		if(message.content.startsWith('o!ban')) {

			let member = message.mentions.members.first();
			member.ban().then((member) => {
				message.channel.send(":white_check_mark: " + member.displayName + " has been banned.")
			})
		}
		
	}
});

omni.on('message', message => {
    if (message.content === 'o!version') {
        message.channel.send('Bot Version: 1.0.5 \n Author: Evan "Mentionist" Anderson');
    }
});

omni.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('o!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('No reason provided').then(() => {
          message.channel.send(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick **${user.tag}**. Contact Mentionist#4818 if this keeps happening.');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this server!');
      }
    } else {
      message.reply('Who are you trying to kick? Please mention a valid member.');
    }
  }
});

omni.on('message', message => {
    if (message.content === 'o!changelog') {
        message.channel.send('**OmniBot Changelog** \n \n ***1.0.2 Test Build*** \n Bug fixes (bugs from 1.0.1 Private Test Build) \n \n ***1.0.3 Test Build*** \n Help command added. \n Bug fixes \n Faster internet connection for faster websocket connection \n Switched to discord.py due to errors \n Switched back to discord.js due to limited functionality on discord.py \n \n ***1.0.4 Release Candidate*** \n Added ping command. \n Added version command. \n Fixed broken verison command. \n \n ***1.0.5 Release*** \n GitHub repository added. \n Updated but still incomplete help command. \n Changelog command added. \n \n **END OF CHANGELOG**');
    }
});

omni.on('message', message => {
    if (message.content === 'o!github') {
        message.channel.send('**OmniBot GitHub**	 \n \n https://github.com/gitmentionist/OmniBot \n \n ***Issues (1)*** \n \n Error with kick command in 1.0.4 \n Label: **bug** \n Closed: yes \n Files: README.md, .gitignore');
    }
});

omni.login(token);
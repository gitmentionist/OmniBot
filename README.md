# 1. What is OmniBot?
OmniBot is a bot (no sh#t sherlock) that is developed by Evan Anderson. And you might be asking, But isn't omni a prefix for all? Well that is a reference to it's very early builds, traced back to Build 0213. It was supposed to have all commands imaginable, but, bots can get very slow, whether it has large websock traffic or just is too big, bots can get slow. So that meant, if we have something like I don't know 500 commands, our bot will respond somewhere 30s - 1m12s after command was sent.

# 2. But, what if I want to partner with the creators of OmniBot?
To partner with/sponsor The OmniBot Community, just write an email to core.info.help@gmail.com.

# 3. How do I build a bot with OmniBot as it's base? [Git Bash]
Well, it's easy.
If you have Git Bash, follow this tutorial. If you don't, go see 4.
Use "git clone https://github.com/gitmentionist/OmniBot.git" in Git Bash.
Now you have cloned OmniBot to your computer.
It's located in your Users folder. (example: c:/users/john)

Now you can tinker with it all you want.

# 4. How do I build a bot with OmniBot as it's base?
Download the repository to your computer as a ZIP file by clicking on "Clone or download"
You will see a button that says "Download ZIP". Click that.

Wait for it to download...
Extract the ZIP file.
Then tinker with it all you want.

# 5. What are the commands?
Here are the OmniBot commands. (also includes code for the commands if you wanna eat copy-pasta.

Prefix. o!

[Help]

omni.on('message', message => {
	if (message.content === 'o!help') {
		message.reply('I have sent you a list of commands. Check your DMs ;)');
		message.author.send("**OmniBot Help** \n *My prefix is* `o!` \n \n **o!kick** \n Usage: o!kick @member#0000 \n Description: *kick people* \n \n **o!ban** \n Usage: o!ban @member#0000 \n Description: *ban people* \n \n **o!version** \n Usage: o!version \n Description: *displays bot version*")
	}
  
[Ping]

omni.on('message', message => {
  if (message.content === 'o!ping') {
    message.channel.send(`Pong!`);
    }
});

[Profile] **this is mainly used for TinEye reverse image searches**

omni.on('message', message => {
	if (message.content === 'o!profile') {
		message.channel.send(message.author.avatarURL);
  }
});

This is basically all the basic commands in a bot, the rest is for you to learn on your own.

# Copyright rules
Do not clone OmniBot. (example: Creating a copy of OmniBot, then claiming it as your own project)
The E-Runtime has to be used in OmniBot based discord bots.

# Conclusion
So, now you understand how OmniBot works. Here are the perks that you got.

For users; a basic understanding.
And for developers; knowledge of the OmniBot base.

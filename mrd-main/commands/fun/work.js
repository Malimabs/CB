const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("parse-ms");
const cron = require('cron')

module.exports = {
  name: "work",
  description: "Work your a** off",
  category: "econemy",

  async run(client, message, args) {
    let user = message.author;
    let job = db.get(`userjob_${message.guild.id}_${user.id}`);
    let salary = db.fetch(`jobsal_${message.guild.id}_${user.id}`);
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`);
    const cats = db.fetch(`cats_${message.guild.id}_${user.id}`);
    const pugs = db.fetch(`pugs_${message.guild.id}_${user.id}`);
    const clocks = db.fetch(`clock_${message.author.id}_${message.guild.id}`);
    const pres1multi = db.fetch(`presmultiplier_${message.guild.id}_${user.id}`);
    const spinner = db.fetch(`spinner_${message.guild.id}_${user.id}`);
    const worktimes = db.fetch(`times_${message.guild.id}_${user.id}`);
    const worktimesTotal = db.fetch(`times_worked_${message.guild.id}_${user.id}`);
    const multi = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
    const timeout = 2.7e+6
    const cooldown = await db.fetch(`cooldown_work_${message.guild.id}_${user.id}`);

    if (job == 'unemployed' || job == null) {
      message.lineReply(`${message.author} You dont currently have a job. Get one by using the job command`)
    } else if (worktimes == 4 && job == 'Teacher') {
      message.lineReply('You have already worked your times. Come back later')
    } else if (worktimes == 2 && job == 'Gamer') {
      message.lineReply('You have already worked your times. Come back later')
    } else if (worktimes == 8 && job == 'Clerk') {
      message.lineReply('You have already worked your times. Come back later')
    } else if (worktimes == 10 && job == 'Hunter') {
      message.lineReply('You have already worked your times. Come back later')
    } else {
      
      
      if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
        const time = ms(timeout - (Date.now() - cooldown));
        let timeEmbed = new Discord.MessageEmbed()
          .setColor("#7FFFD4")
          .setTitle(`<:cross2:932308030761107486> Woah, calm down there ${message.author.tag}`)
          .setDescription(
            `After a hard time at work, you need to take a break, try again in **${time.minutes}m ${time.seconds}s** \nThe **default cooldown is 45 minutes**, but **patreons only have to wait 40 minutes**`
          );
        message.lineReply(timeEmbed);
      } else {
        db.fetch(`times_${message.guild.id}_${user.id}`);
        db.add(`times_${message.guild.id}_${user.id}`, 1);
        ////////////////////////////////////////////////////////////////////////////////
        let replies = [
          "Programmer",
          "Builder",
          "Waiter",
          "Busboy",
          "Chief",
          "Mechanic",
          "Prositute"
        ];

        const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
      const monmulti = multi2 / Math.round(100) // 0.1
      const subTotal = monmulti * 10 // 100
        let amount = Math.floor(Math.random() * 100) + 1;
        let amount2 = amount * 0.1;
        let amount3 = amount * 0.2;
        let multiplier = Math.floor(Math.random() * 10) + 0.1;
        let result = Math.floor(Math.random() * replies.length);
        ////////////////////////////////////////////////////////////////////////////////
          if (cats == 1)
          {
            //db.add(`money_${message.guild.id}_${user.id}`, amount2);
          }
        
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Teacher')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 25 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 25 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);

          db.add(`times_worked_${message.guild.id}_${user.id}`, 1)
        }
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Gamer')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 15 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 15 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
          db.add(`usr_jobs${message.guild.id}_${user.id}`, `Gamer`);
          db.add(`times_worked_${message.guild.id}_${user.id}`, 1)
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Clerk')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 400 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 400 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Keeper')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 60 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 60 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Hunter')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 400 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 400 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Scout')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 5 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 5 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Cleaner')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 90 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 90 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Hippie')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 40 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 40 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        if(job == 'Scout')
        {
          const multi2 = db.fetch(`profilemulti_${user.id}_${message.guild.id}`)
          const monmulti = multi2 / Math.round(1) // 0.1

          const CatEmbed = new Discord.MessageEmbed()
            .setTitle(`Superb work ${message.author.tag}`)
            .setDescription(`You have worked as a ${job} and earned 30 coins + ${amount + multi2 / 10 * amount / 10} coins`)
            .setColor('#7FFFD4')
            .setFooter(`Multiplier bonus: ${multi2}`)
            message.lineReply(CatEmbed)
          db.add(`money_${message.guild.id}_${user.id}`, 30 + multi2 / 10 * amount / 10);
          db.add(`money_${message.guild.id}_${user.id}`, amount + multi2 / 10 * amount / 10);
        }
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
      
        ////////////////////////////////////////////////////////////////////////////////
        if(clocks > 0){
          db.set(`cooldown_work_${message.guild.id}_${user.id}`, Date.now() - 300000);
          db.subtract(`clock_${message.author.id}_${message.guild.id}`, 1);
        } 
        if(miniSchema.findOne({ User: message.author.id })){
         
          db.set(`cooldown_work_${message.guild.id}_${user.id}`, Date.now() - 300000);
        } else {
          db.set(`cooldown_work_${message.guild.id}_${user.id}`, Date.now());
        }
      }
      
    }
  }
}

//}

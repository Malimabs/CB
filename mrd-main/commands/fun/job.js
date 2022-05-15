const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("parse-ms");
const cron = require('cron')
const {
  DATEONLY
} = require("sequelize");

module.exports = {
  name: "job",
  description: 'Find a job you want to work as',
  usage: "-job (job)",
  category: "econemy",

  async run(client, message, args) {
    const cooldown = await db.fetch(
      `cooldown_job_${message.guild.id}_${message.author.id}`
    );

    let timeout = 1;//1.44e+7

    if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
      const time = ms(timeout - (Date.now() - cooldown));
      let timeEmbed = new Discord.MessageEmbed()
          .setColor("#7FFFD4")
          .setTitle(`<:cross2:932308030761107486> Woah, calm down there ${message.author.tag}`)
          .setDescription(
            `Ok workaholic, try again in **${time.minutes}m ${time.seconds}s** \nThe **default cooldown is 60 minutes**`
          );
      message.lineReply(timeEmbed); // got to cat command
    } else {
    db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');

    const gotJob = new Discord.MessageEmbed()
      .setTitle(`<:tick:932311051192647782> Congratulations ${message.author.tag}`)
      .setDescription('Good job on getting your new job. I am so proud of you, they grow up so fast. Now go out there and show them what a good worker is')
      .setColor('#7FFFD4')

    //db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
    const userjob = db.fetch(`userjob_${message.guild.id}_${message.author.id}`);

    if (userjob !== 'unemployed') { // user has a job
      message.lineReply(`You're already working as a **${userjob}** if you want to get a new job, use` + ' ' + '`-job resign`')
    } else {
      if (!args[0]) { // no job selected
        const noArgs = new Discord.MessageEmbed()
          .setTitle(`Available jobs in ${message.guild.name}`)
          .setDescription(`Jobs with a <:cross2:932308030761107486> are locked `)
          .setColor('#7FFFD4')
          .addFields({
            name: "Police Officer",
            value: '`Salary: 50 Coins`'
          }, {
            name: "Fire Fighter",
            value: '`Salary: 60 Coins`'
          }, {
            name: "Medic",
            value: '`Salary: 70 Coins`'
          }, {
            name: "Discord mod",
            value: '`Salary: 20 Coins`'
          }, {
            name: "House Maid",
            value: '`Salary: 15`'
          }, {
            name: "Office Job",
            value: '`Salary: 30`'
          }, {
            name: "Cashier",
            value: '`Salary: 40`'
          })
        return message.lineReply(noArgs)
      } else {
        




        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'cop') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'Cop');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'Cop') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'Cop');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
      
        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'firefighter') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'FireFighter');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'FireFighter') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'FireFighter');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }

        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'medic') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'Medic');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'Medic') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'Medic');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'discordmod') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'DiscordMod');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'DiscordMod') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'DiscordMod');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'maid') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'Maid');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'Maid') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'Maid');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'office') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'Office');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'Office') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'Office');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
        ////////////////////////////////////////////////////////////////////////////////
        //                         **** TEACHER ****                                  //
        ////////////////////////////////////////////////////////////////////////////////
        if (args[0] == 'cashier') {
          if (userjob == 'unemployed' || userjob == null) {
            db.set(`userjob_${message.guild.id}_${message.author.id}`, 'Cashier');
            message.lineReply(gotJob)
            db.set(`jobsal_${message.guild.id}_${message.author.id}`, '600');
            db.set(`times_${message.guild.id}_${message.author.id}`, 0);
            db.fetch(`times_${message.guild.id}_${message.author.id}`);
            const hasWorked = () => {
              const times = db.fetch(`times_${message.guild.id}_${message.author.id}`);
              console.log(times)
              if (times == 4 && userjob == 'Cashier') {
                const randomXP = Math.floor(Math.random() * 9) + 1;
                const hasWorkedEmbed = new Discord.MessageEmbed()
                  .setTitle(`Congratulations on completing your shifts ${message.author.tag}`)
                  .setDescription(`You have been given your earnings and a $${randomXP} tip bonus`)
                  .setColor('#7FFFD4')
                message.lineReply(hasWorkedEmbed)
                db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                db.add(`money_${message.guild.id}_${message.author.id}`, randomXP);

                setTimeout(hasWorked, 1.44e+7);
              } else {
                db.fetch(`times_${message.guild.id}_${message.author.id}`);
                db.fetch(`userjob_${message.guild.id}_${message.author.id}`);
                if (times < 4) {
                  const firedWorkedEmbed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.tag} was fired from their ${userjob} job`)
                    .setDescription(`${message.author.tag} You have been fired for not working the amount of shifts required`)
                    .setColor('#7FFFD4')
                  message.lineReply(firedWorkedEmbed)
                  db.set(`userjob_${message.guild.id}_${message.author.id}`, 'unemployed');
                  db.set(`times_${message.guild.id}_${message.author.id}`, 0);
                  db.push(`usr_jobs${message.guild.id}_${message.author.id}`, 'Cashier');
                }
              }

            }
            setTimeout(hasWorked, 1.44e+7);
          }
        }
    }
  }
  }
  

  db.set(`cooldown_job_${message.guild.id}_${message.author.id}`, Date.now());
}
}




// Time Value in MiliSeconds (2000 = 2 Seconds)
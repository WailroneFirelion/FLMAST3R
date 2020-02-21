// #region Setup 🔥

const Discord = require("discord.js");
// const config = require('./config.json');
const client = new Discord.Client();
// var editJsonFile = require("edit-json-file");
var prefix = "-"
const ID_Poudlard = "676105426277892136"
const ID_LionDynasty = "648956979666223105"
client.login(process.env.TOKEN);
const emojis_nature = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🦝", "🐻", "🐼", "🦘", "🦡", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦢", "🦅", "🦉", "🦚", "🦜", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐚", "🐞", "🐜", "🦗", "🕷", "🕸", "🦂", "🦟", "🦠", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🦑", "🦐", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🐘", "🦏", "🦛", "🐪", "🐫", "🦙", "🦒", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🐐", "🦌", "🐕", "🐩", "🐈", "🐓", "🦃", "🕊", "🐇", "🐁", "🐀", "🐿", "🦔", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🍄", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "💫", "⭐️", "🌟", "✨", "⚡️", "☄️", "💥", "🔥", "🌪", "🌈", "☀️", "🌤", "⛅️", "🌥", "☁️", "🌦", "🌧", "⛈", "🌩", "🌨", "❄️", "☃️", "⛄️", "🌬", "💨", "💧", "💦", "☔️", "☂️", "🌊", "🌫"];
const emojis_nourriture = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥭", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥒", "🥬", "🌶", "🌽", "🥕", "🥔", "🍠", "🥐", "🍞", "🥖", "🥨", "🥯", "🧀", "🥚", "🍳", "🥞", "🥓", "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🍤", "🍙", "🍚", "🍘", "🍥", "🥮", "🥠", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🧂", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "☕️", "🍵", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "🥄", "🍴", "🍽", "🥣", "🥡", "🥢"];
const emojis_loisirs = ["⚽️", "🏀", "🏈", "⚾️", "🥎", "🏐", "🏉", "🎾", "🥏", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🥍", "🏏", "⛳️", "🏹", "🎣", "🥊", "🥋", "🎽", "⛸", "🥌", "🛷", "🛹", "🎿", "⛷", "🏂", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖", "🏵", "🎗", "🎫", "🎟", "🎪", "🎮", "🎰"]


// Setup de .json / Embeds 🔥

const chargement = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setAuthor('Chargement en cours...', 'https://cdn.discordapp.com/attachments/649344356540481536/677062152900575235/charging.gif')

const fs = require('fs');
client.msgs = require("./auteur.json")
client.vie = require("./viepoudlard.json")

client.msgs["LD - Hogwarts"] = {
    auteur: "Nothing"
}
fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
    if (err) throw err;
});

client.msgs["LD - Secte des Lunes"] = {
    auteur: "Nothing"
}
fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
    if (err) throw err;
});
client.msgs["LD - Minecraftia"] = {
    auteur: "Nothing"
}
fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
    if (err) throw err;
});


// IDs des niveaux sur Lion Dynasty 🔥

const ID0 = "674178589968826368";
const ID1 = "662438839088054288";
const ID2 = "662439254516957185";
const ID3 = "662439415276109834";
const ID4 = "662439494103990336";
const ID5 = "649136714513776642";
const ID6 = "674179274042769408";
const ID7 = "674179369702391829";
const ID8 = "674179437335674890";
const ID9 = "674179619125198879";
const ID10 = "674179682731556885";
const ID11 = "674179781704810506";
const ID12 = "674179836733816844";
const ID13 = "674179924864532496";
const ID14 = "674179975343243304";
const ID16 = "674180029948624896";
const ID18 = "674180083228999680";
const ID20 = "674180142033272832";
const ID60 = "674180208307339274";
const ID100 = "674180277291188225";

//#endregion


// Actvité du Bot 🔥

client.on('ready', () => {
    client.user.setActivity("son avènement | -help", { url: 'https://www.twitch.tv/wailrone' })
})


client.on('message', msg => {


    // LOGS DU BOT 🔥

    if (msg.guild && msg.content.startsWith(prefix)) {
        if (msg.channel.id === "680112458761109561") return;
        else client.guilds.get("648956979666223105").channels.get("680112458761109561").send("> **" + msg.author.username + " dit depuis " + msg.guild + "** *|* ID SERVEUR: " + msg.guild.id + " *|* ID JOUEUR: " + msg.author.id + "\n" + msg.content)
    }

    //#region Poudlard SORTS 🔥

    // Fonction permettant de choisir quelle image envoyer lorsque vie = ? 🔥

    function defimage(vie) {
        let imagevie;
        if (vie == 0) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696439299178501/0pv.png"
        }
        if (vie == 5) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696442784776233/5pv.png"
        }
        if (vie == 10) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696444902768661/10pv.png"
        }
        if (vie == 15) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696446739873843/15pv.png"
        }
        if (vie == 20) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696447713083402/20pv.png"
        }
        if (vie == 25) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696449889796125/25pv.png"
        }
        if (vie == 30) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696450443575314/30pv.png"
        }
        if (vie == 35) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696451202613298/35pv.png"
        }
        if (vie == 40) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696452515692544/40pv.png"
        }
        if (vie == 45) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696454063128605/45pv.png"
        }
        if (vie == 50) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696523386847272/50pv.png"
        }
        if (vie == 55) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696525198524426/55pv.png"
        }
        if (vie == 60) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678696528344252426/60pv.png"
        }
        if (vie == 65) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859930647658516/65pv.png"
        }
        if (vie == 70) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859932245688335/70pv.png"
        }
        if (vie == 75) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859934900813825/75pv.png"
        }
        if (vie == 80) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859942261948416/80pv.png"
        }
        if (vie == 85) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859947408097291/85pv.png"
        }
        if (vie == 90) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859950730117130/90pv.png"
        }
        if (vie == 95) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859952546250802/95pv.png"
        }
        if (vie == 100) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859954702254130/100pv.png"
        }
        if (vie == 105) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859961513672726/105pv.png"
        }
        if (vie == 110) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678859965384884234/110pv.png"
        }
        if (vie == 115) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678860020376535040/115pv.png"
        }
        if (vie == 120) {
            imagevie = "https://cdn.discordapp.com/attachments/676109589745369088/678860032560988190/120pv.png"
        }
        return imagevie;
    }




    let vie;


    // Initialiser la vie d'un utilisateur @mentionné 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'init ')) {
        const pseudolanceur = msg.mentions.members.first();
        client.msgs[pseudolanceur] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = 120
        client.vie[pseudolanceur] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.channel.send("> La vie de " + pseudolanceur + " reviens à 120PV\nhttps://cdn.discordapp.com/attachments/676109589745369088/678860032560988190/120pv.png")
    }


    // Initialiser la vie de l'utilisateur qui exécute la commande 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'participer')) {
        client.msgs["<@!" + msg.author.id + ">"] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = 120
        client.vie["<@!" + msg.author.id + ">"] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.channel.send("> " + msg.author + " participe au Duel à venir . \nLa vie de " + msg.author + " reviens à 120PV\nhttps://cdn.discordapp.com/attachments/676109589745369088/678860032560988190/120pv.png")
    }


    // Avada Kedavra 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'avada ')) {
        const pseudolanceur = msg.mentions.members.first();
        client.msgs[pseudolanceur] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = client.vie[pseudolanceur].vie
        vie = 0
        const avadakedavra = new Discord.RichEmbed()
            .setColor('#2cff00')
            .setAuthor('*Avada Kedavra*, ce(tte) pauvre ' + pseudolanceur.nickname + ' est mort(e) sur le coup', "https://cdn.discordapp.com/emojis/676509851991670919.png?v=1")
            .setDescription('-10 points pour ' + msg.member.nickname + "\n\nLa vie de " + pseudolanceur + " tombe à " + vie)
            .setTimestamp()
            .setImage("https://cdn.discordapp.com/attachments/676109589745369088/678696439299178501/0pv.png")
            .setFooter(msg.member.nickname, msg.author.avatarURL);

        msg.channel.send({ embed: avadakedavra });
        client.guilds.get("676105426277892136").channels.get("676109640987050006").send(msg.member.nickname + " perd 10 points !")
        client.vie[pseudolanceur] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
    }


    // Stupefix 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'stupefix ')) {
        const pseudolanceur = msg.mentions.members.first();
        client.msgs[pseudolanceur] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = client.vie[pseudolanceur].vie
        vie = vie - 10
        imagedevie = defimage(vie)
        const stupefix = new Discord.RichEmbed()
            .setColor('#009eff')
            .setAuthor('*Stupefix !*, ce(tte) pauvre ' + pseudolanceur.nickname + ' ne se sens pas très bien, vacille et tombe dans un fracas sourd', "https://cdn.discordapp.com/emojis/676509851811315745.png?v=1")
            .setDescription('+5 points pour ' + msg.member.nickname + "\n-5 points pour " + pseudolanceur.nickname + "\n-10PV pour " + pseudolanceur.nickname + "\n\nLa vie de " + pseudolanceur + " tombe à " + vie)
            .setTimestamp()
            .setImage(imagedevie)
            .setFooter(msg.member.nickname, msg.author.avatarURL);

        msg.channel.send({ embed: stupefix });
        client.guilds.get("676105426277892136").channels.get("676109640987050006").send(msg.member.nickname + " gagne 5 points !\n" + pseudolanceur.nickname + " perds 5 points !")
        client.vie[pseudolanceur] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
    }


    // Endoloris 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'endoloris ')) {
        const pseudolanceur = msg.mentions.members.first();
        client.msgs[pseudolanceur] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = client.vie[pseudolanceur].vie
        vie = vie - 25
        imagedevie = defimage(vie)
        const endoloris = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setAuthor('*Endoloris !*, ce(tte) pauvre ' + pseudolanceur.nickname + ' souffre énormément et se tortille sur le sol avec une douleur innommable.', "https://cdn.discordapp.com/emojis/676510411893243914.png?v=1")
            .setDescription('-5 points pour ' + msg.member.nickname + "\n-5 points pour " + pseudolanceur.nickname + "\n-25PV pour " + pseudolanceur.nickname + "\n\nLa vie de " + pseudolanceur + " tombe à " + vie)
            .setTimestamp()
            .setImage(imagedevie)
            .setFooter(msg.member.nickname, msg.author.avatarURL);

        msg.channel.send({ embed: endoloris });
        client.guilds.get("676105426277892136").channels.get("676109640987050006").send(msg.member.nickname + " perds 5 points !\n" + pseudolanceur.nickname + " perds 5 points !")
        client.vie[pseudolanceur] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
    }


    // Petrificus 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'petrificus ')) {
        const pseudolanceur = msg.mentions.members.first();
        client.msgs[pseudolanceur] = {
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
        msg.delete()
        vie = client.vie[pseudolanceur].vie
        vie = vie - 5
        imagedevie = defimage(vie)
        const petrificus = new Discord.RichEmbed()
            .setColor('#ffd100')
            .setAuthor('*Petrificus totalus !*, ce(tte) pauvre ' + pseudolanceur.nickname + ' devient une statue et ne bouge pas.' + pseudolanceur.nickname + " passe son tour", "https://cdn.discordapp.com/emojis/676510411893243914.png?v=1")
            .setDescription('+5 points pour ' + msg.member.nickname + "\n-2 points pour " + pseudolanceur.nickname + "\n-5PV pour " + pseudolanceur.nickname + "\n\nLa vie de " + pseudolanceur + " tombe à " + vie)
            .setTimestamp()
            .setImage(imagedevie)
            .setFooter(msg.member.nickname, msg.author.avatarURL);

        msg.channel.send({ embed: petrificus });
        client.guilds.get("676105426277892136").channels.get("676109640987050006").send(msg.member.nickname + " gagne 5 points !\n" + pseudolanceur.nickname + " perds 2 points !")
        client.vie[pseudolanceur] = {
            vie: vie
        }
        fs.writeFile("./viepoudlard.json", JSON.stringify(client.vie, null, 4), err => {
            if (err) throw err;
        });
    }
    //#endregion

    //#region Toutes les commandes 🔥


    // Aide des commandes 🔥


    if (msg.guild && msg.content.startsWith('-help')) {
        msg.delete()
        if (msg.guild.id === ID_LionDynasty) {
            msg.channel.send("> Voici l'aide des commandes du bot \n> Le préfixe actuel est `" + prefix + "` \n **Commandes disponibles avec niveaux ;** \n`" + prefix + "e *emoji*` ➤ Permet de choisir l'emoji devant ton pseudo. \n`" + prefix + "re` ➤ Permet de choisir un émoji random devant ton pseudo \n`" + prefix + "r_nature` ➤ Permet de choisir un émoji random dans la catégorie nature devant ton pseudo \n`" + prefix + "r_loisirs` ➤ Permet de choisir un émoji random dans la catégorie loisirs devant ton pseudo \n`" + prefix + "r_nourriture` ➤ Permet de choisir un émoji random dans la catégorie nourriture devant ton pseudo \n**Commandes Administratives** \n`" + prefix + "prefix *préfixe*` ➤  Permet de changer le préfixe du bot \n`" + prefix + "ex *@mention*` ➤ Permet d'exiler un membre mentionné \n`" + prefix + "unex *@mention*` ➤ Permet d'annuler l'exil d'un membre mentionné \n`" + prefix + "wbannonce *message*` ➤ Permet d'envoyer un message privé à tous les membres du serveur ayant accès au Salon où la commande est effectuée\n`" + prefix + "say *message*` ➤ Permet de recopier le message inscrit\n\n *Aide demandée par " + msg.author.username + "*")
        }
        if (msg.guild.id === ID_Poudlard) {
            msg.channel.send("> Voici l'aide des commandes du bot \n> Le préfixe actuel est `" + prefix + "` \n **Commandes membres ;** \n`" + prefix + "e *emoji*` ➤ Permet de choisir l'emoji devant ton pseudo. \n`" + prefix + "re` ➤ Permet de choisir un émoji random devant ton pseudo  \n`" + prefix + "r_nature` ➤ Permet de choisir un émoji random dans la catégorie nature devant ton pseudo \n`" + prefix + "r_loisirs` ➤ Permet de choisir un émoji random dans la catégorie loisirs devant ton pseudo \n`" + prefix + "r_nourriture` ➤ Permet de choisir un émoji random dans la catégorie nourriture devant ton pseudo \n**Commandes Administratives** \n`" + prefix + "prefix *préfixe*` ➤  Permet de changer le préfixe du bot \n`" + prefix + "wbannonce *message*` ➤ Permet d'envoyer un message privé à tous les membres du serveur ayant accès au Salon où la commande est effectuée (*A utiliser avec modération*) \n`" + prefix + "griffondor *@mention*` ➤ Permet de transformer un membre en Griffondor\n`" + prefix + "serdaigle *@mention*` ➤ Permet de transformer un membre en Serdaigle \n`" + prefix + "poufsouffle *@mention*` ➤ Permet de transformer un membre en Poufsouffle \n`" + prefix + "serpentard *@mention*` ➤ Permet de transformer un membre en Serpentard\n`" + prefix + "say *message*` ➤ Permet de recopier le message inscrit\n\n *Aide demandée par " + msg.author.username + "*")
        }
        if (msg.guild.id === ID_LionDynasty || msg.guild.id === ID_Poudlard) {
        } else msg.channel.send("> Voici l'aide des commandes du bot \n> Le préfixe actuel est `" + prefix + "`\n`" + prefix + "e *emoji*` ➤ Permet de choisir l'emoji devant ton pseudo. \n`" + prefix + "re` ➤ Permet de choisir un émoji random devant ton pseudo \n**Commandes Administratives** \n`" + prefix + "prefix *préfixe*` ➤  Permet de changer le préfixe du bot \n`" + prefix + "wbannonce *message*` ➤ Permet d'envoyer un message privé à tous les membres du serveur ayant accès au Salon où la commande est effectuée\n`" + prefix + "say *message*` ➤ Permet de recopier le message inscrit\n\n *Aide demandée par " + msg.author.username + "*")

    }

    // Invitation du BOT 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'invite')) {
        msg.channel.send("> Voici le lien d'invitation du bot :\nhttps://discordapp.com/oauth2/authorize?client_id=618796535869866004&scope=bot&permissions=2146958847")
    }


    // Messages privés 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'wbannonce ')) {
        msg.delete()
        if (!msg || msg.author.bot) return;
        if (msg.member.id === '472063899164868608') {
            return msg.channel.send("> Mais t'as cru quoi Mathabig ?")
        } else {
            if ((msg.member.hasPermission('ADMINISTRATOR')) === true || msg.member.id === '393378313663676427') {
                const prefixl = prefix + "wbannonce ";
                let text = msg.content.slice(prefixl.length);
                msg.channel.members.forEach(member => {
                    if (member.id != client.user.id && !member.user.bot) member.send("**Voici de nouvelles infos concernant " + msg.guild.name + " !** \n" + text)
                });
                msg.channel.send("**> Voici à quoi ressemble votre annonce**\n" + text)
            }
            else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
        }
    }


    // Messages persos 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'say ')) {
        msg.delete()
        if (!msg || msg.author.bot) return;
        const prefixl = prefix + "say ";
        let text = msg.content.slice(prefixl.length);
        msg.channel.send(text)
    }


    // Changer de préfix 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'prefix ')) {
        msg.delete()
        const args = msg.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        prefix = args
        msg.channel.send("> Le prefix est désormais :  ```" + args + "```")
    }


    // Lion Dynasty Exil 🔥


    if (msg.guild && msg.content.startsWith(prefix + 'ex ')) {
        if (msg.guild.id === ID_LionDynasty) {
            if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
                const pseudo = msg.mentions.members.first();
                pseudo.addRole("649701014089498625");
                pseudo.addRole("673213432635326465");
                msg.channel.send("> " + pseudo + " a été exilé(e) !")
            }
            else msg.channel.send("> Désolé " + msg.author.username + " mais tu n'as pas les permissions nécessaires pour effectuer cette commande");
        }
        else msg.channel.send("Désolé " + msg.author.username + " mais cette commande n'est pas disponible sur ce serveur");
    }


    // Lion Dynasty UnExil 🔥


    if (msg.guild && msg.content.startsWith(prefix + 'unex ')) {
        msg.delete()
        if (msg.guild.id === ID_LionDynasty) {
            if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
                const pseudo = msg.mentions.members.first();
                pseudo.removeRole("649701014089498625");
                pseudo.removeRole("673213432635326465");
                msg.channel.send("> " + pseudo + " n'est plus exilé(e) !")
            }
            else msg.channel.send("> Désolé " + msg.author.username + " mais tu n'as pas les permissions nécessaires pour effectuer cette commande");
        }
        else msg.channel.send("Désolé " + msg.author.username + " mais cette commande n'est pas disponible sur ce serveur");
    }


    // Emoji aléatoire 🔥


    const emojis = ["🧢", "🎩", "👑", "🎓", "💍", "💄", "💧", "🌟", "🌙", "🐅", "🐆", "🐊", "🐋", "🐳", "🦈", "🐬", "🌑", "🌘", "💨", "💦", "⚡", "🔥", "💥", "🌎", "🐢", "🐔", "🐙", "🐥", "🥖", "🥂", "🏀", "⚽", "🏈", "⚾", "🏉", "🏐", "🎾", "🏸", "🏓", "🏹", "🌈", "🛶", "🗻", "🌋", "🚀", "🛸", "💊", "🔧", "🔨", "🚿", "🔒", "📐", "🔮", "🔎", "💙", "💚", "💛", "⭕", "🔺", "➰", "🔸", "💲", "🏡", "🚗", "🚙"]

    if (msg.guild && msg.content.startsWith(prefix + 're')) {
        msg.delete()

        // Lion Dynasty
        if (msg.guild.id === ID_LionDynasty) {
            if (msg.member.roles.has(ID5) === true || msg.member.roles.has(ID6) === true || msg.member.roles.has(ID7) === true || msg.member.roles.has(ID8) === true || msg.member.roles.has(ID9) === true || msg.member.roles.has(ID10) === true || msg.member.roles.has(ID11) === true || msg.member.roles.has(ID12) === true || msg.member.roles.has(ID13) === true || msg.member.roles.has(ID14) === true || msg.member.roles.has(ID16) === true || msg.member.roles.has(ID18) === true || msg.member.roles.has(ID20) === true || msg.member.roles.has(ID60) === true || msg.member.roles.has(ID100) === true) {
                var pseudomji = msg.member.nickname.substring(1);
                var randommoji = Math.floor(Math.random() * emojis.length);
                msg.member.setNickname(emojis[randommoji] + pseudomji)
                msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis[randommoji] + "**");
            }
            else msg.channel.send("> Pour rentrer cette commande, il faut être au moins niveau 5 !");
        } else {
            var pseudomji = msg.member.nickname.substring(1);
            var randommoji = Math.floor(Math.random() * emojis.length);
            msg.member.setNickname(emojis[randommoji] + pseudomji)
            msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis[randommoji] + "**");
        }
    }



    // Emojis Random classes 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'r_nature')) {
        if (msg.guild.id === ID_LionDynasty) {
            if (msg.member.roles.has(ID8) === true || msg.member.roles.has(ID9) === true || msg.member.roles.has(ID10) === true || msg.member.roles.has(ID11) === true || msg.member.roles.has(ID12) === true || msg.member.roles.has(ID13) === true || msg.member.roles.has(ID14) === true || msg.member.roles.has(ID16) === true || msg.member.roles.has(ID18) === true || msg.member.roles.has(ID20) === true || msg.member.roles.has(ID60) === true || msg.member.roles.has(ID100) === true) {
                var pseudomji = msg.member.nickname.substring(1);
                var randommoji = Math.floor(Math.random() * emojis.length);
                msg.member.setNickname(emojis_nature[randommoji] + pseudomji)
                msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_nature[randommoji] + "**");
            }
            else msg.channel.send("> Pour rentrer cette commande, il faut être au moins niveau 8 !");
        } else {
            var pseudomji = msg.member.nickname.substring(1);
            var randommoji = Math.floor(Math.random() * emojis.length);
            msg.member.setNickname(emojis_nature[randommoji] + pseudomji)
            msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_nature[randommoji] + "**");
        }
    }

    if (msg.guild && msg.content.startsWith(prefix + 'r_nourriture')) {
        if (msg.guild.id === ID_LionDynasty) {
            if (msg.member.roles.has(ID8) === true || msg.member.roles.has(ID9) === true || msg.member.roles.has(ID10) === true || msg.member.roles.has(ID11) === true || msg.member.roles.has(ID12) === true || msg.member.roles.has(ID13) === true || msg.member.roles.has(ID14) === true || msg.member.roles.has(ID16) === true || msg.member.roles.has(ID18) === true || msg.member.roles.has(ID20) === true || msg.member.roles.has(ID60) === true || msg.member.roles.has(ID100) === true) {
                var pseudomji = msg.member.nickname.substring(1);
                var randommoji = Math.floor(Math.random() * emojis.length);
                msg.member.setNickname(emojis_nourriture[randommoji] + pseudomji)
                msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_nourriture[randommoji] + "**");
            }
            else msg.channel.send("> Pour rentrer cette commande, il faut être au moins niveau 8 !");
        } else {
            var pseudomji = msg.member.nickname.substring(1);
            var randommoji = Math.floor(Math.random() * emojis.length);
            msg.member.setNickname(emojis_nourriture[randommoji] + pseudomji)
            msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_nourriture[randommoji] + "**");
        }
    }


    if (msg.guild && msg.content.startsWith(prefix + 'r_loisirs')) {
        if (msg.guild.id === ID_LionDynasty) {
            if (msg.member.roles.has(ID8) === true || msg.member.roles.has(ID9) === true || msg.member.roles.has(ID10) === true || msg.member.roles.has(ID11) === true || msg.member.roles.has(ID12) === true || msg.member.roles.has(ID13) === true || msg.member.roles.has(ID14) === true || msg.member.roles.has(ID16) === true || msg.member.roles.has(ID18) === true || msg.member.roles.has(ID20) === true || msg.member.roles.has(ID60) === true || msg.member.roles.has(ID100) === true) {
                var pseudomji = msg.member.nickname.substring(1);
                var randommoji = Math.floor(Math.random() * emojis.length);
                msg.member.setNickname(emojis_loisirs[randommoji] + pseudomji)
                msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_loisirs[randommoji] + "**");
            }
            else msg.channel.send("> Pour rentrer cette commande, il faut être au moins niveau 8 !");
        } else {
            var pseudomji = msg.member.nickname.substring(1);
            var randommoji = Math.floor(Math.random() * emojis.length);
            msg.member.setNickname(emojis_loisirs[randommoji] + pseudomji)
            msg.channel.send("> **Cet emoji a été choisi aléatoirement: " + emojis_loisirs[randommoji] + "**");
        }
    }



    // Choix d'emojis 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'e ')) {
        // Lion Dynasty
        if (msg.guild.id === ID_LionDynasty) {
            if (msg.member.roles.has(ID10) === true || msg.member.roles.has(ID11) === true || msg.member.roles.has(ID12) === true || msg.member.roles.has(ID13) === true || msg.member.roles.has(ID14) === true || msg.member.roles.has(ID16) === true || msg.member.roles.has(ID18) === true || msg.member.roles.has(ID20) === true || msg.member.roles.has(ID60) === true || msg.member.roles.has(ID100) === true) {
                const prefixl = prefix + "e ";
                var emojichoisi = msg.content.slice(prefixl.length);
                if (emojichoisi.length > 2) {
                    msg.channel.send(msg.author.username + ", désolé mais cet emoji n'est pas compatible ou le caractère rentré est trop long ou l'emoji est un emoji nitro personnalisé")

                }
                else {
                    if (msg.member.nickname === null) {
                        msg.channel.send("> **Vous avez choisi cet emoji : " + emojichoisi + "**");
                        const nicknam = msg.author.username.substring(1);
                        msg.member.setNickname(emojichoisi + nicknam);
                    } else {
                        msg.channel.send("> **Vous avez choisi cet emoji : " + emojichoisi + "**");
                        const nickname = msg.member.nickname;
                        const nicknam = nickname.substring(1);
                        msg.member.setNickname(emojichoisi + nicknam);
                    }
                }
            }
            else msg.channel.send("> Pour rentrer cette commande, il faut au moins être niveau 10 !");
        } else {
            const prefixl = prefix + "e ";
            var emojichoisi = msg.content.slice(prefixl.length);
            if (emojichoisi.length > 2) {
                msg.channel.send(msg.author.username + ", désolé mais cet emoji n'est pas compatible ou le caractère rentré est trop long ou l'emoji est un emoji nitro personnalisé")

            }
            else {
                if (msg.member.nickname === null) {
                    msg.channel.send("> **Vous avez choisi cet emoji : " + emojichoisi + "**");
                    const nicknam = msg.author.username.substring(1);
                    msg.member.setNickname(emojichoisi + nicknam);
                } else {
                    msg.channel.send("> **Vous avez choisi cet emoji : " + emojichoisi + "**");
                    const nickname = msg.member.nickname;
                    const nicknam = nickname.substring(1);
                    msg.member.setNickname(emojichoisi + nicknam);
                }
            }
        }
    }


    // Liste des serveurs 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'list')) {
        let listeserv = ""
        msg.delete()
            .then(client.guilds.forEach(server => listeserv = listeserv + "\n*" + server.name + " **|** " + server.memberCount + " personnes présentes* **|** *" + server.id + "*"))
        msg.channel.send("> **Le bot est sur les serveurs suivants :**")
        msg.channel.send(listeserv)

    }


    // Créer une invitation pour un ID de serveur précis 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'InvCreate')) {
        msg.delete()
        if (msg.member.id === '393378313663676427') {
            const prefixl = prefix + "InvCreate ";
            var idserveur = msg.content.slice(prefixl.length);
            const invitechannels = client.guilds.get(idserveur).channels.filter(c => c.permissionsFor(client.guilds.get(idserveur).me).has('CREATE_INSTANT_INVITE'))
            invitechannels.random().createInvite()
                .then(invite => msg.author.send('> **Invitation crée avec succès, la voici :**\nhttps://discord.gg/' + invite.code))
                .then(msg.channel.send("> Va voir tes messages privés " + msg.author))
        } else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
    }


    // Publicité XCOM 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'xcom')) {
        msg.delete()
        const xcom = new Discord.RichEmbed()
            .setColor('#6b00ff')
            .setAuthor("🌀 𝐗𝐂𝐨𝐦 est un réseau de communication inter-serveur développé par WailroneFirelion#001, grâce à 🌀 𝐗𝐂𝐨𝐦, vous pouvez créer une connexion avec un serveur discord différent du votre. Vous pouvez ainsi parler avec l'autre serveur via un salon prédéfini")
            .setDescription('Pour ajouter X-Com à votre serveur, demandez-moi en message privé')
            .setTimestamp()
            .setFooter("🌀 𝐗𝐂𝐨𝐦", msg.author.avatarURL);

        msg.channel.send({ embed: xcom });
    }


    // Maisons Poudlard 🔥

    const ID_Serdaigle = "676109534217109515"
    const ID_Poufsouffle = "676109535026479115"
    const ID_Griffondor = "676109533231317024"
    const ID_Serpentard = "676109532656697399"

    if (msg.guild && msg.content.startsWith(prefix + 'griffondor ')) {
        if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
            const pseudopd = msg.mentions.members.first();


            pseudopd.removeRole(ID_Serdaigle)
            pseudopd.removeRole(ID_Serpentard)
            pseudopd.removeRole(ID_Poufsouffle)

            pseudopd.addRole(ID_Griffondor);
            const nickname = pseudopd.nickname;
            const nicknam = nickname.substring(1);
            pseudopd.setNickname("🦁 " + nicknam);
            msg.channel.send("> " + "🦁 " + nicknam + " est désormais Griffondor !")
        }
        else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
    }

    if (msg.guild && msg.content.startsWith(prefix + 'poufsouffle ')) {
        if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
            const pseudopd = msg.mentions.members.first();

            pseudopd.removeRole(ID_Serdaigle)
            pseudopd.removeRole(ID_Griffondor)
            pseudopd.removeRole(ID_Serpentard)

            pseudopd.addRole(ID_Poufsouffle);
            const nickname = pseudopd.nickname;
            const nicknam = nickname.substring(1);
            pseudopd.setNickname("🦡 " + nicknam);
            msg.channel.send("> " + "🦡 " + nicknam + " est désormais Poufsouffle !")
        }
        else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
    }

    if (msg.guild && msg.content.startsWith(prefix + 'serpentard ')) {
        if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
            const pseudopd = msg.mentions.members.first();

            pseudopd.removeRole(ID_Serdaigle)
            pseudopd.removeRole(ID_Griffondor)
            pseudopd.removeRole(ID_Poufsouffle)

            pseudopd.addRole(ID_Serpentard);
            const nickname = pseudopd.nickname;
            const nicknam = nickname.substring(1);
            pseudopd.setNickname("🐍 " + nicknam);
            msg.channel.send("> " + "🐍 " + nicknam + " est désormais Serpentard !")
        }
        else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
    }

    if (msg.guild && msg.content.startsWith(prefix + 'serdaigle ')) {
        if ((msg.member.hasPermission('ADMINISTRATOR')) === true) {
            const pseudopd = msg.mentions.members.first();

            pseudopd.removeRole(ID_Griffondor)
            pseudopd.removeRole(ID_Serpentard)
            pseudopd.removeRole(ID_Poufsouffle)

            pseudopd.addRole(ID_Serdaigle);
            const nickname = pseudopd.nickname;
            const nicknam = nickname.substring(1);
            pseudopd.setNickname("🦅 " + nicknam);
            msg.channel.send("> " + "🦅 " + nicknam + " est désormais Serdaigle !")
        }
        else msg.channel.send("> Désolé " + msg.author.username + " mais tu es un sous être, et les sous êtres ne peuvent pas rentrer cette commande, désolé...");
    }


    // Ajouter emoji devant un pseudo 🔥

    if (msg.guild && msg.content.startsWith(prefix + 'addmoji ')) {
        if (msg.member.id === '393378313663676427') {
            const pseudomt = msg.mentions.members.first();
            const prefixl = prefix + "addmoji ";
            const retirer = prefixl + pseudomt + " "
            const emojiaddmoji = msg.content.slice(retirer.length);

            if (pseudomt.nickname === null) {
                pseudomt.setNickname(emojiaddmoji + " " + pseudomt.displayName);
                msg.channel.send("> L'emoji " + emojiaddmoji + " a été mis devant le pseudo de " + pseudomt)
            }

            else {
                pseudomt.setNickname(emojiaddmoji + " " + pseudomt.nickname);
                msg.channel.send("> Le préfixe " + emojiaddmoji + " a été mis devant le pseudo de " + pseudomt)
            }

        }
        else msg.channel.send("> Désolé " + msg.author.username + " mais seul W.Firelion peut utiliser cette commande");
    }


    if (msg.guild && msg.content.startsWith(prefix + 'power')) {
        msg.delete()
        const power = new Discord.RichEmbed()
            .setColor('#ffd100')
            .setAuthor("La puissance de " + msg.author.username + ", le destructeur de monde s'intensifie")
            .setTimestamp()
            .setImage("https://thumbs.gfycat.com/AdmirableDiligentArctichare-max-1mb.gif")
            .setFooter(msg.author.username, msg.author.avatarURL);

        msg.channel.send({ embed: power })
            .then(msg => msg.delete(5000))

    }

    if (msg.guild && msg.content.startsWith(prefix + '2_power')) {
        msg.delete()
        const power = new Discord.RichEmbed()
            .setColor('#ffd100')
            .setAuthor("La puissance de " + msg.author.username + ", le destructeur de monde s'intensifie")
            .setTimestamp()
            .setImage("https://i.pinimg.com/originals/ea/eb/3c/eaeb3c98441c1c61644ea312cde039f8.gif")
            .setFooter(msg.author.username, msg.author.avatarURL);

        msg.channel.send({ embed: power })
            .then(msg => msg.delete(5000))

    }


    //#endregion

    //#region XCOM 🔥 



    //Lion Dynasty et Hogwarts


    let serveur1 = "648956979666223105"
    let serveur2 = "676105426277892136"
    let channelserveur1 = "677173679058321438"
    let channelserveur2 = "677173481762455562"
    let nomdelaliste = "LD - Hogwarts"
    //PENSER A ANNONCER LE NOM DE LA LISTE TOUT EN HAUT DU PROGRAMME



    if (msg.channel.id === channelserveur2) {
        let auteurdumsg = client.msgs[nomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(serveur1).channels.get(channelserveur1).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(serveur1).channels.get(channelserveur1).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(serveur1).channels.get(channelserveur1).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[nomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }

    if (msg.channel.id === channelserveur1) {
        let auteurdumsg = client.msgs[nomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(serveur2).channels.get(channelserveur2).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(serveur2).channels.get(channelserveur2).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(serveur2).channels.get(channelserveur2).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[nomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }





    //Lion Dynasty et Secte des lunes

    let aserveur1 = "648956979666223105"
    let aserveur2 = "676105439422709761"
    let achannelserveur1 = "676864447171788801"
    let achannelserveur2 = "678545246854053890"
    let anomdelaliste = "LD - Secte des Lunes"
    //PENSER A ANNONCER LE NOM DE LA LISTE TOUT EN HAUT DU PROGRAMME


    if (msg.channel.id === achannelserveur2) {
        let auteurdumsg = client.msgs[anomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(aserveur1).channels.get(achannelserveur1).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(aserveur1).channels.get(achannelserveur1).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(aserveur1).channels.get(achannelserveur1).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[anomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }

    if (msg.channel.id === achannelserveur1) {
        let auteurdumsg = client.msgs[anomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(aserveur2).channels.get(achannelserveur2).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(aserveur2).channels.get(achannelserveur2).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(aserveur2).channels.get(achannelserveur2).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[anomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }











    //Lion Dynasty et minecraftia

    let baserveur1 = "648956979666223105"
    let baserveur2 = "472395531361189888"
    let bachannelserveur1 = "679042859277615114"
    let bachannelserveur2 = "678914789442846732"
    let banomdelaliste = "LD - Minecraftia"
    //PENSER A ANNONCER LE NOM DE LA LISTE TOUT EN HAUT DU PROGRAMME


    if (msg.channel.id === bachannelserveur2) {
        let auteurdumsg = client.msgs[banomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(baserveur1).channels.get(bachannelserveur1).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(baserveur1).channels.get(bachannelserveur1).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(baserveur1).channels.get(bachannelserveur1).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[banomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }

    if (msg.channel.id === bachannelserveur1) {
        let auteurdumsg = client.msgs[banomdelaliste].auteur;
        if (msg.author.id === "618796535869866004") {
            return;
        }
        else {
            if (auteurdumsg === msg.author.username) {
                client.guilds.get(baserveur2).channels.get(bachannelserveur2).send(msg.content)
            } else {
                if (msg.member.nickname === null) {
                    client.guilds.get(baserveur2).channels.get(bachannelserveur2).send("> **" + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
                }
                else client.guilds.get(baserveur2).channels.get(bachannelserveur2).send("> **" + msg.member.nickname + "  →  " + msg.author.username + "** dit depuis **" + msg.guild.name + "**\n" + msg.content)
            }
            client.msgs[banomdelaliste] = {
                auteur: msg.author.username
            }
            fs.writeFile("./auteur.json", JSON.stringify(client.msgs, null, 4), err => {
                if (err) throw err;
            });
        }
    }
    //#endregion
});
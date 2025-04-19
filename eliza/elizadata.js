// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What are you hunting?",
// additions (not original)
"Talk to me.",
"What do you need to know?"
];

var elizaFinals = [
"Saving people, hunting things, the family business.",
// additions (not original)
"Let me know if you need anything else.",
"Good luck.",
"Be careful."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
    "I don't know, you should call Sam.",
    "I don't know you should call Bobby.",
    "I don't know you should call Dean.",
     "I'm not sure I understand you fully.",
     "what do you need to know?",
     "That is interesting.  Please continue.",
     "Tell me more about that."
  ]]
]],
["* who is dean *", [
  "Dean Winchester is a hunter of the supernatural. He drives across the country working with his brother Sam, their father figure Bobby, and his bestfriend Castiel.",
]]
["* who is sam *", [
  "Sam Winchester is a hunter of the supernatural. He drives across the country working with his brother Dean and their father figure Bobby.",
]]
["* who is bobby *", [
  "Robert Singer is a hunter of the supernatural. He assists Sam, Dean, and Castiel with hunts across the country."
]]
["* who is castiel *", [
  "Castiel is an Angel of the Lord that pulled Dean from Hell and then found a family in Sam, Dean, and Bobby.",
]],
["sorry", 0, [
 ["*", [
     "No need for apologies.",
     "It's nothing, keep going.",
     "It's really okay, just focus on what you remember."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["demon", 5, [
 ["* demon's weakness *", [
     "Holy water, iron, and salt."
  ]],
 ["* trap a demon *", [
     "Create a devil's trap."
  ]],
 ["* kill a demon *", [
     "You have to use the Ruby's knife or the Colt.",
     "An exorcism could work, but it only sends them back."
  ]],
  ["* demon's power *", [
    "Demons have super human strength and are able to possess human hosts."
  ]],
  ["* demon's strength *", [
    "goto demon's power"
  ]]
]],
["angels", 5, [
 ["* angel's weakness *", [
     "Use an Angelic exorcism or Enochian sigils to ward the angel off.",
     "Removing their Grace will leave them powerless.",
     "If you are hiding out, use hexbags to hide your location from any angels.",
     "The Colt will knock them down for a bit, but it won't kill them."
   ]]
  ]],
 ["* trap an angel *", [
     "Pour a ring of holy oil and light it on fire to trap an angel inside."
  ]],
  ["* kill an angel *", [
    "Use an Angel Blade. They all have one on themselves. Remember, they don't work on Archangels though.",
    "You can try to make a deal with Death, but I doubt he will help.",
    "A nephilim is capable, but the only one alive is Jack, and he is hard to find."
  ]],
  ["* angel's power *", [
    "Angels have super strength, super senses, and are capable of telekinesis. They possess human vessels, but only if they gain permission from the host.",
    "They are immortal and can kill any demon, monster, or human by smiting them."
  ]],
  ["* angel's strength *", [
    "goto angel's power"
  ]],
["hellhounds", 3, [
 ["* hellhound's weakness *", [
     "Salt will harm them or you can use it as a barrier.",
     "Goofer Dust will keep them away if you use it as a barrier.",
     "Place the herb Devil's Shoestring above a doorway to keep them out."
  ]],
  ["* kill a hellhound *",[
    "Grab the Colt, Ruby's knife, or an angel blade to get it done.",
    "Iron can work as long as you have enough."
  ]],
  ["* hellhound's power *", [
    "Hellhounds are invisible with super strenth, speed, and immortality. When the hellhounds are coming for someone, the person usually starts to hallucinate.",
  ]],
  ["* hellhound's strength *", [
    "goto hellhound's power"
  ]]
]],
["leviathons", 4, [
 ["* leviathon's weakness *", [
     "Certain spells can stun them for a little while.",
     "Borax will burn them, but the more powerful ones are affected less."
  ]],
  ["* kill a leviathon *", [
    "The only known weapon to kill a leviathon is the Bone of the Righteous Mortal Washed in the Three Bloods Fallen.",
    "If you decapitate one, they will temporarily be killed. The head needs to be kept away from the body, or it will eventually reatatch itself.",
    "Trap them in Purgatory and they can be killed there."
  ]],
  ["* leviathon's power *", [
    "Leviathons are immortal beings that have super strength and super intelligence. They have the ability to shapeshift and mimic others' voices."
  ]],
  ["* leviathon's strength *", [
    "goto leviathon's power"
  ]]
]],
["shapeshifters", 3, [
 ["* shapeshifter's weakness", [
     "Silver and Iridium harm them and burn their flesh."
  ]],
  ["* kill a shapeshifter *", [
    "A silver bullet or blade to the heart will kill a shapeshifter.",
    "Decapitation will work to kill one."
  ]],
  ["* shapeshifter's power *", [
    "Shapeshifters have super strength, super speed, and super agility. Their primary strength is their ability to shapeshift into other people. When they shapeshift into a living person, they also have access to that person's memories."
  ]],
  ["* shapeshifter's strength *", [
    "goto shapeshifter's power"
  ]]
]],
["skinwalkers",0, [
  ["* skinwalker's weakness", [
    "goto shapeshifter's weakness"
  ]],
  ["* kill a skinwalker *", [
    "goto kill a shapeshifter"
  ]],
  ["* skinwalker's power *", [
    "The are a type of shapeshifter so they have super speed, super strength, and super agility. They are able to shapeshift, but only into canines. Skinwalkers also have an infectious bite that turns the bitten into a skinwalker."
  ]],
  ["* skinwalker's strength *", [
    "goto skinwalker's power"
  ]]
]],
["wendigos", 0, [
 ["* wendigo's weakness", [
     "Silver, iron, and steel will harm wendigos",
     "Anasazi symbols should be drawn in protective circles to ward wendigos off and keep you safe."
  ]],
  ["* kill a wendigo *", [
    "Wendigos are very sensitive to heat. Fire can be used to kill them.",
    "Steel, iron, and silver with lots of effort may be able to kill them."
  ]],
  ["* wendigo's power *", [
    "Wendigos have super strengt, super agility, and super speed. They are immortal creatures that use voice mimicry to lure unsuspecting victims.",
  ]],
  ["* wendigo's strength *", [
    "goto wendigo's power"
  ]]
]],
["fairies", 15, [
 ["* fairy's weakness *", [
     "Iron can be very harmful to fairies.",
     "Silver can be used on dark fairies.",
     "If you pour sugar or salt in front of a fairy, they will have to stop and count every grain."
  ]],
  ["* kill a fairy *", [
    "Silver is known to kill dark fairies."
  ]],
  ["* fairy's power *", [
    "Fairies are magical immortal beings that have the ability of teleportation and telekinesis. Fairies can only be seen if they want ot be or by people who have been to their realm."
  ]],
  ["* fairy's strength *", [
    "goto fairy's power"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "Dude, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "Dude, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "Dude, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "Dude, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "Dude, I only speak English."
  ]]
]],
["witches", 0, [
 ["* witch's weakness *", [
     "Iron can repress a witch's magical power.",
     "Magic can be used against withces.",
     "It is important to remember that witches are mortal beings."
  ]],
  ["* kill a witch *", [
    "It is important to remember that witches are mortal beings."
  ]],
  ["* trap a witch *", [
    "Use a witchcatcher to restrain and control a witch. Most were detsroyed after the Inquisition though."
  ]],
  ["* witch's power *", [
    "Witches are abel to complete all different kinds of spell casting and potion brewing including astral projection, helaing, hexing, and conjuration."
  ]],
  ["* witch's strength *", [
    "goto witch's power"
  ]]
]],
["sirens", 50, [
 ["* siren's weakness *", [
     "A siren's true form will be seen when they are in a mirror."
  ]],
  ["* kill a siren *", [
    "To kill a siren you have to get a bronze dagger in the blood of one of their victims."
  ]],
  ["* siren's power *", [
    "Sirens use telepathy to read teh minds of their target and can alter their appearence to lure their target. They use venom spit to compulse their victims to do anythign to prove thei love and devotion to the siren."
  ]],
  ["* siren's strength *", [
    "goto siren's power"
  ]]
]],
["vengeful spirits", 0, [
 ["* vengeful spirit's weakness *", [
     "Salt and iron can be used to harm or ward off vengeful spirits."
   ]],
  ["* kill a venegeful spirit *", [
    "The only way to put a vengeful spirit to rest is to salt and burn their remains."
  ]],
  ["* vengeful spirit's power *", [
    "Vengeful spirits use telekinesis, teleportation, and possession to project their pain or anger."
  ]],
  ["* vengeful spirit's strength *", [
    "goto vengeful spirit's power"
  ]]
]],
["vampires", 0, [
 ["* vampire's weakness *", [
     "A vampire can be incapacitated using dead man's blood.",
     "Sunlight will burn their skin, so they usually stay indoors during the day."
   ]],
   ["* kill a vampire *", [
     "Decapitaiton is the most common way to kill a vampire, but the Colt will also work on them."
   ]],
   ["* vampire's power *", [
     "Vampires have super stregth, super speed, super agility, and super senses. They are immortal beings that are able to quickly heal."
   ]],
   ["* vampire's strength *", [
     "goto vampire's power"
   ]]
  ]],
 ["* What is the Colt *", [
     "The Colt is a mystical revolver created by Samuel Colt in 1835. The revolver is able to kill almost anything: vampires, demons, angels, etc."
]],
 ["* what is Ruby's knife *", [
     "Ruby's knife is an ancient weapon designed ot kill demonic entitites."
]],
  ["* who is Jack *", [
    "Jack is a nephilim. He is the son of Archangel Lucifer and human Kelly Kline.",
    "He is the first and only nephilim born from an Archangel.",
    "Jack is arguably the most powerful being in the universe."
]],
["hello", 0, [
 ["* hello *", [
     "Talk to me.",
     "What do you need to know?",
     "What are you hunting?"
   ]]
 ]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof

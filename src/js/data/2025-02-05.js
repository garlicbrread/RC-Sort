dataSetVersion = "2025-02-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Book",
    key: "book",
    tooltip: "Check this to select certain books.",
    checked: false,
    sub: [
      { name: "Sails in the Fog", key: "SIF" },
      { name: "Moonborn", key: "MB" },
      { name: "My Hollywood Story", key: "MHS" },
      { name: "Queen in 30 Days", key: "Q30" },
      { name: "Shadows of Saintfour", key: "SFS" },
      { name: "Wave Patrol", key: "WP" },
      { name: "Seduced by the Rhythm", key: "SBR" },
      { name: "Chasing You", key: "CY" },
      { name: "Heaven's Secret", key: "HS" },
      { name: "Legend of the Willow", key: "LOW" },
      { name: "Dracula: A Love Story", key: "DLS" },
      { name: "Love From Outer Space", key: "LFOS" },
      { name: "Path of the Valkyrie", key: "POV" },
      { name: "Rage of the Titans", key: "ROT" },
      { name: "Sophie's Ten Wishes", key: "STW" },
      { name: "Sins of London", key: "SOL" },
      { name: "On Thin Ice", key: "OTI" },
      { name: "Arcanum", key: "ARC" },
      { name: "Gladiator Chronicles", key: "GC" },
      { name: "Heart of Trespia", key: "HOT" },
      { name: "Kali: Call of Darkness", key: "KCD" },
      { name: "The Flower From Tiamat's Fire", key: "FTF" },
      { name: "Theodora", key: "THE" },
      { name: "Hell and High Water", key: "HHW" },
      { name: "The One Vol. 1", key: "TO" },
      { name: "Psi", key: "PSI" },
      { name: "Vying For Versailles", key: "VFV" },
      { name: "The Desert Rose", key: "TDR" },
      { name: "Heaven's Secret 2", key: "HS2" },
      { name: "Elite Tag", key: "ET" },
      { name: "Song of the Crimson Nile", key: "SCN" },
      { name: "Chasing You 2", key: "CY2" },
      { name: "Love, Sin & Evil", key: "LSE" },
      { name: "W: Time Catcher", key: "WTC" },
      { name: "Kali: Flame of Samsara", key: "KFS" },
      { name: "Garden of Eden", key: "GOE" },
      { name: "Soulless", key: "SL" },
      { name: "The One Vol. 2", key: "TO2" },
      { name: "Astrea's Broken Heart", key: "ABH" },
      { name: "Heaven's Secret: Requiem", key: "HSR" },
      { name: "And the Haze Will Take Us", key: "HWT" },
      { name: "Shakespeare's Code", key: "SC" },
      { name: "The Parallel Universes Bureau Vol. 1", key: "PUB" },
      { name: "The Missing", key: "TM" },
    ]
  },
  {
    name: "Filter by Character Type",
    key: "type",
    tooltip: "Check this to select which character types you want to include.",
    checked: false,
    sub: [
      { name: "Main Characters", key: "MC" },
      { name: "Love Interests", key: "LI" },
      { name: "Other Characters", key: "Other" },
      { name: "Male", key: "M" },
      { name: "Female", key: "F" },
      { name: "Non-Binary", key: "NB" },
    ]
  },
  {
    name: "Remove animals.",
    key: "animal",
    tooltip: 'Check this if you want to remove animal characters from being listed.',
    checked: false,
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Adelaide",
    img: "c5DqpgX.png",
    opts: {
      book: ["SIF"],
      type: ["MC", "F"],
      animal: false
    }
  },
  {
    name: "Diego de Ochoa",
    img: "tJnkSzK.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Sebastian de Aldana",
    img: "0YT7QlS.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "William",
    img: "NWlZud3.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Chris",
    img: "qdveFSy.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Jackie",
    img: "ptGp0x4.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Lorenza",
    img: "vBKdDm4.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Clive Wellington",
    img: "A7ZnuHo.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Jorge de Fantasma",
    img: "sgZPf11.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Kai the Whaler",
    img: "8UX7hKE.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Manta",
    img: "OhaDcnc.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Mermaid",
    img: "MgzqjFK.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Samedi",
    img: "ohmetZh.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Brigitte",
    img: "aDIf0pN.png",
    opts: {
      book: ["SIF"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Seamus",
    img: "2Pr8b2N.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Bobby",
    img: "htOMdDQ.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Juan",
    img: "PrRPujP.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Flint",
    img: "ze79bFC.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Dirty Lou",
    img: "WMjyRLJ.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Pew",
    img: "VT9mTGb.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Silver",
    img: "rshnJPV.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Billy Bones",
    img: "qsceD4I.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ben Gunn",
    img: "pLdMjQ3.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ponce de Leon",
    img: "8DLUAPf.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Kelpie",
    img: "6KyhLqE.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Anansi",
    img: "99w0Chm.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Tom Good",
    img: "yqNfNje.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Jacques Lumiere",
    img: "PrYzRcC.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ivy",
    img: "ceo4DhK.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Bartholomeo Roberts",
    img: "2YDuTk3.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Conchita",
    img: "3zo4VKV.png",
    opts: {
      book: ["SIF"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Mia",
    img: "8TLXMST.png",
    opts: {
      book: ["MB"],
      type: ["MC", "F"],
      animal: false
    }
  },
  {
    name: "Victor Van Art",
    img: "IImsp7K.png",
    opts: {
      book: ["MB"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Max Fall",
    img: "MZXJQq5.png",
    opts: {
      book: ["MB"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Simon Cook",
    img: "aX4WIH8.png",
    opts: {
      book: ["MB"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Frances",
    img: "nPBvatH.png",
    opts: {
      book: ["MB"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Benny Bart",
    img: "3pDRgvR.png",
    opts: {
      book: ["MB"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Trisha",
    img: "bV0DaN7.png",
    opts: {
      book: ["MB"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Dante Guerra",
    img: "J11NjNj.png",
    opts: {
      book: ["MB"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Mr Bow",
    img: "4Ufced2.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Trevor",
    img: "qGMjnYk.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Louis",
    img: "ATTRSWU.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Camila",
    img: "nQ78Lz7.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Walter",
    img: "yJaD5ZV.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Stella",
    img: "xgAlECj.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Billy",
    img: "tZLYivt.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Dave",
    img: "VgJgaEf.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ethan Wood",
    img: "sqgJ2St.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Dustin Chase",
    img: "lkoAJod.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Noel Miller",
    img: "tDO653L.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Angel Mora",
    img: "dup7Nt6.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Patrick",
    img: "DfdaXPW.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Monica",
    img: "wVCcens.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Howard Crawford",
    img: "EpHQbiY.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Armel De Loconte",
    img: "kJbv4dc.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Daryl",
    img: "5yihisu.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Xander",
    img: "2ppPxny.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Sofia Von Gelts",
    img: "zL4S8Mj.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Arthur",
    img: "LgvoTaJ.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Peter Jench",
    img: "VbqXiB6.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Grace Butler",
    img: "6jq6eh6.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Ashe Clan Leader",
    img: "y0UXwFO.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ralph Fall",
    img: "gMpWdmA.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Sean Fall",
    img: "fxCGmUk.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Helen Fall",
    img: "brWCLVx.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Audrey Fall",
    img: "VAMLiJD.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "John Fall",
    img: "qwwL0bB.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Conrad Fall",
    img: "vWNeMaH.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Samantha Obie",
    img: "EJFQHQN.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Lorette",
    img: "16RUacj.png",
    opts: {
      book: ["MB"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Remi",
    img: "Zl2tN7W.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Emile Obie",
    img: "SLLEccR.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Didier",
    img: "mc7ICW6.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Clovis",
    img: "0ra00WG.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Ashton",
    img: "xQOsFlZ.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Frederic",
    img: "rGS7dyn.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Stanley Fisher",
    img: "HLT338X.png",
    opts: {
      book: ["MB"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Emma",
    img: "9Jje7ZQ.jpg",
    opts: {
      book: ["MHS"],
      type: ["MC", "F"],
      animal: false
    }
  },
  {
    name: "David Tarino",
    img: "NsfLZjY.jpg",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Mikael Anders",
    img: "EH3Ulol.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Anthony Wood",
    img: "ql5KxJH.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Mike",
    img: "gYFhJ3Y.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Ray",
    img: "wWUStkF.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Alex",
    img: "wrPVhAo.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Chris Carter",
    img: "8w9gAy2.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Uno",
    img: "DesAqAC.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Thomas",
    img: "icWvMyo.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Christie",
    img: "LenxXR4.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Jessica",
    img: "V9OznT1.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Margaret",
    img: "Ke3316E.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Karen",
    img: "ru2vIIW.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Nicholas Bird",
    img: "QTQt0ZL.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Gino Gabardini",
    img: "CzcIMxF.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Ellen",
    img: "GxeziYO.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "F"],
      animal: false
    }
  },
  {
    name: "Bean",
    img: "Z4jclTi.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Eric",
    img: "H2v2GPy.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Samantha",
    img: "FltSdtv.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Patrick",
    img: "Aaq99GQ.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Albert",
    img: "DKupiv1.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Archie Milton",
    img: "BHwfCAQ.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "M"],
      animal: false
    }
  },
  {
    name: "Captain Jeff",
    img: "KNy3FZq.png",
    opts: {
      book: ["MHS"],
      type: ["LI", "M"],
      animal: false
    }
  },
  {
    name: "Gina",
    img: "QA63m27.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Whitney",
    img: "Ga4AYtv.png",
    opts: {
      book: ["MHS"],
      type: ["Other", "F"],
      animal: false
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "iH2wqbd.png",
    opts: {
      series: ["UM"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];

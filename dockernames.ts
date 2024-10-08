const left = [
  "admiring",
  "adoring",
  "affectionate",
  "agitated",
  "amazing",
  "angry",
  "awesome",
  "blissful",
  "boring",
  "brave",
  "clever",
  "cocky",
  "compassionate",
  "competent",
  "condescending",
  "confident",
  "cranky",
  "dazzling",
  "determined",
  "distracted",
  "dreamy",
  "eager",
  "ecstatic",
  "elastic",
  "elated",
  "elegant",
  "eloquent",
  "epic",
  "fervent",
  "festive",
  "flamboyant",
  "focused",
  "friendly",
  "frosty",
  "gallant",
  "gifted",
  "goofy",
  "gracious",
  "happy",
  "hardcore",
  "heuristic",
  "hopeful",
  "hungry",
  "infallible",
  "inspiring",
  "jolly",
  "jovial",
  "keen",
  "kind",
  "laughing",
  "loving",
  "lucid",
  "mystifying",
  "modest",
  "musing",
  "naughty",
  "nervous",
  "nifty",
  "nostalgic",
  "objective",
  "optimistic",
  "peaceful",
  "pedantic",
  "pensive",
  "practical",
  "priceless",
  "quirky",
  "quizzical",
  "relaxed",
  "reverent",
  "sad",
  "serene",
  "sharp",
  "silly",
  "sleepy",
  "stoic",
  "stupefied",
  "suspicious",
  "tender",
  "thirsty",
  "trusting",
  "unruffled",
  "upbeat",
  "vibrant",
  "vigilant",
  "vigorous",
  "wizardly",
  "wonderful",
  "xenodochial",
  "youthful",
  "zealous",
  "zen",
];

const right = [
  "aardvark",
  "albatross",
  "alligator",
  "alpaca",
  "anteater",
  "antelope",
  "armadillo",
  "baboon",
  "badger",
  "barracuda",
  "bear",
  "beetle",
  "boar",
  "bobcat",
  "budgerigar",
  "buffalo",
  "butterfly",
  "camel",
  "capybara",
  "chamois",
  "cheetah",
  "chicken",
  "chimpanzee",
  "chinchilla",
  "coati",
  "cobra",
  "cormorant",
  "crab",
  "crane",
  "cricket",
  "crocodile",
  "crow",
  "curlew",
  "deer",
  "dogfish",
  "dolphin",
  "donkey",
  "dove",
  "dragonfly",
  "duck",
  "dugong",
  "dunlin",
  "eagle",
  "echidna",
  "elephant",
  "falcon",
  "ferret",
  "finch",
  "flamingo",
  "frog",
  "gazelle",
  "gecko",
  "giraffe",
  "goldfinch",
  "goosander",
  "goose",
  "gorilla",
  "goshawk",
  "grasshopper",
  "grouse",
  "guanaco",
  "gull",
  "hamster",
  "hare",
  "hawk",
  "hedgehog",
  "heron",
  "hippopotamus",
  "hornet",
  "horse",
  "hummingbird",
  "hyena",
  "ibex",
  "ibis",
  "iguana",
  "impala",
  "jaguar",
  "jellyfish",
  "junglefowl",
  "kangaroo",
  "kingbird",
  "kinkajou",
  "kite",
  "koala",
  "ladybug",
  "lapwing",
  "lark",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lobster",
  "loris",
  "lyrebird",
  "mallard",
  "mammoth",
  "manatee",
  "mandrill",
  "manta",
  "mantis",
  "meerkat",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mosquito",
  "moth",
  "mouse",
  "narwhal",
  "newt",
  "nightingale",
  "octopus",
  "okapi",
  "opossum",
  "ostrich",
  "otter",
  "oyster",
  "panda",
  "panther",
  "parrot",
  "partridge",
  "peafowl",
  "peccary",
  "pelican",
  "penguin",
  "pheasant",
  "pigeon",
  "platypus",
  "pony",
  "porcupine",
  "porpoise",
  "quail",
  "rabbit",
  "raccoon",
  "raven",
  "rhinoceros",
  "rook",
  "salamander",
  "salmon",
  "sandpiper",
  "sardine",
  "seahorse",
  "seal",
  "shark",
  "sheep",
  "skink",
  "skipper",
  "skunk",
  "sloth",
  "snail",
  "snake",
  "spider",
  "spoonbill",
  "squid",
  "squirrel",
  "starfish",
  "starling",
  "stilt",
  "stingray",
  "swan",
  "tapir",
  "tarsier",
  "thrush",
  "tiger",
  "toucan",
  "turtle",
  "viper",
  "wallaby",
  "walrus",
  "wasp",
  "whale",
  "wildebeest",
  "wolf",
  "wolverine",
  "wombat",
  "zebra",
];

const randnum = (n: number) => Math.floor(Math.random() * (n + 1));

export const getname = (sep = "_") =>
  left[randnum(left.length)] + sep + right[randnum(right.length)];

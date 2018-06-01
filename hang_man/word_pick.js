let hard_words = [
'unminding',
'internalise',
'universally',
'testingly',
'tramming',
'mechanically',
'toadfishes',
'wes',
'ablegate',
'bronchially',
'ichthyornis',
'actionless',
'kenney',
'barrelfish',
'kindle',
'outstealing',
'imitate',
'transform',
'derringer',
'unschemed',
'unconscientious',
'wakeeney',
'promptness',
'wherefrom',
'cholecystostomy',
'imperially',
'grooving',
'proinsurance',
'groundwave',
'errol',
'regency',
'mercerization',
'imperturbable',
'fruitlessly',
'solubleness',
'brahman',
'anaplerosis',
'mesnalty',
'superregistration',
'breakfastless',
'idioglossia',
'carack',
'phototypic',
'garrulity',
'hemothorax',
'unsophistic',
'jerkinhead',
'rebred',
'unbestowed',
'lowlife',
'teniacide',
'roundish',
'sophistical',
'laboratorially',
'oleate',
'conduplication',
'measurability',
'clite',
'carpophorus',
'isogram',
'phytosociologically',
'phytosociologically',
'kalinite',
'polypoid',
'imperialise',
'uncolloquial',
'botfly',
'fawn',
'supplantation',
'lempira',
'nonestimableness',
'reinforce',
'asthma',
'diversifying',
'mangle',
'impeccability',
'overwearied',
'ischia',
'sunbather',
'lorella',
'kremenchug',
'insofar',
'nonnautical',
'harrison',
'luteotropin',
'militant',
'ethnos',
'pern',
'limpsy',
'hillsite',
'elwyn',
'giggle',
'preexclusive',
'scandal',
'pressurize',
'ungluttonous',
'nonconversable',
'distressed',
'accusatorially',
'taro',
'lineable'];

let animals = [
    "aardvark",
    "antelope",
    "zebra",
    "cow",
    "horse",
    "chicken",
    "donkey",
    "gorilla",
    "sloth",
    "reindeer",
    "onyx",
    "buffalo",
    "pig",
    "giraffe",
    "elephant",
    "crocodile",
    "tiger",
    "lion",
    "cheetah",
    "panther",
    "lynx",
    "bobcat",
    "shark",
    "whale",
    "rhinoceros",
    "hippopotamus",
    "kangaroo",
    "wallaby",
    "alligator",
    "anaconda",
    "orangutan",
    "baboon",
    "chimpanzee",
    "bonobo",
    "camel",
    "wolf",
    "fox",
    "goat",
    "eagle",
    "dolphin",
    "bear",
    "emu",
    "monkey",
    "tarantula",
    "lizard",
    "salamander",
    "turkey"  
];
let word_array = animals; /// choosing animals here vs hard_words 
let word = word_array[Math.floor(Math.random()*word_array.length)];

let letters = word.split('');
let word_html = [];
for (let i=0; i < letters.length; i++) {
    let this_letter = letters[i];
    word_html[word_html.length] =
    `<button id=b-${this_letter} class="button button-blank button-${this_letter}">`+this_letter+`</button>`;
}

$("#word-display-div").append(word_html);



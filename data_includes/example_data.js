var shuffleSequence = seq("intro",  followEachWith("question", rshuffle("control", "exp", "filler")));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


        // Two "real" (i.e. non-filler) self-paced reading items with corresponding acceptability judgment items.
    // There are two conditions.
    //


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> И раскаты горячего грома <br>задержались в прохладной листве...<br>Я с тех пор в этой роще, как дома, <br>мы в глубоком и крепком родстве<br></p>",
                               as: ["следующий текст"]}],


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> На грудь положен камушек <br>граненый, не простой... <br> Иванушка, Иванушка, <br> что сделали с тобой?! <br></p>",
                               as: ["следующий текст"]}],


["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> О, только бы домой дойти! Пятнадцать <br> Минут ходьбы. Пять улиц миновать.<br> По лестнице на самый верх подняться<br> И в дверь условным стуком постучать...<br></p>",
                               as: ["следующий текст"]}],


["exp" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Озаренный лучом, я<br> поднимаюсь в овраг.<br> Чернопыльные комья<br> замедляют мой шаг.<br></p>",
                               as: ["следующий текст"]}],



["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Я распрощался навсегда<br>Со школою постылой! <br>И в лужах квакает вода, <br>Как пробки от бутылок. <br>   </p>",
                               as: ["следующий текст"]}],



["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Шел дождь. Был вечер нехорош,<br>недобрый, неуклюжий.<br>Он извивался у калош <br>сырой гадюкой — лужей.<br>   </p>",
                               as: ["следующий текст"]}],



["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Сквозь тучи солнце светит скудно,<br> Уходит лес в глухую даль.<br> И так на этот раз мне трудно<br> Укрыть от всех мою печаль!<br></p>",
                               as: ["следующий текст"]}],


    ["exp" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Ах, время, помедли, помедли! <br> Я знаю, куда я влеком, <br> а ты вокруг петель солнце<br> кладешь и кладешь венком. <br>   </p>",
                               as: ["следующий текст"]}],



["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Несется плеск с речных излучин,  <br> В овраге ветер струны рвет,<br> Весь мир разбужен <br> И озвучен<br> И дирижеру смотрит в рот.  <br></p>",
                               as: ["следующий текст"]}],



["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Не счесть на земле рассветов, <br> закатов, что будут на ней...<br> Ах, время! Дай мудрых советов <br> и неторопливых дней!<br></p>",
                               as: ["следующий текст"]}],


["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Но в глубине разврата не погиб<br> Какой-нибудь неправедный изгиб<br> Сердец людских пред нами обнаживший. <br> Две области – сияния и тьмы – <br> Исследовать равно стремимся мы.<br></p>",
                               as: ["следующий текст"]}],


    ["exp" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> В лесу корней деревья сплетены, <br> Им снятся те же медленные сны, <br> Они поют в одном согласном хоре,<br> Зеленый сон, земли живое море. <br>   </p>",
                               as: ["следующий текст"]}],


 ["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left>Когда в июнь <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp часов с восьми <br>жестокий <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp врежется жасмин <br>тяжелой влажью<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp веток,<br> тогда —<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp настало лето. </p>",
                               as: ["следующий текст"]}],


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Я сознаю, что невозможно <br> Опять взойти на высоту,<br> И без надежд, но бестревожно, <br> Я в нити грез узор плету.<br></p>",
                               as: ["следующий текст"]}],


["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Прольются<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  волны молока,<br> пойдут<br> &nbsp&nbsp&nbsp&nbsp листвою полыхать <br> каштанов ветви  <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  либо — <br> зареющие липы. </p>",
                               as: ["следующий текст"]}],


    ["exp" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Мы тайнобрачные цветы... <br> Никто не знал, что мы любили, <br> Что аромат любовной пыли <br> Вдохнули трое – я и ты!<br>   </p>",
                               as: ["следующий текст"]}],
    
["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Ты душою младенческой все поняла,  <br> Что мне высказать тайная сила дала,<br> И хоть жизнь без тебя суждено мне влачить, <br> Но мы вместе с тобой, нас нельзя разлучить.<br></p>",
                               as: ["следующий текст"]}],

    
   ["question", "Question", {hasCorrect: false, randomOrder: false,
                              q: "Прочитанный мною отрывок стихотворения созвучен моему текущему эмоциональному состоянию.",
                               as: ["да",
                                   "нет",
                                   "затрудняюсь ответить"]}],
    
  ];  
    //
    // 10 self-paced-reading filler sentences.
    //

   

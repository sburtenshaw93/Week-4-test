let posts = [];
let nextId = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortuneCookie: (req, res) => {
        const fortuneAnswers = ["It takes courage to admit fault", "Self-knowledge is a life long process", "The best prediction of future is the past", "Adventure can be real happiness", "Believe in yourself and others will too"];
        let randomIndex = Math.floor(Math.random() * fortuneAnswers.length);
        let randomFortune = fortuneAnswers[randomIndex]
        res.status(200).send(randomFortune)
    },
    postZodiacSigns: (req, res) => {
        const zodiacSignsList = ["Aries", "Taurus", "Gemini", 'Cancer', 'Leo', "Virgo", "Libra", "Scorpio", 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces' ];
        const birthDate = new Date(req.body.birthday)
        const ariesStart = new Date("21 March")
        const ariesEnd = new Date("19 April")
        const taurusStart = new Date("20 April")
        const taurusEnd = new Date("20 May")
        const geminiStart = new Date("21 May")
        const geminiEnd = new Date("20 June")
        const cancerStart = new Date("21 June")
        const cancerEnd = new Date("23 July")
        const leoStart = new Date("24 July")
        const leoEnd = new Date("23 August")
        const virgoStart = new Date("24 August")
        const virgoEnd = new Date("23 September")
        const libraStart = new Date("24 September")
        const libraEnd = new Date('23 October')
        const scorpioStart = new Date("24 October")
        const scorpioEnd = new Date("22 November")
        const sagittariusStart = new Date("23 November")
        const sagittariusEnd = new Date("22 December")
        const capricornStart = new Date("23 December")
        const capricornEnd = new Date('20 January 2002')
        const aquariusStart = new Date('21 January 2002')
        const aquariusEnd = new Date('19 Feburary 2002')
        const piscesStart = new Date('20 February 2002')
        const piscesEnd = new Date("20 March 2002")
        // console.log(ariesStart)
        if (ariesStart <= birthDate && birthDate <= ariesEnd){
        res.status(200).send("Aries")
    } else if (taurusStart <= birthDate && birthDate <= taurusEnd) {
    res.status(200).send("Taurus")
    

    } else if (geminiStart <= birthDate && birthDate <= geminiEnd) {
    res.status(200).send("Gemini")
        
    } else if (cancerStart <= birthDate && birthDate <= cancerEnd) {
    res.status(200).send("Cancer")
    
    } else if (leoStart <= birthDate && birthDate <= leoEnd) {
    res.status(200).send("Leo")
        
    } else if (virgoStart <= birthDate && birthDate <= virgoEnd){
    res.status(200).send("Virgo")
        
    } else if (libraStart <= birthDate && birthDate <= libraEnd){
    res.status(200).send("Libra")
        
    } else if (scorpioStart <= birthDate && birthDate <= scorpioEnd){
    res.status(200).send("Scorpio")
        
    } else if (sagittariusStart <= birthDate && birthDate <= sagittariusEnd){
    res.status(200).send("Sagittarius")
        
    } else if (capricornStart <= birthDate && birthDate <= capricornEnd){
    res.status(200).send("Capricorn")
        
    } else if (aquariusStart <= birthDate && birthDate <= aquariusEnd){
    res.status(200).send("Aquarius")
        
    } else if (piscesStart <= birthDate && birthDate <= piscesEnd) {
    res.status(200).send("Pisces")
        
    }
  },

  postFavoriteQoute: (req, res) => {
    let newPost = {
        id: nextId,
        quote: req.body.quote,
    };
    posts.push(newPost);
    nextId++;
    res.status(200).send(newPost)
  },

  deleteFavoriteQoute: (req, res) => {
    const { postId } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    posts.splice(postIndex, 1);
    res.status(200).send('👍🏻')
  },

  getSortingHouse: (req, res) => {
    const houses = ["You are Slytherin", "You are Gryffindor", "You are Ravenclaw", "You are Hufflepuff"]
    let randomHouse = Math.floor(Math.random() * houses.length);
        let randomHouses = houses[randomHouse];
        res.status(200).send(randomHouses);
  }
}
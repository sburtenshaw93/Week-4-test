const complimentBtn = document.getElementById("compliment-button")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortune-cookie")
const getFortuneCookie = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
fortuneBtn.addEventListener("click", getFortuneCookie)

// Get the modal
let zodiacModal = document.getElementById("zodiac-modal");

// Get the button that opens the modal
let zodiacBtn = document.getElementById("Zodiac");

// Get the <span> element that closes the modal
let zodiacModalCloseButton = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
zodiacBtn.onclick = function() {
  zodiacModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
zodiacModalCloseButton.onclick = function() {
  zodiacModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == zodiacModal) {
    zodiacModal.style.display = "none";
  }
}

let zodiacSubmit = document.getElementById("submit")
const birthdaySubmission = (event) => {
    event.preventDefault()
    let birthdayInput = document.getElementById("zodiac-enter")
    let birthday = birthdayInput.value 
    let requestBody = {
        birthday: birthday,
    }
    axios.post("http://localhost:4000/api/zodiac/", requestBody).then((res) => {
        alert(res.data)
    })

}
zodiacSubmit.addEventListener("click", birthdaySubmission)

const trashCan = (event) => {
  event.preventDefault();
  const requestBody = {
    postId: event.target.id
  };
  axios.delete('http://localhost:4000/api/quote', requestBody);
  const deleteBtnParent = event.target.parentElement;
  deleteBtnParent.remove();
}

const qouteSubmiision = (event) => {
  event.preventDefault()
  let qouteInput = document.getElementById("favorite-quote");
  let requestBody = {
    quote: qouteInput.value
  }
  axios.post("http://localhost:4000/api/quote/", requestBody).then(res => {

  // new post stuff
    const newPostElement = document.createElement('p');
    newPostElement.innerHTML = res.data.quote;
    newPostElement.classList.add('quote-post')

    // post wrapper stuff
    const newPostWrapper = document.createElement('div');
    newPostWrapper.appendChild(newPostElement);

    // delete button stuff
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.id = res.data.id;
    deleteBtn.addEventListener('click', trashCan)
    newPostWrapper.appendChild(deleteBtn);

    // quotes wrapper stuff
    const quotesWrapper = document.getElementById('qoutes');
    quotesWrapper.appendChild(newPostWrapper);
  });
};

const qouteSubmit = document.getElementById('quote-submit')

qouteSubmit.addEventListener('click', qouteSubmiision)

const houseBtn = document.getElementById("house")

const getSortingHouse = () => {
    axios.get("http://localhost:4000/api/house/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

houseBtn.addEventListener('click', getSortingHouse)
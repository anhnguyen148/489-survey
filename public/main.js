$(document).ready(function () {
  console.log("ready!");

  questions = [
    "Your support means everything to me! 🤗",
    "Just heard the news—I didn't get the promotion. 😞",
    "Hey, you seemed annoyed before. Are you mad at me?",
    "Don't forget to submit your report by the end of the week.",
    "Received your message about the change in plans. 😊",
    "Just got the news—I got the job!",
    "No, everything's fine.",
    "Just got the news—I got the job! 😓",
    "We need to talk.",
    "Hey, you seemed annoyed before. Are you mad at me? 🥳",
    "We need to talk. 😊",
    "Just wanted to remind you about the deadline for the project."
  ];

  // add questions to the form
  for (var i = 1; i <= questions.length; i++) {
    $("#formQuestions").append(
      `
      <div class="row justify-content-center">
        <div class="col pt-3">
          <h5>${i}. "${questions[i-1]}"</h5>
          <div class="sub-question-top">
            <p>Please rate the emotional intensity of the message on a scale of 1 to 7, where 1 indicates "Not
              Intense" and 7 indicates "Very Intense."</p>
            <div class="row justify-content-center">
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="1" />
                <label class="form-check-label">1</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="2" />
                <label class="form-check-label">2</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="3" />
                <label class="form-check-label">3</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="4" />
                <label class="form-check-label">4</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="5" />
                <label class="form-check-label">5</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="6" />
                <label class="form-check-label">6</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="intense${i}" value="7" />
                <label class="form-check-label">7</label>
              </div>
            </div>
          </div>
          <div class="pt-3 sub-question">
            <p>Please rate how clear and understandable the message is on a scale of 1 to 7, where 1 indicates
              "Not Clear" and 7 indicates "Very Clear."</p>
            <div class="row justify-content-center">
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="1" />
                <label class="form-check-label">1</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="2" />
                <label class="form-check-label">2</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="3" />
                <label class="form-check-label">3</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="4" />
                <label class="form-check-label">4</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="5" />
                <label class="form-check-label">5</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="6" />
                <label class="form-check-label">6</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="clear${i}" value="7" />
                <label class="form-check-label">7</label>
              </div>
            </div>
          </div>
          <div class="pt-3 sub-question">
            <p>Please rate how annoying or bothersome you find the message on a scale of 1 to 7, where 1 indicates
              "Not Annoying" and 7 indicates "Very Annoying."</p>
            <div class="row justify-content-center">
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="1" />
                <label class="form-check-label">1</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="2" />
                <label class="form-check-label">2</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="3" />
                <label class="form-check-label">3</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="4" />
                <label class="form-check-label">4</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="5" />
                <label class="form-check-label">5</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="6" />
                <label class="form-check-label">6</label>
              </div>
              <div class="col-1">
                <input class="form-check-input" type="radio" name="annoying${i}" value="7" />
                <label class="form-check-label">7</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    );
  }

  change();

  let table = new DataTable('#myTable');

});

function change() {
  var rates = document.getElementsByClassName("rates");
  for (var i = 0; i < rates.length; i++) {
    if (rates[i].innerHTML < 4) {
      rates[i].style.color = "blue";
    } else if (rates[i].innerHTML == 4) {
      rates[i].style.color = "green";
    } else {
      rates[i].style.color = "red";
    }
  }
}
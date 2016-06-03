// Point System:
// Having an Account: 5 points
// Public Repo: 10 points per
// Public Gists: 1 point per
// Followers: 0.10 points per
// Most Started Public Repo: 1 point per star


var currentScore = 5;
var currentUser = '';
var apiUrl = "https://api.github.com/users/"
const vCardList = document.querySelector('.vcard-names');

class HackerScore {

  constructor() {

    if (vCardList !== null) {
      currentUser = window.location.pathname.split('/').pop();
      apiUrl = apiUrl + currentUser;
      if (currentUser !== '') {
        this.fetchGitHubUserData(function () {
          let hackerScoreItem = document.createElement('div');
          hackerScoreItem.className = 'vcard-hackerscore border-top border-gray-light';

          // HackerScore
          hackerScoreItem.innerHTML = 'HackerScore: ' + currentScore;
          vCardList.appendChild(hackerScoreItem);
        });
      }
    }
  }

  fetchGitHubUserData(callback) {
    var self = this; // TODO Fix this to actually use ES6 features
    fetch(apiUrl).then(function (res) {
      res.json().then(function (json) {
        self.calculateScore(json);
        callback();
      });
    });
  }

  calculateScore(userJSON) {
    currentScore += userJSON["public_repos"] * 10;
    currentScore += userJSON["public_gists"];
    currentScore += userJSON["followers"] * 0.10;

    // Public repo with most stars
    let highestStaredRepo = document.querySelector(".mini-repo-list .stars")
    if (highestStaredRepo !== null) {
      let score = parseInt(highestStaredRepo.innerText.replace(',', '').replace(' ', ''));
      if (score > 0) {
        currentScore += score;
      }
    }
  }
}

new HackerScore();

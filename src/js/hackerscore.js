// Point System:
// Having an Account: 5 points
// Public Repo: 10 points per
// Public Gists: 1 point per
// Followers: 1 point
// Stared Public Repo: 5 points per star
// Organization: 5 points
// Contribution Streak: 5 points per day



var currentScore = 5;
var currentUser = '';
var apiUrl = "https://api.github.com/users/"

class HackerScore {

  constructor() {
    let vCardList = document.querySelector('.vcard-details');
    if (vCardList !== null) {
      currentUser = window.location.pathname.split('/').pop();
      apiUrl = apiUrl + currentUser;

      fetchGitHubUserData(function() {
        let hackerScoreListItem = document.createElement('li');
        hackerScoreListItem.className = 'vcard-detail vcard-detail-hackerscore py-1 css-truncate css-truncate-target';
        hackerScoreListItem.setAttribute('aria-label', 'HackerScore rating');

        // HackerScore
        let hackerScore = document.createElement('span');
        hackerScore.innerHTML = 'HackerScore: ';
        hackerScoreListItem.appendChild(hackerScore);

        let score = document.createElement('span');
        score.innerHTML = currentScore;
        hackerScoreListItem.appendChild(score);

        vCardList.appendChild(hackerScoreListItem);
      });
    }

  }

  fetchGitHubUserData(callback) {
    callback();
  }
}

new HackerScore();

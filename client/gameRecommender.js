function scoreDuration(user, game) {
  const durationObj = {
    "30-60 min": 0,
    "1-2 hrs": 1,
    "2-3 hrs": 2,
    "3+ hrs": 3,
  };
  const gameDur = durationObj[game.duration];
  const playerPref = durationObj[user.durationPref];
  const durScore = 3 - Math.abs(gameDur - playerPref);
  return durScore;
}

function scoreComplexity(user, game) {
  const complexityObj = {
    easy: 0,
    moderate: 2,
    complex: 4,
  };
  const gameComplexity = complexityObj[game.complexity];
  const playerPref = complexityObj[user.complexityPref];
  const complexityScore = 4 - Math.abs(gameComplexity - playerPref);
  return complexityScore;
}

function scoreCategories(user, game) {
  let categoryScore = 0;
  game.playStyle.forEach((cat) => {
    if (user.playPref.includes(cat)) {
      categoryScore += 1;
    }
  });
  return categoryScore;
}

function removeZeros(recommendations) {
  let mutable = recommendations;
  if (mutable.length > 0) {
    let popped = mutable.pop();
    if (popped[1] === 0) {
      removeZeros(mutable);
    } else {
      mutable.push(popped);
    }
  } else {
    mutable = [];
  }
  return mutable;
}

export function gameRecommender(users, games) {
  let preferenceScores = {};

  for (let i = 0; i < games.length; i++) {
    let currGame = games[i];
    let gameScore = 0;

    for (let j = 0; j < users.length; j++) {
      let currUser = users[j];
      let userScore = 0;
      userScore += scoreDuration(currUser, currGame);
      userScore += scoreComplexity(currUser, currGame);
      userScore += scoreCategories(currUser, currGame);
      gameScore += userScore;
    }

    preferenceScores[currGame.name] = gameScore;
    if (
      currGame.minPlayers > users.length ||
      currGame.maxPlayers < users.length
    ) {
      preferenceScores[currGame.name] = 0;
    }
  }

  let sortable = [];
  for (var game in preferenceScores) {
    sortable.push([game, preferenceScores[game]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  const finalRecs = removeZeros(sortable.slice(0, 3));
  return finalRecs;
}

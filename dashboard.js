let carbonSaved = 0;
let caloriesBurned = 0;
let rewardsEarned = 0;

function trackAction(action) {
  switch (action) {
    case 'walking':
      carbonSaved += 0.1;
      caloriesBurned += 50;
      rewardsEarned += 5;
      break;
    case 'biking':
      carbonSaved += 0.2;
      caloriesBurned += 100;
      rewardsEarned += 10;
      break;
    case 'carpooling':
      carbonSaved += 0.3;
      caloriesBurned += 30;
      rewardsEarned += 7;
      break;
    case 'publicTransport':
      carbonSaved += 0.4;
      caloriesBurned += 20;
      rewardsEarned += 8;
      break;
    default:
      break;
  }
  updateProgress();
}

function updateProgress() {
  document.getElementById('carbonSaved').textContent = carbonSaved.toFixed(1) + ' kg CO2';
  document.getElementById('caloriesBurned').textContent = caloriesBurned + ' kcal';
  document.getElementById('rewardsEarned').textContent = rewardsEarned + ' points';
}

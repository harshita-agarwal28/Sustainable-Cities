// Dummy rewards data
const rewardsData = [
    { name: "Discount at Coffee Shop", points: 50 },
    { name: "Donation to Tree Planting Project", points: 100 },
    { name: "Local Restaurant Voucher", points: 75 }
];

// Function to display rewards
function displayRewards() {
    const rewardList = document.getElementById("rewardList");
    rewardList.innerHTML = ''; // Clear existing list
    rewardsData.forEach(reward => {
        const li = document.createElement("li");
        const pointsIcon = '<i class="fas fa-walking points"></i>';
        li.innerHTML = `${pointsIcon} ${reward.name} - ${reward.points} points`;
        rewardList.appendChild(li);
    });
}

// Function to display point chart
function displayPointChart() {
    const pointBar = document.getElementById("pointBar");
    pointBar.innerHTML = ''; // Clear existing content

    rewardsData.forEach(reward => {
        const progress = document.createElement("div");
        progress.className = "progress";
        progress.style.width = `${reward.points}%`;
        pointBar.appendChild(progress);
    });
}

// Function to display redemption code
function displayRedemptionCode(event) {
    if (event.target.tagName === 'LI') {
        const redemptionCode = event.target.dataset.code;
        alert(`Redemption Code: ${redemptionCode}`);
    }
}

// Call displayRewards, displayPointChart functions when page loads
window.onload = function() {
    displayRewards();
    displayPointChart();
};

// Add event listener for redemption options
document.getElementById('redemptionOptions').addEventListener('click', displayRedemptionCode);

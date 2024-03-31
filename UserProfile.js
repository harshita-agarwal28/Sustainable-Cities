function displayImage(event) {
    var img = document.getElementById('profile-img');
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
    }

    reader.readAsDataURL(file);
}

function enableEdit() {
    var inputs = document.querySelectorAll('.personal-details input');
    inputs.forEach(function(input) {
        input.disabled = false;
    });
}

function saveDetails() {
    var inputs = document.querySelectorAll('.personal-details input');
    inputs.forEach(function(input) {
        input.disabled = true;
    });
    alert("Details saved successfully!");
}


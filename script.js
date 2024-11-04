var generateResumeButton = document.getElementById("generate-resume");
var resumeContainer = document.querySelector(".resume-container");
var displayPicture = document.getElementById("display-picture");
generateResumeButton.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var experience = document.getElementById("experience").value;
    var studies = document.getElementById("studies").value;
    var skills = document.getElementById("skills").value;
    var profilePictureInput = document.getElementById("profile-picture");
    // Show resume container
    resumeContainer.style.display = "block";
    // Update personal information
    (document.getElementById("display-name").textContent = name);
    (document.getElementById("display-email").textContent = email);
    (document.getElementById("display-phone").textContent = phone);
    (document.getElementById("display-address").textContent = address);
    (document.getElementById("display-experience").textContent = experience);
    (document.getElementById("display-studies").textContent = studies);
    (document.getElementById("display-skills").textContent = skills);
    // Show profile picture
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayPicture.src = e.target.result;
            displayPicture.style.display = "block"; // Show picture after loading
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
});

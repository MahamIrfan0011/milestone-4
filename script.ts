const generateResumeButton = document.getElementById("generate-resume")! as HTMLButtonElement;
const resumeContainer = document.querySelector(".resume-container")! as HTMLElement;
const displayPicture = document.getElementById("display-picture")! as HTMLImageElement;

generateResumeButton.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const studies = (document.getElementById("studies") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;

    // Show resume container
    resumeContainer.style.display = "block";

    // Update personal information
    (document.getElementById("display-name")!.textContent = name);
    (document.getElementById("display-email")!.textContent = email);
    (document.getElementById("display-phone")!.textContent = phone);
    (document.getElementById("display-address")!.textContent = address);
    (document.getElementById("display-experience")!.textContent = experience);
    (document.getElementById("display-studies")!.textContent = studies);
    (document.getElementById("display-skills")!.textContent = skills);

    // Show profile picture
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            displayPicture.src = e.target!.result as string;
            displayPicture.style.display = "block"; // Show picture after loading
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
});



function saveSecret() {
    let secret = document.getElementById("totpSecretText").textContent;
    localStorage.setItem("secretTOTP", secret);
}

window.onload=saveSecret();

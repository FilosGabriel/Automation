function saveSecret() {
    let secret = document.getElementById("totpSecretText").textContent;
    localStorage.setItem("secretTOTP", secret);
}

windows.onload=saveSecret();

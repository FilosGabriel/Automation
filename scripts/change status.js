function setAutoLogin() {
    let status = localStorage.getItem("autologin");
    if (status == null) {
        localStorage.setItem("autologin", "true");
        return;
    }
    if (status.localeCompare("true")) {
        localStorage.setItem("autologin", "false");
        return;
    }
    if (status.localeCompare("false")) {
        localStorage.setItem("autologin", "true");
    }
}

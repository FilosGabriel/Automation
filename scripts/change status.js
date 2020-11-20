function setAutoLogin() {
    let status = localStorage.getItem("autologin");
    if (status == null) {
        localStorage.setItem("autologin", "true");
        return;
    }
    if (status.localeCompare("true")===0) {
        localStorage.setItem("autologin", "false");
        return;
    }
    if (status.localeCompare("false")===0) {
        localStorage.setItem("autologin", "true");
    }
}

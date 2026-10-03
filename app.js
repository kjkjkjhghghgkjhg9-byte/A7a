function startApp() {
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();

    if (name === "") {
        alert("اكتب اسمك أولاً");
        return;
    }

    if (email === "") {
        alert("اكتب الإيميل أولاً");
        return;
    }

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");

    document.getElementById("welcomeMessage").textContent =
        "أهلاً " + name + " 👋";
}
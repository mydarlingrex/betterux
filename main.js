    const modal = document.getElementById("modal");
    const form = document.getElementById("signupForm");
    const email = document.getElementById("email");
    const toast = document.getElementById("toast");

    function openModal() {
        modal.classList.add("active");
    }

    function closeModal() {
        modal.classList.remove("active");
    }

    function showToast(message) {

        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }

    function confirmAction() {

        closeModal();

        showToast(
            "Success! Your decision has been successfully decided."
        );
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const value = email.value.trim();

        if (!value) {

            email.placeholder =
                "Please enter something first.";

            return;
        }

        if (!value.includes("@")) {

            email.value = "";

            email.placeholder =
                "That's not an email. Probably.";

            return;
        }

        /*
        Самое важное.

        Мы НИЧЕГО не отправляем.

        Но создаём ощущение,
        что сейчас произойдёт что-то важное.
        */

        openModal();

    /*
        Закрытие по клику вне модалки.
        Потому что это слишком удобная функция.
    */

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            showToast(
                "Nice try. Click the button."
            );

        }

    });
    });
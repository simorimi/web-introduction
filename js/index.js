class index {
  play() {
    const $guestBookRegistrationBtn = document.querySelector(
      ".guest-book__registration-btn"
    );

    const $guestBookCancleBtn = document.querySelector(
      ".guest-book__cancle-btn"
    );

    $guestBookRegistrationBtn.addEventListener("click", this.regist);

    $guestBookCancleBtn.addEventListener("click", window.location.reload);
  }

  regist() {
    const $guestBookInput = document.querySelector(".guest-book__input").value;

    const $guestBookCheckbox = document.querySelectorAll(
      ".guest-book__checkbox"
    );

    const sameCount = Array.from($guestBookCheckbox).filter(
      (node) => node.checked === true
    ).length;

    alert(`${$guestBookInput}님, 저와 ${sameCount}개의 취향이 같으시네요!`);
  }
}

new index().play();

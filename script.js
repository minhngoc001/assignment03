$(document).ready(function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Email Button
  console.log("ready!");
  $(".check").click(function () {
    const email = document.querySelector(`#email`).value;
    debugger;
    if (regex.test(email)) {
      $(".hidden").show();
      $(`.email-test`).hide();
    } else {
      alert("This email is invalid! Please rewrite a valid email.");
    }
  });

  //View More Button
  $(`.viewless`).hide();
  $(".viewmore").click(function (event) {
    const btnViewMore = event.currentTarget;
    const content = btnViewMore.previousElementSibling;
    const btnViewLess = btnViewMore.nextElementSibling;

    $(btnViewMore).hide();
    $(content).show();
    $(btnViewLess).show();
  });

  // View Less Button
  $(".viewless").click(function (event) {
    const btnViewLess = event.currentTarget;
    const btnViewMore = btnViewLess.previousElementSibling;
    const content = btnViewMore.previousElementSibling;

    $(btnViewLess).hide();
    $(content).hide();
    $(btnViewMore).show();
  });
});

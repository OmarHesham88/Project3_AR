$(document).ready(function () {
  // Start main menu
  $(".navbar-toggler ").click(function () {
    $(".responsive-menu").removeClass("close-mainMenu");
    $(".responsive-menu").addClass("open-mainMenu");
    $(".page-content").css("filter", "blur(5px)");
    $("body").css("overflow", "hidden");
  });
  // close menu
  $(".close-menu").click(function () {
    $(".responsive-menu").removeClass("open-mainMenu");
    $(".responsive-menu").addClass("close-mainMenu");
    $(".page-content").css("filter", "blur(0px)");
    $("body").css("overflow", "auto");
  });
  // anyway
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".navbar-toggler, .responsive-menu").length &&
      $(".responsive-menu").hasClass("open-mainMenu")
    ) {
      $(".responsive-menu").removeClass("open-mainMenu");
      $(".responsive-menu").addClass("close-mainMenu");
      $(".page-content").css("filter", "blur(0px)");
      $("body").css("overflow", "auto");
    }
  });
  // End main menu
  // add pagination
  let boardMember = $(".board-member").length;
  if (boardMember >= 5) {
    $(".board-pagination .pagination").css("display", "flex");
  } else {
    $(".board-pagination .pagination").hide();
  }
  let singleNew = $(".single-new").length;
  if (singleNew >= 6) {
    $(".allNews .pagination").css("display", "flex");
  } else {
    $(".allNews .pagination").hide();
  }
  // go to single program
  // scroll to top
  $("body").append(
    '<section class="upTop"><div><i class="fas fa-arrow-up"></i></div></section>'
  );
  $(".single-program").click(function () {
    window.location = "../single-program.html";
  });
  // Up to top button
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
      $(".upTop").fadeIn();
    } else {
      $(".upTop").fadeOut();
    }
  });
  $(".upTop").click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // get input file
  $('input[type="file"]').change(function () {
    let fileName = $(this).parents(".select-box").find("span.file-text");
    fileName.text($("input[type=file]").val().split("\\").pop());
  });
  $(".see-more").click(function () {
    // $(".single-package").removeClass('showPackage')
    $(this)
      .parents(".slick-slide")
      .find(".single-package")
      .toggleClass("showPackage");
    if (
      $(this)
        .parents(".slick-slide")
        .find(".single-package")
        .hasClass("showPackage")
    ) {
      $(this).find("span").text("اخفاء");
    } else {
      $(this).find("span").text(" التفاصيل");
    }
  });
  $(".oldMember .registration").css("pointer-events", "none");
  if ($("body").css("direction") === "ltr") {
    $(".oldMember .registration").text("Already Member");
  } else {
    $(".oldMember .registration").text("انت مشترك بالفعل");
  }
});

// New Edit
let userRegistration = document.createElement("ul");
userRegistration.classList.add("user-sing", "d-flex");
userRegistration.innerHTML = `
<!-- new edit Start user sign -->
    <li><a href="./userSign.html" class="singIn"><i class="fa-solid fa-right-to-bracket"></i> تسجيل دخول</a></li>
    <li><a href="./newUser.html"><i class="fa-solid fa-lock"></i> تسجيل جديد</a></li>
<!-- new edit End user sign -->
`;
let userAccount = document.createElement("button");
userAccount.classList.add("loggedin-user");
userAccount.innerHTML = `
<!-- start logged in user -->
    <i class="fa-solid fa-user"></i>
    <span>حسابى</span>
    <i class="fa-solid fa-chevron-down"></i>
    <div class="account-menu">
    <ul>
        <li><a href="./userAccount.html">اعدادت حسابى</a></li>
        <li><a href="#">تسجيل خروج</a></li>
    </ul>
</div>
<!-- End logged in user -->
`;
if ($(".top-bar").hasClass("logged-in")) {
  console.log("jj");
  document.querySelector(".top-bar .container").append(userAccount);
} else {
  document.querySelector(".top-bar .container").append(userRegistration);
}
$(".loggedin-user").click(function () {
  $(".account-menu").toggleClass("show");
});
// anyway
$(document).on("click", function (event) {
  if (
    !$(event.target).closest(".account-menu ul, .loggedin-user").length &&
    $(".account-menu").hasClass("show")
  ) {
    $(".account-menu").removeClass("show");
  }
});

const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

window.onload = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

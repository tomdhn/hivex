function Nav() {
    var width = document.getElementById("mySidenav").style.width;
    if (width === "0px" || width == "") {
      document.getElementById("mySidenav").style.width = "250px";
    }
    else {
      document.getElementById("mySidenav").style.width = "0px";
    }
  }
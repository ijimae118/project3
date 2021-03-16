//AJAX INPUT START
$(document).ready(function () {
  //contact us
  $("#ctu").click(function (e) {
    e.preventDefault();
    window.open(
      "mailto:LaundryOnline@gmail.com?subject=LaundryOnline: What We Can Help You?&body=Writing your problem ..."
    );
  });
  $("#cont1").click(function (e) {
    e.preventDefault();
    window.open(
      "mailto:Thach@gmail.com?subject=Thach: What We Can Help You?&body=Writing your problem ..."
    );
  });
  $("#cont2").click(function (e) {
    e.preventDefault();
    window.open(
      "mailto:Thang@gmail.com?subject=Thang: What We Can Help You?&body=Writing your problem ..."
    );
  });
  $("#cont3").click(function (e) {
    e.preventDefault();
    window.open(
      "mailto:Duc@gmail.com?subject=Duc: What We Can Help You?&body=Writing your problem ..."
    );
  });
  $("#cont4").click(function (e) {
    e.preventDefault();
    window.open(
      "mailto:Lam@gmail.com?subject=Lam: What We Can Help You?&body=Writing your problem ..."
    );
  });
  //check-singin
  if (window.location.pathname === "/services") {
    if (sessionStorage.getItem("User") === null) {
      //id
      window.location.assign("/");
      e.preventDefault();
    }
  }
  if (window.location.pathname === "/user") {
    if (sessionStorage.getItem("UserDetails") === null) {
      //all
      window.location.assign("/");
      e.preventDefault();
    }
  }
  if (
    window.location.pathname === "/" &&
    sessionStorage.getItem("User") !== null
  ) {
    window.location.assign("/services");
    e.preventDefault();
  }
  var logout = document.getElementById("LogOut");
  logout.addEventListener("click", function (e) {
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("UserDetails");
    sessionStorage.removeItem("total");
    localStorage.removeItem("BASKET");
    window.location.assign("/");
    e.preventDefault();
  });

  //filter
  var input = document.getElementById("search");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      //alert(input.value);
      //console.log(input.value)
      //event.preventDefault();
      var url = "http://localhost:58564/api/TbServices/Search/" + input.value;
      $.get(url, function (data, status, jqXHR) {
        let items = JSON.parse(JSON.stringify(data));
        //console.log(items);
        //console.log(jqXHR.responseJSON);
        var result = [];
        if (items.length > 0) {
          for (let i = 0; i < items.length; i++) {
            const e = items[i];
            result.push(
              `<div className="card">
                                    <img className="card-img-top" width="277" height="200" srcSet=images/${e.image} alt=${e.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">${e.name}</h5>
                                        <p className="card-text ">${e.description}</p>
                                        <p>
Rate: ${e.rating} start
                                        </p>
                                        <strong>$${e.price} for ${e.type} </strong>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#/ "
                                        className="btn-floating blue-gradient waves-effect waves-light" 
                                        data-toggle="tooltip" 
                                        data-placement="top" title="" 
                                        data-original-title="Add to Cart"
                                        onClick="onAddToBasket(${e})" 
                                        >
                                            <i className="fa fa-shopping-cart"></i>
                                        </a>
                                    </div>
                            </div>
                            `
            );
          }
          onAddToBasket = (e) => {
            alert(e);
          };
          $("#cover-item").html(result);
        }
      });
    } else if (input.value === "") {
      window.location.reload();
      e.preventDefault();
    }
  });
});
//AJAX INPUT END
var cv = document.getElementById("cart-value");
var cb = document.getElementById("cart");
var ab = document.getElementsByClassName("button");

var out = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let carts = 0;
  for (index = 0; index < out.length; index++) {
    carts = carts + out[index].quantity;
  }
  cv.innerHTML = carts;
}

for (let i = 0; i < ab.length; i++) {
  ab[i].onclick = (e) => {
    out[i].quantity++;
    updateCart();
  };
}

var dollers = 0;
var cents = 0;

function updatePrice() {
  let totalcents = 0;

  for (index = 0; index < out.length; index++) {
    totalcents =
      totalcents +
      out[index].quantity * (out[index].dollars * 100 + out[index].cents);
  }
  dollers = Math.floor(totalcents / 100);
  cents = totalcents % 100;
}


cb.onclick = () => {
  updatePrice();


  for (let index = 0; index < out.length; index++) {
    if (out[index].quantity != 0) {
      console.log(
        "Item name: " +
          out[index].name +
          " - Quantity: " +
          out[index].quantity
      );
    }
  }

  console.log(
    "The total amount is " + dollers + "$ and " + cents + " cents"
  );
};
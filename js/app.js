(function() {
	var app = angular.module('guitarShop', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		};

		this.isSet = function(tabName) {
			return this.tab === tabName;
		};
	});

	var gems = [
	  {
	    name: 'PRS',
	    description: "Paul Reed Smith guitars carry a powerful reputation as being one of the best yet affordable high end guitars on the market today. With a variety of build choices and styles, it's time to grab yourself a PRS and make sweet music.",
	    price: 750.00,
	    color: '#CCC',
	    images: [
	      "images/prs1.jpg",
	    ],
	    reviews: [{
	      stars: 5,
	      body: "I love this guitar!",
	      author: "joe@example.org",
	      createdOn: 1397490980837
	    }, {
	      stars: 1,
	      body: "This guitar sucks.",
	      author: "tim@example.org",
	      createdOn: 1397490980837
	    }]
	    },
	    {
	      name: 'Fender Stratocaster',
	      description: "Fender Stratocasters are iconic in the guitar world for a reason - Hendrix used them, Clapton used them, Tom Morello used the... and for good reason. Fender has made quality guitars for as long as anyone can remember. Do yourself a favor and settle for a true Fender instead of the lower-end Squires.",
	      price: 450.00,
	      color: '#EEE',
	      images: [
	        "images/fender1.jpg",
	      ],
	      reviews: [{
	        stars: 3,
	        body: "",
	        author: "JimmyDean@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 4,
	        body: "",
	        author: "",
	        createdOn: 1397490980837
	      }]
	    },
	    {
	      name: 'Gibson Epiphone',
	      description: "Epiphone used to be an independent company that gained popularity for their line of guitars seen as 'more affordable Gibsons'. After great success, Gibson bought them out and has since done all it can to improve things even more, and they sure have.",
	      price: 350.00,
	      color: '#000',
	      images: [
	        "images/gibson1.jpg",
	      ],
	      reviews: [{
	        stars: 4,
	        body: "",
	        author: "turtleguyy@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 3,
	        body: "",
	        author: "LouisW407@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 2,
	        body: "!",
	        author: "nat@example.org",
	        createdOn: 1397490980837
	      }]
	    }
	  ];
})();
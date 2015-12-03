  //Book storage
  var readBooks = [];

  //Dynamic component rendering to view and list element to menu bar
  var addComponents = function (book) {
    $('#book-container').append('<div class="book">\
        <h1>'+ book.title + '</h1>\
        <h3>By '+ book.author + '</h3>\
        <div class="card-footer">\
          <h4>FREE SAMPLE</h4>\
          <h4 class="gold">REVIEW</h4>\
        </div>\
      </div>');
    $('nav ul').append('<a href="#"><li>' + book.title +'</li></a>')
  }

  //Dynamic article component rendering to view and list element
  var addArticle = function (article) {
    $('#article-container').append('<div class="article">\
      <img class="trip-img" src=' + article.photo +'>\
      <h3>Number 10</h3>\
      <h3>Whitehaven beach</h3>\
      <h3>Whitsunday Island, Whitsunday Islands</h3>\
      <div class="card-footer">\
        <h4>SHARE</h4>\
        <h4 class="gold">EXPLORE</h4>\
      </div>\
    </div>');
    $('nav ul').append('<a href="#"><li>' + article.title +'</li></a>')
  }

  //Helper function used during Submit event to check if book already exists
  var existsCheck = function () {
    for(var i = 0; i < readBooks.length; i++) {
      if($('#title').val() === readBooks[i].title) {
        return true;
      }
    }
    return false;
  }
  //Initialize El Pooch Book
  var elPooch = {
    title: 'El Pooch',
    author: 'Alex Nelson',
    rating: 5,
    photo: 'imgs/elpooch.jpg'
  }

  //Initialize The Flight Book
  var theFlight = {
    title: 'The Flight',
    author: 'Scott Masterson',
    rating: 4,
    photo: 'imgs/theflight.jpg'
  }

  //Initialize Australia Article
  var australia = {
    title: 'Top 10 Australian beaches',
    photo: 'imgs/australia.jpg'
  }

  //Set El Pooch, The Flight & Australia Components
  addComponents(elPooch);
  addComponents(theFlight);
  addArticle(australia);

  //Toggle Dropdown Menu By setting a max-height on ".show" to 20em from max-height of 0px
  //Swap from nav-icon to close-icon or vice versa
  $('.dropdown').on('click', function() {
    $('nav ul').toggleClass('show');
    if($('.nav-icon').css('display') === 'none') {
      $('.close-icon').hide();
      $('.nav-icon').show();
    } else {
      $('.nav-icon').hide();
      $('.close-icon').show();
    }
  })

  //Toggle Modal form to add book
  $('.yes').on('click', function() {
    $('.modal').toggle();
  })

  //Toggle Modal close
  $('.close-modal').on('click', function () {
    $('.modal').toggle();
  })

  //Toggle entire welcome component display to "none"
  $('.no').on('click', function() {
    $('.add-book').fadeToggle();
  })

  //On Submit event: validates & stores book entry
  $('form').on('submit', function(e) {
    //Validation: Check if book has already been added
    if(existsCheck()) {
      $('span').text('That book has already been added...');
      e.preventDefault();
      return false;
    }
    //Store Book Entry
    var title = $('#title').val();
    var author = $('#author').val();
    var rating = $('#rating').val();
    var newBook = {
      title: title,
      author: author,
      rating: rating
    }
    readBooks.push(newBook);
    addComponents(newBook);
    $('.modal').toggle();
    $('form').trigger('reset');
    return false;
  })

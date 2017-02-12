app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Here are the top 10 movie quotes'; 
  $scope.move = 'Hello People, These are our top 10 Quotes from famous movies. Hope you enjoy it and these quotes inspire you!!';
  $scope.quotes = [
    { 
    name_movie: 'Pulp Fiction ', 
    text: 'They call it Royale with Cheese',
    pic: 'img/10.jpg',
    
  }, 
  { 
    name_movie: 'Gladiator ', 
    text: 'What we do in life echoes in eternity',
    pic: 'img/9.jpg',
    
  },
  { 
    name_movie: 'The Dark Knight', 
    text: 'Nobody panics when things go "According to plan" , even if the plan is horrifying!',
    pic: 'img/8.jpg',
    
  },
  { 
    name_movie: 'Fight Club', 
    text: 'This is your life and its ending one moment at a time',
    pic: 'img/7.jpg',
    
  },
  { 
    name_movie: 'Dead Poets Society', 
    text: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    pic: 'img/6.jpg',
    
  },
  { 
    name_movie: 'Pursuit of Happyness', 
    text: 'The world is your oyster. It is up to you to find the pearls.',
    pic: 'img/5.jpg',
    
  },
  { 
    name_movie: 'The Godfather', 
    text: 'A friend should always underestimate your virtues and an enemy overestimate your faults.',
    pic: 'img/4.jpg',
    
  },
  { 
    name_movie: 'Kung Fu Panda', 
    text: 'Your story may not have such a happy beginning but that does not make you who you are, it is the rest of it- who you choose to be',
    pic: 'img/3.jpg',
    
  },
  { 
    name_movie: 'Jobs', 
    text: 'We are gonna put a dent in the universe.',
    pic: 'img/2.jpg',  
  },
  { 
    name_movie: 'Whiplash', 
    text: 'There are no two words in the English language more harmful than "good job"',
    pic: 'img/1.jpg',  
  },
  ];
  
}]);

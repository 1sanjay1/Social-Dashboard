var socilaDashBoard = angular.module('socilaDashBoard',['ngRoute']);


// routing of footer in each post

socilaDashBoard.config(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl: 'pages/footer.html',
		controller: 'mainController'
	})

})



// this controller work for news feed which will be shown in the middle part of the website
socilaDashBoard.controller('mainController',function($scope) {

  $scope.restaurants = 'I am a disco dancer!';

  // type1 => text post
  // type2 => quote post
  // type3 => image post
  // type4 => video post

  var posts =
  [

    {
        type1: 'text post',
        name: 'Sanjay Yadav',
        image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p160x160/14192003_1814925095393068_7427285130782567050_n.jpg?oh=0da31da3b089a6d05e3a212ca07275cc&oe=59D98161',
        text: 'Searching for a new laptop online is basically forcing your current computer to dig its own grave.',
        comment:
        [        {
                    name: 'Abhishek Verma',
                    image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
                    statement: 'i am a disco dancer',
                    nestedComment: {
                      name: 'Sanjay Raz',
                      image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p160x160/14192003_1814925095393068_7427285130782567050_n.jpg?oh=0da31da3b089a6d05e3a212ca07275cc&oe=59D98161',
                      statement: 'hey! Abhishek, how are you baby'
                    }
                  },
                  {
                    name: 'Shubham Panwar',
                    image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/19657138_756198377883136_4593537813376163139_n.jpg?oh=75f02f14b5cd97ce317a2d081a66fadd&oe=5A0E28BF',
                    statement: 'i am learning Angular',
                    nestedComment: {
                      name: 'Abhishek Verma',
                      image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
                      statement: 'i am a disco dancer'
                    }
                  }
          ]
    },
    {
        type2: 'quote post',
        name: 'Abhishek Verma',
        image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
        quote: 'All men who have turned out worth anything have had the chief hand in their own education.',
        footer: 'Walter Scott',
        comment:
        [        {
                    name: 'Abhishek Verma',
                    image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
                    statement: 'i am a disco dancer',
                    nestedComment: {
                      name: 'Sanjay Raz',
                      image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p160x160/14192003_1814925095393068_7427285130782567050_n.jpg?oh=0da31da3b089a6d05e3a212ca07275cc&oe=59D98161',
                      statement: 'hey! Abhishek, how are you baby'
                    }
                  }
          ]
    },
    {
        type3: 'image post',
        name: 'I am third post',
        image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/19657138_756198377883136_4593537813376163139_n.jpg?oh=75f02f14b5cd97ce317a2d081a66fadd&oe=5A0E28BF',
        post_image: 'http://www.folomojo.com/wp-content/uploads/2015/02/16/104.jpg',
        comment:
         [        //{
        //             name: 'Abhishek Verma',
        //             image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
        //             statement: 'i am a disco dancer',
        //             nestedComment: {
        //               name: 'Sanjay Raz',
        //               image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p160x160/14192003_1814925095393068_7427285130782567050_n.jpg?oh=0da31da3b089a6d05e3a212ca07275cc&oe=59D98161',
        //               statement: 'hey! Abhishek, how are you baby'
        //             }
        //           },
                  {
                    name: 'Shubham Panwar',
                    image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/19657138_756198377883136_4593537813376163139_n.jpg?oh=75f02f14b5cd97ce317a2d081a66fadd&oe=5A0E28BF',
                    statement: 'i am learning Angular',
                    nestedComment: {
                      name: 'Abhishek Verma',
                      image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
                      statement: 'i am a disco dancer'
                    }
                  }
          ]
    },
    {
        type4: 'video post',
        name: 'Hakim Shekhawat',
        image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/19424285_1886970148219314_6363346683039267152_n.jpg?oh=05695c6e9ecf8639fd1bdeda060bd0c8&oe=59D7294C',
        video_link: 'https://www.youtube.com/embed/jVIxe3YLNs8',
        comment:
        [        {
                    name: 'Abhishek Verma',
                    image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p100x100/11885393_797926940306426_4095247326765212349_n.jpg?oh=715136f7567d3e8e961d4c9b491fb96c&oe=5A0611DC',
                    statement: 'i am a disco dancer',
                    nestedComment: {
                      name: 'Sanjay Raz',
                      image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/p160x160/14192003_1814925095393068_7427285130782567050_n.jpg?oh=0da31da3b089a6d05e3a212ca07275cc&oe=59D98161',
                      statement: 'hey! Abhishek, how are you baby'
                    }
                  }
          ]
    }

  ];

  $scope.posts = posts;

})

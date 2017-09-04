var module = angular.module('app', []);

module.service('UserService', function () {
    
    var uid = 2;
    
    
    var users = [{
        id: 0,
        'name': 'Walter Beans',
            'phone': '555-555-1234',
            'title': 'Manager',
			'office': '555-555-5555'
	},
    {
        id: 1,
		'name': 'Jeff Greene',
        'phone': '555-555-2234',
        'title': 'Developer',
        'office': '555-555-6666'
    }	
    ];	
       
    this.save = function (user) {
        if (user.id == null) {
            	
            user.id = uid++;
            users.push(user);			
			
        } else {
            
            for (i in users) {
                if (users[i].id == user.id) {
                    users[i] = user;					
                }
            }
        }

    }

  
    this.get = function (id) {
        for (i in users) {
            if (users[i].id == id) {				
                return users[i];				
            }
        }

    }
    
   
    this.delete = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);				
            }
        }
    }

   
    this.list = function () {
		console.log(users);
        return users;		
    }
});

module.controller('UserController', function ($scope, UserService) {

    $scope.users = UserService.list();		

    $scope.saveUser = function () {
        UserService.save($scope.newuser);		
		console.log("New User Saved: ", $scope.newuser);
        $scope.newuser = {};		
    }

    $scope.delete = function (id) {
        UserService.delete(id);        
    }

    $scope.edit = function (id) {		
        $scope.newuser = angular.copy(UserService.get(id));	
		console.log("Editing User: ", $scope.newuser);
    }		
	
	
});




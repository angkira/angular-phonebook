/*Directives*/

let userList = function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/userList.html',
        replace: true,
    }
};
let userCard = function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/userCard.html',
        replace: true,
    }
};
let searchBox = function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/search-box.html',
        replace: true,
    }
};
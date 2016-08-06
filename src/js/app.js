let app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.directive('userList', userList);
app.directive('userCard', userCard);
app.directive('searchBox', searchBox);
app.controller('phoneBook', phoneBook);

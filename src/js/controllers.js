/* Controllers */

const options = {
    method: "GET",
    dataType: 'json',
    url: "https://www.dropbox.com/s/qsaumv60f1yn48q/MOCK_DATA.json?dl=1",
}

let phoneBook = function($scope,$http){
    let model = {
        UserList:[],
        sortDet: 'id',
        sortRev: false,
        currentUser:{},
        showCard: false,
        fields:[],
        excepts:['avatar', 'job_title', 'company_name', 'gender'],
        getData: function(){
            console.log("Getting data")
            $http(options).then(function(response){
                model.UserList = angular.fromJson(response.data);
                model.fields = Object.keys(model.UserList[0])
                    .filter(function(field){
                        return model.excepts.indexOf(field) === -1;
                    });
                    console.log("Success");
                    }, function(response){
                    console.log("Error. Can not get data from url\n"+response);
                    })
            },
        chooseUser: function(chosenUserID){
            model.currentUser = angular.copy(model.UserList[chosenUserID]);
            model.showCard = true;
        },
    }
    $scope.model = model;
};



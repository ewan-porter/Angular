
//function for displaying the loading symbol

function displayLoading(loader, results, resultsHeading) {




    loader.style.display = "flex";
    results.style.display = "none";
    resultsHeading.style.display = "none";



    setTimeout(() => {
        loader.style.display = "none";
        results.style.display = "grid";
        resultsHeading.style.display = "block";
    }, 3000);
}

//function for animating the results

function animateResultsIn(results) {


    results.classList.add("animate__animated");
    results.classList.add("animate__fadeIn");
}

//making sure controller gets view's scope and http service
var iTunesController = function ($scope, $http) {
    //define the search function
    $scope.searchiTunes = function (artist) {


        //define elements for showing loading symbol
        let loader = document.getElementById("loading");
        let results = document.getElementById("results");
        let resultsHeading = document.getElementById("resultsHeading");


        //call loading and animating functions
        displayLoading(loader, results, resultsHeading)
        animateResultsIn(results)

//use jsonp callback function
        $http.jsonp('http://itunes.apple.com/search', {
            params: {
                'callback': 'JSON_CALLBACK',
                'term': artist
            }

            //returns promise
        }).then(onSearchComplete, onError)
    }

    //get data out of response when search complete
    var onSearchComplete = function (response) {

        $scope.data = response.data
        $scope.songs = response.data.results






    }
//store variable to view
    var onError = function (reason) {
        $scope.error = reason
    }
}
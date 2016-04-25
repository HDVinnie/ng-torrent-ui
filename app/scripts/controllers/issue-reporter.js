'use strict';

/**
 * @ngdoc function
 * @name ngTorrentUiApp.controller:IssueReporterCtrl
 * @description
 * # IssueReporterCtrl
 * Controller of the ngTorrentUiApp
 */
angular.module('ngTorrentUiApp')
    .controller('IssueReporterCtrl', function($scope, torrentServerService, $window) {
        var newIssueBaseUrl = 'https://github.com/psychowood/ng-torrent-ui/issues/new/';
        var newMailBaseUrl = 'mailto:ng' + 'torrent' + 'ui' + '@' + 'gmail.com';
        $scope.newIssueUrl = newIssueBaseUrl;
        // torrentServerService.init().then(function(){
        // });

        var getBody = function() {
            var version = torrentServerService.getVersion();
            return 'Describe your issue here' +
                '%0A' +
                '%0A' +
                '------------------------' +
                '%0A' +
                $window.encodeURIComponent('**Version:** ' + $window.document.title) +
                '%0A' +
                $window.encodeURIComponent('**Server:** ' + version) +
                '%0A' +
                $window.encodeURIComponent('**User-agent:** ' + $window.navigator.userAgent);
        };

        $scope.prepareNewIssueUrl = function() {
            $scope.newIssueUrl = newIssueBaseUrl + '?body=' + getBody();
            return false;
        };

        $scope.prepareNewMailUrl = function() {
            $scope.newMailUrl = newMailBaseUrl + '?body=' + getBody();
            return false;
        };

    });

//{id: 1, text: '启用'}, {id: 2, text: '禁用'}, {id: -1, text: '已删除'}
angular.module('app.filters').filter('status', ['Status', function (Status) {
    return function (key) {
        var displayName = '-';
        angular.forEach(Status, function (item) {
            if (item.value === key) {
                displayName = item.displayName;
            }
        });
        return displayName;
    };
}]);



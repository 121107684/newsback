module.exports = function (req, res) {
    return {
        "errNo": 0,
        "data": {
            "result|8": [
                {
                    "id": "@integer(100000,10000000)",
                    "newimg": "@integer(100000,10000000)",
                    "title": "@ctitle(15)",
                    "publishDate": "2019-10-05",
                    "type|1": [1, 2,3,4,5,6],
                    "createdTime": 101601
                }
            ],
            "pageNo": 1,
            "pageSize": 10,
            "totalCount": "@integer(10, 100)"
        }
    }
};

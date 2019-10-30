module.exports = function (req, res) {
    return {
        "errNo": 0,
        "data": {
            "result|8": [
                {
                    "companyName": "@ctitle(15)",
                    "applyDate": "2019-10-05",
                    "industry": "@ctitle(15)",
                    "area": "@ctitle(15)",
                    "corporate": "@cname(15)",
                    "linkName": "@cname(15)",
                    "linkTel": "@integer(13910900000,13910909999)"
                }
            ],
            "pageNo": 1,
            "pageSize": 10,
            "totalCount": "@integer(10, 100)"
        }
    }
};

var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ["asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad", "asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad", "asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad", "asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad", "asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad", "asd", "123", "456", "789", "adssdfffffff", "adghcoajmxmxmm", "545dhjaafjfhandnxeiad"]
    },
    computed: {
        randomColor: function () {
            return function () {
                var red = Math.random() * 255;
                var green = Math.random() * 255;
                var blue = Math.random() * 255;
                return "rgb(" + red + "," + green + "," + blue + ")";
            }
        },
        randomSize: function () {
            return function () {
                var size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created: function () { },
});

var newHot = new Vue({
    el: "#new_hot",
    data: {
        titleList: [
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
            {
                title: "这是一个链接哈哈哈", link: "http://wwww.baidu.com"
            },
        ]
    }
});
var newComments = new Vue({
    el: "#new_comments",
    data: {
        commentList: [
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },
            { name: "这里是用户名", date: "2021-10-26", comment: "这里是一大串评论，哈哈哈哈哈哈哈哈哈" },

        ]
    }
});
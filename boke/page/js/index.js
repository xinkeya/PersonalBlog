var everyDay = new Vue({
    el: "#every_day",
    data: {
        content: "adsffajjklllllllaaa"
    },
    computed: {
        getContent: function () {
            return this.content;
        }
    },
    created: function () {
        //请求数据，给content赋值
    }
});


//文章部分数据绑定
var articleList = new Vue({
    el: "#article_list",
    data: {
        articleList: [
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "这个是标题",
                content: "asddhjakxnidhhdskhkasiqkKDWFWHHXNCddiqdhfnchffhiwwwqwrqnxakdqjwhplzazljdjfhwoouqrynzdladhwooooooooooooooooqnddhhhhhkaqoi",
                date: "2021-10-25",
                views: "101",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
        ]
    },
    computed: {},
    create: function () { },
})
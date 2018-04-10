//@TODO: Find way to get data from a json file and import to app.data.posts
var app = new Vue({
    el: '#app',
    data: {
        posts: [
            { 
                id: 0,
                title: "PyMavs Python Workshop",
                subtitle: "Learn how to master python!",
                date: "4/21/18",
                body: "<p>The stuff that we will be doing goes in here!</p>",
                notes: "We're using python version 3.6!"
            },
            { 
                id: 1,
                title: "General Body Meeting",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            },
            { 
                id: 2,
                title: "General Body Meeting 2",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            },
            { 
                id: 3,
                title: "General Body Meeting 3",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            },
            { 
                id: 4,
                title: "General Body Meeting 4",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            },
            { 
                id: 5,
                title: "General Body Meeting 5",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            },
            { 
                id: 6,
                title: "General Body Meeting 6",
                subtitle: "Agenda",
                date: "4/21/18",

                body: "<p>This is the content.</p> <p>This is the content </p>",
                notes: "This is a note!"
            }
        ]
    }
});
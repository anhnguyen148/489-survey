const { client, mongoDBServerConnect, getMongoDB } = require("./dbHelper");

exports.submit = async (req, res) => {

    const content = req.body;

    if (Object.keys(content).length !== 37) {
        console.log("User did not answer all questions.");
        res.render("form-submit", {
            "message": "Please answer all questions."
        });
        return;

    } else if (Object.keys(content).length === 37) {
        mongoDBServerConnect().catch(console.dir);

        const data = {
            "age": content.age,
            "answers": [
                {
                    "message_no": 1,
                    "message": "Your support means everything to me! 🤗",
                    "condition": 1,
                    "intense": content.intense1,
                    "clear": content.clear1,
                    "annoying": content.annoying1,
                },
                {
                    "message_no": 2,
                    "message": "Just heard the news—I didn't get the promotion. 😞",
                    "condition": 1,
                    "intense": content.intense2,
                    "clear": content.clear2,
                    "annoying": content.annoying2,
                },
                {
                    "message_no": 3,
                    "message": "Hey, you seemed annoyed before. Are you mad at me?",
                    "condition": 3,
                    "intense": content.intense3,
                    "clear": content.clear3,
                    "annoying": content.annoying3,
                },
                {
                    "message_no": 4,
                    "message": "Don't forget to submit your report by the end of the week.",
                    "condition": 4,
                    "intense": content.intense4,
                    "clear": content.clear4,
                    "annoying": content.annoying4,
                },
                {
                    "message_no": 5,
                    "message": "Received your message about the change in plans. 😊",
                    "condition": 2,
                    "intense": content.intense5,
                    "clear": content.clear5,
                    "annoying": content.annoying5,
                },
                {
                    "message_no": 6,
                    "message": "Just got the news—I got the job!",
                    "condition": 3,
                    "intense": content.intense6,
                    "clear": content.clear6,
                    "annoying": content.annoying6,
                },
                {
                    "message_no": 7,
                    "message": "No, everything’s fine.",
                    "condition": 4,
                    "intense": content.intense7,
                    "clear": content.clear7,
                    "annoying": content.annoying7,
                },
                {
                    "message_no": 8,
                    "message": "Just got the news—I got the job! 😓",
                    "condition": 2,
                    "intense": content.intense8,
                    "clear": content.clear8,
                    "annoying": content.annoying8,
                },
                {
                    "message_no": 9,
                    "message": "We need to talk.",
                    "condition": 3,
                    "intense": content.intense9,
                    "clear": content.clear9,
                    "annoying": content.annoying9,
                },
                {
                    "message_no": 10,
                    "message": "Hey, you seemed annoyed before. Are you mad at me? 🥳",
                    "condition": 2,
                    "intense": content.intense10,
                    "clear": content.clear10,
                    "annoying": content.annoying10,
                },
                {
                    "message_no": 11,
                    "message": "We need to talk. 😊",
                    "condition": 1,
                    "intense": content.intense11,
                    "clear": content.clear11,
                    "annoying": content.annoying11,
                },
                {
                    "message_no": 12,
                    "message": "Just wanted to remind you about the deadline for the project.",
                    "condition": 4,
                    "intense": content.intense12,
                    "clear": content.clear12,
                    "annoying": content.annoying12,
                }
            ]
        }

        const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
        await collection.insertOne(data).then(result => {
            console.log("Inserted successfully", {data: result}); 
            res.status(200);
            res.render("form-submit", {
                "message": "Thank you for your submission."
            });
            res.end();
            return;
        });

    }
};

exports.getData = async (req, res) => {
    mongoDBServerConnect().catch(console.dir);
    const { condition, age} = req.query;
    // var condition_no = req.params["condition"];
    const collection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
    if (condition) {
        collection.find().toArray().then(async result => {
            var condition_list = new Array();
            result.forEach(survey => {
                survey.answers.forEach(answer => {
                    if (answer.condition == condition) {
                        answer["age"] = survey.age;
                        condition_list.push(answer);
                    }      
                });
            });
            res.status(200);
            // console.log(condition_list);
            res.render("data", {
                condition_no: condition,
                name: "Condition " + condition,
                data: condition_list
            });
            console.log("Retrieve data successfully");
            res.end();
            return;
        }).catch(err => {
            res.status(400);
            console.error("Something went wrong: ", err);
        });
    } else if (age) {
        collection.find().toArray().then(async result => {
            var age_list = new Array();
            result.forEach(survey => {
                if (survey.age == age) {
                    survey.answers.forEach(answer => {
                        answer["age"] = survey.age;
                        age_list.push(answer);
                    });
                }
            });
            res.status(200);
            res.render("data", {
                age: age,
                name: "Age " + age,
                data: age_list
            });
            console.log("Retrieve data successfully");
            // res.send(age_list);
            res.end();
            return;
        }).catch(err => {
            res.status(400);
            console.error("Something went wrong: ", err);
        });
    }
    
};

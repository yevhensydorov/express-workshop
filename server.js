const express = require("express"),
			formidable = require("express-formidable"),
			fs = require("fs"),
			app = express();

// fs.readFile(`${__dirname} /data/posts.json`, (error, file) => console.log(file));
// fs.readFile(__dirname + '/data/posts.json', (error, file) => {
// 	const parsedFile = JSON.parse(file);
// 	console.log(file.toString());
// });

app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", (req, res) => {
	fs.readFile(__dirname + "/data/posts.json", (error, file) => {
		const parsedFile = JSON.parse(file);
		// console.log(file.toString());

		parsedFile[Date.now()] = req.fields.blogpost;
		

		fs.writeFile(__dirname + "/data/posts.json", JSON.stringify(parsedFile), error => {});
	});
	// console.log(req.fields.blogpost);
});

app.get("/get-posts", (req, res) => {
	res.sendFile(__dirname + "/data/posts.json", error => {});
});

app.get("/posts/:postId", (req, res) => {
	// res.send(`post id: ${req.params.postId}`)
	fs.readFile(__dirname + "data/posts.json", (error, file) => {
		// const parsedFile = JSON.parse(file);
		// console.log(file.toString());
		// res.send(parsedFile[":postId"]);
	});
});


app.listen(3000, () => console.log(`Server is listening on port 3000. Ready to accept requests!`));
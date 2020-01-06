NodeJS ReadMe

Node Js is the execution of javascript in the web server. Node JS just coordinates the execution and actual execution is done by VM(V8) thats in the server. Node js is just a wrapper around VM. When you write javascript for Node, Node will pass the javascript to V8 and V8 executes the script  and V8 will pass the result back to the Node.
V8 is single threaded
Node does asynchronous calls and manages multi threading
npm package manager
CommonJs, dependency package manager
node js installs the commands(node,npm,npx)
github repo: https://github.com/jscomplete/ngs (author: samerbuna)

Download NodeJS from https://nodejs.org/en/ path: C:\Program Files\nodejs\
Version: node -v (finds the installed node version)
What is NodeJS?
	Javascript is enabled to run in the server enables creates webservers, cli, backends using javascript language. NodeJS is Javascript runtime built on Chrome's V8 Javascript engine. V8 Engine converts javascript and compile to machine code, engine is written in C++.
	NodeJS binds the javascript code to an equivalent C++ function that's available in V8 and V8 is executing the C++ equivalent of Javascript.
	NodeJS is event driven non-blocking I/O model that makes it lightweight and efficient.
NodeJS documentation: https://nodejs.org/en/docs/	
PowerShell:
node (enter, you will get into REPL (Read Eval Print Loop)
process (gives various properties, process.exit() exist node REPL)
npm(npmjs.com) is a tool that's installed when node is installed. It provides packages that has plugin functionlities to use.
Why NodeJS?
NodeModules: CoreModules, ThirdPartyModules, UserCreatedModules	
Node samples (https://links.mead.io/nodecourse)
to export a variable/function from source.js and to be made available in another file say app.js , in the source.js do -> module.exports = variable/function and in app.js use const <name> =require('./source.js')
Visual Studio code terminal clear: ctrl+k or ctrl+shift+P(select terminal clear from the dropdown)
mongo refresh query: ctrl+r
Proxy:
	CNTLM runs as local proxy server to solve most of the proxy issues.
	1) Install the CNTLM exe creates a windows service "cn tlm authentication proxy"
	2) Edit the cntlm.ini file, update below values  (C:\Program Files (x86)\Cntlm)
		Username	madhu_vedhagirisubra
		Domain		AMERICAS
		Proxy		10.143.18.126:80
		Proxy		10.143.242.126:80
		NoProxy		localhost, 127.0.0.*, 10.*, 192.168.*
		Listen		3128
		Auth            NTLMv2
		PassNTLMv2
		to generate value for PassNTLMv2: 
		run this in cmd asks for NT password provid that and copy the PassNTLMv2 value and put in the ini file for PassNTLMv2 property->	cntlm -H -d americas -u madhu_vedhagirisubra
		now run the "Start Cntlm Authentication Proxy" (start-> All Programs, this will start the windows service "Cntlm Authentication Proxy"
	3) To verify if its working, IE -> Proxy (internetoptions->connections->LanSettings) uncheck "use automatic configuration script", select Proxy server->http://127.0.0.1:3128		
	4) Environment variable ->http_proxy: http://localhost:3128 and https_proxy: http://localhost:3128
	5) Visual Studio code in the terminal run  (npm file location: npm proxy setup (c:\users\madhu_vedhagirisubra\.npmrc)
	npm config set proxy http://localhost:3128
	npm config set https-proxy http://localhost:3128
	npm config set strict-ssl false 
	 npm config list (will list the npm configuration)
	6) Onedrive.live.com refer: "CNTLM – Proxy for NTLM authentication – Shuvankar Sarkar.pdf"
	"Troubleshoot": proxy.us.dell.com keeps changing IP address make sure the cntlm.ini has right proxy IP address by pinging proxy.us.dell.com
	If you have changed your NT password, then you have to update the cntlm.ini file with updated hashed password for the property PassNTLMv2, to generate hash password -> cntlm -H -d americas -u madhu_vedhagirisubra
	copy of cntlm.ini file is stored in onedrive.live.com
	Don't start the windows service "Cntlm Authentication Proxy" always use the program "Start Cntlm Authentication Proxy" comes as part of cntlm.exe
	or
	TaskManager-> Kill "cntlm.exe",stop the windows service "start ntlm authentication proxy", cmd ->"net start cntlm" make sure the windows service is running now and in task manager-> cntlm.exe is found
	Try uninstalling the cntlm software makes sure the "D:\SW\CNTLM Proxy" is clean and the windows service "Cntlm Authentication Proxy" is removed if not manually remove it -> 1)task manager kill process "cntlm"  2)SC DELETE Cntlm Authentication Proxy, then press “Enter“, you have to restart machine to remove it fully
	Try installing the cntlm.exe again and repeat above steps
	or
	7) You can try using just http_proxy and https_proxy environment variables with same value -> 
	http://ServiceNPConsul:r6F4Bpm5S8Wst3N9XgHn2_@10.143.242.126:80
	or
	http://madhu_vedhagirisubra:<pwd>@10.143.242.126:80

npm init  (to manage packages for a project) creates node_modules folder(contains source files don't modify it), package.json and package-lock.json (when deployed to prod, same version of npm dependencies are downloaded) 
npm init -y (answers yes to all questions implicitly
To run a .js file -> node app.js
For a project that's downloaded from elsewhere you may not find node_modules, to get that -> npm install (will create the node_modules based on the packages.json and package-lock.json. npm uninstall nodemon --save (uninstall a package) 
npm i nodemon --save-dev (installs locally as dev dependency)
npm i validator@12.0.0 (installing a npm module with version, validator is a npm module used for string validation, email/url...eg., validator.isEmail('email@email.com'))
to import a usermodule -> require('./file.js')
to import a npmmodule, just specificy the module name) -> require('validator') 
Node doesn't not currently support ES6 (if it was support to import module instead of require you would use import validator from 'validator'
npm module: npm i chalk@3.0.0 (chalk module is used for string styling in the terminal eg.,1) Import module-> require('chalk') 2)chalk.green('Hello'))
NodeMon:
	To install a node module globally -> node i nodemon@1.19.4 -g (installs to C:\Users\madhu_vedhagirisubra\AppData\Roaming\npm\node_modules) to check the version-> nodemon -v
	nodemon npm module is useful developing nodejs applications when you make changes it automatically restarts the node applications
	With Nodemon, to start application -> nodemon app.js (not node app.js) and that's it it constanly montiors changes to the application and executes without having to execute node app.js for every changes we make.
	To stop nodemon -> ctrl+c
	Nodemon only monitors .js files, to extend to other files do this -> nodemon <file>.js -e js,hbs
CommandLine Args:
	process.argv -> gets the command line args as array (Index0:node installation path, Index1: executing script path, Index(n) fetches use provided information
	eg., node app.js hello world (output: 1) node installation path, 2) executing script file path 3) hello 4) world)
Yargs npm module: helpful in parsing commandline args	
	   node app.js add --title='This is new title' (from app.js -> yargs puts the add argument as an underscore property and title as an object like below console.log(yargs.argv)
		{ _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
	   node app.js --help (lists commands supported by the yargs in the script file) with below script help list add, remove, list, read as available commands
			
			Example1) const yargs = require('yargs')
				yargs.command({
					command:'add',
					description: 'adds notes',
					handler: function(){console.log('adding notes')}
				})
				yargs.command({
					command:'remove',
					description: 'removes notes',
					handler: function(){console.log('removes notes')}
				})
				yargs.command({
					command: 'list',
					description: 'lists notes',
					handler: function(){console.log('lists notes')}
				})
				yargs.command({
					command:'read',
					description:'reads notes',
					handler: function(){console.log('reads notes')}
				})
				console.log(yargs.argv)
		node app.js add (will target the specific command add)
		2)Expanded example: (builder: args specification, demandOption specifies the argument is mandatory -> node app.js --title='This is title' (cannot run without title)
			const yargs = require('yargs')
			const notes = require('./notes.js')
			yargs.command({
				command:'add',
				description: 'adds notes',
				builder: {
					title: {description:'Note title', demandOption:true, type:'string'},
					body: {description: 'body text', demandOption:true, type:'string' }
				},
				handler: function(argv){console.log('Title:', argv.title); console.log('This is the shopping list:', argv.body)}
			})
			yargs.command({
				command:'remove',
				description: 'removes notes',
				handler: function(){console.log('removes notes')}
			})
			yargs.command({
				command: 'list',
				description: 'lists notes',
				handler: function(){console.log('lists notes')}
			})
			yargs.command({
				command:'read',
				description:'reads notes',
				handler: function(){console.log('reads notes')}
			})
			//console.log(yargs.argv)  (only when you call console.log(yargs.argv) yargs will trigger parsing, but will output which is not unncessary, instead use yargs.parse()
			yargs.parse()
JSON:
	javascript object: { title: 'Ego is the Enemy', author: 'Ryan Holiday' }
	JSON: {"title":"Ego is the Enemy","author":"Ryan Holiday"} 
	to convert javascript object to JSON -> JSON.stringify(object) 
	to convert jsonstring to javascript object -> JSON.part(jsonstring)
FileSystem fs module
	1)
	JSON: {"title":"Ego is the Enemy","author":"Ryan Holiday"}	
	const dataBuffer = fs.readFileSync('1-json.json');
	const dataJSON = dataBuffer.toString();
	const data = JSON.parse(dataJSON);
	console.log(data.title);
	2)JSON:  {"name":"Andrew","planet":"Earth","age":27}
	//read file, update data and read the file to validate the updated data
	const dataBuffer = fs.readFileSync('1-json.json');
	const dataJSON = dataBuffer.toString();
	const data = JSON.parse(dataJSON);
	data.name = "Madhu";
	data.age = 37;
	updateJSONData = JSON.stringify(data);
	console.log(updateJSONData);
	fs.writeFileSync("1-json.json",updateJSONData);
	console.log(JSON.parse(fs.readFileSync("1-json.json").toString()).name);
export multiple functions:	
	const getNotes = function(){//getting notes}
	const addNote: function(){ //addNotes }
	module.exports = {
		getNotes: getNotes,
		addNote: addNote,
		}
	3)Using fs module for file operations to read/write/remove refer in OneDrive (NodeJS/File_Read_Write_Remove_Sample)
	 How to execute: node app.js add --title="title" --body="body" (to add content)
					 node app.js list  (to list content from file)
					 node app.js remove --tile="title" (to remove a title by the name title from the file)
Arrow function1: (arrow function doesn't have its own this context they refer to the this context of parent from where its being invoked notice printGuestList function  
	const square = (x) => x * x ; 
	console.log(square(3))
	const event = {
		name: 'Birthday Party',
		guestList: ['Andrew','Jen','Mike'],
		printGuestList(){
			this.guestList.forEach((guest) => console.log(guest+' attending '+ this.name))
		}
	}
	event.printGuestList();	
Arrow function sample2:  (javascript filter vs find (filter: enumerates the complete array, find just returns after the first match)
		const tasks = {
			tasks: [{
				text: 'Grocery shopping',
				completed: true
			},{
				text: 'Clean yard',
				completed: false
			}, {
				text: 'Film course',
				completed: false
			}],
			getTasksToDo(){
				return this.tasks.filter((task) => task.completed === false)
			}
		}
		console.log(tasks.getTasksToDo())
Debugging NodeJS
	1)write the line debugger where you want to debug in the script: debugger
	2)command: node inspect app.js (this will start a debugging listener on a browser
	3)Open chrome browser type: chrome://inspect (click on inspect under Target, this opens devtools and you can start debugging)
	4)To exit debugging-> Ctrl+c
	5)To restart debugging -> restart
	6)To bring console windows press Esc (toggle: press Esc to close console)
Asynchronous NodeJS
example:
		console.log('starting');
		setTimeout(()=>{console.log('2 seconds timer'},2000)
		setTimeout(()=>{console.log('0 seconds timer'},0)
		console.log('ending')
		ouput:starting ending 0 seconds timer 2 seconds timer
		Why the 0 seconds timer printed after 'ending' though it doesn't have to wait ? 
		 NodeJS script when compiled enclosed in an anonymous function(main function). NodeJS before executing lines of script stacks the code in such a way that all functions are stacked first here it stacked 1) Main function 2)console.log('starting') 3) console.log('ending') 4) SetTimeout() 5) SetTimeout()
		 SetTimeout function is not stacked as its not a javascript function, Node is registering it as an event in the Node API and C++ code in the Node API is running a timer once elapsed sends the SetTimeout event to Callbaack Queue(Event loop) and Callbaack Queue puts this event to Stack only after the stack is completely executed the functions.
HTTP Request
	DarkSky (free weather api)
	Secret Key: 7b60a3c7af7c72051099a764a6088552
	https://api.darksky.net/forecast/7b60a3c7af7c72051099a764a6088552/30.559977, -97.618019
	Mapbox service to get the latitude/longitude of a location	https://api.mapbox.com/geocoding/v5/mapbox.places/Round%20Rock.json?access_token=pk.eyJ1IjoibWFkaHV2cyIsImEiOiJjazJ6ZDk0OGQwZ3MyM21zMWt0cnhqaXFiIn0.Nh-5FUCUD8Wg4xSamRg7vQ&limit=1
	http request samples refer to the github project node: node-weather-website
//function object default values
//function with default value
	const printName = (name="Anonymous") => { console.log('Hello User: ',name) }
	printName('Alpha')
	printName()
	//object with default values
	const product = {name: "cheese", stock: 5, price: '$5' }
	printProduct = ({name="New Product", stock=10}={}) => {
		console.log(`Received product ${name} and its available stock ${stock}`)
	}
	printProduct(product);
	printProduct();	
git
	git init (initializes git repository)
	SSH key creation: ssh stands for secure shell. ssh-keygen -t rsa -b 4096 -C "madhuvs.in@gmail.com" (-t specifices the security protocol/algorithm to use -b bits of code for securing -c specifies comment). After you hit enter, it asks file to save default is c:\users\ntuser\.ssh\id_rsa) I tried /c/users/madhu_vedhagirisubra/.ssh/githubpersonal
	to list the files: ls -a -l ~/.ssh (-a all files, -l display as list)
	eval $(ssh-agent -s) (starts the ssh agent)
	ssh-add ~/.ssh/id_rsa (register ssh file)
	git remote add origin git@github.com:madhuvsrepos/node3-weather-website.git
	git push -u origin master
	ssh-keygen -t rsa -b 4096 -C "madhuvs.in@gmail.com"
	clip < ~/.ssh/id_rsa.pub (copies the public key)
	SSH key configuration of github repository didn't work, finally ended using git clone
heroku (like PCF, free webserver to host applications
	install heroku cli
	heroku login
	heroku create mvs-weather-app (creates new app with reference to github files)
	To instruct heroku to start using the command "node src/app.js" -> goto packages.json -> goto scripts section ->  "start": "node src/app.js"
	locally if you want to run the app now instead of running node src/app.js you can do this ->  npm run start
	for any future changes just put this command ->1) git push origin master 2)git push heroku master (this will push changes to to heroku)
handlebars (hbs)
	Express.js view engine for handlebars.js, facilitates separting view from code
	app.use(express.json()) //converts incoming request to json
	npm i hbs
	for examples: refer github.com node-weather-website
npm run	
	lets you run the commands scripted in packages.json\scripts
	for eg: {scripts: "dev": "nodemon src/app.js -e js,hbs"	
	if you have installed nodemon globally, when someone downloads your code he cannot run npm run dev (since dependencies added globally don't appear as
	dependencies in packages.json. So any commands you put in packages.json make sure all utils are added as local dependencies.
	To uninstall a dependency installed globally -> npm uninstall -g nodemon
	packages.json
	{
		scripts: {"dev":"nodemon src/app.js -e js,hbs"}
	}
	"devDependencies: { "nodemon":^1.2.0" }
	to do that -> npm install --save-dev nodemon@1.19.4 (--save-dev put the dependencies under "devDependencies" so it doesn't get downloaded in production
	npm run dev (will look at packages.json and run the script -> nodemomn src/app.js -e js,hbs
MongoDB 
	Installation: https://www.mongodb.com/download-center/community
	Robo 3T is the admin tool (GUI for mongo DB)
	npm i mongodb@3.3.4
	mongod --dbpath "D:\MongoDB\Server\4.0\data" (this data path can be found in mongod.cfg in "C:\Program Files\MongoDB\Server\4.0\bin" in VisualStudio terminal starts the connection (stop the windows service  MongoDB Server"
		Above command has to be run when starting mongodb compass or working with node-mongo (error: MongoDB not running on the provided host and port)
		If you cannot run the above command erroring: mongodb.lock is in use -> stop the windows service "MongoDB Server"
	ObjectId: combination of timestamp and random value. Internally Mongo stores the binary of object ID it will be 12 byte value, otherwise if it stores as string it will be 24 byte value. When you use the GUI (Robo 3T) it shows ObjectId("5dd705e65f0ccc6c7884c17e") meaning internally its storing binary but for user view it show the string represenatation.
	To validate this, const id = new ObjectID(); console.log(id.id) gives 12 bytes what mongodb stores internally, to get the string of it use console.log(id.id.toHexString())
	Node mongodb documentation: https://mongodb.github.io/node-mongodb-native/3.3/api/
	DB Connection:
	const {MongoClient, ObjectID} = require('mongodb') //this is object destructuring 
	const connectionUrl = 'mongodb://127.0.0.1:27017';
	const databaseName = 'task-manager'
	MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error, client) => {
    if(error){return console.log("unabletoconnecttodatabase")}constdb=client.db(databaseName);console.log("Connectedcorrectly")})
	Insert record
	db.collection('users').insertOne({_id:id,name:"Ramesh",age:40},(error,result)=>{if(error){return console.log('Unabletoinsertuser')}console.log(result.ops)})
	const tasks=[{description:"Cleanthehourse",completed:true},{description:"Renewinspection",completed:false},{description:"Potplants",completed:false}]
	db.collection("tasks").insertMany(tasks,(error,result)=>{if(error){return console.log(error)}else{console.log(result.ops)}})
	Find 
	db.collection('users').findOne({name:"MVS"},(error,user)=>{if(error){return console.log(error);}else{console.log(user)}})
	db.collection('users').find({age:{$lt:37}}).toArray((error,users)=>{console.log(users);})
	db.collection("users").find({_id:ObjectID("5dd705e65f0ccc6c7884c17e")},(error,user)=>{if(error){return console.log(error)}console.log(user);})
	db.collection("users").findOne({_id:ObjectID("5dd705e65f0ccc6c7884c17e")},(error,user)=>{if(error){return console.log(error)}console.log(user);})
Promise:	
	Promise provides more semantic structure way than call back functions using resolve and reject function and caller can use then and catch respectively. In a callback function, you can call callback many times but resolve and reject can be called only once and only whichever is called first is used and the next one is ignored meaning, in a Promise you can either call resolve or reject. If you try to call resolve, reject (reject is ignored), if you try to call resolve, resolve (only first resolve is considered, next one is ignored)
	Simple Callback function:
	const generateGreetingMessage=(callback)=>{setTimeout(()=>{callback("HappyChristmas")},2000);}
	generateGreetingMessage((result)=>{console.log("GreetingMessage:",result)})
	Callback achieved using simple promise:
	const generateHelloMessage=newPromise((resolve,reject)=>{resolve("HelloWorld")})
	generateHelloMessage.then(result=>{console.log(result)})
	Callback achieved using promise with parameter:
	const generateGreetingMessageUsingPromise=(userRequest)=>new Promise((resolve,reject)=>{setTimeout(()=>{if(this.userRequest==="success"){resolve("MerryChristmas")} else{reject("errorgeneratingmessage")}},2000);})
	generateGreetingMessageUsingPromise("success").then(result=>{console.log("GreetingMessage:",result)}).catch(error=>{console.log("Couldn'tgenerategreetingmessage",error)})
	PromiseChaining: chaining multiple async functions
	const sum=(a,b)=>new Promise((resolve,reject)=>{setTimeout(()=>{resolve(a+b)},2000);})
	sum(1,1).then(result=>{return sum(result,1)}).then(chain1Result=>{console.log("ChainedPromiseSum:",chain1Result)}).catch(error=>{console.log('Erroroccured!',error)})
Mongo CRUD scripts create/update/delete
	// find single document
    db.collection('users').findOne({name:"MVS"},(error,user)=>{if(error){return console.log(error);}else{console.log(user)}})
    // find single document using less than filter
    db.collection('users').find({age:{$lt:37}}).toArray((error,users)=>{console.log(users);})
    // find count of documents matching the filter
    db.collection('users').find({age:38}).count((error,count)=>{console.log(count);})
    // find document using objectid
    db.collection("users").find({_id:ObjectID("5dd705e65f0ccc6c7884c17e")},(error,user)=>{if(error){return console.log(error)}console.log(user);})
    // insert one document
   db.collection('users').insertOne({_id:id,name:"Ramesh",age:40},(error,result)=>{if(error){return console.log('Unabletoinsertuser')}console.log(result.ops)})
    // insert multiple document
    db.collection('users').insertMany([{name:"apple",age:5},{name:"banana",age:10}],(error,result)=>{if(error){return console.log('Unabletoinsertuser')}console.log(result.ops)})
    // insert multiple document
    const tasks = [{description: "Clean the hourse", completed: true},{description: "Renew inspection", completed: false},{description: "Pot plants", completed: false}]
   db.collection("tasks").insertMany(tasks,(error,result)=>{if(error){return console.log(error)}else{console.log(result.ops)}})
    //update a document
   db.collection('users').updateOne({_id:newObjectID("5dd7075a05a2ea40d012053e")},{$set:{age:37}}).then(result=>{console.log(result)}).catch(error=>{console.log("Erroroccured:",error)})
    //increment a field value
   db.collection('users').updateOne({_id:newObjectID("5dd7075a05a2ea40d012053e")},{$inc:{age:1}}).then(result=>{console.log(result.modifiedCount)}).catch(error=>{console.log("Erroroccured:",error)})
    //update many document
    db.collection('tasks').updateMany({completed:false},{$set:{completed:true}}).then(result=>{console.log(result.modifiedCount)}).catch(error=>{console.log("Erroroccured:",error)})
    //delete many document 
   db.collection('users').deleteMany({age:{$gt:37}}).then(result=>{console.log(result.deletedCount)}).catch(error=>{console.log(error)})
Mongoose		
	Mongoose is ODM (object document mapper) maps the objects in the code to document in Mongo
	documentation: mongoosejs.com 
	npm i mongoose@5.7.12	
	mongoose while saving creates new field __v (maintaining the version of the document)
	Validator
	validates string and sanitizes	
	npm i validator@12.1.0
	//define user collection model
	const User = mongoose.model('User', { name: { type: String }, age: { type: Number } })
	//define user collection model with validation for name and custom validation for age field using validator npm
	const User = mongoose.model('User', {
    name: { type: String, required: [true, "Name field is required"], trim: true },
    age: { type: Number, default:0, validate(value) { if (value < 0) { throw new Error('Age is invalid') } } },
    email: { type: String, required: true, trim: true, lowercase:true, validate(value) { if (!validator.isEmail(value)) { throw new Error("Invalid Email") } } }
	//inserting a document using mongoose
	const userInstance = new User({ name: "MVS", age: 38 })
	userInstance.save().then((result) => {
		console.log(result)
	}).catch((error) => {
		console.log("Error", error)
	})})
	//example2: (using mongoose inserting document has validation for email,password)
	const User = mongoose.model('User', {
    name: { type: String, required: [true, "Name field is required"], trim: true },
    age: { type: Number, default:0, validate(value) { if (value < 0) { throw new Error('Age is invalid') } } },
    email: { type: String, required: true, trim: true, lowercase:true, validate(value) { if (!validator.isEmail(value)) { throw new Error("Invalid Email") } } },
    password: {type:String, required:true, trim:true, minlength:6, maxlength: 20, validate(value){if (value.toLowerCase().includes("password")){ throw new Error("Password literal not allowed for password") } }}
	})
	const thirdUserInstance = new User({ name: " MVS ", email: " mvs@gmail.com ", password: "test123"  }).save().then(result => { console.log(result) }).catch(error => console.log("Error occured", error))
REST API (Representational state transfer, Application Programming Interface)
	State Transfer: API is stateless state of resource is transferred from server to client based on the input request
	API structures:
	Create -> POST/tasks (tasks is the pluralized resource)
	Read -> GET/tasks
	Read -> Get/tasks/:id
	Update -> PATCH/tasks/:id_rsa
	Delete -> DELETE/tasks/:id
	npm i nodemon --save-dev
	app.use(express.json()) //converts incoming request to json 
	API endpoints are created 
	1) -> const app = new express() app.get("/test",(req,res)=>{res.send("api created using express without Router method")}
	2) when you want to keep the routing logic in a separate file you need to use router and app.use 
	const router = new express.Router() router.get("test"/(req,res)=>{res.send("api created using express with Router")}
	Next in the startup file (index.js) mention app.use(router) (refer userrouter.js/index.js in the github in task-manager folder)
Async Await
	Operator makes the asynchronous synchronous way of writing. Earlier we achieved asynchronous using callback function and promise
	Callback function you provided a callback from the caller to callee and callee calls the callback once an operation is done.
	Promise provided then/catch methods to achieve the asynchronous
	Promise is a simplificatnion of Callback
	async await further simplifies Promise (async internally returns Promise)
	samples refer: 8-callbackVsPromiseVsAsyncAwait.js in github playground folder
	Samples in expressjs api call refer to index.js in task-manager folder	
bcryptjs 
	Encrypts passwords
	npm i bcryptjs
	bcrypt.hash(password, 8)  generates hashed value with 8 rounds
	bcrypt.compare(uservalue, hashedpwdfromdb) compares two values and returns true if password matches
mongoose.Schema 
	To work with the model using Schema middleware (refer user.js in the task-manager folder in github)
Json WebToken
	creates a token that can be used in the authentication, has provisions to set expiry on the token
	npm i jsonwebtoken
	jwt.sign({id:'123'},'phrasetochecktamper') this creates a JWT token that has 2 periods, (header)base 64 encoded json string, (body)payload  base 64 encoded json string, (signature) to verify the token
	you can decode the body at https://www.base64encode.org/ (iat issued at time)
	Auth middleware: refer auth.js in the task-manager app.
Postman
	1)when you have urls for nonprod and prod to manage single request for both environments make use of environment variables
	click on gear(settings) -> Add Environment a)specify name (prod/nonprod) b)specify variable name: url, initial value: localhost:3000 current value: 3000, after you add it in the address bar {{url}}/users
	2)When you have authorization token say bearer token ways to add is goto a) Headers key:Authorization value: Bearer <sdfisdfihdsf> or b)Authorization select type "Bearer Token" and in the Token specify just the token value.
	3)If many urls are accessing this token, instead of doing it per url click on the folder collection where the urls are saved,(...) click on edit->Authorization->Select Bearer Token and specify the value, now go to the individual url->Authorization->Inherit Auth from Payment 	
	4)You can automate the above step of setting bearer token->goto the Url request where you receive bearer token-> click on "Pre-request Script"(runs before the url request)->  "Tests"  run after the response is received
		script goes in "Pre-request Script"
		if(pm.response.code === 200){pm.environment.set('authToken',pm.response.json().token) }
JSON stringify -> JSON.stringify(object) -> internally calls toJSON, you can override that for custom stringify
	const pet = {name: "pinky", age: 36}
	pet.toJSON = function(){
    const pet = this
    const petObject = delete pet.age
    return pet	}
	console.log(JSON.stringify(pet)) //outputs {"name":"pinky"}
Mongoose-Mongo
	Setting relation between collections
	user {_id, email, password}	
	task{_id, description, completed}
	To set relation in mongoose schema (refer task.js in task-manager folder in github, check the owner property injected in task schema)
	const taskSchema = new mongoose.Schema({ description: { type: String, required: true, trim: true }, completed: { type: Boolean, default: false }, owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' } })
	to populate user data part of task-> 
		const task = await Task.findById('objectid')
		await task.populate('owner').execPopulate()
		when you check task.owner -> you will find user document
	reverse to populate task data part of user goto UserSchema 
		userSchema.virtual('tasks',{ref:'Task', localField:'_id',foreignField:'owner'})
		const user = await User.findById('objectId')
		await user.populate('tasks').execPopulate()
		when you check user.tasks -> you will find tasks associated to the user
	Cascading deletes
		Delete child objects when Parent object is deleted refer middleware user.js in the task-manager folder github project
	In the mongoose schema (refer user.js) adding timestamps:true creates createdAt, updatedAt fields to the mongo collection
Filtering,Sorting,Pagination: refer taskRouter.js in the task-manager folder github project
Multer:
	Middleware for handling multipart/form data which is primarily used for uploading files.
	npm i multer
Regular Expression	
	regex101.com eg., to validate string contains only .doc or .docx => \.(doc|docx)$ ("." has special meaning in regex escaping that with "\", "$" ensures doc or docx appears at the end of the string	
View Binary images:
	jsbin.com: <img src="data:image/jpg;base64,<binary>>  (binary copy from mongo on the buffer field, binary property value)
npm sharp 
	to process images like converting any image to png, resizing
npm i @sendgrid/mail	
	allows to send emails through api
http://madhu_vedhagirisubra:nrpet@123@10.143.242.126:80		
npm env-cmd
	npm i env-cmd
	allows to set environment variables
Mongo atlas is the free cloud db provided by mongo  (firewall add 0.0.0.0/0 -> this will white list all ip address letting all ip address to connect)
	mongodb+srv://mvs:kenzo123@cluster0-bbdui.mongodb.net/test
	HostName: mvscluster-bbdui.mongodb.net
	username: mvs
Mongo 3T GUI is not supported to connect to MongoDB Atlas cloud, you have to use MongoDB compass	
MongoDB compass cannot connect to MongoDB Atlas cloud, so I have to use Microsoft Azure cloud Portal: portal.azure.com downloaded rdp remote desktop(stored in onedrive.live.com filename: AzurePortalVM user: madhuvs, password:<pwd> to validate if you mongodb atlas cloud is good enough
To validate a port is allowed in a computer
	http://portquiz.net:27017/
Powershell check the proxy settings
	netsh winhttp show proxy (powershell) to check the proxy details
	 netsh winhttp set proxy "127.0.0.1:3128" to set the proxy (here its pointed to CNTLM proxy)
GitHub: 
	Repository: task-manager
Deployment to Heroku:
	heroku create mvs-task-manager (from visualstudio code terminal in the path project root folder)
	https://mvs-task-manager.herokuapp.com/
	Configuring environment variables in Heroku
		heroku config:set key=value (to set an environment varaible)
		heroku config:set key1=value1 key2=value2 (to set multiple environment variables)
		heroku config:unset key (to remove an environment variable)
		heroku config (to list the available environment variables)
		heroku config:set JWT_TOKEN=test123 SENDGRID_API_ID=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
		heroku config:set MONGO_CONNECTION='mongodb+srv://mvs:kenzo123@cluster0-bbdui.mongodb.net/task-manager-api?retryWrites=true&w=majority' (quotes, as we have special charaacters, task-manager-api is the database we want to use received mongodb site -> connectto -> application)		
		git commit -am "init files"
		git push
		git push heroku master (to push changes to heroku server)
WebSocket protocol:
	Allows full duplex communication(bi-directional) between client and server
	Persistent connection between client and server
	npm i socket (enables real-time bidirectional event-based communication)
	Socket.IO works with raw http server, express js creates it internally so we don't have access to it, so for socketio the implementation slightly defers as compared to how its done in other projects taskmanager, weatherapp.
	const socketio = require('socket.io') -> const app = express() -> const server= http.createServer(app) -> const io= socketio(server)
	websocketio gives access to a js file "/socket.io/socket.io.js" which facilitates communication from client to server add this to body tag and from a js file call io() a function available within socket.io.js to establish communication from browser to server	
	

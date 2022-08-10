function highLightHome(){
	document.getElementById("homeMenu").style.color = "#46bddf"
	document.getElementById("homeMenu").style.borderBottomStyle = "solid"
	document.getElementById("experienceMenu").style.color = "white"
	document.getElementById("projectsMenu").style.color = "white"
}
function highLightExp(){
	document.getElementById("experienceMenu").style.color = "#52d273"
	document.getElementById("homeMenu").style.color = "white"
	document.getElementById("projectsMenu").style.color = "white"
	document.getElementById("experienceMenu").style.borderBottomStyle = "solid"
}
function highLightProjects(){
	document.getElementById("projectsMenu").style.color = "#e57255"
	document.getElementById("experienceMenu").style.color = "white"
	document.getElementById("homeMenu").style.color = "white"
	document.getElementById("projectsMenu").style.borderBottomStyle = "solid"

}

function populateSkills(){
	let skills = ["HTML/CSS/JavaScript","Node.js","Express","Rest API","Pug","JSON Database","MongoDB","Mongoose","C","C++","Java","Python","SQL",
								"PostgreSQL","R","Minitab","SAS","M365","VBA","Batch Scripting"]
	let backColor = ["#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255"]

	for(i=0;i<skills.length;i++){
		let buttonElem = document.createElement("button")
		buttonElem.className = "button"
		let randomNum = parseInt(Math.random()*7)
		buttonElem.innerHTML = skills[i]
		buttonElem.style.backgroundColor = backColor[i]
		document.getElementById("skillsSection").appendChild(buttonElem)
	}
}

function populateInterest(){
	let interest = ["Games","Movies/Shows","Yoga","Reading","Music"]
	let backColor = ["#e5c453","#46bddf","#52d273","#e94f64","#e57255"]
	for(i=0;i<interest.length;i++){
		let buttonElem = document.createElement("button")
		buttonElem.className = "button"
		let randomNum = parseInt(Math.random()*7)
		buttonElem.innerHTML = interest[i]
		buttonElem.style.backgroundColor = backColor[i]
		document.getElementById("interests").appendChild(buttonElem)
	}
}



function highlightMenuItem(){
	let aboutPos = document.getElementById("aboutInfo");
	let expPos = document.getElementById("expInfo");
	let projectPos = document.getElementById("projectsInfo");

	aboutTop = aboutPos.offsetTop
	expTop = expPos.offsetTop
	projectsTop = projectPos.offsetTop

	if(window.pageYOffset < aboutTop){
		highLightHome()
	}
	if(window.pageYOffset >= aboutTop && window.pageYOffset < expTop){
		highLightAbout()
	}
	if(Math.ceil(window.pageYOffset) >= expTop && window.pageYOffset < projectsTop){
		highLightExp()
	}
	if(window.pageYOffset >= projectsTop){
		highLightProjects()
	}
}
function addProjects(){

	projectNameArray = ["Connect 4", "Tic Tac Toe", "Web Crawling", "Personal Website","Recommender System"]
	projectImageSrcArray = ["./ProjectImages/Connect4Img.PNG","./ProjectImages/TicTacToeImg.PNG","./ProjectImages/webCrawl.png","./ProjectImages/personalWeb.png","./ProjectImages/recommenderSystem.PNG"]
	projectDescArray = ["A web application that allows users to play the game Connect4 with other users of the application. <a target='_blank' style='text-decoration:none' href='https://github.com/anshuup/connect4-project'>Click here</a> for more details",
											"A web application that allows users to play the game TicTacToe game with computer as opponent and other users <a target='_blank' style='text-decoration:none' href='https://github.com/anshuup/TicTacToeProject1'>Click here</a> for more details",
											"A simple web crawler that was created by visiting incoming and outgoing link of the various pages <a target='_blank' style='text-decoration:none' href='https://github.com/anshuup/Web-Crawling'>Click here</a> for more details",
											"Personal website to display more details about my self including projects and work experience <a target='_blank' style='text-decoration:none' href='https://github.com/anshuup/connect4-project'>Click here</a> for more details",
											"Recommendation system based on various techniques to output choices based on user selecction <a target='_blank' style='text-decoration:none' href='https://github.com/anshuup/RecommenderSystem'>Click here</a> for more details"]
	projectLinkArray = ["https://github.com/anshuup/connect4-project","https://github.com/anshuup/TicTacToeProject1","https://github.com/anshuup/Web-Crawling","https://github.com/anshuup/connect4-project","https://github.com/anshuup/RecommenderSystem"]

	for(i=0;i<projectNameArray.length;i++){
		let cardElem = document.createElement("div")
		let projectsImageElem = document.createElement("img")
		let containerElem = document.createElement("div")
		let projHeaderElem = document.createElement("h5")
		let paraElem = document.createElement("p")
		let linkElem = document.createElement("a")

		cardElem.className = "card"
		projectsImageElem.src = projectImageSrcArray[i]
		projectsImageElem.style.width = "100%"
		projectsImageElem.style.height = "50%"
		containerElem.id = "container"+(i+1)

		projHeaderElem.className = "projHeader"
		projHeaderElem.innerHTML = projectNameArray[i]
		paraElem.innerHTML =  projectDescArray[i]

		linkElem.href = projectLinkArray[i]
		linkElem.target = "_blank"
		linkElem.style.textDecoration = "none"

		document.getElementById("cardsList").appendChild(cardElem)
		cardElem.appendChild(projectsImageElem)
		cardElem.appendChild(containerElem)
		containerElem.appendChild(projHeaderElem)
		containerElem.appendChild(paraElem)

	}
}
function myFunction(pageType){
	if(document.getElementById("hamMenuHome").style.display == "grid"){
		document.getElementById("hamMenuHome").style.display = "none"
	}
	else{
		document.getElementById("hamMenuHome").style.display = "grid"

	}

}
var indexNum = 0;
var txt = 'Anshu Patel';
var speed = 250;
function typeWriter() {
	console.log("i ",indexNum)
  if (indexNum < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(indexNum);
    indexNum++;
    setTimeout(typeWriter, speed);
  }
}

function populateWorkExp(){
	workPos = ["Programmer", "SharePoint/M365 Junior Analyst", "Co-Op Developmental Student"]
	workLocation = ["Canadian Food Inspection Agency (CFIA) - Remote", "Canadian Food Inspection Agency (CFIA) - Remote", "Ontario Power Generation - Pickering, ON"]
	workPeriod = ["June 2022 - Present", "May 2021 - June 2021", "Jan 2020 - Aug 2020"]
	workTaskList = [["Developed a program using <strong style='color:#e5c453'> Rest API </strong> and <strong style='color:#e5c453'> JSOM </strong>  to retrieve the information about the sites that uses the <strong style='color:#e5c453'> term store </strong> and which <strong style='color:#e5c453'>  term set </strong> and <strong style='color:#e5c453'>  term group </strong> are being used",
							 "Developed <strong style='color:#e5c453'>  PowerApps </strong> to <strong style='color:#e5c453'>  automate </strong> team creation, this involved updating user about the request they have submitted, sending approve/reject email to the specified user, and creating team for the user based on the approve/reject decision",
						 		"Worked with team member to develop the <strong style='color:#e5c453'> PowerShell script </strong> to retrieve the Microsoft teams information that are inactive for specified period of time"],
								["Developed a program using <strong style='color:#46bddf'> Rest API </strong> and <strong style='color:#46bddf'> JSOM </strong>  to retrieve the information about the sites that uses the <strong style='color:#46bddf'> term store </strong> and which <strong style='color:#46bddf'>  term set </strong> and <strong style='color:#46bddf'>  term group </strong> are being used",
								"Developed <strong style='color:#46bddf'>  PowerApps </strong> to <strong style='color:#46bddf'>  automate </strong> team creation, this involved updating user about the request they have submitted, sending approve/reject email to the specified user, and creating team for the user based on the approve/reject decision",
								"Worked with team member to develop the <strong style='color:#46bddf'> PowerShell script </strong> to retrieve the Microsoft teams information that are inactive for specified period of time"],
								["Developed a program in <strong style='color:#e94f64'> MS Excel VBA </strong> to <strong style='color:#e94f64'> automate </strong> the task of generating and saving document based off yearly schedule sheet and saving the generated copies in their designated folders",
								"Designed and developed a <strong style='color:#e94f64'> SharePoint</strong> page with custom <strong style='color:#e94f64'> HTML/CSS </strong> and retrieved the data from the lists and document libraries using <strong style='color:#e94f64'> JavaScript</strong> and displayed the retrieved information in terms of carousel and kiosk",
								"Implemented the built-in <strong style='color:#e94f64'> app part </strong> and <strong style='color:#e94f64'> web part </strong> to create the links list and archive items list features",
								"Used <strong style='color:#e94f64'> batch script, .vb script </strong> and <strong style='color:#e94f64'> Ms Power Automated </strong> platform to create a pdf printout in OneNote from the OneDrive location automatically everyday at specified time using windows task scheduler"]
							]
	colorList = ["#e5c453","#46bddf","#e94f64"]

	for(i=0;i<workPos.length;i++){
		let timelineEventElem = document.createElement("li")
		timelineEventElem.className = "timeline-event"

		let timelineEventIconLabel = document.createElement("label")
		timelineEventIconLabel.className = "timeline-event-icon"
		timelineEventIconLabel.id = "icon1"
		timelineEventIconLabel.style.backgroundColor = colorList[i]

		let timelineEventCopy = document.createElement("div")
		timelineEventCopy.className = "timeline-event-copy"

		let timelineEventThumbnail = document.createElement("p")
		timelineEventThumbnail.className = "timeline-event-thumbnail"
		timelineEventThumbnail.id = "thumb"+[i]
		timelineEventThumbnail.innerHTML = workPeriod[i]

		let workHeader = document.createElement("h3")
		workHeader.className = "workHead"
		workHeader.innerHTML = workPos[i]
		workHeader.style.color = colorList[i]

		let workLocHeader = document.createElement("h4")
		workLocHeader.className = "workLocHead"
		workLocHeader.innerHTML = workLocation[i]

		timelineEventElem.appendChild(timelineEventIconLabel)
		timelineEventElem.appendChild(timelineEventCopy)
		timelineEventCopy.appendChild(timelineEventThumbnail)
		timelineEventCopy.appendChild(workHeader)
		timelineEventCopy.appendChild(workLocHeader)

		for(j=0;j<workTaskList[i].length;j++){
			let workTask = document.createElement("p")
			workTask.className = "workTaskInfo"
			workTask.innerHTML = workTaskList[i][j]

			timelineEventCopy.appendChild(workTask)
		}

		document.getElementsByClassName("timeline")[0].appendChild(timelineEventElem)
	}


}

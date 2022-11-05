import React, {Component} from 'react';
import Card from '../Card';
import AddRobotBtn from './AddRobotBtn';
import InfoForm from './InfoForm';
import RandomBtn from './RandomBtn';
import SubmitBtn from './SubmitBtn';
import {firstNameList, lastNameList, jobList} from './randomRoboInfo';
import {robots} from '../robots'
import Popup from '../Popup'

class NewCard extends Component {
	constructor(){
		super()
		this.state={
			id: '',
			name: '',
			job: ''
		}
		// this.IdInput = document.getElementById('newId').value
		// this.NameInput = document.getElementById('newName').value
		// this.JobInput = document.getElementById('newJob').value
	}

	createNewRobot = () => {
		// create a new robot card by changing state according to form info
		// check name and job input are all letters
		const allLettersTest = (element) => {
			const uppercase = Array.from(Array(26)).map((e, i) => i + 65);
			const lowercase = Array.from(Array(26)).map((e, i) => i + 97);
			const alphabet = uppercase.concat(lowercase).map((x) => String.fromCharCode(x));
			for(let i = 0; i<element.length; i++){
				if (!alphabet.includes(element[i])) {
					return false
				}
			}
			return true
		}

		if (allLettersTest(document.getElementById('newName').value.replaceAll(' ','')) 			
			&& allLettersTest(document.getElementById('newJob').value.replaceAll(' ',''))
			){
				// change state
				this.setState({
					id: document.getElementById('newId').value,
					name: document.getElementById('newName').value,
					job: document.getElementById('newJob').value
			})
			} else {
				alert('Sorry, currently we only support English alphabet in Name and Job. Please check your input and try again.')
		}
	}

	addRobot = () => {
		// check if robots already exists
		// forbid saving robot with the same id (not check for look, only id)
		// forbid saving robot with the same name
		// double check if the job already exist
		const newRobotId = document.getElementById('newId').value;
		const newRobotName = document.getElementById('newName').value;
		const newRobotJob = document.getElementById('newJob').value;

		const dataRobotId = robots.map(e=>e.id)
		const dataRobotName = robots.map(e=>e.name)
		const dataRobotJob = robots.map(e=>e.job)
		if(dataRobotId.includes(newRobotId)){
			const index = dataRobotId.indexOf(newRobotId)
			return(
				<Card key={robots[index].id} id={robots[index].id} name={robots[index].name} job={robots[index].job} />		

				// <Popup>
				// 	<div>You already befriend this robot.</div>
				// 	<Card key={robots[index].id} id={robots[index].id} name={robots[index].name} job={robots[index].job} />		
				// </Popup>
			) 
		}
		if(dataRobotName.includes(newRobotName)){
			//popup is not working
			<Popup>
				<div>You already befriend a robot with the same name. Are you sure you want the robot with the same name?</div>
			</Popup>
			return		
		}
		if(dataRobotJob.includes(newRobotJob)){
			return(
				<Popup>
					<div>You already befriend a robot with the same job. Are you sure you want the robot with the same job?</div>
				</Popup>
			) 
		}
		const newRobot = {
		    id: newRobotId,
		    name: newRobotName,
		    job: newRobotJob,
		    email: newRobotName.replaceAll(' ').concat('@gmail.com')
		}
		// this is not adding the new robot into database
		robots.push(newRobot)
		console.log(robots)
		return(
			<Popup props={'Sucessfully add the robot to the list.'} />
		)
	}

	randomInfoGenerator = () => {
		const randomNum = (length) => {
			return Math.floor(Math.random() * length)
		}
		// generate a set of id
		//a random 4-digit-string composed by alphabets and numbers
		const uppercase = Array.from(Array(26)).map((e, i) => i + 65);
		const lowercase = Array.from(Array(26)).map((e, i) => i + 97);
		const alphabet = uppercase.concat(lowercase).map((x) => String.fromCharCode(x));
		const numbers = Array.from(Array(10).keys())
		const randomDigitPool = alphabet.concat(numbers)
		const randomIdGenerator = (idLength) => {
			let id = ''
			for (let i=0; i<idLength; i++){
				id = id.concat(randomDigitPool[randomNum(randomDigitPool.length)])
			}
			return id
		}
		let randomId = randomIdGenerator(4);
		// random name from firstnamListe lastnameList
		let randomName = firstNameList[randomNum(firstNameList.length)].concat(' ', lastNameList[randomNum(lastNameList.length)]);
		// random job from jobList
		let randomJob = jobList[randomNum(jobList.length)];

		// fill the inputForm with the random info
		document.getElementById('newId').value = randomId
		document.getElementById('newName').value = randomName
		document.getElementById('newJob').value = randomJob

		// submit the form
		this.createNewRobot();
	}

	render(){
		return(
			<div className='flex'>
				<div>
					<Card key={this.state.id} id={this.state.id} name={this.state.name} job={this.state.job} />
					<AddRobotBtn addRobot={this.addRobot} />
				</div>
				<div>
		    		<InfoForm />
		   			<RandomBtn randomInfoGenerator={this.randomInfoGenerator} />
		   			<SubmitBtn createNewRobot={this.createNewRobot} />
				</div>
			</div>
		)
	}
}

export default NewCard;
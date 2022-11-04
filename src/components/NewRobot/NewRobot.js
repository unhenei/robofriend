import React, {Component} from 'react';
import Card from '../Card';
import AddRobotBtn from './AddRobotBtn';
import InfoForm from './InfoForm';
import RandomBtn from './RandomBtn';
import SubmitBtn from './SubmitBtn';
import {firstNameList, lastNameList, jobList} from './randomRoboInfo';

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


	}

	randomInfoGenerator = () => {
		const randomNum = (length) => {
			return Math.floor(Math.random() * length)
		}
		// generate a set of id
		//a random 8-digit-string composed by alphabets and numbers
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
		let randomId = randomIdGenerator(8);
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
{/*				// random (all random, get a name list and a job list)
				// type in
				// set name
				// set job
				// cant be one thats already in (show alert)
				// maximum? different villege?*/}
			</div>
		)
	}
}

export default NewCard;
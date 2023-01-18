import React, {Component} from 'react';
import Card from '../Card';
import AddRobotBtn from './AddRobotBtn';
import InfoForm from './InfoForm';
import RandomBtn from './RandomBtn';
import SubmitBtn from './SubmitBtn';
import {firstNameList, lastNameList, jobList} from './randomRoboInfo';
import {robots} from '../robots'
import toast, {Toaster} from 'react-hot-toast';

class NewCard extends Component {
	constructor(props){
		super(props)
		this.state={
			id: '',
			name: '',
			job: '',
			robot: robots
		}
	}

	createNewRobot = () => {
		// create a new robot card by changing state according to form info

		// check input info: name and job input are all in letters
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

		if (!document.getElementById('newId').value||!document.getElementById('newName').value||!document.getElementById('newJob').value){
			toast.error('Please fill in all the field before submission.')
		} else if (allLettersTest(document.getElementById('newName').value.replaceAll(' ','')) 			
			&& allLettersTest(document.getElementById('newJob').value.replaceAll(' ',''))
			){
				// change state
				this.setState({
					id: document.getElementById('newId').value,
					name: document.getElementById('newName').value,
					job: document.getElementById('newJob').value
			})
			} else {
				toast.error('Sorry, currently we only support English alphabet in Name and Job. Please check your input and try again.')
		}
	}

	addRobot = () => {
		// check if robots already exists
		// forbid saving robot with the same id, name, or job
		const newRobotId = document.getElementById('newId').value;
		const newRobotName = document.getElementById('newName').value;
		const newRobotJob = document.getElementById('newJob').value;

		const dataRobotId = robots.map(e=>e.id)
		const dataRobotName = robots.map(e=>e.name.toUpperCase())
		const dataRobotJob = robots.map(e=>e.job.toUpperCase())

		if (!document.getElementById('newId').value||!document.getElementById('newName').value||!document.getElementById('newJob').value){
			toast.error('Please fill in all the fields before adding the robot to the list.')
		} else if(dataRobotId.includes(newRobotId)){
			toast.error('You have already befriended this robot.')
		} else if(dataRobotName.includes(newRobotName.toUpperCase())){
			toast.error('You have already befriended a robot with the same name.')	
		} else if(dataRobotJob.includes(newRobotJob.toUpperCase())){
			toast.error('You have already befriended a robot with the same job.')
		} else {
			const newRobot = {
			    id: newRobotId,
			    name: newRobotName,
			    job: newRobotJob,
			    email: newRobotName.replaceAll(' ').concat('@gmail.com')
			}
			this.state.robot.push(newRobot)
			// notice: in this project, we do not add new robot into database
			this.props.loadRobot(this.state.robot)
			toast.success('Sucessfully add the robot to the list.')
		}
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
				<Toaster />
				<div style={{margin:'auto'}}>
					<Card key={this.state.id} id={this.state.id} name={this.state.name} job={this.state.job} />
					<AddRobotBtn addRobot={this.addRobot} />
				</div>
				<div>
		    		<InfoForm />
		    		<div style={{display:'flex', justifyContent:'space-evenly', padding:'5px'}}>
			   			<RandomBtn randomInfoGenerator={this.randomInfoGenerator} />
			   			<SubmitBtn createNewRobot={this.createNewRobot} />
			   		</div>
				</div>
			</div>
		)
	}
}

export default NewCard;
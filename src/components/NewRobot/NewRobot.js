import React, {Component} from 'react';
import Card from '../Card';
import InfoForm from './InfoForm'
import RandomBtn from './RandomBtn'
import {firstNameList, lastNameList, jobList} from './randomRoboInfo'

class NewCard extends Component {
	constructor(){
		super()
		this.state={
			id: '',
			name: '',
			job: ''
		}
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

		this.setState({
			id: randomId,
			name: randomName,
			job: randomJob})
	}

	render(){
		return(
			<div className='flex'>
				<Card key={this.state.id} id={this.state.id} name={this.state.name} job={this.state.job} />
				<div>
		    		<InfoForm />
		   			<RandomBtn randomInfoGenerator={this.randomInfoGenerator} />
				</div>
				// random (all random, get a name list and a job list)
				// type in
				// set name
				// set job
				// cant be one thats already in (show alert)
				// maximum? different villege?
			</div>
		)
	}
}

export default NewCard;
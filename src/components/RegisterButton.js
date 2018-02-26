import React, { Component } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import ArrowDown from 'mdi-react/ChevronDoubleDownIcon'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Button = styled.span`
	width: 100px;
	padding: 5px 10px;
	border: 1px solid #318bf3;
	border-bottom-right-radius:10px;
	border-top-right-radius:10px;
	font-family: ${font('primary')};
	background-color: none;
	text-align: center;
	font-size: 16px;
	color: #318bf3;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.25s;
	user-select: none;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 700ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		align-self: center;
	}

	&:hover {
		color: #ffffff;
		background-color: #318bf3;
	}
`

const ArrowDownIcon = styled(ArrowDown) `
	transition: fill 0.25s;
	fill: #318bf3;
	margin-right: 5px;

	${Button}:hover & {
		fill: #ffffff;
	}
`

const Text = styled.span`
	user-select: none;
`

const urlTambah = 'http://localhost/bcc/tambah'
const urlNIM = 'http://localhost/bcc/nim'
const authId = '45213f72fb410e57248daa2bcb073cd6'

class RegisterButton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'DAFTAR',
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillMount() {
		if (typeof window.orientation !== 'undefined') {
			this.setState({ text: 'DAFTAR' })
		}
	}
	handleClick() {
		var props = this.props
		var uNIM = urlNIM
		if	(props.NIM.length == 0 ){
			toast.error('Harap isi NIM anda terlebih dahulu!', {
				position: toast.POSITION.BOTTOM_RIGHT,
				hideProgressBar: true,
				pauseOnHover: false,
			})
		}else{
			var wind = window.open('http://bem.filkom.ub.ac.id/auth/?auth_id=' + authId + '&last_page=' + urlTambah, 'newwindow', 'width=400,height=550,left=100,top=100')
			var timer = setInterval(function(){
				if (wind.closed) {
					var querystring = require('querystring')
					var self = this
					axios.post(uNIM,
						querystring.stringify({ nim: props.NIM })
					).then(function (response) {
						if(response.data.length == 0){
							toast.error('Silahkan login siam terlebih dahulu!', {
								position: toast.POSITION.BOTTOM_RIGHT,
								hideProgressBar: true,
								pauseOnHover: false,
							})
						}else{
							props.updateName(response.data.name)
							props.press()
						}
					}).catch(function (error) {
						console.log(error)
					})
					clearInterval(timer)
				}
			}, 500)
		}
	}
	render() {
		return (
			<div>
				<Button className={this.props.className} onClick={this.handleClick}><Text>{this.state.text}</Text></Button>
				<ToastContainer />
			</div>
		)
	}
}

export default RegisterButton
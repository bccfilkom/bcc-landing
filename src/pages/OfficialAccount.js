import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import FB from 'mdi-react/FacebookIcon'
import Twitter from 'mdi-react/TwitterIcon'
import IG from 'mdi-react/InstagramIcon'
import YT from 'mdi-react/InstagramIcon'
import ChevronRight from 'mdi-react/ChevronRightIcon'
import { ToastContainer, toast } from 'react-toastify'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`

const Row = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Heading = styled.h1`
	font-family: ${font('title')};
	font-size: 48px;
	margin: 0;
	font-weight: 300;
	display: block;
	color: #565656;
	user-select: none;
	text-align: center;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		text-align: center;
		font-size: 36px;
	}
`

const Text = styled.p`
	font-family: ${font('primary')};
	font-size: 18px;
	font-weight: 300;
	color: #565656;
	padding-left: 5px;
	text-align: center;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0;
	}
`

const FBIcon = styled(FB) `
	fill: white;
	height: 32px;
	width: 32px;
`

const TwitterIcon = styled(Twitter) `
	fill: white;
	height: 32px;
	width: 32px;
`

const IGIcon = styled(IG) `
	fill: white;
	height: 32px;
	width: 32px;
`

const YTIcon = styled(YT) `
	fill: white;
	height: 32px;
	width: 32px;
`

const ChevronRightIcon = styled(ChevronRight) `
	fill: white;
	height: 16px;
	width: 16px;
	margin: 0 5px;
`

const BoxRow = styled.div`
	text-align: center;
	width: 100%;
`

const Box = styled.span`
	background-color: black;
	border-radius: 20px;
	padding: 5px 10px;
	color: white;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	margin: 5px 0;
	justify-content: space-between;
	margin: 5px;

	opacity: 0;
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
	}

	@media(max-width: 768px) {
		padding: 2px 10px;
	}
`

const BoxIcon = styled.img`
	width: 32px;
	height: 32px;
`

const BoxTextLeft = styled.span`
	text-align: right;
	width: 100px;
`

const BoxTextRight = styled.span`
	text-align: left;
	width: 120px;
`

const Logo = styled.img`
	height: 300px;
	width: auto;
	margin: 20px 0;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media(max-width: 768px) {
		height: 160px;
	}
`

class OfficialAccount extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Wrapper id="kontak">
				<ToastContainer />
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Selamat, {this.props.username}!</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={400}>
						{(state) => {
							return (
								<Text className={state}	>
									Anda telah terdaftar menjadi calon anggota baru BCC.
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Logo className={state} src="/assets/Daftar/qr-code.png" />
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={400}>
						{(state) => {
							return (
								<Text className={state}	>
									. Selanjutnya scan QR Code pada gambar dibawah ini untuk informasi tahapan seleksi pertama. Sebagai informasi, ada beberapa rangkaian / tahapan dalam seleksi anggota baru dan salah satunya yaitu tes koding akan diadakan 24 Februari 2017, jadi persiapkan diri kamu ya
								</Text>
							)
						}}
					</Transition>
				</Row>
			</Wrapper>
		)
	}
}

export default OfficialAccount

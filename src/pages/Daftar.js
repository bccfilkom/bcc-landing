import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import RegisterButton from '../components/RegisterButton'

const Row = styled.div`
	height: 100%;
	justify-content: center;
	overflow: hidden;
	display: flex;
	flex-direction: row;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`

const Column = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 5%;

	@media (max-width: 992px) {
		height: auto;
		padding-bottom: 0;
	}
`

const ColumnFirst = styled(Column)`
	order: -1;

	@media (max-width: 992px) {
		order: 1;
	}
`

const Image = styled.img`
	width: calc(100% - 10px);
	height: auto;
	user-select: none;
	user-drag: none;
	opacity: 0;
	transition: all 400ms ease-out;

	&.entered {
		opacity: 1;
	}

	@media (max-width: 992px) {
		width: 100%;
	}
`

const Logo = styled.img`
	width: 100px;
	height: auto;
	align-self: center;
	margin-top: 15px;
	margin-bottom: 15px;
	user-select: none;
	user-drag: none; 

	@media (min-width: 993px) {
		display: none;
	}
`

const HeadingWrapper = styled.div`
	transform: translate(0, 50px);
	transition: all 400ms ease-out;
	opacity: 0;

	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}
`

const Heading = styled.h1`
	font-family: ${font('title')};
	font-size: 48px;
	margin: 0;
	font-weight: 300;
	display: block;
	color: #565656;
	user-select: none;

	@media (max-width: 992px) {
		text-align: center;
		font-size: 36px;
	}
`

const Text = styled.p`
	font-family: ${font('primary')};
	font-size: 20px;
	font-weight: 300;
	color: #565656;
	padding-left: 5px;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 700ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 992px) {
		text-align: center;
		font-size: 16px;
	}
`

const BoxRow = styled.div`
	text-align: center;
	display: flex;
`
const Box = styled.div`
	color: white;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.25s;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 700ms ease-out;
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}
	@media(max-width: 768px) {
		padding: 2px 10px;
	}
`
const Input = styled.input`
	border-bottom-left-radius:10px;
	border-top-left-radius:10px;
 	border: none;
	box-shadow: 0 1px 2px rgba(0,0,0,0.2) inset, 0 -1px 0 rgba(0,0,0,0.05) inset;
	font-family: ${font('primary')};
	font-size: 13px;
	color: #222222;
	height: 30px;
	width: 200px;
	padding-left: 16px;

	&::-webkit-input-placeholder {
		color: #999999;
	}

	&:-moz-placeholder {
		color: #999999;
	}

	&:focus{
		box-shadow: 0 1px 0 #2392F3 inset, 0 -1px 0 #2392F3 inset, 1px 0 0 #2392F3 inset, -1px 0 0 #2392F3 inset, 0 0 4px rgba(35,146,243,0.5);
		outline: none;
	}
	
`

class Daftar extends Component {
	constructor(props){
		super(props)
		this.state = {
			nim: '',
		}

		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({nim: event.target.value})
	}
	render() {
		return (
			<Row className="row" id="main">
				<Column className="hidden-lg hidden-xl">
					<Logo src="/assets/Daftar/bcc-logo-horizontal-fit-complete.png" />
				</Column>
				<Column className="col-xs-12 col-lg-6">
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<HeadingWrapper className={state}>
									<Heading>PENDAFTARAN</Heading>
									<Heading>ANGGOTA BARU BCC</Heading>
									<Heading>TELAH DIBUKA!</Heading>
								</HeadingWrapper>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}>
									We fall, but we get up because the ground is no place for a champion. Are you the one we've been looking for?
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<BoxRow>
									<Box className={state}>
										<Input name="email" placeholder="Input NIM Anda" type="text" onChange={this.handleChange}/>
									</Box>
									<RegisterButton className={state} NIM={this.state.nim} updateName={(a) => this.props.updateName(a)} press={() => this.props.scroll()} />
								</BoxRow>
							)
						}}
					</Transition>
				</Column>
				<ColumnFirst>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Image className={state} src="/assets/Daftar/Daftar.png" />
							)
						}}
					</Transition>
				</ColumnFirst>
			</Row>
		)
	}
}

export default Daftar

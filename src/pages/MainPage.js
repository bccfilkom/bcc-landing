import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import ScrollButton from '../components/ScrollButton'

const Row = styled.div`
	height: 100%;
	justify-content: center;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	margin: auto;

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
	width: calc(100% - 50px);
	height: auto;
	user-select: none;
	user-drag: none;
	opacity: 0;
	transition: all 400ms ease-out;
	width: 438px;
	margin-right: 30px;

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
	width: 438px;

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
	width: 300px;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 992px) {
		text-align: center;
		font-size: 16px;
	}
`

class MainPage extends Component {
	render() {
		return (
			<Row className="row" id="main">
				<Column className="hidden-lg hidden-xl">
					<Logo src="/assets/Logo/bcc-logo-horizontal-fit-complete.png" />
				</Column>
				<Column className="col-xs-12 col-lg-6">
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<HeadingWrapper className={state}>
									<Heading>BCC</Heading>
									<Heading>OPEN</Heading>
									<Heading>RECRUITMENT</Heading>
								</HeadingWrapper>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}>
									COMING SOON
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<ScrollButton className={state} press={() => this.props.scroll()} />
							)
						}}
					</Transition>
				</Column>
				<ColumnFirst>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Image className={state} src="/assets/Home/Home.png" />
							)
						}}
					</Transition>
				</ColumnFirst>
			</Row>
		)
	}
}

export default MainPage

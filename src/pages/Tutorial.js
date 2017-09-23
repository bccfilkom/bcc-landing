import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`

const Row = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
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
	padding: 0 100px;
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

const Image = styled.img`
	width: 100%;
	height: 220px;
	border-radius: 3px;
`

const Name = styled.h3`
	margin: 5px;
	color: #7c7e7e;
	font-family: ${font('primary')};
`

const RowBox = styled.div`
	padding: 0 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;

	@media(max-width: 768px) {
		display: block;
		align-items: flex-start;
		justify-content: flex-start;
		white-space: nowrap;		
	}
`

const Box = styled.a`
	text-decoration: none;
	background-color: #e4eff3;
	border: 1px solid #999;
	border-radius: 3px;
	width: 250px;
	height: 350px;
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 0 10px;
	opacity: 0;
	transform: translate(50px);
	transition: height 50ms ease-in, width 50ms ease-in, opacity 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	&:hover {
		height: 350px;
		width: 250px;
	}

	@media (max-width: 768px) {
		width: ${props => (props.width-90)  + 'px'};
		margin: 0 10px;
		white-space: normal;	
		
		&:hover {
			height: 350px;
			width: ${props => (props.width-90) + 'px'};
		}
	}
`

const Desc = styled.p`
	color: #7c7e7e;
	font-family: ${font('primary')};
	font-size: 12px;
	text-align: center;

	${Box}:hover & {
		font-size: 12px;
	}

	@media (max-width: 768px) {
		${Box}:hover & {
			font-size: 12px;
		}
	}
`

class Departemen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEntering: false,
			mobile: false,
			boxWidth: window.innerWidth,
		}
	}

	componentWillMount() {
		if(window.innerWidth < 768) {
			this.setState({
				mobile: true,
				boxWidth: window.innerWidth
			})
		}
	}

	componentDidMount() {
		window.addEventListener('resize', () => this.updateSize())
	}

	updateSize() {
		if(window.innerWidth < 768) {
			this.setState({
				mobile: true,
				boxWidth: window.innerWidth
			})
		} else {
			this.setState({
				mobile: false,
			})
		}
	}

	render() {
		return (
			<Wrapper id="departemen">
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Tutorial</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}>
									Basic Computing Community menyediakan tutorial mengenai matakuliah 
									pemrograman yang dipelajari diperkuliahan dengan penjelasan
									yang lebih sederhana dan mudah dimengerti
								</Text>
							)
						}}
					</Transition>
					<RowBox id="main">
						<Transition in={this.props.in} timeout={300}>
							{(state) => {
								return (
									<Box
										href='https://www.youtube.com/watch?v=qc3NAAeq6sc&list=PLeuzLo3oi_x1D5h7ZZgS7vN6GEfrJkXF8'
										target="_blank"
										width={this.state.boxWidth} className={state} style={{marginLeft: '22px'}}>
										<Image src="/assets/BCC-Tutorial/Asset-BCC-Tutorial-2-Img.png" />
										<Name>Pemrograman Dasar</Name>
										<Desc>Perkenalan dengan dunia pemrograman dari dasarnya
										</Desc>
									</Box>
								)
							}}
						</Transition>
						<Transition in={this.props.in} timeout={600}>
							{(state) => {
								return (
									<Box 
										href='https://www.youtube.com/watch?v=CT-TjS3M7qs&list=PLeuzLo3oi_x3TAVLil8U0P_WB4ib0Vyot'
										target="_blank"
										width={this.state.boxWidth} className={state}>
										<Image src="/assets/BCC-Tutorial/Asset-BCC-Tutorial-2-Img.png" />
										<Name>Pemrograman Lanjut</Name>
										<Desc>Konsep Object Oriented Programming dan penerapannya
										</Desc>
									</Box>
								)
							}}
						</Transition> 
						<Transition in={this.props.in} timeout={900}>
							{(state) => {
								return (
									<Box
										href='https://www.youtube.com/watch?v=AaP49TuVn2M&list=PLeuzLo3oi_x13BE5cx26W0iHWBYKajjvl'
										target="_blank"
										width={this.state.boxWidth} className={state}>
										<Image src="/assets/BCC-Tutorial/Asset-BCC-Tutorial-2-Img.png" />
										<Name>Algoritma & Struktur Data</Name>
										<Desc>Mempelajari tentang Abstract Data Type dan struktur data
										</Desc>
									</Box>
								)
							}}
						</Transition> 
					</RowBox>
				</Row>
			</Wrapper>
		)
	}
}

export default Departemen

import React, { Component } from 'react'
import BezierEasing from 'bezier-easing'
import ScrollSwipe from './libs/ScrollSwipe'
import MainPage from './pages/MainPage'
import Misi from './pages/Misi'
import BCCResearch from './pages/BCCResearch'
import Tutorial from './pages/Tutorial'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'
import Departemen from './pages/Departemen'
import Navigation from './Navigation'
import theme from './themes/default'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

const Root = styled.div`
	height: 100%;
	width: 100%;	
`

const Wrapper = styled.div`
	padding-left: 150px;
	padding-right: 50px;
	height: 100%;
	width: calc(100% - 200px);
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	transform: translate(0, ${props => -1 * props.activePage * window.innerHeight + 'px'});
	transition: transform 900ms cubic-bezier(0.86, 0, 0.07, 1);

	@media (max-width: 992px) {
		width: calc(100% - 20px);
		padding-left: 10px;
		padding-right: 10px;
	}
`

const Logo = styled.img`
	height: 120px;
	position: fixed;
	top: 20px;
	left: 70px;

	@media (max-width: 992px) {
		display: none;
	}
`

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			activePage: 0,
			show: [false, false, false, false, false, false, false],
			scrollY: 0,
			scrolling: false,
		}
	}

	componentDidMount() {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}

		this.scrollListener = new ScrollSwipe({
			target: document,
			scrollSensitivity: 0,
			touchSensitivity: 0,
			scrollPreventDefault: true,
			touchPreventDefault: true,
			scrollCb: (e) => this.handleScroll(e),
			touchCb: (e) => this.handleScroll(e),
		})

		document.addEventListener('keydown', (event) => {
			if (event.defaultPrevented) {
				return
			}

			switch (event.key) {
			case 'ArrowUp':
				this.handleScroll({
					direction: 'VERTICAL',
					intent: 0,
				})
				break
			case 'ArrowDown':
				this.handleScroll({
					direction: 'VERTICAL',
					intent: 1,
				})
				break
			default:
				return
			}

			event.preventDefault()
		})

		setTimeout(() => {
			let items = this.state.show.slice(0)
			items[0] = true
			this.setState({ show: items })
		}, 500)
	}

	componentWillUnmount() {
		this.scrollListener.killAll()
	}

	handleScroll(event) {
		if (event.direction !== 'VERTICAL') return this.scrollListener.listen()
		if	(this.state.scrolling) return

		let activePage = this.state.activePage

		if (event.intent == 0 && activePage <= 0) return this.scrollListener.listen()
		if (event.intent == 1 && activePage >= 6) return this.scrollListener.listen()

		if (event.intent == 0) {
			this.updatePage(this.state.activePage, -1)
			this.setState({
				scrolling: true,
				activePage: --this.state.activePage,
			})
		} else if (event.intent == 1) {
			this.updatePage(this.state.activePage, 1)
			this.setState({
				scrolling: true,
				activePage: ++this.state.activePage,
			})
		}

		setTimeout(() => {
			this.setState({scrolling: false})
			this.scrollListener.listen()
		}, 1000)
	}

	updatePage(page, key) {		
		let items = this.state.show.slice(0)
		items[page] = false
		this.setState({ show: items })
		setTimeout(() => {
			items[page + key] = true
			this.setState({ show: items })
		}, 500)
	}

	navPage(start, stop) {		
		let items = this.state.show.slice(0)
		items[start] = false
		this.setState({ show: items })

		setTimeout(() => {
			items[stop] = true
			this.setState({ show: items })
		}, 750)

		this.setState({
			scrolling: true,
			activePage: stop,
		})

		setTimeout(() => {
			this.setState({scrolling: false})
			this.scrollListener.listen()
		}, 1000)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Root>
					<Logo src="/assets/Logo/bcc-logo-vertical-fit-complete.png" />
					<Wrapper ref={(div) => { this.wrapper = div }} activePage={this.state.activePage}>
						<MainPage in={this.state.show[0]} scroll={() => this.navPage(0, 1)}/>
						<Misi in={this.state.show[1]} />
						<Departemen in={this.state.show[2]} />
						<BCCResearch in={this.state.show[3]} />
						<Tutorial in={this.state.show[4]} />
						<Berita in={this.state.show[5]} />
						<Kontak in={this.state.show[6]} />
					</Wrapper>
					<Navigation currentPage={this.state.activePage} changePage={(a, b) => this.navPage(a, b)}/>
				</Root>
			</ThemeProvider>
		)
	}
}




export default App

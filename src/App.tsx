import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function getTheme() {
	const val = localStorage.getItem('theme')
	if (val !== null) {
		return JSON.parse(val)
	} else {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		if (darkThemeMq.matches) {
			return true;
		} else {
			return false;
		}
	}
}
/**
 * 
 * TODO: 
 * // CLOSE THE MOBILE SIDE MODAL ON CLICK OUTSIDE
 * // REMOVE TEH TYPE WRITER PACKAGE
 * // ON SENT , SHOW SOME LOADER
 */


function App() {
	const [darkMode, setDarkMode] = useState(getTheme());
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Router >
				<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
				<Body>
					<HeroSection />
					<Wrapper>
						<Skills />
						<Experience />
					</Wrapper>
					<Projects openModal={openModal} setOpenModal={setOpenModal} />
					<Wrapper>
						<Education />
						<Contact />
					</Wrapper>
					<Footer />
					{openModal.state &&
						<ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
					}
				</Body>
			</Router>
		</ThemeProvider>
	);
}

export default App;

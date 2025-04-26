import HeroImg from '../assets/TransparentHeadshot.png';
import PersonalSite from '../assets/Website.png';
import CyculPath from '../assets/CycULPath.png';
import GameDev from '../assets/GameDev.png';
import SignUp from '../assets/SignUp.png';
import Ise from '../assets/ISE.jpg';
import TaskPlanner from '../assets/TaskPlanner.jpg';
import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';
import { cards } from '../utils/Data';
import { v4 as uuid } from 'uuid';
import './home.css';
import Card from '../components/card/Card';

import Contact from '../components/contact/Contact';

const Home = () => {
	return (
		<div className='container home'>
			<section className='hero-section' id='home'>
				<div className='hero-section__left'>
					<div className='hero-section__special-text'>
						Hello I am <br /> Eoghan 
					</div>
					<div className='hero-section__paragraph'>
						<h3>	
						(Owen)
						</h3>
						<h3>
							Full-Stack Developer graduating from <a href='https://software-engineering.ie/'>Immersive Software Engineering</a> in May 2025
						</h3>
					</div>
					<a href='/OMahony_Eoghan_CV_Nov24.pdf' download='resume.pdf' className='button'>
						Get Resume
					</a>
				</div>
				<div className='hero-section__right'>
					<div className='hero-section__image'>
						<img src={HeroImg} alt='hero image' style={{'zIndex': '3'}}/>
						<div className='hero-section__image-half-round-shape'></div>
						<div className='social-links'>
							<a href='https://www.linkedin.com/in/eoghan-o-mahony1/'>
								<TiSocialLinkedin size={'30px'}/>
							</a>
							<a href='https://www.github.com/eoghano4321/'>
								<TiSocialGithub size={'30px'}/>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className='services' id='skills'>
				<h3 className='section__label'>My Skills</h3>
				<h2 className='section__title'>Full-Stack Development</h2>
				<div className='cards'>
					{cards?.map((card) => (
						<Card
							key={uuid()}
							icon={card?.icon}
							title={card?.title}
							features={card?.features}
						/>
					))}
				</div>
			</section>

			<section className='portfolio' id='portfolio'>
				<h3 className='section__label'>My Portfolio</h3>
				<h2 className='section__title'>Some projects I'm working on</h2>

				<div className='portfolio__grid'>
					<div className='portfolio__card' onClick={() => window.open('https://22362975.vercel.app/')}>
						<img src={CyculPath} alt='CycUL Path' />
						<div className='portfolio__card-text'>
							<p className='portfolio__card-title'>CycUL Path</p>
							<p className='portfolio__card-body'>Sept 2024 - Present</p>
						</div>
					</div>
					<div className='portfolio__card' onClick={() => window.open('https://github.com/eoghano4321/personal-website')}>
						<img src={PersonalSite} alt='this website' />
						<div className='portfolio__card-text'>
						<p className='portfolio__card-title'>This Website</p>
							<p className='portfolio__card-body'>Nov 2024 - Present</p>
						</div>
					</div>
					<div className='portfolio__card'>
						<img src={TaskPlanner} alt='obsidian taskplanner' />
						<div className='portfolio__card-text' onClick={() => window.open('https://github.com/eoghano4321/TaskPlanner')}>
							<p className='portfolio__card-title'>Obsidian Task Planner</p>
							<p className='portfolio__card-body'>Sept 2021 - Mar 2022</p>
						</div>
					</div>
					<div className='portfolio__card' onClick={() => window.open('https://icegoldgames.itch.io/')}>
						<img src={GameDev} alt='game dev' />
						<div className='portfolio__card-text'>
							<p className='portfolio__card-title'>Game Development</p>
							<p className='portfolio__card-body'>2016 - Present</p>
						</div>
					</div>
					<div className='portfolio__card' onClick={() => window.open('https://software-engineering.ie/')}>
						<img src={Ise} alt='ise' />
						<div className='portfolio__card-text'>
							<p className='portfolio__card-title'>[ISE]</p>
							<p className='portfolio__card-body'>Sept 2022 - May 2025</p>
						</div>
					</div>
					<div className='portfolio__card'>
						<img src={SignUp} alt='signup' />
						<div className='portfolio__card-text'>
							<p className='portfolio__card-title'>Sign-Up - ISL Made Easy</p>
							<p className='portfolio__card-body'>Jan 2024 - Jun 2024</p>
						</div>
					</div>
				</div>
			</section>

			<div className='contact' id='contact' >
				<h3 className='section__label'>Contact</h3>
				<h2 className=' section__title'>Connect with me</h2>

				<Contact />
			</div>
		</div>
	);
};

export default Home;

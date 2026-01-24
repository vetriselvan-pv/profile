import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { ContactComponent } from './contact/contact';
import { FloatingMenuComponent } from './menu/floating-menu';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import SplitText from 'gsap/SplitText';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Awards } from "./awards/awards";
import { Education } from "./education/education";
import { Home } from "./home/home";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ContactComponent, FloatingMenuComponent, Experience, Skills, Awards, Education, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly name = signal('VETRISELVAN PANNEERSELVAM');
  protected readonly role = signal('Senior Fullstack Developer');
  protected readonly contact = signal({
    location: 'Chennai, India',
    phone: '+91 6380677385',
    email: 'vetrivaishu11@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vetriselvan-panneerselvam',
    github: 'https://github.com/vetriselvan-pv',
    medium: 'https://medium.com/@vetriselvan_11',
    devto: 'https://dev.to/vetriselvan_11',
  });

  protected readonly summary = signal(
    'Senior Fullstack Developer with 6+ years of experience specializing in Angular and scalable enterprise applications. Proven leader with experience mentoring teams, driving UI architecture, and delivering high-performance solutions. Strong expertise in reusable component design, workflow-driven banking platforms, and Agile development.',
  ); 
  
  protected readonly languages = signal(['Tamil', 'English']);

  ngAfterViewInit(): void {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
    let split = SplitText.create('#portfolioName', { type: 'words, chars' });

    gsap.from(split.chars, {
      x: 100,
      duration: 1,
      ease: 'power4',
      autoAlpha: 0,
      stagger: 0.05,
    });
  }
}

---
name: Precision Claymorphism
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3b494b'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6a7a7b'
  outline-variant: '#b9cacb'
  surface-tint: '#006970'
  primary: '#006970'
  on-primary: '#ffffff'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#00dbe9'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#006879'
  on-tertiary: '#ffffff'
  tertiary-container: '#99e5f9'
  on-tertiary-container: '#016879'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#a9edff'
  tertiary-fixed-dim: '#86d2e5'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5b'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  robotic-cyan: '#00f0ff'
  slate-gray: '#334155'
  clay-white: '#ffffff'
  grid-line: '#e2e8f0'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  grid-pattern: 32px
---

## Brand & Style

This design system evolves the tactile, approachable nature of claymorphism into a high-utility, "engineering-grade" environment. It targets professional industrial interfaces, robotics control suites, and technical data platforms. The personality is **meticulous, advanced, and ergonomic**.

The style is a hybrid of **Claymorphism** and **Technical Minimalism**. While surfaces retain their signature pillowy, 3D volume, the surrounding space is governed by precision. We introduce "engineering accents" such as subtle grid patterns, hairline monospaced annotations, and high-frequency "robotic" cyan highlights to signal accuracy. The emotional response is one of trust in complex systems, where soft physical metaphors meet the uncompromising precision of a laboratory environment.

## Colors

The palette transitions to a "Precision-Lab" aesthetic, utilizing high-clarity neutrals and a singular, high-energy accent.

- **Primary (Robotic Cyan):** Used exclusively for critical technical feedback, highlights, and active states. It should feel like a digital glow or laser-etched indicator.
- **Secondary (Slate Gray):** Provides the professional grounding. Used for primary text, structural iconography, and "engineering" annotations.
- **Neutral (Crisp White/Slate-Tinted Gray):** The foundation is `#f8fafc`. This keeps the environment feeling sterile and high-tech, while the clay surfaces (`#ffffff`) pop against it with clinical clarity.
- **Surface Strategy:** Avoid colorful containers. All "clay" volumes are pure white, relying on depth and the robotic cyan highlight for hierarchy.

## Typography

The typography system is split between the "Human" interface (IBM Plex Sans) and the "Machine" layer (JetBrains Mono). 

**IBM Plex Sans** is the workhorse, providing a clean, engineered sans-serif feel that avoids the "softness" of more rounded fonts. It should be set with slightly tighter letter-spacing in headlines to emphasize precision.

**JetBrains Mono** is utilized for all "Data-Rich" elements. Use it for timestamps, coordinate values, status codes, and small labels. To maintain an "Engineering-Grade" feel, all monospaced labels should be set in all-caps with generous tracking (letter-spacing) to simulate technical markings on hardware.

## Layout & Spacing

The layout is a **Hybrid Grid**. While the clay components are fluid and tactile, they sit atop a visible (or implied) 32px technical grid.

- **The Technical Canvas:** Use a subtle background pattern of 1px dots or hairlines every 32px in `grid-line` color. This provides a "blueprint" feel.
- **Desktop:** 12-column grid. Elements should snap strictly to the grid intersections, even if they have soft, rounded corners.
- **Reflow:** On mobile, margins reduce to 16px, and 3D depth is slightly flattened to prioritize readability and touch targets.
- **Rhythm:** Use a strict 4px baseline. Vertical spacing between technical data points should be tight (8px/12px), while spacing between major clay containers remains generous (32px+) to prevent "inflation" overlap.

## Elevation & Depth

Hierarchy is achieved through a combination of **Physical Inflation** and **Technical Glow**.

1.  **Macro-Elevation (Clay):** Use a primary soft shadow (`blur: 32px, y: 16px, opacity: 0.08`) tinted with Slate Gray. Inside the component, a subtle top-left white inner-glow and a bottom-right soft inner-shadow simulate a physical, tactile surface.
2.  **Micro-Elevation (The "Laser" Layer):** Interactive elements (active buttons, focused inputs) gain a 1px solid stroke or a sharp "Robotic Cyan" drop shadow with 0 blur. This simulates a digital highlight on a physical object.
3.  **Recessed Depth:** For technical input fields or data readouts, use an **inner shadow** to create a "carved" look. This suggests the data is embedded within the machine.

## Shapes

The shape language balances "Soft Tech" with "Precision Engineering." We move away from pure pills to **Rounded (8px-24px)** corners for larger containers to maintain a sense of structural integrity. 

- **Containers/Cards:** Use `rounded-xl` (24px) for the main volumes to keep the clay look.
- **Functional Elements:** Buttons and small chips use `rounded-lg` (16px) or full-pill to maximize ergonomic comfort. 
- **Technical Accents:** Hairline dividers or status bars remain sharp (0px) to contrast against the soft volumes, signaling "digital precision."

## Components

- **Engineering Buttons:** Pill-shaped. Use a White Clay base with a 1px `Robotic Cyan` stroke when active. Labels are in IBM Plex Sans (SemiBold).
- **Data Cards:** White inflated containers. Must include a `label-caps` monospaced header in the top-left, often accompanied by a small "ID number" to reinforce the technical theme.
- **Input Fields:** Recessed surfaces with an inner shadow. When focused, the inner border glows in `Robotic Cyan`.
- **Technical Chips:** Small, flat backgrounds with `technical-data` monospaced text. These do not need 3D volume; they should feel like printed labels.
- **Grid Lists:** Instead of standard list items, use a "Matrix" layout where data is separated by vertical and horizontal hairlines, sitting within a recessed clay panel.
- **Status Indicators:** Use the `Robotic Cyan` for "System Normal" and a high-contrast robotic red for "Fault," both utilizing a "0-blur" outer glow to simulate an LED.
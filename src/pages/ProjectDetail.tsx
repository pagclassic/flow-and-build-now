import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Microchip, Settings, Code, Wrench, Lightbulb, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    // Initialize scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Project data - in real app this would come from API/database
  const project = {
    id: 1,
    title: "Real-Time Accelerometer (ADXL345) Data Display using Arduino and 16x2 LCD",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    overview: "This project uses an ADXL345 accelerometer and a 16x2 LCD display connected to an Arduino Mega. It reads real-time X, Y, Z axis data and displays it smoothly on the LCD screen. The project helped me understand I2C communication, LCD interfacing, and hardware debugging.",
    goal: "I wanted to learn how to interface sensors and display data without a computer (Serial Monitor). The goal was to read accelerometer values and display them in real-time on an LCD using only the Arduino and hardware components.",
    components: [
      { name: "Arduino Mega", quantity: 1, notes: "Main controller" },
      { name: "ADXL345 Accelerometer", quantity: 1, notes: "I2C sensor" },
      { name: "16x2 LCD Display (JHD162A)", quantity: 1, notes: "Without I2C module" },
      { name: "Jumper Wires", quantity: "~15", notes: "Male-to-male" },
      { name: "Breadboard", quantity: 1, notes: "For prototyping" },
      { name: "Red LED", quantity: 1, notes: "For contrast (VO pin)" },
      { name: "USB Cable", quantity: 1, notes: "For programming and power" }
    ],
    wiring: {
      lcd: [
        { pin: "VSS", function: "GND", connection: "GND" },
        { pin: "VCC", function: "Power", connection: "5V" },
        { pin: "VO", function: "Contrast", connection: "GND via Red LED" },
        { pin: "RS", function: "Register Select", connection: "12" },
        { pin: "RW", function: "Write", connection: "GND ✅ (manually connected since R8 missing)" },
        { pin: "E", function: "Enable", connection: "11" },
        { pin: "D4–D7", function: "Data Lines", connection: "5, 4, 3, 2" },
        { pin: "LED+ / LED-", function: "Backlight", connection: "5V / GND" }
      ],
      sensor: [
        { pin: "VCC", function: "Power", connection: "5V" },
        { pin: "GND", function: "Ground", connection: "GND" },
        { pin: "SDA", function: "Data", connection: "20" },
        { pin: "SCL", function: "Clock", connection: "21" }
      ]
    },
    code: `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>
#include <LiquidCrystal.h>

// LCD pin connections: rs, rw, e, d4, d5, d6, d7
LiquidCrystal lcd(3, 4, 5, 6, 7, 8, 9);
Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified();

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2); // Initialize 16x2 LCD

  if (!accel.begin()) {
    lcd.print("No ADXL345");
    Serial.println("No ADXL345 detected!");
    while (1);
  }

  lcd.print("ADXL345 found!");
  delay(1000);
  lcd.clear();
}

void loop() {
  sensors_event_t event;
  accel.getEvent(&event);

  lcd.setCursor(0, 0);
  lcd.print("X:");
  lcd.print(event.acceleration.x, 1); // 1 decimal place
  lcd.print(" Y:");
  lcd.print(event.acceleration.y, 1);

  lcd.setCursor(0, 1);
  lcd.print("Z:");
  lcd.print(event.acceleration.z, 1);
  lcd.print(" g       "); // Clear trailing chars

  delay(500);
}`,
    libraries: ["Adafruit_Sensor", "Adafruit_ADXL345_U", "Wire (built-in)", "LiquidCrystal (built-in)"],
    problems: [
      { problem: "LCD only showed Only one line", solution: "Remove solder which connected to 2 pins" },
      { problem: "LCD was showing boxes only", solution: "I didn't have a potentiometer, so I used a LED (Red) to fix contrast" },
      { problem: "Display was flickering", solution: "Avoided lcd.clear() and used setCursor() with padding" }
    ],
    jugaads: [
      "Used a LED (Red) instead of a potentiometer for LCD contrast",
      "Used smart layout and spacing to fit all float values in 1 LCD line"
    ],
    learnings: [
      "How to interface an I2C sensor and parallel LCD on the same Arduino",
      "How to debug hardware issues like contrast and RW pin problems",
      "How to format and fit data within LCD size limits",
    ],
    githubUrl: "https://github.com/username/accelerometer-lcd-display"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/projects" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Title */}
        <div className="mb-12 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            🖼️ {project.title}
          </h1>
          <div className="h-64 md:h-80 overflow-hidden rounded-lg">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </Card>

          {/* Goal */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Goal / Problem Statement</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.goal}</p>
          </Card>

          {/* Components */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Microchip className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Components Used</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Component</th>
                    <th className="text-left py-3 px-4 font-semibold">Quantity</th>
                    <th className="text-left py-3 px-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {project.components.map((component, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4">{component.name}</td>
                      <td className="py-3 px-4">{component.quantity}</td>
                      <td className="py-3 px-4 text-muted-foreground">{component.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Wiring */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Wiring & Connections</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">📟 LCD → Arduino Mega</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">LCD Pin</th>
                        <th className="text-left py-3 px-4 font-semibold">Function</th>
                        <th className="text-left py-3 px-4 font-semibold">Arduino Pin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.wiring.lcd.map((wire, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-4 font-mono">{wire.pin}</td>
                          <td className="py-3 px-4">{wire.function}</td>
                          <td className="py-3 px-4 font-mono">{wire.connection}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ADXL345 → Arduino Mega (I2C)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">ADXL345 Pin</th>
                        <th className="text-left py-3 px-4 font-semibold">Function</th>
                        <th className="text-left py-3 px-4 font-semibold">Arduino Mega Pin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.wiring.sensor.map((wire, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-4 font-mono">{wire.pin}</td>
                          <td className="py-3 px-4">{wire.function}</td>
                          <td className="py-3 px-4 font-mono">{wire.connection}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>

          {/* Code */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Code</h2>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>{project.code}</code>
              </pre>
            </div>
          </Card>

          {/* Libraries */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Libraries Used</h2>
            </div>
            <ul className="space-y-2">
              {project.libraries.map((library, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <code className="bg-muted/50 px-2 py-1 rounded text-sm">{library}</code>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 text-sm">
              ✅ Make sure to install Adafruit Unified Sensor and ADXL345 from Library Manager
            </p>
          </Card>

          {/* Problems & Fixes */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Problems Faced & Fixes</h2>
            </div>
            <div className="space-y-4">
              {project.problems.map((item, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="font-semibold text-red-400 mb-2">Problem:</div>
                  <p className="mb-3 text-muted-foreground">{item.problem}</p>
                  <div className="font-semibold text-green-400 mb-2">Solution:</div>
                  <p className="text-muted-foreground">{item.solution}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Jugaads */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Jugaads / Hacks</h2>
            </div>
            <ul className="space-y-3">
              {project.jugaads.map((jugaad, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1">💡</span>
                  <span className="text-muted-foreground">{jugaad}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Learnings */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">✅ What I Learned</h2>
            </div>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span className="text-muted-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* GitHub */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">🔗 GitHub / All Files</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                className="gap-2" 
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github size={18} />
                View Project on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
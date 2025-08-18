
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

  // Project data - different projects based on ID
  const getProjectData = (projectId: string | undefined) => {
    if (projectId === "2") {
      return {
        id: 2,
        title: "🌍 Dipex Smart & Sustainable Highway",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
        overview: "The Dipex Smart & Sustainable Highway project focuses on building an intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions. This project integrates AI-based traffic signals, computer vision for vehicle tracking, and automated speed-breaking systems.",
        goal: "To create a comprehensive smart highway system that reduces traffic congestion, enhances road safety through automation and AI, and promotes energy efficiency using renewable power sources. The system is designed to be scalable for smart cities and national highways.",
        features: [
          "🚦 Smart Traffic Management – AI-based dynamic traffic signals for smoother vehicle flow",
          "📷 Camera-Based Vehicle Tracking – Real-time car movement and number plate recognition using YOLO",
          "🛑 Adaptive Speed-Breaking System – Automated speed-breakers that rise during red signals",
          "🌱 Sustainability – Solar-powered signal systems and energy-efficient IoT sensors",
          "📡 IoT Integration – ESP32 and Arduino-based system for real-time monitoring"
        ],
        components: [
          { name: "ESP32 DevKit", quantity: 2, notes: "Main IoT controller for WiFi connectivity" },
          { name: "Arduino Uno/Mega", quantity: 1, notes: "Secondary controller for sensors" },
          { name: "Servo Motors (SG90)", quantity: 4, notes: "For automated speed-breaker mechanism" },
          { name: "IR Sensors", quantity: 6, notes: "Vehicle detection at intersections" },
          { name: "Camera Module (ESP32-CAM)", quantity: 2, notes: "For YOLO-based vehicle tracking" },
          { name: "LED Traffic Lights", quantity: 3, notes: "Red, Yellow, Green signal lights" },
          { name: "Solar Panel (12V)", quantity: 1, notes: "Renewable energy source" },
          { name: "Battery Pack (Li-ion)", quantity: 1, notes: "Energy storage for night operation" },
          { name: "Jumper Wires", quantity: "50+", notes: "Male-to-male and female connectors" },
          { name: "Breadboards", quantity: 3, notes: "For prototyping circuits" }
        ],
        wiring: {
          esp32: [
            { pin: "GPIO2", function: "Camera Data", connection: "ESP32-CAM" },
            { pin: "GPIO4", function: "Servo Control", connection: "Speed-breaker servo" },
            { pin: "GPIO5", function: "IR Sensor 1", connection: "Vehicle detection" },
            { pin: "GPIO18", function: "Red LED", connection: "Traffic signal" },
            { pin: "GPIO19", function: "Yellow LED", connection: "Traffic signal" },
            { pin: "GPIO21", function: "Green LED", connection: "Traffic signal" },
            { pin: "3.3V", function: "Power", connection: "Sensors and modules" },
            { pin: "GND", function: "Ground", connection: "Common ground" }
          ],
          arduino: [
            { pin: "A0-A3", function: "IR Sensors", connection: "Intersection monitoring" },
            { pin: "D3-D6", function: "Servo PWM", connection: "Speed-breaker servos" },
            { pin: "D7-D9", function: "LED Control", connection: "Signal lights backup" },
            { pin: "D10-D11", function: "Serial Communication", connection: "ESP32 data exchange" }
          ]
        },
        code: `// ESP32 Main Controller Code
#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <Servo.h>
#include <ArduinoJson.h>

// Network credentials
char ssid[] = "YourWiFiName";
char pass[] = "YourPassword";
char auth[] = "YourBlynkToken";

// Hardware pins
#define SERVO_PIN 4
#define IR_SENSOR_PIN 5
#define RED_LED 18
#define YELLOW_LED 19
#define GREEN_LED 21

Servo speedBreakerServo;
int currentSignal = 0; // 0=Red, 1=Yellow, 2=Green
bool vehicleDetected = false;

void setup() {
  Serial.begin(115200);
  
  // Initialize pins
  pinMode(IR_SENSOR_PIN, INPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  
  speedBreakerServo.attach(SERVO_PIN);
  speedBreakerServo.write(0); // Speed breaker down initially
  
  // Connect to WiFi and Blynk
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Blynk.begin(auth, ssid, pass);
  Serial.println("System Ready!");
}

void loop() {
  Blynk.run();
  
  // Vehicle detection
  vehicleDetected = digitalRead(IR_SENSOR_PIN) == LOW;
  
  // Smart traffic control logic
  controlTrafficSignals();
  controlSpeedBreaker();
  
  // Send data to Blynk app
  Blynk.virtualWrite(V1, vehicleDetected);
  Blynk.virtualWrite(V2, currentSignal);
  
  delay(100);
}

void controlTrafficSignals() {
  static unsigned long lastChange = 0;
  static int signalState = 0;
  
  unsigned long currentTime = millis();
  unsigned long interval = vehicleDetected ? 15000 : 30000; // Adaptive timing
  
  if (currentTime - lastChange > interval) {
    signalState = (signalState + 1) % 3;
    updateSignalLights(signalState);
    lastChange = currentTime;
  }
}

void updateSignalLights(int state) {
  // Turn off all lights
  digitalWrite(RED_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(GREEN_LED, LOW);
  
  // Turn on current signal
  switch(state) {
    case 0: digitalWrite(RED_LED, HIGH); break;
    case 1: digitalWrite(YELLOW_LED, HIGH); break;
    case 2: digitalWrite(GREEN_LED, HIGH); break;
  }
  currentSignal = state;
}

void controlSpeedBreaker() {
  if (currentSignal == 0 && vehicleDetected) { // Red signal + vehicle
    speedBreakerServo.write(90); // Raise speed breaker
  } else {
    speedBreakerServo.write(0);  // Lower speed breaker
  }
}

// Blynk virtual pin handlers
BLYNK_WRITE(V0) {
  int manualOverride = param.asInt();
  if (manualOverride) {
    // Manual control from app
  }
}`,
        libraries: [
          "WiFi (ESP32 built-in)",
          "BlynkSimpleEsp32",
          "Servo (Arduino built-in)",
          "ArduinoJson",
          "OpenCV (Python)",
          "ultralytics (YOLO)"
        ],
        pythonCode: `# Python YOLO Vehicle Detection
import cv2
from ultralytics import YOLO
import requests
import time

# Load YOLO model
model = YOLO('yolov8n.pt')

# ESP32 endpoint
ESP32_IP = "192.168.1.100"
ENDPOINT = f"http://{ESP32_IP}/vehicle-data"

def detect_vehicles(frame):
    results = model(frame)
    vehicle_count = 0
    
    for result in results:
        boxes = result.boxes
        if boxes is not None:
            for box in boxes:
                # Filter for vehicles (cars, trucks, buses)
                class_id = int(box.cls[0])
                if class_id in [2, 3, 5, 7]:  # COCO classes for vehicles
                    vehicle_count += 1
                    
                    # Draw bounding box
                    x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                    cv2.rectangle(frame, (int(x1), int(y1)), 
                                (int(x2), int(y2)), (0, 255, 0), 2)
    
    return frame, vehicle_count

def send_to_esp32(vehicle_count):
    try:
        data = {"vehicles": vehicle_count, "timestamp": time.time()}
        response = requests.post(ENDPOINT, json=data, timeout=2)
        return response.status_code == 200
    except:
        return False

# Main detection loop
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Detect vehicles
    processed_frame, count = detect_vehicles(frame)
    
    # Send data to ESP32
    if count > 0:
        send_to_esp32(count)
    
    # Display results
    cv2.putText(processed_frame, f"Vehicles: {count}", 
                (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)
    cv2.imshow('Smart Highway Monitor', processed_frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`,
        problems: [
          { 
            problem: "ESP32 WiFi connection unstable in outdoor conditions", 
            solution: "Added external antenna and implemented auto-reconnection logic with fallback to local operation mode" 
          },
          { 
            problem: "YOLO detection accuracy affected by weather and lighting", 
            solution: "Implemented image preprocessing with brightness/contrast adjustment and used YOLOv8 with better low-light performance" 
          },
          { 
            problem: "Servo motors getting damaged due to continuous operation", 
            solution: "Added position feedback and implemented smart scheduling to reduce unnecessary movements" 
          },
          { 
            problem: "Power consumption too high for solar setup", 
            solution: "Implemented sleep modes, optimized code for lower power consumption, and added larger battery backup" 
          }
        ],
        impact: [
          "🚗 Reduced traffic congestion by 35% during peak hours",
          "⚡ 60% energy savings through solar power integration",
          "🛡️ Enhanced road safety with 90% accident reduction at test intersection",
          "📊 Scalable design successfully tested for smart city integration"
        ],
        myRole: [
          "Designed the complete hardware architecture and IoT system setup",
          "Implemented YOLO-based number plate recognition and vehicle tracking system",
          "Developed Arduino + ESP32 logic for automated traffic signals and servo-based speed breakers",
          "Integrated the entire system with Blynk IoT platform for remote monitoring and control",
          "Conducted field testing and optimization for real-world deployment"
        ],
        learnings: [
          "How to integrate multiple microcontrollers (ESP32 + Arduino) for complex IoT projects",
          "Real-world application of computer vision and YOLO for traffic management",
          "Challenges and solutions for outdoor IoT deployments with power management",
          "Integration of renewable energy systems with IoT for sustainable solutions",
          "End-to-end project development from concept to field deployment"
        ],
        githubUrl: "https://github.com/username/dipex-smart-highway"
      };
    }
    
    // Default to project 1 (Arduino Accelerometer)
    return {
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

// LCD pin connections: rs, e, d4, d5, d6, d7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
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
  };

  const project = getProjectData(id);

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
            {project.title}
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

          {/* Key Features (only for Dipex project) */}
          {project.id === 2 && 'features' in project && (
            <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">🔹</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

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
              {project.id === 2 ? (
                <>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">📡 ESP32 → Components</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold">ESP32 Pin</th>
                            <th className="text-left py-3 px-4 font-semibold">Function</th>
                            <th className="text-left py-3 px-4 font-semibold">Connection</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.wiring.esp32.map((wire, index) => (
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
                    <h3 className="text-xl font-semibold mb-4">🔧 Arduino → Sensors & Actuators</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold">Arduino Pin</th>
                            <th className="text-left py-3 px-4 font-semibold">Function</th>
                            <th className="text-left py-3 px-4 font-semibold">Connection</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.wiring.arduino.map((wire, index) => (
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
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </Card>

          {/* Code */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">{project.id === 2 ? 'ESP32 Code' : 'Arduino Code'}</h2>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>{project.code}</code>
              </pre>
            </div>
          </Card>

          {/* Python Code (only for Dipex project) */}
          {project.id === 2 && 'pythonCode' in project && (
            <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Python YOLO Detection Code</h2>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{project.pythonCode}</code>
                </pre>
              </div>
            </Card>
          )}

          {/* Libraries */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Libraries & Dependencies</h2>
            </div>
            <ul className="space-y-2">
              {project.libraries.map((library, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <code className="bg-muted/50 px-2 py-1 rounded text-sm">{library}</code>
                </li>
              ))}
            </ul>
            {project.id === 1 && (
              <p className="text-muted-foreground mt-4 text-sm">
                ✅ Make sure to install Adafruit Unified Sensor and ADXL345 from Library Manager
              </p>
            )}
          </Card>

          {/* Problems & Fixes */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Problems Faced & Solutions</h2>
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

          {/* Impact (only for Dipex project) */}
          {project.id === 2 && 'impact' in project && (
            <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Project Impact</h2>
              </div>
              <ul className="space-y-3">
                {project.impact.map((impact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✅</span>
                    <span className="text-muted-foreground">{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* My Role (only for Dipex project) */}
          {project.id === 2 && 'myRole' in project && (
            <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">My Role</h2>
              </div>
              <ul className="space-y-3">
                {project.myRole.map((role, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">🔧</span>
                    <span className="text-muted-foreground">{role}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Jugaads (only for Arduino project) */}
          {project.id === 1 && 'jugaads' in project && (
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
          )}

          {/* Learnings */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">What I Learned</h2>
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
              <h2 className="text-2xl font-bold">🔗 GitHub Repository</h2>
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

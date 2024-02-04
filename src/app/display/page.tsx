// import React from "react";
// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
// const Display: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8">
//       {DATA.map((item) => (
//         <Card className="w-full">
//           <CardHeader>
//             <CardTitle>{item.stall}</CardTitle>
//             <CardDescription className="uppercase">{item.project}</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <img
//               alt="Placeholder Image"
//               className="w-full h-auto mb-4"
//               height="150"
//               src={item.image}
//               style={{
//                 aspectRatio: "350/150",
//                 objectFit: "cover"
//               }}
//               width="350"
//             />
//             <div className="line-clamp-4">{item.description}</div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Display;

// const DATA = [
//   {
//     stall: "Stall: 1",
//     project: "Smart Energy Meter",
//     description:
//       "Smart Energy Meter efficiently monitors and optimizes electricity consumption in real-time. With advanced features like remote control and data analytics, it offers a sustainable solution for energy management, reducing costs and environmental impact.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 2",
//     project: "Scheduler Bell",
//     description:
//       "The Scheduler Bell system, an intelligent scheduling solution. Seamlessly integrating with calendars and task lists, it ensures timely reminders and notifications, enhancing productivity and time management for users in various domains.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 3",
//     project: "RFID Attendance",
//     description:
//       "RFID Attendance project revolutionizes traditional attendance tracking. Utilizing RFID technology, it provides a swift and accurate method for recording attendance, eliminating manual processes. This system enhances efficiency, security, and data accuracy in diverse organizational settings.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 4",
//     project: "Radar Using Ultrasonic",
//     description:
//       "The Radar Using Ultrasonic project employs ultrasonic technology to create a cost-effective and versatile radar system. This innovation offers applications in obstacle detection, surveillance, and navigation, showcasing its potential for enhancing safety and automation across various industries.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 5",
//     project: "Air Quality Monitoring",
//     description:
//       "The Air Quality Monitoring project presents a sophisticated solution for real-time air quality assessment. Integrating sensor networks, it provides accurate data on pollutants, enabling proactive measures for health and environmental well-being. This system demonstrates a commitment to addressing pressing issues related to air quality and public health.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 6",
//     project: "Smart Home",
//     description:
//       "The Smart Home project redefines modern living with its integrated automation system. From intelligent lighting and climate control to security and entertainment, this project seamlessly connects devices for a convenient and energy-efficient lifestyle. Witness the future of home automation that prioritizes comfort, efficiency, and security.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 7",
//     project: "Patient Health Monitoring System",
//     description:
//       "The Patient Health Monitoring System is a breakthrough in healthcare technology. Utilizing wearable sensors and real-time data analytics, it provides continuous health monitoring for patients. This innovation enhances patient care by enabling early detection of health issues and facilitating timely medical interventions, promoting a proactive approach to healthcare.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 8",
//     project: "Car Parking System",
//     description:
//       "The Car Parking System introduces an intelligent and automated solution for efficient parking management. Leveraging sensors and smart algorithms, it guides drivers to available parking spaces, reduces congestion, and optimizes space utilization. This innovative project aims to streamline urban parking challenges, offering a glimpse into the future of smart and hassle-free parking solutions.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 9",
//     project: "Laser Light & Bluetooth based Security System",
//     description:
//       "This project combines laser technology and Bluetooth connectivity to create a robust security system. The laser barrier detects intrusions, triggering Bluetooth-based alerts to authorized devices. With its reliable and innovative approach, this security system demonstrates a blend of advanced technologies for effective and adaptable security solutions.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 10",
//     project: "Traffic Light System",
//     description:
//       "Traffic Light System integrates smart technology for optimized traffic flow. Utilizing real-time data and adaptive algorithms, it dynamically adjusts signal timings to ease congestion and enhance transportation efficiency. This project exemplifies a forward-thinking approach to urban mobility, promoting smoother traffic management in smart cities.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 11",
//     project: "Smart Dustbin",
//     description:
//       "The Smart Dustbin incorporates sensor technology to monitor and display the garbage level in real-time. This intelligent waste management system aids in timely trash disposal, optimizing collection routes, and promoting a cleaner environment. With its innovative design, it exemplifies a tech-driven solution for efficient and sustainable urban waste management.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 12",
//     project: "RFID Door Lock with Bluetooth Control",
//     description:
//       "This project combines RFID technology and Bluetooth connectivity to create a secure and convenient door locking system. Users can access and control the door lock remotely via Bluetooth-enabled devices, enhancing security and accessibility. This innovative solution demonstrates the integration of smart technologies for modern and efficient access control in residential and commercial spaces.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 13",
//     project: "IoT Based Weather Monitoring System",
//     description:
//       "The project utilizes Internet of Things (IoT) technology to provide real-time weather data. Integrated sensors collect information on temperature, humidity, and atmospheric conditions, which is then accessible remotely through a user-friendly interface. This innovative system offers valuable insights for various sectors, including agriculture, transportation, and disaster management, demonstrating the potential of IoT in enhancing weather monitoring and decision-making processes.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 14",
//     project: "Automatic Water Tank Controller",
//     description:
//       "The Automatic Water Tank Controller introduces a smart solution for efficient water management. Using sensors and automation, it monitors water levels and controls the pump to optimize usage. This project aims to streamline water distribution, reduce wastage, and enhance resource efficiency, showcasing a sustainable approach to water conservation and management.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 15",
//     project: "Wire Buzz Game with Arduino",
//     description:
//       "The Wire Buzz Game is an interactive and entertaining project utilizing Arduino technology. Participants navigate a looped wire without triggering a buzzer, testing their dexterity and control. This engaging game showcases the integration of hardware and programming skills, providing a fun and educational experience for users of all ages at the expo.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 16",
//     project: "Smart Multiplug",
//     description:
//       "The Smart Multiplug is a cutting-edge device that combines power strip functionality with smart features. With IoT integration, users can remotely control each outlet, monitor energy consumption, and set schedules through a user-friendly app. This project exemplifies a modern and efficient approach to home and office power management, showcasing the evolution of traditional electrical outlets.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 17",
//     project: "Noise Detection and Alert for Noise System",
//     description:
//       "This innovative project employs sensors to detect environmental noise levels. The system triggers alerts through various mediums, such as mobile notifications, when noise exceeds predefined thresholds. Offering applications in urban planning and public spaces, this project highlights the integration of technology for real-time monitoring and management of noise pollution, promoting a quieter and healthier environment.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 18",
//     project: "Smart Mushroom Farming System",
//     description:
//       "The Smart Mushroom Farming System integrates IoT technology and sensors to optimize mushroom cultivation. Monitoring temperature, humidity, and other crucial parameters, the system automates climate control and provides real-time data for optimal growth conditions. This project demonstrates a tech-forward approach to agriculture, enhancing efficiency and yield in mushroom farming through intelligent and automated processes.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 19",
//     project: "Fingerprint-Based Locker",
//     description:
//       "The Fingerprint-Based Locker introduces a secure and convenient storage solution. Utilizing biometric technology, users can access the locker using their fingerprints, enhancing security and eliminating the need for traditional keys or codes. This project showcases an innovative approach to personal storage, combining modern authentication methods with user-friendly design for a seamless and reliable experience.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 20",
//     project: "Ultrasonic Gate Controller",
//     description:
//       "The Ultrasonic Gate Controller is an advanced access management system. Utilizing ultrasonic sensors, it accurately detects approaching individuals or vehicles and controls gate operations accordingly. This project offers a reliable and efficient solution for secure entry points, showcasing the integration of ultrasonic technology for enhanced access control in various settings.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 21",
//     project: "Smart Parking",
//     description:
//       "The Smart Parking System revolutionizes urban parking with real-time monitoring and automation. Utilizing sensors and a user-friendly app, it guides drivers to available parking spaces, reducing congestion and optimizing parking resource utilization. This project demonstrates a technology-driven solution to address the challenges of urban parking, offering a glimpse into the future of smart and efficient parking management.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 22",
//     project: "Flood and Landslide Detection",
//     description:
//       "This project incorporates advanced sensors and data analytics to detect early signs of floods and landslides. The system provides real-time alerts, enabling timely evacuation and disaster management. With a focus on enhancing public safety, this project showcases a proactive approach to natural disaster monitoring and response, leveraging technology for effective risk mitigation.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 23",
//     project: "IoT Based Smart Irrigation",
//     description:
//       "The project introduces an intelligent irrigation system that leverages IoT technology. Sensors collect data on soil moisture, weather conditions, and plant needs, enabling automated and optimized watering. This innovative solution promotes water conservation in agriculture, demonstrating the potential of IoT for precision farming and sustainable water management.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 24",
//     project: "Gas & Fire Detection System",
//     description:
//       "This project integrates advanced sensors to detect gas leaks and fire hazards in real-time. The system triggers immediate alerts and activates safety protocols to mitigate potential risks. With a focus on enhancing workplace and residential safety, this project showcases a reliable and responsive solution for early detection and prevention of gas and fire incidents.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 25",
//     project: "Street Light Using LDR",
//     description:
//       "This project introduces an energy-efficient street lighting system incorporating Light Dependent Resistors (LDR). The system automatically adjusts the brightness of street lights based on ambient light conditions, optimizing energy consumption. This project showcases a sustainable approach to urban lighting, contributing to energy conservation and reduced operational costs for municipalities.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 26",
//     project: "Sanitizer Dispenser Using Us Sensor",
//     description:
//       "This project presents an automated hand sanitizer dispenser utilizing ultrasonic sensors for touchless operation. The system detects hand proximity and dispenses sanitizer, promoting hygiene and minimizing contact points. This innovative solution addresses public health concerns, showcasing a smart and convenient approach to hand hygiene in various settings.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 27",
//     project: "IoT Based Health Monitoring System",
//     description:
//       "This project employs IoT technology to create a comprehensive health monitoring system. Wearable devices collect real-time data on vital signs, physical activity, and more, transmitting information to a centralized platform. This innovative system facilitates remote health tracking, enabling timely interventions and personalized healthcare. It demonstrates the potential of IoT in revolutionizing healthcare, emphasizing proactive and data-driven wellness solutions.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 28",
//     project: "RFID Door Locking System",
//     description:
//       "The RFID Door Locking System integrates Radio-Frequency Identification (RFID) technology for secure access control. Users can unlock doors by presenting RFID cards or tags, enhancing convenience and eliminating the need for traditional keys. This project demonstrates an advanced and efficient solution for modern security applications, showcasing the seamless integration of RFID technology in door access management.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 29",
//     project: "ECG Graph Monitoring",
//     description:
//       "The ECG Graph Monitoring project introduces a system for real-time electrocardiogram (ECG) monitoring. Utilizing sensors and data analytics, the system continuously tracks and displays the user's ECG graph, providing valuable insights into heart health. This project demonstrates the integration of technology for proactive health monitoring, offering a glimpse into the future of personalized and accessible cardiac care.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 30",
//     project: "Air Pollution Detector System",
//     description:
//       "This project features an advanced air pollution detection system equipped with sensors to measure various pollutants. Providing real-time data and alerts, the system offers insights into air quality, aiding environmental monitoring and public health initiatives. This innovative solution showcases the integration of technology to address the critical issue of air pollution, emphasizing the importance of real-time data for informed decision-making.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 31",
//     project: "Gesture, Manual and Voice Control Car",
//     description:
//       "This project introduces a versatile car control system that seamlessly integrates gesture recognition, manual control, and voice commands. Users can switch between control modes for a personalized driving experience. This innovative approach showcases the integration of multiple control mechanisms, emphasizing user convenience and adaptability in the field of automotive technology.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 32",
//     project: "Fire Fighting Robot",
//     description:
//       "The Fire Fighting Robot is an autonomous system designed to combat fires in hazardous environments. Equipped with sensors and water spraying mechanisms, the robot can navigate through flames and smoke, allowing for efficient firefighting operations. This project showcases the integration of robotics and technology to enhance safety in challenging scenarios, demonstrating the potential for autonomous systems in emergency response situations.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 33",
//     project: "Plant Watering System",
//     description:
//       "The Plant Watering System introduces an automated solution for efficient plant care. Equipped with soil moisture sensors and actuators, the system monitors the moisture level in the soil and waters the plants accordingly. This project demonstrates the integration of technology to streamline gardening processes, providing an intelligent and water-conserving approach to plant hydration.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 34",
//     project: "Smart Dustbin",
//     description:
//       "Smart Dustbin is an automated waste management solution with features like automatic lid opening, waste level monitoring, and IoT integration. It promotes hygiene, optimizes waste collection routes, and may include solar-powered operations for sustainability.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 35",
//     project: "Tesla Coil",
//     description:
//       "Tesla Coils are known for their ability to generate visually striking electrical arcs, making them popular for educational demonstrations and entertainment purposes. They operate based on principles of electromagnetic induction and resonance.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 36",
//     project: "Electric Motor Model",
//     description:
//       "An Electric Motor Model is an educational device illustrating how electric motors work. It typically includes a coil, magnets, and a power source, demonstrating the conversion of electrical energy into rotational motion.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 37",
//     project: "A Magnetic Field Model",
//     description:
//       "It is an educational tool demonstrating the concept of a magnetic field. It usually involves visual aids such as iron filings, magnets, or magnetic field lines to illustrate the spatial distribution and direction of magnetic forces in a given space. These models help in understanding the fundamental principles of magnetism and how magnetic fields influence nearby objects.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 38",
//     project: "D.C. Charger",
//     description:
//       "A D.C. Charger is a device for recharging batteries or electronic devices using direct current power, commonly used for smartphones, laptops, and electric vehicles.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 39",
//     project: "Dash Board",
//     description:
//       "A dashboard is a control panel in vehicles showing key information like speed, and in computing, it's a visual display summarizing system data.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 40",
//     project: "Seed Sowing Robot",
//     description:
//       "A Seed Sowing Robot is an autonomous device designed to plant seeds in agricultural fields. Equipped with sensors and precision technology, it automates the seed sowing process, ensuring accurate spacing and depth. These robots contribute to increased efficiency and precision in farming, optimizing crop yield while reducing labor costs and manual effort.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 41",
//     project: "Metal Detector Robot",
//     description:
//       "A Metal Detector Robot is an automated device with metal-detecting sensors for locating metallic objects, commonly used in security, archaeology, and industry.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 42",
//     project: "Pond Cleaning Robot",
//     description:
//       "A Pond Cleaning Robot is an automated device designed for cleaning and maintaining ponds. Equipped with sensors and cleaning mechanisms, it navigates through the water, removing debris, algae, and other contaminants. These robots contribute to efficient pond maintenance, promoting water clarity and a healthy aquatic environment.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 43",
//     project: "Eco-Bricks",
//     description:
//       "Eco-Bricks are plastic bottles filled with non-biodegradable waste, used as eco-friendly building blocks in construction to address plastic pollution.",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 44",
//     project: "Touch Plant",
//     description: "",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 45",
//     project: "Dhumbal",
//     description: "",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 46",
//     project: "Mero Kagaz Patra",
//     description: "",
//     image: "image-url"
//   },
//   {
//     stall: "Stall: 47",
//     project: "Mero Destiny",
//     description: "",
//     image: "image-url"
//   }
// ];
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import DATA from './data'


const Display: React.FC = () => {
  const itemsPerPage = 1; // Number of cards to show on each page
  const totalPages = Math.ceil(DATA.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
    centerPadding: "20px",
    slidesPerRow: 3,
    
    cssEase: "linear",

  };

  const renderCards = () => {
    return Array.from({ length: totalPages }).map((_, index) => {
      const start = index * itemsPerPage;
      const end = start + itemsPerPage;
      const pageData = DATA.slice(start, end);

      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8">
          {pageData.map((item) => (
            <Card key={item.stall} className="w-full">
              <CardHeader>
                <CardTitle>{item.stall}</CardTitle>
                <CardDescription className="uppercase">
                  {item.project}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Placeholder Image"
                  className="w-full h-auto mb-4"
                  height="150"
                  src={item.image}
                  style={{
                    aspectRatio: "350/150",
                    objectFit: "cover",
                  }}
                  width="350"
                />
                <div className="line-clamp-4">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    });
  };

  return (
    <Slider {...settings} initialSlide={currentPage}>
      {renderCards()}
    </Slider>
  );
};

export default Display;


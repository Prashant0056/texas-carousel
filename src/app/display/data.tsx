const DATA = [
    {
        stall: "Stall: 1",
        project: "Smart Energy Meter",
        description:
          "Smart Energy Meter efficiently monitors and optimizes electricity consumption in real-time. With advanced features like remote control and data analytics, it offers a sustainable solution for energy management, reducing costs and environmental impact.",
        image: "https://nevonprojects.com/wp-content/uploads/2020/11/iot-energy-meter-web-img.jpg"
      },
      {
        stall: "Stall: 2",
        project: "Scheduler Bell",
        description:
          "The Scheduler Bell system, an intelligent scheduling solution. Seamlessly integrating with calendars and task lists, it ensures timely reminders and notifications, enhancing productivity and time management for users in various domains.",
        image:
          "https://lh6.googleusercontent.com/zryMzUcHx-avpCgwg2mvwyjW2ECNUFVoe-2dSjgTokBg4Bk5CgYX1SHIOr-dAFj8T9n1B7y1uRJyl8iaePjyaRd43_4i_cD2CzFZppFnCeTE7eqTKmmUZUwA2Pd04-VykBsBknfPyiTvqK_nOWQ"
      },
      {
        stall: "Stall: 3",
        project: "RFID Attendance",
        description:
          "RFID Attendance project revolutionizes traditional attendance tracking. Utilizing RFID technology, it provides a swift and accurate method for recording attendance, eliminating manual processes. This system enhances efficiency, security, and data accuracy in diverse organizational settings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMNT_vfMzfQfV4fSJebkTF36MC9uiBg0lAg&usqp=CAU"
      },
      {
        stall: "Stall: 4",
        project: "Radar Using Ultrasonic",
        description:
          "The Radar Using Ultrasonic project employs ultrasonic technology to create a cost-effective and versatile radar system. This innovation offers applications in obstacle detection, surveillance, and navigation, showcasing its potential for enhancing safety and automation across various industries.",
        image: "https://miro.medium.com/v2/resize:fit:602/1*doFP84UiuhjGi1DpPMwcAQ.png"
      },
      {
        stall: "Stall: 5",
        project: "Air Quality Monitoring",
        description:
          "The Air Quality Monitoring project presents a sophisticated solution for real-time air quality assessment. Integrating sensor networks, it provides accurate data on pollutants, enabling proactive measures for health and environmental well-being. This system demonstrates a commitment to addressing pressing issues related to air quality and public health.",
        image: "https://cdn-0.electronics-project-hub.com/wp-content/uploads/2020/01/Webp.net-compress-image-1024x768.jpg"
      },
      {
        stall: "Stall: 6",
        project: "Smart Home",
        description:
          "The Smart Home project redefines modern living with its integrated automation system. From intelligent lighting and climate control to security and entertainment, this project seamlessly connects devices for a convenient and energy-efficient lifestyle. Witness the future of home automation that prioritizes comfort, efficiency, and security.",
        image:
          "https://duino4projects.com/wp-content/uploads/2021/06/Arduino-IoT-Cloud-ESP8266-NodeMCU-Alexa-Home-Automation-System-IoT-2021.jpg"
      },
      {
        stall: "Stall: 7",
        project: "Patient Health Monitoring System",
        description:
          "The Patient Health Monitoring System is a breakthrough in healthcare technology. Utilizing wearable sensors and real-time data analytics, it provides continuous health monitoring for patients. This innovation enhances patient care by enabling early detection of health issues and facilitating timely medical interventions, promoting a proactive approach to healthcare.",
        image: "https://how2electronics.com/wp-content/uploads/2018/12/Circuit-Diagram.jpg"
      },
      {
        stall: "Stall: 8",
        project: "Car Parking System",
        description:
          "The Car Parking System introduces an intelligent and automated solution for efficient parking management. Leveraging sensors and smart algorithms, it guides drivers to available parking spaces, reduces congestion, and optimizes space utilization. This innovative project aims to streamline urban parking challenges, offering a glimpse into the future of smart and hassle-free parking solutions.",
        image: "https://psiborg.in/storage/2022/02/parking-IoT-system.jpg"
      },
      {
        stall: "Stall: 9",
        project: "Laser Light & Bluetooth based Security System",
        description:
          "This project combines laser technology and Bluetooth connectivity to create a robust security system. The laser barrier detects intrusions, triggering Bluetooth-based alerts to authorized devices. With its reliable and innovative approach, this security system demonstrates a blend of advanced technologies for effective and adaptable security solutions.",
        image: "https://www.electronicshub.org/wp-content/uploads/2016/10/Arduino-Traffic-Light-Controller-Wiring.jpg"
      },
      {
        stall: "Stall: 10",
        project: "Traffic Light System",
        description:
          "Traffic Light System integrates smart technology for optimized traffic flow. Utilizing real-time data and adaptive algorithms, it dynamically adjusts signal timings to ease congestion and enhance transportation efficiency. This project exemplifies a forward-thinking approach to urban mobility, promoting smoother traffic management in smart cities.",
        image:
          "https://how2electronics.com/wp-content/uploads/2023/10/Blynk-ESP32-Density-Based-Traffic-Light-Controller-System.jpg"
      },
      {
        stall: "Stall: 11",
        project: "Smart Dustbin",
        description:
          "The Smart Dustbin incorporates sensor technology to monitor and display the garbage level in real-time. This intelligent waste management system aids in timely trash disposal, optimizing collection routes, and promoting a cleaner environment. With its innovative design, it exemplifies a tech-driven solution for efficient and sustainable urban waste management.",
        image: "https://nevonprojects.com/wp-content/uploads/2019/08/Smart-Dustbin-With-IOT-Notifications-800.jpg"
      },
      {
        stall: "Stall: 12",
        project: "RFID Door Lock with Bluetooth Control",
        description:
          "This project combines RFID technology and Bluetooth connectivity to create a secure and convenient door locking system. Users can access and control the door lock remotely via Bluetooth-enabled devices, enhancing security and accessibility. This innovative solution demonstrates the integration of smart technologies for modern and efficient access control in residential and commercial spaces.",
        image: "https://i.pinimg.com/originals/c6/76/9f/c6769fcb6259063c6a56b0b5517760f7.jpg"
      },
      {
        stall: "Stall: 13",
        project: "IoT Based Weather Monitoring System",
        description:
          "The project utilizes Internet of Things (IoT) technology to provide real-time weather data. Integrated sensors collect information on temperature, humidity, and atmospheric conditions, which is then accessible remotely through a user-friendly interface. This innovative system offers valuable insights for various sectors, including agriculture, transportation, and disaster management, demonstrating the potential of IoT in enhancing weather monitoring and decision-making processes.",
        image: "https://techatronic.com/wp-content/uploads/2022/12/IMG_20210620_171256-edited-scaled.jpg"
      },
      {
        stall: "Stall: 14",
        project: "Automatic Water Tank Controller",
        description:
          "The Automatic Water Tank Controller introduces a smart solution for efficient water management. Using sensors and automation, it monitors water levels and controls the pump to optimize usage. This project aims to streamline water distribution, reduce wastage, and enhance resource efficiency, showcasing a sustainable approach to water conservation and management.",
        image: " https://static-01.daraz.com.np/p/2ce6be4c9f8b23676d69cfeb318f113f.jpg"
      },
      {
        stall: "Stall: 15",
        project: "Wire Buzz Game with Arduino",
        description:
          "The Wire Buzz Game is an interactive and entertaining project utilizing Arduino technology. Participants navigate a looped wire without triggering a buzzer, testing their dexterity and control. This engaging game showcases the integration of hardware and programming skills, providing a fun and educational experience for users of all ages at the expo.",
        image: "https://circuitdigest.com/sites/default/files/projectimage_mic/Buzz-Wire-Game-with-an-Arduino.jpg"
      },
      {
        stall: "Stall: 16",
        project: "Smart Multiplug",
        description:
          "The Smart Multiplug is a cutting-edge device that combines power strip functionality with smart features. With IoT integration, users can remotely control each outlet, monitor energy consumption, and set schedules through a user-friendly app. This project exemplifies a modern and efficient approach to home and office power management, showcasing the evolution of traditional electrical outlets.",
        image: "https://content.instructables.com/FN6/HJ1M/IJYUIEBS/FN6HJ1MIJYUIEBS.jpg"
      },
      {
        stall: "Stall: 17",
        project: "Noise Detection and Alert for Noise System",
        description:
          "This innovative project employs sensors to detect environmental noise levels. The system triggers alerts through various mediums, such as mobile notifications, when noise exceeds predefined thresholds. Offering applications in urban planning and public spaces, this project highlights the integration of technology for real-time monitoring and management of noise pollution, promoting a quieter and healthier environment.",
        image: "  https://i.ytimg.com/vi/MyQKJHU4FFU/maxresdefault.jpg "
      },
      {
        stall: "Stall: 18",
        project: "Smart Mushroom Farming System",
        description:
          "The Smart Mushroom Farming System integrates IoT technology and sensors to optimize mushroom cultivation. Monitoring temperature, humidity, and other crucial parameters, the system automates climate control and provides real-time data for optimal growth conditions. This project demonstrates a tech-forward approach to agriculture, enhancing efficiency and yield in mushroom farming through intelligent and automated processes.",
        image:
          "https://www.researchgate.net/publication/326027091/figure/fig1/AS:642311054708737@1530150297728/An-Illustrated-Diagram-of-Smart-Agriculture-System-Mushroom-House-Box.png"
      },
      {
        stall: "Stall: 19",
        project: "Fingerprint-Based Locker",
        description:
          "The Fingerprint-Based Locker introduces a secure and convenient storage solution. Utilizing biometric technology, users can access the locker using their fingerprints, enhancing security and eliminating the need for traditional keys or codes. This project showcases an innovative approach to personal storage, combining modern authentication methods with user-friendly design for a seamless and reliable experience.",
        image: "https://i.ytimg.com/vi/zBGa__wBXu4/maxresdefault.jpg"
      },
      {
        stall: "Stall: 20",
        project: "Ultrasonic Gate Controller",
        description:
          "The Ultrasonic Gate Controller is an advanced access management system. Utilizing ultrasonic sensors, it accurately detects approaching individuals or vehicles and controls gate operations accordingly. This project offers a reliable and efficient solution for secure entry points, showcasing the integration of ultrasonic technology for enhanced access control in various settings.",
        image: "https://letsmakeprojects.com/wp-content/uploads/2023/09/arduino-gate-system.jpg"
      },
      {
        stall: "Stall: 21",
        project: "Smart Parking",
        description:
          "The Smart Parking System revolutionizes urban parking with real-time monitoring and automation. Utilizing sensors and a user-friendly app, it guides drivers to available parking spaces, reducing congestion and optimizing parking resource utilization. This project demonstrates a technology-driven solution to address the challenges of urban parking, offering a glimpse into the future of smart and efficient parking management.",
        image: "https://iotdesignpro.com/sites/default/files/main-image/IoT-Based-Smart-Parking-System_1.jpg"
      },
      {
        stall: "Stall: 22",
        project: "Flood and Landslide Detection",
        description:
          "This project incorporates advanced sensors and data analytics to detect early signs of floods and landslides. The system provides real-time alerts, enabling timely evacuation and disaster management. With a focus on enhancing public safety, this project showcases a proactive approach to natural disaster monitoring and response, leveraging technology for effective risk mitigation.",
        image: "https://electronicsworkshops.com/wp-content/uploads/2021/09/Picture1-1024x660.png"
      },
      {
        stall: "Stall: 23",
        project: "IoT Based Smart Irrigation",
        description:
          "The project introduces an intelligent irrigation system that leverages IoT technology. Sensors collect data on soil moisture, weather conditions, and plant needs, enabling automated and optimized watering. This innovative solution promotes water conservation in agriculture, demonstrating the potential of IoT for precision farming and sustainable water management.",
        image:
          "https://image.slidesharecdn.com/iotbasedsmartirrigationsystem-181007192340/85/iot-based-smart-irrigation-system-1-320.jpg"
      },
      {
        stall: "Stall: 24",
        project: "Gas & Fire Detection System",
        description:
          "This project integrates advanced sensors to detect gas leaks and fire hazards in real-time. The system triggers immediate alerts and activates safety protocols to mitigate potential risks. With a focus on enhancing workplace and residential safety, this project showcases a reliable and responsive solution for early detection and prevention of gas and fire incidents.",
        image:
          "https://iotdesignpro.com/sites/default/files/main-image/IoT-based-Fire-Alarm-System-using-NodeMCU-ESP8266_0.jpg"
      },
      {
        stall: "Stall: 25",
        project: "Street Light Using LDR",
        description:
          "This project introduces an energy-efficient street lighting system incorporating Light Dependent Resistors (LDR). The system automatically adjusts the brightness of street lights based on ambient light conditions, optimizing energy consumption. This project showcases a sustainable approach to urban lighting, contributing to energy conservation and reduced operational costs for municipalities.",
        image:
          "https://www.electronicshub.org/wp-content/uploads/2015/08/Automatic-Street-Light-Controller-Circuit-Image-3.jpg"
      },
      {
        stall: "Stall: 26",
        project: "Sanitizer Dispenser Using Us Sensor",
        description:
          "This project presents an automated hand sanitizer dispenser utilizing ultrasonic sensors for touchless operation. The system detects hand proximity and dispenses sanitizer, promoting hygiene and minimizing contact points. This innovative solution addresses public health concerns, showcasing a smart and convenient approach to hand hygiene in various settings.",
        image: "https://www.pantechsolutions.net/wp-content/uploads/2021/09/automatic_hand_sanitizer_dispenser_esp32_.jpg"
      },
      {
        stall: "Stall: 27",
        project: "IoT Based Health Monitoring System",
        description:
          "This project employs IoT technology to create a comprehensive health monitoring system. Wearable devices collect real-time data on vital signs, physical activity, and more, transmitting information to a centralized platform. This innovative system facilitates remote health tracking, enabling timely interventions and personalized healthcare. It demonstrates the potential of IoT in revolutionizing healthcare, emphasizing proactive and data-driven wellness solutions.",
        image:
          "https://hackster.imgix.net/uploads/attachments/1490595/_boBarLptbt.blob?auto=compress&w=1600&h=1200&fit=min&fm=.jpg"
      },
      {
        stall: "Stall: 28",
        project: "RFID Door Locking System",
        description:
          "The RFID Door Locking System integrates Radio-Frequency Identification (RFID) technology for secure access control. Users can unlock doors by presenting RFID cards or tags, enhancing convenience and eliminating the need for traditional keys. This project demonstrates an advanced and efficient solution for modern security applications, showcasing the seamless integration of RFID technology in door access management.",
        image: "https://srituhobby.com/wp-content/uploads/2021/04/182.jpg"
      },
      {
        stall: "Stall: 29",
        project: "ECG Graph Monitoring",
        description:
          "The ECG Graph Monitoring project introduces a system for real-time electrocardiogram (ECG) monitoring. Utilizing sensors and data analytics, the system continuously tracks and displays the user's ECG graph, providing valuable insights into heart health. This project demonstrates the integration of technology for proactive health monitoring, offering a glimpse into the future of personalized and accessible cardiac care.",
        image: "https://how2electronics.com/wp-content/uploads/2020/03/ECG-Sensor-AD8232-ESP8266.jpg"
      },
      {
        stall: "Stall: 30",
        project: "Air Pollution Detector System",
        description:
          "This project features an advanced air pollution detection system equipped with sensors to measure various pollutants. Providing real-time data and alerts, the system offers insights into air quality, aiding environmental monitoring and public health initiatives. This innovative solution showcases the integration of technology to address the critical issue of air pollution, emphasizing the importance of real-time data for informed decision-making.",
        image: "https://cdn.shopify.com/s/files/1/0300/6424/6919/files/IoT-Air-Pollution-Hardware-Setup.jpg"
      },
      {
        stall: "Stall: 31",
        project: "Gesture, Manual and Voice Control Car",
        description:
          "This project introduces a versatile car control system that seamlessly integrates gesture recognition, manual control, and voice commands. Users can switch between control modes for a personalized driving experience. This innovative approach showcases the integration of multiple control mechanisms, emphasizing user convenience and adaptability in the field of automotive technology.",
        image: "https://www.electronicshub.org/wp-content/uploads/2015/12/Hand-Gesture-Controlled-Robot-Image-1-760x440.jpg"
      },
      {
        stall: "Stall: 32",
        project: "Fire Fighting Robot",
        description:
          "The Fire Fighting Robot is an autonomous system designed to combat fires in hazardous environments. Equipped with sensors and water spraying mechanisms, the robot can navigate through flames and smoke, allowing for efficient firefighting operations. This project showcases the integration of robotics and technology to enhance safety in challenging scenarios, demonstrating the potential for autonomous systems in emergency response situations.",
        image: "https://techatronic.com/wp-content/uploads/2022/12/Screenshot-2022-12-30-at-11.46.10-AM-800x631.png"
      },
      {
        stall: "Stall: 33",
        project: "Plant Watering System",
        description:
          "The Plant Watering System introduces an automated solution for efficient plant care. Equipped with soil moisture sensors and actuators, the system monitors the moisture level in the soil and waters the plants accordingly. This project demonstrates the integration of technology to streamline gardening processes, providing an intelligent and water-conserving approach to plant hydration.",
        image:
          "https://www.sciencebuddies.org/UBQKLTa2f3WOp52YTVYSVZvdfNU=/1050x674/-/https/www.sciencebuddies.org/cdn/Files/19606/6/arduino-soil-moisture-sensor.jpg"
      },
      {
        stall: "Stall: 34",
        project: "Smart Dustbin",
        description:
          "Smart Dustbin is an automated waste management solution with features like automatic lid opening, waste level monitoring, and IoT integration. It promotes hygiene, optimizes waste collection routes, and may include solar-powered operations for sustainability.",
        image: "https://mbatechmeds.com/wp-content/uploads/2021/07/IOT-Dustbin-1.jpg"
      },
      {
        stall: "Stall: 35",
        project: "Tesla Coil",
        description:
          "Tesla Coils are known for their ability to generate visually striking electrical arcs, making them popular for educational demonstrations and entertainment purposes. They operate based on principles of electromagnetic induction and resonance.",
        image: "https://cdn.hackaday.io/images/4280101585867994725.jpg"
      },
      {
        stall: "Stall: 36",
        project: "Electric Motor Model",
        description:
          "An Electric Motor Model is an educational device illustrating how electric motors work. It typically includes a coil, magnets, and a power source, demonstrating the conversion of electrical energy into rotational motion.",
        image: "https://projecthubbharat.com/wp-content/uploads/2021/03/PH_SPK_055-2.jpg"
      },
      {
        stall: "Stall: 37",
        project: "A Magnetic Field Model",
        description:
          "It is an educational tool demonstrating the concept of a magnetic field. It usually involves visual aids such as iron filings, magnets, or magnetic field lines to illustrate the spatial distribution and direction of magnetic forces in a given space. These models help in understanding the fundamental principles of magnetism and how magnetic fields influence nearby objects.",
        image: "https://i.ytimg.com/vi/YH4s2xG1lx8/maxresdefault.jpg"
      },
      {
        stall: "Stall: 38",
        project: "D.C. Charger",
        description:
          "A D.C. Charger is a device for recharging batteries or electronic devices using direct current power, commonly used for smartphones, laptops, and electric vehicles.",
        image:
          "https://how2electronics.com/wp-content/uploads/2023/05/IoT-LiPo-Battery-Voltage-Monitoring-System-using-ESP8266.jpg"
      },
      {
        stall: "Stall: 39",
        project: "Dash Board",
        description:
          "A dashboard is a control panel in vehicles showing key information like speed, and in computing, it's a visual display summarizing system data.",
        image: "https://www.kaaiot.com/img/iot/dash3.png"
      },
      {
        stall: "Stall: 40",
        project: "Seed Sowing Robot",
        description:
          "A Seed Sowing Robot is an autonomous device designed to plant seeds in agricultural fields. Equipped with sensors and precision technology, it automates the seed sowing process, ensuring accurate spacing and depth. These robots contribute to increased efficiency and precision in farming, optimizing crop yield while reducing labor costs and manual effort.",
        image:
          "https://justdoelectronics.com/wp-content/uploads/2023/01/ESP8266-And-Blynk-Based-Seed-Sowing-Robot-Car3-scaled-e1686683283527-300x191.jpg"
      },
      {
        stall: "Stall: 41",
        project: "Metal Detector Robot",
        description:
          "A Metal Detector Robot is an automated device with metal-detecting sensors for locating metallic objects, commonly used in security, archaeology, and industry.",
        image: "https://i.ytimg.com/vi/bqC4rp8VEQ0/maxresdefault.jpg"
      },
      {
        stall: "Stall: 42",
        project: "Pond Cleaning Robot",
        description:
          "A Pond Cleaning Robot is an automated device designed for cleaning and maintaining ponds. Equipped with sensors and cleaning mechanisms, it navigates through the water, removing debris, algae, and other contaminants. These robots contribute to efficient pond maintenance, promoting water clarity and a healthy aquatic environment.",
        image: "https://i.ytimg.com/vi/mQB9dRHxBvY/maxresdefault.jpg"
      },
      {
        stall: "Stall: 43",
        project: "Eco-Bricks",
        description:
          "Eco-Bricks are plastic bottles filled with non-biodegradable waste, used as eco-friendly building blocks in construction to address plastic pollution.",
        image: "https://www.ecobricks.org/wp-content/uploads/2020/06/bad-top-ecobrick-1.jpg"
      },
      {
        stall: "Stall: 44",
        project: "Touch Plant",
        description:
          "IoT-based Smart Farming improves the entire Agriculture system by monitoring the field in real-time. Come join me in this tutorial to learn how to keep track of your plant soil moisture with the use of the MicroBit and Grove WiFi Module, from anywhere in the world!",
        image:
          "https://static.cytron.io/image/tutorial/build-an-iot-plant-monitoring-system-with-microbit-and-grove-wifi-module/compressjpgScreenshot-270-1.jpg"
      },
    {
      stall: "Stall: 45",
      project: "Dhumbal",
      description: "The classic Dhumbal game now available online made possible by the students of CSIT ",
      image: "image-url"
    },
    {
      stall: "Stall: 46",
      project: "Mero Kagaz Patra",
      description: "",
      image: "image-url"
    },
    {
      stall: "Stall: 47",
      project: "Mero Destiny",
      description: "A website created by students of 4th semester to showcase their web-development talents in a fun and interactive way.",
      image: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQTK2b6r8lxbNcRfk2F2QSOaCkXiQoc81UsmC7mJOV7OR89SbsIC_YAAy_w9cgZGA7VHgS36Lh4qB1QT5ls31aNrmNV3Q=w1920-h912"
    }
  ];
  

  export default DATA
---
title: "Ultrasonic Vision for the Visually Impaired"
date: 2020-05-20
image: images/projects/UltrasonicVision/glasses.png
author: Nethra Venkatayogi
description: "Ultrasonic Vision"
summary: "In this project, we designed a sonar-based visual aid device for the visually impaired "
ongoing: False
---

# Problem Statement

At least 2.2 billion people worldwide suffer from blindness or visual impairment. These conditions are estimated to be four times more prevalent for low and middle income regions and the most prevalent in developing countries where conditions such as malnutrition, lack of sanitation, and inadequate health services result in a high incidence of eye disease. Some previous efforts to reduce the occurrence of blindness in third world countries include preventative screening programs like the eye-care services assessment tool implemented by the World Health Organization. However, fewer measures have been taken to provide wide-spread support for those who are either untreatable with cataract surgery, have chronic visual impairment, or those who are waiting to receive surgery. With our device, we aim to design a cost-effective, easy to use method for blind and visually impaired people to be able to detect the location of nearby objects. We are developing a haptic-feedback navigational system that utilizes ultrasonic sensors and a Bluetooth system.

# Implementation

Our device is an affordable system that consists of a belt and glasses for the detection of objects within approximately 2 m to the lower body and upper body respectively. In an effort to improve the existing condition of blindness in developing communities, our system can be used in all environments without requiring connectivity to a Wi-Fi network. As it is powered by simple batteries, it requires minimal repairs and updates, and it can be worn by virtually anyone due to its adjustable features.

When wearing the glasses and the belt, the user will be able to navigate around obstructions. Upon sensing an object within the range of the ultrasonic sensors, the device will notify the user through the use of vibrational haptic feedback. The feedback will be localized in the motors that are in the direction of the object. If the user gets closer to the object, the haptic feedback will increase in intensity, and if the user gets further from the object, the haptic feedback intensity will decrease until the user no longer feels vibration patterns due to that object. The device will send a different vibration pattern based on whether the glasses or the belt sensed the object, allowing the user to distinguish between the two and act accordingly.

## Glasses

The glasses board contains two HC-SR04 ultrasonic sensors connected to an Arduino Nano. The Arduino Nano is connected to a HC-05 Bluetooth module and is powered by a 9V battery. The Bluetooth module transmits its data to the Bluetooth module on the belt board. The board is attached to two arms so that it can be worn like conventional glasses. The ultrasonic sensors are placed 5 cm apart to minimize interference and their blindspot.

The glasses continuously read in values from the two corresponding ultrasonic sensors to detect objects in the direction the user is facing. This data is sent over to the belt serially through Bluetooth. Values from the left sensor are sent as odd values, and values from the right sensor are sent as even values so that the belt module can differentiate between the two sensors.

![glasses](/images/projects/UltrasonicVision/glasses.png)

## Belt

The TCA9548A multiplexer is connected to four separate DRV2605L motor drivers and utilizes the Inter-Integrated Circuit (I2C) communication protocol to transmit signals to each vibrating motor to begin haptic feedback. In addition to these components, the belt board also consists of two HC-SR04 ultrasonic sensors, an Arduino Nano, a 9V battery, and one of the HC-05 Bluetooth modules. The ultrasonic sensors are placed 17 cm apart in order to minimize interference and their blindspot, and the 40° downward angle is maintained with foam wedges.

The belt reads in values from the two corresponding ultrasonic sensors to detect objects within the lower region. Because these sensors are angled downward by 40°, the distance typically read by these sensors is the distance to a point on the ground ahead. The device is calibrated within the first 5 seconds and calculates 5 different vibration intensity levels based on the distance from the user’s waist to the ground. The belt module also receives the data from the two sensors on the glasses. Four different motors are attached to the belt to vibrate based on which sensor detected an object: two motors in one row corresponding to the glasses ultrasonic sensors and two more motors in a row directly under the former corresponding to the belt ultrasonic sensors. As an object gets nearer, the intensity of the haptic feedback increases. The haptic feedback vibration pattern is also different based on whether the feedback is coming from the sensors on the glasses or the belt.

![belt](/images/projects/UltrasonicVision/belt.png)

# Accuracy

The field of view and blind spot of two ultrasonic sensors were measured at two sensor configurations: 0 cm and 5 cm apart. Given the size of the glasses, 5 cm is the maximum possible distance apart, while 0 cm is the minimum. At both of these configurations, a flat box (16 cm x 5.7 cm x 1.5 cm) was used to determine the degree of visibility of objects at various points. It was shown that the field of view was maximized at 5 cm apart. The 5 cm apart configuration resulted in a triangular blindspot between the sensors that extends out 9 cm. This blindspot is not large enough to interfere with the practical applications of our device, as objects that a user might encounter outside are likely to a) pass through a visible range before falling within the blindspot or b) be large enough so as to fall partially within and partially without of the blindspot. With this information in mind, the 5 cm configuration was chosen for the glasses in order to maximize field of view. 

![visual_field](/images/projects/UltrasonicVision/visual_field.png)

The accuracy of the sensor’s distance measurement was determined by comparing the distance in cm that was detected by the sensor to the actual measured distance of the object. Beyond 5 cm, the sensors were found to have a maximum percent error of 3.10%, with the sensor becoming more accurate at further distances.

![accuracy](/images/projects/UltrasonicVision/accuracy.png)
---
title: "Patient Health Monitor"
date: 2015-05-08
image: images/projects/PatientHealthMonitor/patientMonitor.jpg
author: Conrad Li
description: "Patient Health Monitor"
summary: "In this project, we implemented a low-cost patient health monitor that displays bedside patient vital signs"
launchYear: 2014
---

# Problem Statement

A patient monitor is a mechanical and electrical medical device designed to continually monitor a patient’s vital signs in order to identify respiratory or cardiac distress. Patient monitors play a crucial role in virtually all aspects of medical care, including emergency and surgical units, intensive and critical care units, and other non-critical units. Patient monitors are a staple item in developed world hospitals; however, in crowded developing world hospitals, a low patient-monitor-to-patient ratio prevents doctors from performing a sucient number of surgeries to meet the needs of the local population as well as effectively treat patients in critical care. The reason for this shortage of patient monitors can be primarily attributed to the cost of current market models, ranging anywhere from $1,000 to $10,000. This high cost forces developing hospitals to largely depend on outside donations for new devices, an infrequent and unreliable source of critical equipment. There is a clear and demonstrated need for a low-cost patient monitor that can be purchased in bulk by developing world hospitals, thus giving many more patients the monitoring they need. Our project, the FreePulse low-cost patient monitor, aims to fill this gap in developing world healthcare and provide a durable, reliable, and accessible monitor. FreePulse provides basic monitoring for heart rate, electrocardiogram signals (ECG), and percent saturated oxygen (SpO2) with analog and digital filtering. Visual alerts are implemented to warn nurses if a patient begins to experience cardiac or respiratory distress, matching the capability of current market devices. A replaceable backup battery and uninterrupted power circuit ensures that the device continues to function even in unstable power conditions.

# Implementation

The FreePulse patient monitor is designed with the developing world in mind. Its portable and durable casing and design makes it an excellent fit for a wide variety of medical applications.

## Material

A sliding latch with an O-ring seal is one of the key features that contribute to the durability of the FreePulse monitor. The O-ring makes the monitor and interior circuit components waterproof and improves the durability of the monitor. Additionally, the latch allows easy access to these interior components, thus eliminating the need for screws in the FreePulse design. This lack of screws is a major plus for use in the developing world due to the tendency of screws to strip or break under stress. Another design choice that improves the durability of the FreePulse monitor is the use of ABS plastics on the exterior. The use of ABS plastics make the FreePulse casing very resistant to chemical corrosion, increasing the device’s overall life span. Finally, the production model of FreePulse will include resin-coated electrical components, greatly increasing the durability and life span of the monitor. As a result of the resin coating on our electrical components, fluctuations in humidity will have negligible effects on the circuit components. This feature combined with the O-ring design provides a fail-safe mechanism for protection from accidental water exposure.

![cad](/images/projects/PatientHealthMonitor/cad.png)

## Circuitry

The Teensy microcontroller is the heart of the FreePulse circuit. Its low cost coupled with its 74 MHz processing speed gives FreePulse the sampling rate of a state-of-the-art monitor without the price point. This processing power is used to manage the sampling rates for both the ECG and SpO2 probes as well as run the display and power all of the connected peripheral circuits. Furthermore, low-cost miniaturized voltage regulators are used to run the entire circuit from a single voltage source despite differing components and even differing grounds. The ECG circuit uses an active low-pass filter to amplify physiological signals up to 5000 times, while both passive and active filters were used to reject noise and extract a clear waveform to display on the screen. The lithium ion battery in FreePulse has a capacity of 1200 mAh; we also have measured it to have an average power draw of 185 mA with all LEDs illuminated and probes running, meaning the system can run for approximately 6 hours on a single charge. Overall, these disparate hardware components communicate smoothly through the GPIO pins of the Teensy microcontroller, producing a quality signal that rivals the functionality of current market competitors, but at a fraction of the cost. 

![pcb](/images/projects/PatientHealthMonitor/pcb.png)


# Testing

Currently, the monitor supports SpO2 and ECG readings. However, the same circuit can be expanded to monitoring muscle activation, analyzing patient temperature fluctuations, and body imaging capabilities. This extensible design allows for damaged modules to be swapped out easily and effectively. It also allows seamless hardware upgrades, preventing the user from having to replace the entire system. This key feature of the FreePulse monitor reduces waste and emphasizes sustainability.

## ECG Acquisition

The most complex hardware component of our design is the filtering and amplification circuit for an ECG signal. Critical to the success of signal acquisition is a sampling rate that allows for clear visualization of the input signal; we have set the sampling rate at a controlled 121 Hz to achieve optimal signal clarity while retaining a smooth and responsive user interface. 

![ecg](/images/projects/PatientHealthMonitor/ecg.png)


## Capillary Oxygen Saturation

Our current prototype utilizes both visible and IR LEDs paired with phototransistors to measure the amount of light transmitted through a user’s tissue. The LEDs and diodes are housed in a plastic case similar in form factor to traditional finger clip pulse oximeters, and the output of the photo transistors is filtered by a passive low-pass filter. We are currently still developing our calibration algorithm for calculating oxygen saturation from this curve, as it is a very hardware-dependent process; however, initial signal processing is already showing a clear view of the transmittance waveform. 

 ![ecg](/images/projects/PatientHealthMonitor/oxygen.png)
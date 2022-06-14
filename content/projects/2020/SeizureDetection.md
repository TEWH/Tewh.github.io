---
title: "Seizure Detection"
date: 2021-05-08
image: images/projects/SeizureDetection/summary.png
author: Conrad Li
description: "Seizure Detection Project"
summary: "In this project, we created a low-cost EEG-based wearable seizure detection alarm system"
ongoing: False
---

# Problem Statement

Epilepsy is a chronic and severe neurological disease that affects 65 million people worldwide. Although idiopathic in many cases, epileptic seizures may be caused by previous trauma to the brain such as hypoxia during labor, head injury, and/or bacterial meningitis. Beyond physiological symptoms caused by excessive neuronal activity in the brain, epilepsy is frequently the subject of social stigma, with patients often suffering from discrimination, misunderstanding, and ostracization from wider society due to the loss of self-reliance and autonomy. Although many cases can successfully be treated, treatment is often too inaccessible or expensive for patients, preventing them from treating the disease as well as mitigating its symptoms.

To address the treatment gap for epileptic seizures in developing low and middle-income nations, we propose a simple and efficient seizure prediction system consisting of a neural network and an associated low-cost wearable alarm system. The integral comfort and safety features associated with this system would greatly reduce the mortality rate from SUDEP and general injury. By working towards this goal, we intend to allow patients to not only receive any possible urgent biomedical treatment in advance of the seizure, but also mitigate any potential injury from a sudden fall by simply laying prone.

# Implementation

## EEG Headset
The electrodes necessary for EEG collection were procured from OpenBCI, a non-profit organization that seeks to lower the cost of EEG and other brain wave collection technologies. The electrodes (Figure 1) are encased in a plastic holding, where an elastic spring pushes the electrode into the user’s scalp. This design ensures that sufficient surface contact between the electrode and skin is maintained. Sixteen such electrodes are arranged on the helmet following the 10-20 brain EEG system.

![cap](/images/projects/SeizureDetection/cap.jpg)

## Alarm System

The alarm system consists of an LED, a piezo speaker, an SSD1306 OLED graphic display, and a button-press switch. As shown in the figure below, the circuit is wired to a Raspberry Pi 4, which is also loaded with the machine learning model architecture used for this project. The software that activates the circuit is integrated with the machine learning algorithm within the Raspberry Pi. Once the model detects a seizure from the preictal data streamed from the Cyton microcontroller of the EEG to the Raspberry Pi, the LED and buzzer begin to produce an auditory and visual signal to the user that there could be an onset of a seizure, and the OLED display outputs a warning message as well as the timestamp of when the seizure was detected as seen in the figure below. The date and time at which a seizure is detected by the system is also stored in a .txt file for future reference. The button press switch is attached to the circuit for user convenience, and can be used to turn off the sound or blinking LED. For notification purposes, the timestamp and date from the last seizure warning will still be in display as “last detected” so that users are still aware of their seizure warning and can take the necessary precautions in time. The alarm system is miniature in size and therefore provides a higher level of portability and comfort. The alarm system will be attached to the Raspberry Pi in a compact case and can be worn around the arm or wrist.

![alarm](/images/projects/SeizureDetection/alarm.png)

## Neural Network Architecture 
The overall architecture of our model is outlined in the figure below. First a deep convolutional autoencoder (DCAE) was implemented and trained in an unsupervised manner on unlabeled, raw 5 second EEG signals. A deep convolutional autoencoder consists of an encoder that compresses input data into a low-dimensional representation and a decoder that reconstructs data back to its original dimensions. We chose this architecture as a method of feature extraction, as encoded EEG signals would serve as feature vectors that are more easily learned by the classification algorithm.
 
Our encoder consists of convolutional layers with batch normalization, reLU activation, and max pooling layers which reduce the input EEG segments of 1280 time points x 23 channels to a low dimensional representation or encoded product of shape 160 x 184. The decoder then reconstructs the input signal through deconvolutional and upsampling layers. The DCAE is trained using the input signal and mean square error loss function which measures the loss associated with the reconstruction of the input signal. The Adam optimizer with a learning rate of .01 is used to minimize this loss function. After training and optimization, optimized parameters are used on a pretrained model consisting only of the encoder layers, which compresses the raw EEG signal epochs into low dimensional feature vectors, which serve as inputs for the classification model. The classification task is done using a bi-directional long short term memory (bi-LSTM) recurrent neural network. The Adam optimizer with a learning rate of .0002 and the binary cross entropy loss function were used. Additionally, in order to reduce overfitting, we implemented residual or skip connections within the bi-LSTM units.

![app](/images/projects/SeizureDetection/architecture.png)

After training, our model was able to achieve a validation accuracy of 96.59%, a validation precision of 97.72%, and a validation sensitivity of 97.72%.
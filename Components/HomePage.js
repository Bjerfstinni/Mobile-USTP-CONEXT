import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

function HomePage({ navigation }) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.getConnected}>
        <Text style={styles.heading}>Get Connected to The Next Generation</Text>
        <Text style={styles.paragraph}>
          CITC-COnext is designed to be your central hub for everything related to the Department of Computer Information Technology and Communication (CITC).
          Here, you'll find the latest news, updates, announcements, and resources to help you navigate your academic journey within the CITC department. Looking forward to serving you!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Connect With Us!</Text>
        </TouchableOpacity>
        <Image source={require('../assets/img1.png')} style={styles.image} />
      </View>

      {/* Subscription */}
      <View style={styles.subscription}>
        <Text style={styles.subscriptionHeading}>Sign Up for Constant Register Notification</Text>
        <View style={styles.subscriptionInput}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aeb2b3"
          />
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards */}
      <View style={styles.cards}>
      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <View style={[styles.card, styles.darkBackground]}>
          <View style={styles.cardBody}>
            <Image
              source={require('../assets/news/image1.jpg')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>DICT highlights urgent need to regulate social media 'terms and conditions' for public data protection</Text>
            <Text style={styles.cardText}>
              The Department of Information and Communications Technology (DICT) on Monday, May 27, highlighted the need to regulate the terms and conditions of over-the-top (OTT) social media applications regarding the use of public data.
            </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('https://mb.com.ph/2024/5/27/dict-highlights-urgent-need-to-regulate-social-media-terms-and-conditions-for-public-data-protection')}>
              <Text style={styles.cardButtonText}>Continue reading</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 2 */}
        <View style={[styles.card, styles.darkBackground]}>
          <View style={styles.cardBody}>
            <Image
              source={require('../assets/news/image2.jpg')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Research team demonstrates modular, scalable hardware architecture for a quantum computer</Text>
            <Text style={styles.cardText}>
              Quantum computers hold the promise of being able to quickly solve extremely complex problems that might take the world's most powerful supercomputer decades to crack.
            </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('https://www.msn.com/en-us/news/other/research-team-demonstrates-modular-scalable-hardware-architecture-for-a-quantum-computer/ar-BB1ngJwa?ocid=BingNewsSearch')}>
              <Text style={styles.cardButtonText}>Continue reading</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 3 */}
        <View style={[styles.card, styles.darkBackground]}>
          <View style={styles.cardBody}>
            <Image
              source={require('../assets/news/image3.jpg')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>From colleague to computer: Navigating the blurred lines in tomorrow’s workplace</Text>
            <Text style={styles.cardText}>
              Imagine yourself, in the near future, joining a call to discuss a hiring initiative with four colleagues. Two of them are from strategy and HR. One is a vice president. Another comes from a department with an urgent need for more investment. The discussion is productive, and you schedule a follow-up session.
            </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('https://www.fastcompany.com/91131376/from-colleague-to-computer-navigating-the-blurred-lines-in-tomorrows-workplace')}>
              <Text style={styles.cardButtonText}>Continue reading</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 4 */}
        <View style={[styles.card, styles.darkBackground]}>
          <View style={styles.cardBody}>
            <Image
              source={require('../assets/news/image4.jpg')}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Super Micro Computer (SMCI) Experienced an AI-Driven Uptick in Demand</Text>
            <Text style={styles.cardText}>
              Artisan Partners, an investment management company, released its “Artisan Small Cap Fund” first quarter 2024 investor letter. A copy of the letter can be downloaded here. Equity markets surged at the beginning of 2024 in anticipation of the US economy entering a "goldilocks" scenario - a soft landing combined with decreasing inflation, potentially leading to a cut in interest rates by the Fed. In the first quarter, its Investor Class fund ARTSX returned 9.43%, Advisor Class fund APDSX posted a return of 9.42%, and Institutional Class fund APHSX returned 9.48%, compared to a return of 7.58% for the Russell 2000 Growth Index. In addition, please check the fund’s top five holdings to know its best picks in 2024.
            </Text>
            <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('https://finance.yahoo.com/news/super-micro-computer-smci-experienced-111019309.html')}>
              <Text style={styles.cardButtonText}>Continue reading</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

      {/* Images */}
      <View style={styles.imagebg}>
        <Image source={require('../assets/idea.jpg')} style={styles.image} />
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus iusto commodi corrupti praesentium repellat eius, atque, quod nihil tempore inventore tempora error, assumenda numquam consectetur. Optio quae voluptates sunt!
        </Text>
        <TouchableOpacity
          style={styles.imgbtnbg}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonbg}>Connect With Us!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imagebg}>
        <Image source={require('../assets/success.jpg')} style={styles.image} />
        <Text style={styles.paragraph}>
          At CITC-COnext, we understand the importance of staying informed and connected. That's why we have developed a comprehensive suite of resources designed to keep you up-to-date on everything happening within the CITC department, EXCLUSIVELY FOR YOU!
        </Text>
        <TouchableOpacity
          style={styles.imgbtnbg}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonbg}>Connect With Us!</Text>
        </TouchableOpacity>
      </View>

      {/* Administrators */}
      <View style={styles.viewStyle}>
  <TouchableOpacity
    style={styles.adminButtonspace} 
  >
    <Text style={styles.adminButtonText}></Text>
  </TouchableOpacity>
</View>

<View style={styles.viewStyle}>
  <TouchableOpacity
    style={styles.adminButton} 
    onPress={() => navigation.navigate("Administrators")}
  >
    <Text style={styles.adminButtonText}>Administrators</Text>
  </TouchableOpacity>
  
</View>
<View style={styles.viewStyle}>
  <TouchableOpacity
    style={styles.adminButtonspace}
  >
    <Text style={styles.adminButtonText}></Text>
  </TouchableOpacity>
</View>


      {/* Modal */}
      {/* Implement modal component */}
      {/* Footer */}
{/* Footer */}
<View style={styles.footer}>
    <Text style={styles.footerText1}>Copyright © 2023</Text>
  <TouchableOpacity onPress={() => {/* mag navigate sa Privacy Policy screen */}}>
    <Text style={styles.footerLink}>Privacy Policy</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {/* mag navigate sa Terms & Conditions screen */}}>
    <Text style={styles.footerLink}>Terms & Conditions</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {/* mag navigate sa Cookie Policy screen */}}>
    <Text style={styles.footerLink}>Cookie Policy</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {/* mag navigate sa Contact screen */}}>
    <Text style={styles.footerLink}>Contact</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.footerLink}></Text>
  </TouchableOpacity>
</View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    navbar: {
      backgroundColor: '#044556',
      paddingVertical: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navbarText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    getConnected: {
      backgroundColor: '#044556',
      padding: 20,
    },
    heading: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      
  
    },
    paragraph: {
      color: '#aeb2b3',
      marginBottom: 20,
      textAlign: 'justify',
      
    },
    button: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'center',
    },
    buttonText: {
      color: '#044556',
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginTop: 20,
    },
    subscription: {
      backgroundColor: '#000',
      padding: 20,
    },
    subscriptionHeading: {
      color: '#fff',
      fontSize: 18.5,
      fontWeight: 'bold',
      paddingBottom: 10,
    },
    subscriptionInput: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      height: 40,
      color: '#000',
    },
    subscribeButton: {
      backgroundColor: '#044556',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    subscribeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    cardContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    cardContainer2: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      backgroundColor: "#1a75ff"
    },
    card: {
      marginTop: 10,
      flex: 1,
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    cardBody: {
      alignItems: 'center',
    },
    cardIcon: {
      fontSize: 40,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#fff',
      textAlign: 'center',
    },
    cardText: {
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10,
    },
    cardTitle2: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#000',
    },
    cardText2: {
      color: '#000',
      textAlign: 'center',
      marginBottom: 10,
    },
    cardTitle3: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 35,
      marginBottom: 10,
      color: '#fff',
      textAlign: 'center',
    },
    cardText3: {
      fontSize: 15,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 30,
    },
    cardButton: {
      backgroundColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    cardButtonText: {
      color: '#044556',
      fontWeight: 'bold',
    },
    darkBackground: {
      backgroundColor: '#000',
    },
    whiteBackground: {
      backgroundColor: '#ffffff'
    },
    secondaryBackground: {
      backgroundColor: '#6c757d',
    },
    footer: {
      backgroundColor: '#044556',
      paddingVertical: 20,
      alignItems: 'flex-start',
      paddingHorizontal: 20,
    },
    footerText: {
      color: '#fff',
    },
    footerText1: {
      color: '#fff',
      fontSize: 20,
      paddingBottom: 15,
    },
    footerLink: {
      color: '#fff',
      textDecorationLine: 'underline',
      marginBottom: 5,
    },
  
    imageSection: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    imageTextContainer: {
      flex: 1,
      paddingRight: 10,
    },
    imageHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#007bff', // Text primary color
    },
    imageParagraph: {
      color: '#212529', // Text body color
      marginBottom: 10,
    },
    imageButton: {
      backgroundColor: '#ffffff', // White button
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'flex-start',
    },
    imageButtonText: {
      color: '#007bff', // Button text color
      fontWeight: 'bold',
    },
    imagebg: {
      backgroundColor: 'white',
      padding: 20,
    },
    buttonbg: {
      color: '#fff',
      fontWeight: 'bold',
    },
    imgbtnbg: {
      backgroundColor: '#044556',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'flex-start',
      
    },
    accordion: {
      marginTop: 20,
    },
    accordionButton: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    accordionButtonText: {
      color: '#044556',
      fontWeight: 'bold',
      borderWidth: 1, 
      borderColor: '#044556',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 1000,
    },
    accordionContent: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      marginBottom: 10,
    },
    centeredButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    adminButton: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 10,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#044556', 
    },
  
    adminButtonText: {
      color: '#044556',
      fontWeight: 'bold',
    },
    adminButtonText1: {
      color: '#fff',
      fontWeight: 'bold',
    },
});

export default HomePage;

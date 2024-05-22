import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

function HomePage({ navigation }) {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);

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
        <Text style={styles.subscriptionHeading}>Sign Up for Constant Notification</Text>
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
              <Text style={styles.cardIcon}>💻</Text>
              <Text style={styles.cardTitle}>Virtual</Text>
              <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem repellendus unde veniam eius quia inventore amet dicta? Incidunt, cumque.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Go somewhere</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2 */}
          <View style={[styles.card, styles.darkBackground]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardIcon}>💻</Text>
              <Text style={styles.cardTitle}>Virtual</Text>
              <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem repellendus unde veniam eius quia inventore amet dicta? Incidunt, cumque.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Go somewhere</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 3 */}
          <View style={[styles.card, styles.darkBackground]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardIcon}>💻</Text>
              <Text style={styles.cardTitle}>Virtual</Text>
              <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem repellendus unde veniam eius quia inventore amet dicta? Incidunt, cumque.</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Go somewhere</Text>
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

      {/* Accordion */}
      <View style={styles.accordion}>
        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed1(!isCollapsed1)}>
          <Text style={styles.accordionButtonText}>What kind of IDEAS are you looking for?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed1}>
          <Text style={styles.accordionContent}>Nakatikim ka na ba ng Tampal Puke?</Text>
        </Collapsible>

        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed2(!isCollapsed2)}>
          <Text style={styles.accordionButtonText}>Do you finance a Project?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed2}>
          <Text style={styles.accordionContent}>No, I haven't</Text>
        </Collapsible>

        <TouchableOpacity
          style={styles.accordionButton}
          onPress={() => setIsCollapsed3(!isCollapsed3)}>
          <Text style={styles.accordionButtonText}>Can I earn money if I join?</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed3}>
          <Text style={styles.accordionContent}>Yes, it is possible</Text>
        </Collapsible>
      </View>

      {/* Administrators */}
      <View style={styles.viewStyle}>
        <Button 
          title="Administrators" 
          onPress={()=> navigation.navigate("Administrators")}
        />
      </View>

      {/* Modal */}
      {/* Implement modal component */}
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023</Text>
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
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
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
    fontSize: 20,
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
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
  },
  accordionContent: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
});

export default HomePage;

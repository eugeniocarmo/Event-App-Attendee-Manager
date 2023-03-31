
import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  function handleAddingParticipant(){
    console.log('Participant added');
  }

  return (

    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Event's Name
      </Text>
      <Text style={styles.eventDate}>
        Wednesday, May 24th 2023
      </Text>

      <View style={styles.form} >
        <TextInput 
        style={styles.input}
        placeholder="Enter event name"
        placeholderTextColor="#6b6b6b" 
        keyboardType='default'
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddingParticipant}
        >
          <Text 
            style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant />
    </View>
    
    
  );
} 



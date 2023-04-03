import * as React from 'react-native';

import {Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {

  const participants = ['Eugenio', 'Daniela', 'Nicholas','Hannah','Eduardo', 'Deisy','Izabel', 'Louise', 'John'];

  function handleAddingParticipant(){
    if (participants.includes('Eugenio')) {
      return Alert.alert('Paticipand added', 'There is already a participant in the list with this name');
    }
   
  }

  function handdleRemovingParticipant(name: string){
    Alert.alert('Removing participant', `Would you like to remove ${name} from the list?`, [
      {
        text: 'Yes',
        onPress: () => Alert.alert('',`${name} was removed successfully`)
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ]);
    
  } 

  return (

    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Event Name
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
      <FlatList showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              name={item}
              onRemove={() => handdleRemovingParticipant(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Did anyone show up to the event yet? Make sure to jot down the people coming on your list!
          </Text>
        )}
      />
    </View>
    
    
  );
} 


